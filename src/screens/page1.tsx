import { useCallback, useEffect, useRef, useState } from 'react';
import { PauseIcon, PlayIcon,  RotateCcwIcon } from "lucide-react";
import * as faceapi from 'face-api.js'


const Page1 = () => {
  const [status,setStatus] = useState("Training...")
  const MODEL_URL = "/face-rec/models"
  const videoRef:any = useRef()
  let canvasRef:any = useRef()
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
      "id":"MayorEmmanuel",
      "name":"Hon. Emmanuel L. Jamis",
      "position":"ALUIJID - Mayor"
    },
    {
      "id":"ViceMayorAlvin",
      "name":"Hon. Alvin Giovanni A. Labis",
      "position":"ALUBIJID - Vice Mayor"
    },
    {
      "id":"MayorAlexis",
      "name":"Hon. Alexis S. Quina",
      "position":"BALINGASAG - Mayor"
    },
    {
      "id":"ViceMayorFelix",
      "name":"Hon. Vice Mayor Felix H. Borromeo",
      "position":"BALINGASAG - Vice Mayor"
    },
    {
      "id":"MayorAaron",
      "name":"Hon. Mayor Aaron Paul S. Unabia",
      "position":"BALINGOAN - Mayor"
    },
    {
      "id":"ViceMayorFranklin",
      "name":"Hon. Franklin C. Panulaya",
      "position":"BALINGOAN - Vice Mayor"
    },
    {
      "id":"MayorDann",
      "name":"Hon. Mayor Dann Isaiah D. Lusterio",
      "position":"BINUANGAN - Mayor"
    },
    {
      "id":"ViceMayorMichelle",
      "name":"Hon. Michelle C. Abao",
      "position":"BINUANGAN - Vice Mayor"
    },
    {
      "id":"MayorEdgar",
      "name":"Hon. Mayor Edgar Lignes",
      "position":"EL SALVADOR CITY - Mayor"
    },
    {
      "id":"ViceMayorMark",
      "name":"Hon.  Mark William U. Tan",
      "position":"EL SALVADOR CITY - Vice Mayor"
    },
    {
      "id":"MayorEric",
      "name":"Hon. Mayor Eric G. Canosa",
      "position":"GINGOOG CITY - Mayor"
    },
    {
      "id":"ViceMayorThaddeus",
      "name":"Hon.  Thaddeus “Tadoy” Lugod",
      "position":"GINGOOG CITY - Vice Mayor"
    },
    {
      "id":"MayorMeraluna",
      "name":"Hon. Meraluna S. Abrogar",
      "position":"CLAVERIA - Mayor"
    },
    {
      "id":"ViceMayorReynante",
      "name":"Hon. Reynante L. Salvaleon",
      "position":"CLAVERIA - Vice Mayor"
    },
    {
      "id":"Nico",
      "name":"Ian Nico Caulin",
      "position":"Gwapo"
    },
    {
      "id":"Mark",
      "name":"Mark Gil Rusiana",
      "position":"OJT - Black white blue red hacker"
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
    },
    {
      "id":"Sarah",
      "name":"Sarah Margaha",
      "position":"My Everything"
    },
    {
      "id":"Panky",
      "name":"Bliss Francis “Panky” Acain",
      "position":"PGMO-Board Members District 2"
    },
    {
      "id":"Yasay",
      "name":"Dexter Yasay",
      "position":"PGMO-Board Members District 2"
    },
    {
      "id":"Erick",
      "name":"Fredrick “Erick” Yu Khu",
      "position":"PGMO-Board Members District 1"
    },
    {
      "id":"Boboy",
      "name":"Gerardo “Boboy” Sabal III",
      "position":"PGMO-Board Members District 2"
    },
    {
      "id":"Unabia",
      "name":"Hon.Peter Unabia",
      "position":"PGMO-Governor"
    },
    {
      "id":"Pelaez",
      "name":"Hon.Jeremy Jonahmar Pelaez",
      "position":"PGMO-Vice Governor"
    },
    {
      "id":"Abing",
      "name":"Jabi “Abing” Bernaldez",
      "position":"PGMO-Board Members District 1"
    },
    {
      "id":"Emano",
      "name":"Princess Nacional Emano",
      "position":"PGMO-Board Members District 2"
    },
    {
      "id":"Buhisan",
      "name":"Rey Buhisan",
      "position":"PGMO-Board Members District 1"
    },
    {
      "id":"Say-say",
      "name":"Syremae “Say-say” Neri Emano ",
      "position":"PGMO-Board Members District 2"
    },
    {
      "id":"Win",
      "name":"Wayne “Win” Militante",
      "position":"PGMO-Board Members District 1"
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

    Fersons.map(async (label:any) => {
      const descriptions = [];
      for (let i = 1; i <= 2; i++) {
        const img = await faceapi.fetchImage(`./labels/${label.id}/${i}.jpg`);
        const detections: any = await getFaceDescriptor(img);
        descriptions.push(detections.descriptor);
      }
      return new faceapi.LabeledFaceDescriptors(label.id, descriptions);
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
          <p className=' font-semibold text-lg'> Face Rex v.1</p>
        
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
        
        
     
        
    
   

    
      
        <div className=" w-[300px]  grid  justify-center items-center  grid-cols-3  ">
         
        <p className=' col-span-1 justify-start justify-self-start '><span className={status=="Running"?"  justify-end justify-self-end text-green-600":" text-red-500 justify-end justify-self-end"}>{status}</span></p>

          

          {!click?
          <PauseIcon className=' text-foreground col-span-1 justify-center justify-self-center self-center cursor-pointer' onClick={()=>{
           
             videoRef.current.pause()
             isClick(true)

            
         }}/>
         :
         <PlayIcon 
         className=' text-foreground col-span-1 justify-center justify-self-center self-center cursor-pointer' 
         onClick={()=>{
           
          videoRef.current.play()
          isClick(false)

         
      }}
         />
          
        }

<RotateCcwIcon className={camera=='user'? ' justify-end justify-self-end text-foreground rotate-180 transition-all duration-700 col-span-1 ': '  justify-end justify-self-end text-foreground col-span-1  rotate-0 transition-all duration-700'}
           onClick={()=>{
            setCamera(prevState => prevState === 'user' ? 'environment' : 'user')
            startVideo()
            console.log(camera)

          }}/>

        

          
          
          
        </div>
        </div>
    </div>
  )
}

export default Page1
