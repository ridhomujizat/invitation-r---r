import { Fade } from "react-awesome-reveal";

export default function Saythanks() {
  return (
    <Fade triggerOnce>
      <div
        className=" backdrop-blur w-full h-screen bg-center bg-cover relative z-10"
        style={{
          backgroundImage: "url('bg/intro-blur.png')",
          
        }}
      >
        <div className="absolute top-0 left-0 w-full h-full z-[20] pt-[150px] ">
          <Fade triggerOnce direction="up" cascade className="text-center ">
            <p>Terima kasih</p>
            <p className="font-greetFibes text-3xl my-4 color-[#400611] ">
              Rahma & Ridho
            </p>
            <p>01/09/24</p>
          </Fade>
        </div>
      </div>
    </Fade>
  );
}
