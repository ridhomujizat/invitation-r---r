import { useSpring, animated } from "react-spring";

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
          minHeight: "200vh",
        }}
      >
        <div className="sticky top-0 z-10 ">
          <img
            src="gapura.png"
            alt="rundown"
            className="h-[100vh] w-[100vw] object-contain"
            style={{ objectFit: "cover", scale: 1.1 }}
          />
          <img
            src="Gunungan.png"
            className="absolute z-[5] h-[22rem] left-[-4rem] top-[2rem]"
          />
          <img
            src="Gunungan.png"
            className="absolute z-[5] h-[22rem] right-[-4rem] top-[2rem]"
            style={{ transform: "rotateY(180deg)" }}
          />
        </div>
        <div className="mt-[-15rem]">
          <div className=" flex flex-col justify-center items-center w-full">
            <p className="text-xl text-milonga font-semibold border-b border-primary">Akad Nikah</p>
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
            <p className="text-xl text-milonga font-semibold mt-10 border-b border-primary">Resepsi</p>
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
        </div>
      </div>
    </div>
  );
}
