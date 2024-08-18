import { Fade } from "react-awesome-reveal";
import { useSpring, animated } from "@react-spring/web";

export default function Intro() {
  const rotation = useSpring({
    from: { transform: "rotate(0deg)", },
    to: async (next) => {
      // eslint-disable-next-line no-constant-condition
      while (true) {
        await next({ transform: "rotate(5deg)" });
        await next({ transform: "rotate(0deg)" });
      }
    },
    delay: 1000,
    loop: true,
    config: { duration: 2000 },
  });

  const rotationFlip = useSpring({
    from: { transform: "rotate(5deg) rotateY(180deg)", },
    to: async (next) => {
      // eslint-disable-next-line no-constant-condition
      while (true) {
        await next({ transform: "rotate(1deg) rotateY(180deg)" });
        await next({ transform: "rotate(5deg) rotateY(180deg)" });
      }
    },
    delay: 1000,
    loop: true,
    config: { duration: 2000 },
  });
  console.log(rotation);
  return (
    <div className=" w-full h-screen relative flex justify-center items-center">
      <div className="absolute z-[5] left-[-4rem] top-[1rem]">
        <Fade direction="bottom-left" triggerOnce duration={1000}>
          <animated.img
            src="Gunungan.png"
            className="h-[22rem]"
            style={rotation}
          />
        </Fade>
      </div>
      <div className=" absolute z-[5] right-[-4rem] top-[1rem]">
        <Fade direction="bottom-right" triggerOnce duration={1000}>
          <animated.img
            src="Gunungan.png"
            className="h-[22rem]"
            style={rotationFlip}
          />
        </Fade>
      </div>

      <div className="absolute z-[3] bottom-0">
        <Fade triggerOnce direction="up">
          <img src="flower.png" className=" opacity-80 w-auto " />
        </Fade>
      </div>
      <div className="text-center ">
        <Fade delay={500}>
          <p>The Wedding Of</p>
          <p className="font-pinyon text-3xl my-4 color-[#400611] ">
            Rahma & Ridho
          </p>
          <p>01 September 2024</p>
        </Fade>
      </div>
    </div>
  );
}
