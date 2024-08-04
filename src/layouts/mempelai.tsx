import React from "react";

export default function Mempelai() {
  return (
    <div className=" py-20 px-8 flex flex-col items-center justify-center gap-20 text-center bg-cover bg-center bg-river">
      <div className="flex flex-col justify-center items-center gap-4">
        <p>Assalamualaikum Wr. Wb.</p>
        <p className="text-sm">
          Alhamdulillah, kami mengundang Bapak/Ibu/Saudara/i untuk hadir dan
          memberikan doa restu pada acara pernikahan kami:
        </p>
      </div>
      <div className="flex flex-col justify-center items-center gap-4">
        <p className=" text-2xl font-semibold">Rahma Nurul Khoirayanti</p>
        <p className="text-sm">
          Putri Pertama dari
          <br />
          Bapak Lorem Dan Ibu Ipsum
        </p>
      </div>
      <div className="flex  justify-center items-center gap-2 w-[70%]">
        <div className="flex-1 border-t-2 border-primary"></div>
        <p className=" font-milonga text-[30px]">&</p>
        <div className="flex-1 border-t-2 border-primary"></div>
      </div>
      <div className="flex flex-col justify-center items-center gap-4">
        <p className=" text-2xl font-semibold">Ridho</p>
        <p className="text-sm">
          Putra Pertama dari
          <br />
          Bapak Lorem Dan Ibu Ipsum
        </p>
      </div>
    </div>
  );
}
