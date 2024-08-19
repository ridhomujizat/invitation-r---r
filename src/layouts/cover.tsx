/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useEffect, useState } from "react";
import useGetParams from "../hooks/use-get-params";
import useUIStore from "../store/useUiStore";
import { Button } from "antd";
import { ScrollDown } from "../components/scroll";
import { useSpring, animated } from "@react-spring/web";
import { duration } from "moment";

export default function Cover() {
  const { setOpenCover, openCover } = useUIStore((s) => s);
  const params = useGetParams();
  const styles = useSpring({
    from: { transform: "translateY(0px)" },
    to: [{ transform: "translateY(15px)" }, { transform: "translateY(0px)" }],
    config: { tension: 200, friction: 10 },
    loop: true,
  });

  const RLeft = useSpring({
    from: { transform: "translateX(100px)" },
    to: { transform: "translateX(0px)" },
    delay: 700,
    config: {
      duration: 1200,
    },
  });
  const RRight = useSpring({
    from: { transform: "translateX(-100px)" },
    to: { transform: "translateX(0)" },
    delay: 700,
    config: {
      duration: 1200,
    },
  });

  const handleOpenCover = () => {
    setOpenCover(!openCover);
    const docElement = document.documentElement;
    // if (docElement?.requestFullscreen) {
    //   docElement?.requestFullscreen();
    //   // @ts-ignore
    // } else if (docElement?.mozRequestFullScreen) { /* Firefox */
    //   // @ts-ignore
    //   docElement?.mozRequestFullScreen();
    //   // @ts-ignore
    // } else if (docElement?.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
    //   // @ts-ignore
    //   docElement?.webkitRequestFullscreen();
    //   // @ts-ignore
    // } else if (docElement?.msRequestFullscreen) { /* IE/Edge */
    //   // @ts-ignore
    //   docElement?.msRequestFullscreen();
    // }
  };
  useEffect(() => {
    const handleScroll = () => {
      console.log(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
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
          <div
            id="cover-content"
            className="flex flex-col justify-center items-center h-full text-white  animate-fadeIn"
          >
            <p className="uppercase mb-4 font-semibold">Wedding Invitation</p>
            <div className="relative h-[144px]">
              <div className=" w-[162px] h-full flex justify-center items-center">
                <div className="w-[75px] font-cormorant px-2 overflow-hidden flex justify-center items-center">
                  <animated.div style={RLeft}>
                    <p className="text-[6rem] font-cormorant">R</p>
                  </animated.div>
                </div>
                <div className=" min-w-[.2rem] bg-white min-h-[80%]"></div>
                <div className="w-[75px] h-full"></div>
              </div>
              <div className="absolute top-0 left-0 z-10 h-[144px]">
                <div className="  w-[162px] h-full flex justify-center items-center">
                  <div className="w-[75px]  h-full"></div>
                  <div className=" min-w-[.2rem] bg-white h-[80%]"></div>
                  <div className="w-[75px] font-cormorant px-2 overflow-hidden flex justify-center items-center">
                    <animated.div style={RRight}>
                      <p className="text-[6rem] font-cormorant">R</p>
                    </animated.div>
                  </div>
                </div>
              </div>
            </div>

            {/* <p className="font-pinyon text-2xl my-4 text-white">
              Rahma & Ridho
            </p> */}
            <p className="font-semibold text-white mt-[5rem]">dear :</p>
            <p className=" text-2xl  my-3 bg-opacity-20 rounded text-white underline capitalize">
              {params.name}
            </p>
            <div className="mt-[5rem] cursor-pointer" onClick={handleOpenCover}>
              <animated.div style={styles} className="scroll-down opacity-80">
                <ScrollDown />
              </animated.div>
            </div>
            {/* <Button
              size="small"
              type="primary"
              shape="round"
              className="mt-3"
              onClick={handleOpenCover}
            >
              Open Invitation
            </Button> */}
          </div>
        </div>
      </div>
    </div>
  );
}
