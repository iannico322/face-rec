import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Label } from "@radix-ui/react-dropdown-menu";

import * as React from "react";

export function DrawerDemo() {
  const [data, setData] = React.useState<any>({
    name: "",
    label: "",
    photos: [],
  });
  const [previews, setPreviews] = React.useState<string[]>([]);

  const handleFileChange = (event: any) => {
    const files = Array.from(event.target.files);

    const newPreviews = files.map((file:any) => URL.createObjectURL(file));
    setPreviews((prevPreviews) => [...prevPreviews, ...newPreviews]);

    setData((prevData:any) => ({
      ...prevData,
      photos: [...prevData.photos, ...files],
    }));
  };

  const handleRemoveImage = (index: number) => {
    setPreviews((prevPreviews) => prevPreviews.filter((_, i) => i !== index));
    setData((prevData:any) => ({
      ...prevData,
      photos: prevData.photos.filter((_:any, i:any) => i !== index),
    }));
  };

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">Open Drawer</Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>Register a Face</DrawerTitle>
            <DrawerDescription>Upload face and wait for the model to train.</DrawerDescription>
          </DrawerHeader>
          <div className="p-4 pb-0">
            <div className="flex text-foreground gap-4 flex-col  justify-center ">
              <div className=" w-full">
                <p>Label</p>
                <input
                  type="text"
                  value={data.label}
                  onChange={(e: any) => {
                    setData({ ...data, label: e.target.value });
                  }}
                  className="flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm text-gray-400 file:border-0 file:bg-transparent file:text-gray-600 file:text-sm file:font-medium"
                />
              </div>

              <div className=" w-full">
                <p>Name</p>
                <input
                  type="text"
                  value={data.name}
                  onChange={(e: any) => {
                    setData({ ...data, name: e.target.value });
                  }}
                  className="flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm text-gray-400 file:border-0 file:bg-transparent file:text-gray-600 file:text-sm file:font-medium"
                />
              </div>

              <div className="flex-1 text-start w-full">
                <p>Images</p>
                <label className="text-sm text-gray-400 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"></label>
                <div className="grid w-full items-start">
                  <input
                    id="picture"
                    onChange={handleFileChange}
                    type="file"
                    multiple
                    className="flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm text-gray-400 file:border-0 file:bg-transparent file:text-gray-600 file:text-sm file:font-medium"
                  />
                </div>
                <div className="preview mt-3 grid grid-cols-3 gap-2">
                  {previews.map((preview, index) => (
                    <div key={index} className="relative">
                      <img
                        src={preview}
                        className="h-[70px] w-full object-contain"
                        alt={`Image Preview ${index}`}
                      />
                      <button
                        type="button"
                        onClick={() => handleRemoveImage(index)}
                        className="absolute top-0 right-0 bg-red-500 text-white rounded-full h-6 w-6 flex items-center justify-center"
                      >
                        &times;
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-3 h-[120px]"></div>
          </div>
          <DrawerFooter>
            <Button
              onClick={() => {
                console.log(data);
              }}
            >
              Submit
            </Button>
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
