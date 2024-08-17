import { useState } from "react";
import useGetParams from "../hooks/use-get-params";
import useUIStore from "../store/useUiStore";
import { Button } from "antd";

export default function Cover() {
  const { setOpenCover, openCover } = useUIStore((s) => s);
  const params = useGetParams();

  const handleOpenCover = () => {
    setOpenCover(!openCover);
  };

  return (
    <div
      className={`absolute left-0 w-full h-full z-50 transition-top duration-1000 ${
        openCover ? "-top-full" : "top-0"
      }`}
    >
      <div className="bg-cover-int h-screen bg-center bg-cover relative overflow-hidden">
        <img
          src="/bg/cover.png"
          alt="cover"
          id="cover"
          className="absolute top-0 left-0 w-full h-full bg-center bg-opacity-50 scale-[1.1] md:object-cover animate-zoomInCover"
          style={{
            // scale: 1.5,
            zIndex: 1,
          }}
        />
        <div className="absolute top-0 left-0 w-full h-full z-10 ">
          <div id="cover-content" className="flex flex-col justify-center items-center h-full text-white  animate-fadeIn">
            <p >The Wedding Of</p>
            <div className=" relative w-[200px] h-[200px]">
              <h1
                className=" font-pinyon text-[120px] absolute text-white"
                style={{
                  top: 0,
                  left: 0,
                }}
              >
                R
              </h1>
              <h1
                className=" font-pinyon text-[120px] absolute text-white"
                style={{
                  top: 65,
                  left: 50,
                }}
              >
                R
              </h1>
            </div>
            <p className="font-pinyon text-2xl my-4 text-white">
              Rahma & Ridho
            </p>
            <p className="font-semibold text-white">DEAR :</p>
            <p className=" text-2xl  my-3 bg-opacity-20 rounded text-white">
              {params.name}
            </p>
            <p className=" max-w-[190px] text-center text-white">
              Please be a part of our happiest moment
            </p>
            <Button
              size="small"
              type="primary"
              shape="round"
              className="mt-3"
              onClick={handleOpenCover}
            >
              Open Invitation
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
