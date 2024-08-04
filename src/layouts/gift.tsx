import React from "react";

export default function Gift() {
  return (
    <div className="bg-primary px-10 py-10">
      <div className="bg-river bg-bottom bg-cover overflow-hidden rounded-xl relative h-[400px]">
        {/* <div
          className="absolute top-0 left-0 w-full h-full bg-opacity-10 bg-[#E4DBD6]"
          style={{
            backgroundSize: "inherit",
            scale: 1.5,
            zIndex: 1,
          }}
        ></div> */}
        <div className="absolute top-0 left-0 w-full z-10 flex flex-col justify-center items-center h-full">
          <p className=" text-center">Tanda Kasih</p>
        </div>
      </div>
    </div>
  );
}
