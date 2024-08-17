export default function Rundown() {
  return (
    <div className="bg-[#F5EFEA] px-10 py-10">
      <div className=" bg-opacity-0 bg-center bg-cover overflow-hidden border-2 rounded border-primary relative h-[500px]">
        <div
          className="absolute top-0 left-0 w-full h-full opacity-35 bg-current"
          style={{
            backgroundSize: "inherit",
            scale: 1.5,
            zIndex: 1,
          }}
        ></div>
        <div className="absolute top-0 left-0 w-full z-10 flex flex-col justify-center items-center p-3 h-full gap-10"

        >
          <div className=" flex flex-col justify-center items-center w-full">
            <p className="text-xl text-milonga">Akad Nikah</p>
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
            <p className="text-xl text-milonga">Resepsi</p>
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
          {/* <p className=" mt-3">Pukul 08.00 WIB - 13.00 WIB</p>
          <p className="text-md font-milonga mt-5">Lokasi Acara</p>
          <p className="  text-center">
            KP. KEBON KOPI RT/RW 002/001 NO 62, Ds, Sukadami, Cikarang Sel.,
            Kabupaten Bekasi, Jawa Barat 17530
          </p> */}
        </div>
      </div>
    </div>
  );
}
