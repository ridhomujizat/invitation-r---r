import React from "react";
import Card from "../components/card";

export default function Mempelai() {
  return (
    <div className="mt-20 flex flex-col items-center justify-center gap-20 text-center ">
      <div className="flex flex-col justify-center items-center gap-4  px-8">
        <p className=" font-semibold border-b border-primary">
          Assalamualaikum Wr. Wb.
        </p>
        <p className="text-sm">
          Alhamdulillah, kami mengundang Bapak/Ibu/Saudara/i untuk hadir dan
          memberikan doa restu pada acara pernikahan kami:
        </p>
      </div>
      <div className="px-8 w-full mb-20 mt-[5rem] relative">
        <Card className="pb-[3rem] relative pt-[7rem]">
          <div className="relative w-full z-20 mt-[-17rem]">
            <img
              src="flower-2.png"
              className="absolute z-[3] top-[3rem] left-[-5.5rem] h-[10rem] w-auto"
              style={{ transform: "rotate(34deg)" }}
            />
            <img
              src="flower-2.png"
              className="absolute right-[-4rem] bottom-[1rem] z-[3] h-[7.5rem] w-auto"
              style={{ transform: "rotateY(180deg)" }}
            />
            <img
              src="/r-r.webp"
              alt="Rahma & Ridho"
              className="mx-auto aspect-square opacity-90"
            />
          </div>
          <div className="flex justify-center flex-col w-full items-center gap-6">
            <div className="flex flex-col justify-center items-center gap-2">
              <p className=" text-2xl font-semibold">Rahma Nurul Khoirayanti</p>
              <p className="text-sm">
                Putri Pertama dari
                <br />
                Bapak Lorem Dan Ibu Ipsum
              </p>
            </div>
            <div className="flex justify-center items-center gap-2 w-[70%]">
              <div className="flex-1 border-t-2 border-primary"></div>
              <p className=" font-milonga text-[30px]">&</p>
              <div className="flex-1 border-t-2 border-primary"></div>
            </div>
            <div className="flex flex-col justify-center items-center gap-2">
              <p className=" text-2xl font-semibold">Ridho</p>
              <p className="text-sm">
                Putra Pertama dari
                <br />
                Bapak Lorem Dan Ibu Ipsum
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
