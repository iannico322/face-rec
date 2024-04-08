import { useCallback, useEffect, useRef, useState } from 'react';
import { PauseIcon, PlayIcon,  RotateCcwIcon } from "lucide-react";
import * as faceapi from 'face-api.js'


const Page1 = () => {
  const [status,setStatus] = useState("Loading...")
  const MODEL_URL = "/face-rec/models"
  const videoRef:any = useRef()
  let canvasRef:any = useRef()

  const  [LABELS] = useState(["Nico", "Mark","Alvin","Nideliza","Sittie"]) 
  const [camera, setCamera] = useState('environment');
  const [name,setName] = useState<any>([{
    "id":"Nico",
    "name":"Ian Nico Caulin",
    "position":"Gwapo"
  },
  {
    "id":"Mark",
    "name":"Mark Gil Rusiana",
    "position":"OJT"
  }
])
  const [click,isClick] = useState(false)

  const [Fersons] = useState([
    {
      "id":"Nico",
      "name":"Ian Nico Caulin",
      "position":"Gwapo"
    },
    {
      "id":"Mark",
      "name":"Mark Gil Rusiana",
      "position":"OJT"
    },
    {
      "id":"Alvin",
      "name":"Alvin Nuska",
      "position":"PUTO King"
    },
    {
      "id":"Nideliza",
      "name":"Nideliza Fe O. Nacilla",
      "position":"DICT Mis. Or. Provincial Director"
    },
    {
      "id":"Sittie",
      "name":"Ms. Sittie Rahma Alawi",
      "position":"DICT Region 10 Director"
    }

])

  useEffect(()=>{
    startVideo()
    videoRef && loadModels()

  },[camera])

  const startVideo = useCallback(() => {
    if (videoRef.current && videoRef.current.srcObject) {
      let stream = videoRef.current.srcObject;
      let tracks = stream.getTracks();
  
      tracks.forEach(function(track:any) {
        track.stop();
      });
  
      videoRef.current.srcObject = null;
    }

    navigator.mediaDevices
      .getUserMedia({ video: { facingMode: camera } })
      .then((currentStream) => {
        if (videoRef.current) {
          videoRef.current.srcObject = currentStream;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [camera]);
  // LOAD MODELS FROM FACE API

  const loadModels = useCallback(() => {
    Promise.all([
      faceapi.nets.ssdMobilenetv1.loadFromUri(MODEL_URL),
      faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL),
      faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL),
      faceapi.nets.faceRecognitionNet.loadFromUri(MODEL_URL),
      faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL),
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
  setStatus("Running")

  const detectFaces = async () => {
    const detections = await faceapi
      .detectAllFaces(videoRef.current, new faceapi.TinyFaceDetectorOptions())
      .withFaceLandmarks()
      .withFaceDescriptors();
    faceapi.matchDimensions(canvasRef.current, {
      width: 500,
      height: 600,
    });

    const resizedDetections: any = faceapi.resizeResults(detections, {
      width: 500,
      height: 600,
    });

    canvasRef.current.getContext("2d").clearRect(0, 0,500, 600);

    const results = resizedDetections.map((d: any) => {
      return faceMatcher.findBestMatch(d.descriptor);
    });

    faceapi.draw.drawDetections(canvasRef.current, resizedDetections);
    results.forEach((result: any, i: any) => {
      const box = resizedDetections[i].detection.box;
      const drawBox = new faceapi.draw.DrawBox(box, { label: result.toString() });
      drawBox.draw(canvasRef.current);
    });
    
   

    requestAnimationFrame(detectFaces);
    setName(results)
  };
  
  detectFaces();
}, [getLabeledFaceDescriptions, name]);
  
  

  return (
    <div className=" min-h-full w-full max-w-[1468px]  flex flex-col justify-center">
        <div className=" border border-border  flex flex-col gap-5 items-center justify-center h-screen w-full ">
        
        <div className=' text-foreground text-sm w-[300px] flex  justify-center'>
          <p> v.1 Status: <span className={status=="Running"?" text-green-600":" text-red-500"}>{status}</span> </p>
        
        </div>
        
        <div className=' overflow-hidden w-full max-w-[500px] h-[500px] relative flex'>
        <div className=' ml-2 mt-5 absolute gap-2 text-primary col-span-1 flex flex-col '>
        {name && name.map((response:any,key:any) => {
        const matchedData = Fersons.find(item => item.id === response._label);
        if (matchedData) {
          return (
            <div key={key} className=' text-sm bg-card/50 backdrop-blur-md p-2 rounded-md'>
              <h3>{matchedData.name}</h3>
              <p>{matchedData.position}</p>
            </div>
          );
        }
        return null;
      })}

          
            
          

          </div>
         
          <video crossOrigin="anonymous" ref={videoRef} className=' w-full h-full border-border border-2 rounded-md ' autoPlay></video>
        <canvas ref={canvasRef} className="  w-full h-full  absolute"/>
        </div>
        
        
     
        
    
   

    
      
        <div className=" w-[300px]  flex  items-center justify-between text-foreground">
          <RotateCcwIcon className={camera=='user'? ' rotate-180 transition-all duration-700': ' rotate-0 transition-all duration-700'}
           onClick={()=>{
            setCamera(prevState => prevState === 'user' ? 'environment' : 'user')
            startVideo()
            console.log(camera)

          }}
          
          />
          

          {!click?
          <PauseIcon className=' col-span-1 self-center cursor-pointer' onClick={()=>{
           
             videoRef.current.pause()
             isClick(true)

            
         }}/>
         :
         <PlayIcon 
         className=' col-span-1 text-center cursor-pointer' 
         onClick={()=>{
           
          videoRef.current.play()
          isClick(false)

         
      }}
         />
          
        }


          
          
          
        </div>
        </div>
    </div>
  )
}

export default Page1
