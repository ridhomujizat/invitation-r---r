/* eslint-disable no-constant-condition */
import { useSpring, animated } from "react-spring";
import CountDown from "./count-down";
import Alamat, { FluentLocation16Regular } from "./alamat";
import { Fade } from "react-awesome-reveal";
import { Button } from "antd";
import { CalendarOutlined } from "@ant-design/icons";
import useUIStore from "../store/useUiStore";

export default function Rundown() {
  const { setTriggerAlamat, setTriggerCalender } = useUIStore();
  const shinta = useSpring({
    from: { transform: "translateX(0px) rotate(0deg)  translateY(0px)" },
    to: async (next) => {
      while (true) {
        await next({
          transform: "translateX(20px) rotate(0deg)  translateY(0px)",
        });
        await next({
          transform: "translateX(20px) rotate(5deg)  translateY(0px)",
        });
        await next({
          transform: "translateX(25px) rotate(5deg) translateY(10px)",
        });
        await next({
          transform: "translateX(20px) rotate(0deg)  translateY(0px)",
        });
        await next({
          transform: "translateX(0px) rotate(0deg)  translateY(0px)",
        });
      }
    },
    delay: 1200,
    loop: true,
    config: { duration: 700 }, // Adjust the duration as needed
  });

  const rama = useSpring({
    from: { transform: "translateX(0px) rotate(0deg)  translateY(0px)" },
    to: async (next) => {
      while (true) {
        await next({
          transform: "translateX(-20px) rotate(0deg)  translateY(0px)",
        });
        await next({
          transform: "translateX(-20px) rotate(-5deg)  translateY(0px)",
        });
        await next({
          transform: "translateX(-25px) rotate(-5deg) translateY(10px)",
        });
        await next({
          transform: "translateX(-20px) rotate(0deg)  translateY(0px)",
        });
        await next({
          transform: "translateX(0px) rotate(0deg)  translateY(0px)",
        });
      }
    },
    delay: 1200,
    loop: true,
    config: { duration: 700 }, // Adjust the duration as needed
  });

  const rotation = useSpring({
    from: { transform: "rotate(0deg)" },
    to: async (next) => {
      while (true) {
        await next({ transform: "rotate(10deg)" });
        await next({ transform: "rotate(0deg)" });
      }
    },
    delay: 1200,
    loop: true,
    config: { duration: 2000 },
  });

  const rotationFlip = useSpring({
    from: { transform: "rotate(-52deg) scaleX(-1)" },
    to: async (next) => {
      while (true) {
        await next({ transform: "rotate(-30deg) scaleX(-1)" });
        await next({ transform: "rotate(-52deg) scaleX(-1)" });
      }
    },
    delay: 1200,
    loop: true,
    config: { duration: 2000 },
  });
  return (
    <>
      <div className=" mt-[4.5rem] relative">
        <div className="relative min-h-[1000px]">
          <div className="sticky z-[10] top-[-1rem]">
            <Fade direction="up" triggerOnce>
              <img src="gapura.png" alt="rundown" style={{ scale: "1.3" }} />
            </Fade>
            <div className="absolute top-[15rem] left-[-4rem] ">
              <Fade direction="bottom-left" triggerOnce>
                <animated.img
                  src="shinta.png"
                  alt="shinta"
                  className="h-[20rem]"
                  style={shinta}
                />
              </Fade>
            </div>
            <div className="absolute top-[12rem] right-[-4rem] z-[3]  ">
              <Fade direction="bottom-right" triggerOnce>
                <animated.img
                  src="rama.png"
                  alt="rama"
                  className="h-[20rem]"
                  style={rama}
                />
              </Fade>
            </div>
            <div
              className="absolute z-[3] top-[15rem] left-[-4rem]"
              style={{ transform: "rotate(34deg)" }}
            >
              <Fade direction="top-left" triggerOnce duration={2000}>
                <animated.img
                  src="flower-2.png"
                  className="h-[7rem]"
                  style={rotation}
                />
              </Fade>
            </div>
            <div className="absolute right-[-1rem] bottom-[-3rem]">
              <Fade direction="bottom-right" triggerOnce duration={2000}>
                <animated.img
                  src="flower-2.png"
                  className="h-[4.5rem] w-auto"
                  style={rotationFlip}
                />
              </Fade>
            </div>
          </div>
          <div className=" absolute z-[12] top-0 left-0 h-full w-full">
            <div className="relative w-full h-full">
              <div className="absolute top-[31rem] w-full flex justify-center items-center">
                <Fade direction="up" triggerOnce>
                  <div>
                    <Button
                      id="calender-button-absolut"
                      type="primary"
                      shape="round"
                      size="small"
                      onClick={() => {
                        setTriggerCalender();
                      }}
                      icon={<CalendarOutlined />}
                      className="mt-5 cursor-pointer"
                    >
                      <p className="text-white text-[10px]">Save to Calendar</p>
                    </Button>
                  </div>
                </Fade>
              </div>
              <div className="absolute top-[61rem] w-full flex justify-center items-center">
                <Fade direction="up" triggerOnce>
                  <Button
                    type="primary"
                    shape="round"
                    size="small"
                    onClick={() => {
                      setTriggerAlamat();
                    }}
                    icon={<FluentLocation16Regular />}
                    className="mt-3 cursor-pointer"
                  >
                    <p className="text-white text-[10px]">Google Maps</p>
                  </Button>
                </Fade>
              </div>
            </div>
          </div>
          <div
            className=" bg-cover bg-repeat-y mt-5 absolute w-full h-full top-[1rem] left-0 z-[2]"
            style={{
              backgroundImage: "url('texture.png')",
              backgroundPosition: "center top",
              paddingBottom: "10rem",
              paddingTop: "7rem",
            }}
          >
            <div className=" flex flex-col justify-center items-center w-full">
              <div className=" flex flex-col justify-center items-center w-full">
                <Fade delay={500} direction="up" triggerOnce>
                  <p className="text-2xl font-greetFibes font-semibold border-b border-primary">
                    Akad Nikah
                  </p>
                </Fade>
                <div className="flex justify-center divide-x w-[80%] divide-primary items-center mt-4">
                  <Fade
                    delay={500}
                    triggerOnce
                    direction="left"
                    className="text-center px-4"
                  >
                    <p className=" font-semibold">Minggu</p>
                  </Fade>
                  <Fade delay={500} triggerOnce className="text-center px-4">
                    <p className=" text-milonga font-semibold text-xl">01</p>
                    {/* <p className="">2024</p> */}
                  </Fade>
                  <Fade
                    delay={500}
                    triggerOnce
                    direction="right"
                    className="text-center px-4"
                  >
                    <p className="font-semibold">September</p>
                  </Fade>
                </div>
                <Fade delay={500} direction="up" triggerOnce>
                  <p className=" mt-3">Pukul 09.00 WIB - 11.00 WIB</p>
                </Fade>
              </div>
            </div>
            <div className=" flex flex-col justify-center items-center w-full">
              <Fade delay={700} direction="up" triggerOnce>
                <p className="text-2xl font-greetFibes text-milonga font-semibold mt-10 border-b border-primary">
                  Resepsi
                </p>
              </Fade>
              <div className="flex justify-center divide-x w-[80%] divide-primary items-center mt-4">
                <Fade
                  delay={700}
                  triggerOnce
                  direction="left"
                  className="text-center px-4"
                >
                  <p className="font-semibold">Minggu</p>
                </Fade>
                <Fade delay={700} triggerOnce className="text-center px-4">
                  <p className=" text-milonga font-semibold text-xl">01</p>
                </Fade>
                <Fade
                  delay={700}
                  triggerOnce
                  direction="right"
                  className="text-center h-full flex justify-center items-center px-4"
                >
                  <p className="font-semibold">September</p>
                </Fade>
              </div>
              <Fade delay={700} direction="up" triggerOnce>
                <p className=" mt-3">Pukul 13.00 WIB - 16.00 WIB</p>
              </Fade>
            </div>
            <CountDown />
            <Fade triggerOnce>
              <Divider />
            </Fade>
            <Alamat />
          </div>
        </div>
      </div>
      <div
        className=" bg-cover bg-repeat-y h-[100px]"
        style={{
          backgroundImage: "url('texture.png')",
          backgroundPosition: "center top",
        }}
      ></div>
      <div
        className="w-full bg-contain mt-[-1rem] "
        style={{ backgroundImage: "url('kawung.svg')", minHeight: "70px" }}
      />
    </>
  );
}

const Divider = () => {
  return (
    <div className="flex w-full justify-center items-center my-[2rem]">
      <div className="border-b border-primary w-[50%]" />
    </div>
  );
};
