/* eslint-disable no-constant-condition */
import { useSpring, animated } from "react-spring";
import CountDown from "./count-down";
import Alamat from "./alamat";
import { Fade } from "react-awesome-reveal";

export default function Rundown() {
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
          <div className="sticky z-[1000] top-[-1rem]">
            <Fade direction="up" triggerOnce>
              <img src="gapura.png" alt="rundown" style={{ scale: "1.3" }} />
            </Fade>
            <div className="absolute top-[17rem] left-[-4rem] ">
              <Fade direction="bottom-left" triggerOnce>
                <animated.img
                  src="shinta.png"
                  alt="shinta"
                  className="h-[20rem]"
                  style={shinta}
                />
              </Fade>
            </div>
            <div className="absolute top-[15rem] right-[-4rem] z-[3]  ">
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
              <Fade
                direction="up"
                triggerOnce
                cascade
                className=" flex flex-col justify-center items-center w-full"
              >
                <p className="text-2xl font-greetFibes font-semibold border-b border-primary">
                  Akad Nikah
                </p>
                <div className="flex justify-center divide-x w-[80%] divide-primary items-center mt-4">
                  <div className="text-center px-4">
                    <p className=" font-semibold">Minggu</p>
                  </div>
                  <div className="text-center px-4">
                    <p className=" text-milonga font-semibold text-xl">01</p>
                    {/* <p className="">2024</p> */}
                  </div>
                  <div className="text-center h-full flex justify-center items-center px-4">
                    <p className="font-semibold">September</p>
                  </div>
                </div>
                <p className=" mt-3">Pukul 09.00 WIB - 11.00 WIB</p>
              </Fade>
            </div>
            <div className=" flex flex-col justify-center items-center w-full">
              <p className="text-2xl font-greetFibes text-milonga font-semibold mt-10 border-b border-primary">
                Resepsi
              </p>
              <div className="flex justify-center divide-x w-[80%] divide-primary items-center mt-4">
                <div className="text-center px-4">
                  <p className="font-semibold">Minggu</p>
                </div>
                <div className="text-center px-4">
                  <p className=" text-milonga font-semibold text-xl">01</p>
                  {/* <p className="">2024</p> */}
                </div>
                <div className="text-center h-full flex justify-center items-center px-4">
                  <p className="font-semibold">September</p>
                </div>
              </div>
              <p className=" mt-3">Pukul 13.00 WIB - 16.00 WIB</p>
            </div>
            <CountDown />

            <Divider />

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
