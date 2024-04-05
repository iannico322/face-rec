import { useCallback, useEffect, useRef, useState } from 'react';
import { PauseIcon, PersonStandingIcon, PlayIcon, Rotate3dIcon } from "lucide-react";
import * as faceapi from 'face-api.js'

const Page1 = () => {
  const videoRef:any = useRef()
  let canvasRef:any = useRef()

  const  [LABELS] = useState(["Nico", "Mark","Ryan","Sofia"]) 
  const [name,setName] = useState("")
  const [click,isClick] = useState(false)

  useEffect(()=>{
    startVideo()
    videoRef && loadModels()

  },[])

  const startVideo = useCallback(() => {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((currentStream) => {
        if (videoRef.current) {
          videoRef.current.srcObject = currentStream;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  // LOAD MODELS FROM FACE API

  const loadModels = useCallback(() => {
    Promise.all([
      faceapi.nets.ssdMobilenetv1.loadFromUri("/models"),
      faceapi.nets.tinyFaceDetector.loadFromUri("/models"),
      faceapi.nets.faceLandmark68Net.loadFromUri("/models"),
      faceapi.nets.faceRecognitionNet.loadFromUri("/models"),
      faceapi.nets.faceExpressionNet.loadFromUri("/models"),
    ]).then(() => {
      faceMyDetect();
    });
  }, []);

  const getFaceDescriptor = useCallback(async (img: any) => {
    return faceapi.detectSingleFace(img).withFaceLandmarks().withFaceDescriptor();
  }, []);

  const getLabeledFaceDescriptions = useCallback(() => {
  return Promise.all(
    LABELS.map(async (label) => {
      const descriptions = [];
      for (let i = 1; i <= 2; i++) {
        const img = await faceapi.fetchImage(`./labels/${label}/${i}.jpg`);
        const detections: any = await getFaceDescriptor(img);
        descriptions.push(detections.descriptor);
      }
      return new faceapi.LabeledFaceDescriptors(label, descriptions);
    })
  );
}, [getFaceDescriptor]);


const faceMyDetect = useCallback(async () => {
  const labeledFaceDescriptors = await getLabeledFaceDescriptions();
  const faceMatcher = new faceapi.FaceMatcher(labeledFaceDescriptors);

  setInterval(async () => {
    const detections = await faceapi
      .detectAllFaces(videoRef.current, new faceapi.TinyFaceDetectorOptions())
      .withFaceLandmarks()
      .withFaceDescriptors();
    faceapi.matchDimensions(canvasRef.current, {
      width: 940,
      height: 650,
    });

    const resizedDetections: any = faceapi.resizeResults(detections, {
      width: 940,
      height: 650,
    });

    canvasRef.current.getContext("2d").clearRect(0, 0, 940, 650);

    const results = resizedDetections.map((d: any) => {
      return faceMatcher.findBestMatch(d.descriptor);
    });

    faceapi.draw.drawDetections(canvasRef.current, resizedDetections);
    results.forEach((result: any, i: any) => {
      const box = resizedDetections[i].detection.box;

      const drawBox = new faceapi.draw.DrawBox(box, { label: result.toString() });
      drawBox.draw(canvasRef.current);
      console.log(result.label)
      result.label == "Unknown"? "" : setName(result.label);
     
      
    });
  }, 500);
}, [getLabeledFaceDescriptions]);
  
  

  return (
    <div className=" min-h-full w-full max-w-[1468px]  flex flex-col justify-center">
        <div className=" border border-border  flex flex-col gap-5 items-center justify-center h-screen w-full ">
        
        
        <div className=' w-[500px] h-[400px] relative flex'>
          <video crossOrigin="anonymous" ref={videoRef} className=' w-full h-full border-border border-2 rounded-md ' autoPlay></video>
        <canvas ref={canvasRef} className=" w-full h-full  absolute"/>
        </div>
        
        
     
        
    
   

    
      
        <div className=" w-[300px] flex justify-between text-foreground">
          <Rotate3dIcon/>

          {click?
          <PauseIcon className=' cursor-pointer' onClick={()=>{
           
             videoRef.current.pause()
             isClick(!click)

            
         }}/>
         :
         <PlayIcon 
         className=' cursor-pointer' 
         onClick={()=>{
           
          videoRef.current.play()
          isClick(!click)

         
      }}
         />
          
        }
          
          <div className=' flex flex-col'>
            <PersonStandingIcon/>
            <p>{name}</p>
          </div>
          
        </div>
        </div>
    </div>
  )
}

export default Page1
