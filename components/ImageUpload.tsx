"use client";

import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";
import { useCallback } from "react";
import { BiCheckDouble } from "react-icons/bi";
import { TbPhotoPlus } from "react-icons/tb";

declare global {
  var cloudinary: any;
}

const uploadPreset = "z7o6g26y";

interface ImageUploadProps {
  onChange: (value: string) => void;
  value: string | null;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ onChange, value }) => {
  const handleUpload = useCallback(
    (result: any) => {
      onChange(result.info.secure_url);
    },
    [onChange]
  );

  return (
    <CldUploadWidget
      onUpload={handleUpload}
      uploadPreset={uploadPreset}
      options={{
        maxFiles: 1,
      }}
    >
      {({ open }) => {
        return (
          <div
            onClick={() => open?.()}
            className="
            "
          >
            {/* <input
              type="file"
              className="w-full mx-auto text-black text-sm bg-white border file:cursor-pointer cursor-pointer file:border-0 file:py-2.5 file:px-4 file:bg-gray-100 file:hover:bg-gray-200 file:text-black rounded"
            />{" "} */}
            <div className="flex items-center gap-2 border roboinput cursor-pointer">
              <p className="font-normal text-sm bg-gray-200 border p-2 rounded-sm ">
                Choose file
              </p>
              {value ? <p className="flex items-center gap-2">File chosen <BiCheckDouble className="text-green-500 w-6 h-6"/> </p> : <p>No file chosen</p>}
            </div>
            {/* {value && (
              <div
                className="
              absolute inset-0 w-full h-full"
              >
                <Image
                  width={100}
                  height={100}
                  className="object-cover w-full h-full"
                  src={value}
                  alt="House"
                />
              </div>
            )} */}
          </div>
        );
      }}
    </CldUploadWidget>
  );
};

export default ImageUpload;
