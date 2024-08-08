import useGetParams from "../hooks/use-get-params";

export default function Cover() {
  const params = useGetParams();
  return (
    <div className="bg-cover-int h-screen bg-center bg-cover relative overflow-hidden">
      <img
      src="/bg/cover.png"
      alt="cover"
        id="cover"
        className="absolute top-0 left-0 w-full h-full bg-center bg-opacity-50 scale-[1.1]"
        style={{
          scale: 1.5,
          zIndex: 1,
        }}
      />
      <div className="absolute top-0 left-0 w-full h-full z-10 ">
        <div className="flex flex-col justify-center items-center h-full text-white">
          The Wedding Of
          <div className=" relative w-[200px] h-[200px]">
            <h1
              className=" font-pinyon text-[120px] absolute text-white"
              style={{
                top: 0,
                left: 0,
              }}
            >
              R
            </h1>
            <h1
              className=" font-pinyon text-[120px] absolute text-white"
              style={{
                top: 65,
                left: 50,
              }}
            >
              R
            </h1>
          </div>
          <p className="font-pinyon text-2xl my-4 text-white">Rahma & Ridho</p>
          <p className="font-semibold text-white">DEAR :</p>
          <p className=" text-2xl  my-3 bg-opacity-20 rounded text-white">
            {params.name}
          </p>
          <p className="text-[12px] max-w-[190px] text-center text-white">
            Please be a part of our happiest moment
          </p>
          <button className="bg-[#8A4041] text-white py-1 px-2 rounded border shadow-md text-[10px] my-5">
            Open Invitation
          </button>
        </div>
      </div>
    </div>
  );
}
