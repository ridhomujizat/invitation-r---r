export default function Intro() {
  return (
    <div className=" w-full h-screen relative z-10">
      <img
        src="Gunungan.png"
        className="absolute z-[5] h-[22rem] left-[-4rem] top-[1rem]"
        data-aos="fade-right"
      />
      <img
        src="Gunungan.png"
        className="absolute z-[5] h-[22rem] right-[-4rem] top-[1rem]"
        style={{ transform: "rotateY(180deg)" }}
        data-aos="fade-right"
      />
      <img
        src="flower.png"
        className="absolute z-[3] bottom-0 opacity-80 w-auto"
      />
      <div className="absolute top-0 left-0 w-full h-full z-[20] ">
        <div className="text-center my-15 h-full mt-[20rem]">
          <p>The Wedding Of</p>
          <p className="font-pinyon text-3xl my-4 color-[#400611] ">
            Rahma & Ridho
          </p>
          <p>01 September 2024</p>
        </div>
      </div>
    </div>
  );
}
