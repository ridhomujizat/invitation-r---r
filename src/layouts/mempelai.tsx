/* eslint-disable no-constant-condition */
import { InstagramOutlined } from "@ant-design/icons";
import Card from "../components/card";
import { useSpring, animated } from "@react-spring/web";
import { Fade, Zoom } from "react-awesome-reveal";
import InstagramButton from "../components/instagram";

export default function Mempelai() {
  const rotation = useSpring({
    from: { transform: "rotate(0deg)" },
    to: async (next) => {
      while (true) {
        await next({ transform: "rotate(15deg)" });
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
    <div className="my-20 pb-20 flex flex-col items-center justify-center gap-20 text-center ">
      <div className="flex flex-col justify-center items-center gap-4  px-8">
        <Fade direction="up">
          <p className=" text-xl font-semibold border-b border-primary">
            Assalamualaikum Wr. Wb.
          </p>
        </Fade>
        <Fade direction="up">
          <p className="">
            Alhamdulillah, kami mengundang Bapak/Ibu/Saudara/i untuk hadir dan
            memberikan doa restu pada acara pernikahan kami:
          </p>
        </Fade>
      </div>
      <div className="px-8 w-full mt-[5rem] relative">
        <div className="relative w-full z-20 mb-[-8rem] mt-[-10rem]">
          <div
            className="absolute z-[3] top-[3rem] left-[-5.5rem]"
            style={{ transform: "rotate(34deg)" }}
          >
            <Fade delay={600} direction="top-left" triggerOnce duration={2000}>
              <animated.img
                src="flower-2.png"
                className="h-[10rem]"
                style={rotation}
              />
            </Fade>
          </div>
          <div className="absolute right-[-5rem] bottom-[1rem] z-[3] ">
            <Fade
              delay={500}
              direction="bottom-right"
              triggerOnce
              duration={2000}
            >
              <animated.img
                src="flower-2.png"
                className="h-[9rem] w-auto"
                style={rotationFlip}
              />
            </Fade>
          </div>
          <Fade direction="up" triggerOnce>
            <img
              src="/r-r.webp"
              alt="Rahma & Ridho"
              className="mx-auto aspect-square opacity-90"
            />
          </Fade>
        </div>
        <Fade direction="up" triggerOnce>
          <Card className="pb-[3rem] relative pt-[7rem]">
            <div className="flex justify-center flex-col w-full items-center gap-6">
              <div className="flex flex-col justify-center items-center gap-2">
                <Fade direction="down" cascade>
                  <p className=" text-3xl font-semibold font-greetFibes">
                    Rahma Nurul <br /> Khoirayanti
                  </p>
                  <p className="">
                    Putri Pertama dari
                    <br />
                    Bapak Sutikno Dan Ibu Legiyartini
                  </p>
                  <InstagramButton un="rahmarayanti" />
                </Fade>
              </div>
              <div className="flex justify-center items-center gap-2 w-[70%]">
                <Fade direction="left" cascade className="flex-1">
                  <div className="flex-1 border-t-2 border-primary"></div>
                </Fade>
                <p className=" font-milonga text-[30px]">&</p>
                <Fade direction="right" cascade className="flex-1">
                  <div className="flex-1 border-t-2 border-primary"></div>
                </Fade>
              </div>
              <div className="flex flex-col justify-center items-center gap-2">
                <Fade direction="up" cascade>
                  <p className=" text-3xl font-semibold font-greetFibes">
                    Ridho
                  </p>
                  <p className="">
                    Putra Pertama dari
                    <br />
                    Bapak Mujizat Dan Ibu Erniati
                  </p>
                  <InstagramButton un="ridhomujizat" />
                </Fade>
              </div>
            </div>
          </Card>
        </Fade>
      </div>
    </div>
  );
}
