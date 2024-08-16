import { useSpring, animated } from "react-spring";
import CountDown from "./count-down";
import Alamat from "./alamat";

export default function Rundown() {
  return (
    <div className="mt-20">
      <div
        className="w-full bg-contain "
        style={{ backgroundImage: "url('kawung.svg')", minHeight: "70px" }}
      />

      <div
        className=" bg-cover bg-repeat-y  w-full"
        style={{
          backgroundImage: "url('texture.png')",
          backgroundPosition: "center top",
          paddingBottom: "10rem",
        }}
      >
        <div className="sticky top-5 z-[1000] ">
          <img src="gapura.png" alt="rundown" style={{ scale: "1.2" }} />
          <img
            src="Gunungan.png"
            className="absolute z-[5] h-[22rem] left-[-5rem] top-[-1rem]"
          />
          <img
            src="Gunungan.png"
            className="absolute z-[5] h-[22rem] right-[-5rem] top-[-1rem]"
            style={{ transform: "rotateY(180deg)" }}
          />
        </div>
        <div className="mt-[-15rem]">
          <div className=" flex flex-col justify-center items-center w-full">
            <p className="text-xl text-milonga font-semibold border-b border-primary">
              Akad Nikah
            </p>
            <div className="flex justify-center divide-x w-[80%] divide-primary items-center mt-4">
              <div className="text-center flex-1">
                <p className="">Minggu</p>
              </div>
              <div className="text-center px-4">
                <p className=" text-milonga font-semibold text-xl">01</p>
                {/* <p className="">2024</p> */}
              </div>
              <div className="text-center h-full flex justify-center items-center flex-1">
                <p className="">September</p>
              </div>
            </div>
            <p className=" mt-3">Pukul 08.00 WIB - Selesai</p>
          </div>
          <div className=" flex flex-col justify-center items-center w-full">
            <p className="text-xl text-milonga font-semibold mt-10 border-b border-primary">
              Resepsi
            </p>
            <div className="flex justify-center divide-x w-[80%] divide-primary items-center mt-4">
              <div className="text-center flex-1">
                <p className="">Minggu</p>
              </div>
              <div className="text-center px-4">
                <p className=" text-milonga font-semibold text-xl">01</p>
                {/* <p className="">2024</p> */}
              </div>
              <div className="text-center h-full flex justify-center items-center flex-1">
                <p className="">September</p>
              </div>
            </div>
            <p className=" mt-3">Pukul 13.00 WIB - 16.00 WIB</p>
          </div>
          <CountDown />
          <Alamat />
        </div>
      </div>
    </div>
  );
}
