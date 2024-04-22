import React, { useCallback, useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';

const Dropzone: React.FC = () => {
  const [files, setFiles] = useState<File[]>([]);


  useEffect(()=>{

    console.log(files)

  },[files])

  const onDrop = useCallback((acceptedFiles:any) => {
    setFiles((prevFiles) => {
      const newFiles = [...prevFiles, ...acceptedFiles];
      
      return newFiles;
    });
  }, []);

  const removeFile = (event: React.MouseEvent, file: File) => {
    event.stopPropagation(); // This will stop the event from propagating to the parent
    setFiles((prevFiles) => prevFiles.filter((f) => f !== file));
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()} className="border-2 border-dashed p-4 w-full min-h-[100px] py-10 mx-10 ">
      <input className=' text-accent-foreground' required {...getInputProps()} />
      {isDragActive ? 
        <p className=' text-accent-foreground'>Drop the files here ...</p>
       : 
        <p className=' text-accent-foreground'>Drag 'n' drop some files here, or click to select files</p>
      }
      <div className=' flex flex-wrap w-full h-full gap-5'>


     
      {files.map((file, index) => (
        <div key={index} className=" relative w-24 h-24 flex  items-center mt-2">
          <img src={URL.createObjectURL(file)} alt={file.name} className=" rounded-md w-24 h-24 object-cover" />
          <button
            className=" absolute top-0 right-0 text-sm font-bold text-red-500 pt-1 pr-1 "
            onClick={(e) => removeFile(e, file)}
          >
            X
          </button>
        </div>
      ))}
       </div>
    </div>
  );
};

export default Dropzone;
