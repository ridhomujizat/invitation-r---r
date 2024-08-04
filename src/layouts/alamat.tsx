import { Button } from "antd";
import React from "react";

export default function Alamat() {
  const openGoogleMaps = () => {
    const address = 'BOEMI PRASASTI, KP. Kebon Kopi RT/RW 002/001 NO 62, Ds, Sukadami, Cikarang Sel., Kabupaten Bekasi, Jawa Barat 17530';
    const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
    window.open(url, '_blank');
  };
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
        <div className="absolute top-0 left-0 w-full z-10 flex flex-col justify-center items-center p-3 h-full gap-10">
          <div className=" flex flex-col justify-center items-center w-full">
            <p className="text-xl text-milonga mb-3 font-semibold">Lokasi Acara</p>

            <div className=" border overflow-hidden rounded-xl border-primary w-[85%]">
              <iframe
                id="gmap_canvas"
                src="https://maps.google.com/maps?q=BOEMI+PRASASTI&t=&z=13&ie=UTF8&iwloc=&output=embed"
                // // frameorder="0"
                // scrolling="no"
                // marginHeight="0"
                // marginwidth="0"
              ></iframe>
            </div>
            <p className="text-sm text-milonga mt-5 font-semibold">Boemi Prasasti</p>
            <p className="text-[12px] mt-3 text-center w-[80%]">
              KP. Kebon Kopi RT/RW 002/001 NO 62, Ds, Sukadami, Cikarang Sel.,
              Kabupaten Bekasi, Jawa Barat 17530
            </p>
            <Button size="small" type="primary" shape="round" className="mt-3" onClick={openGoogleMaps}>
              <p className="text-white text-[10px]">Google Maps</p>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
