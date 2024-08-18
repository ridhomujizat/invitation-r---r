import { Button } from "antd";
import type { SVGProps } from "react";
import service from "../service";

export function FluentLocation16Regular(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 16 16"
      {...props}
    >
      <path
        fill="white"
        d="M9.5 7a1.5 1.5 0 1 0-3 0a1.5 1.5 0 0 0 3 0M14 7c0 2.874-3.097 6.016-4.841 7.558a1.74 1.74 0 0 1-2.318 0C5.097 13.016 2 9.874 2 7a6 6 0 1 1 12 0m-1 0A5 5 0 0 0 3 7c0 1.108.615 2.395 1.57 3.683c.934 1.258 2.087 2.377 2.933 3.126a.74.74 0 0 0 .994 0c.846-.749 2-1.867 2.933-3.126C12.385 9.395 13 8.108 13 7"
      ></path>
    </svg>
  );
}

export default function Alamat() {
  const openGoogleMaps = () => {
    service
      .post("/maps", {
        name: "ridho",
        clicked: true,
      })
      .then((result) => {
        console.log("Success:", result);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    const address =
      "BOEMI PRASASTI, KP. Kebon Kopi RT/RW 002/001 NO 62, Ds, Sukadami, Cikarang Sel., Kabupaten Bekasi, Jawa Barat 17530";
    const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      address
    )}`;
    window.open(url, "_blank");
  };
  return (
    <div className="w-full flex justify-center">
      <div className="w-[80%] z-10 flex flex-col justify-center items-center px-3 h-full gap-10">
        <div className=" flex flex-col justify-center items-center w-full">
          <p className="text-2xl font-greetFibes text-milonga mb-3 font-semibold border-b border-primary">
            Lokasi
          </p>

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
          <p className="text-sm text-milonga mt-5 font-semibold">
            Boemi Prasasti
          </p>
          <p className=" mt-3 text-center w-[80%]">
            KP. Kebon Kopi RT/RW 002/001 NO 62, Ds, Sukadami, Cikarang Sel.,
            Kabupaten Bekasi, Jawa Barat 17530
          </p>
          <Button
            size="small"
            type="primary"
            shape="round"
            className="mt-3"
            onClick={openGoogleMaps}
            icon={<FluentLocation16Regular />}
          >
            <p className="text-white text-[10px]">Google Maps</p>
          </Button>
        </div>
      </div>
    </div>
  );
}
