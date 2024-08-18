import React from "react";
import Card from "../components/card";
import { Fade } from "react-awesome-reveal";

// export default function AyatQuran() {
//   return (
//     <div className="bg-[#F5EFEA] px-10 py-10">
//       <div className="bg-current bg-center bg-cover overflow-hidden rounded-xl relative h-[400px]">
//         <div
//           className="absolute top-0 left-0 w-full h-full bg-opacity-50 bg-[#976C75]"
//           style={{
//             backgroundSize: "inherit",
//             scale: 1.5,
//             zIndex: 1,
//           }}
//         ></div>
//         <div className="absolute top-0 left-0 w-full z-10 flex flex-col justify-center items-center h-full p-3">
//           <p className=" text-white text-center">
//             “ dan di antara tanda-tanda (kebesaran) -Nya adalah Dia menciptakan
//             pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung
//             dan merasa tenteram kepadanya "
//           </p>
//           <p className="text-white text-center mt-5">
//             (QS. Ar-Rum: 21)
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

export default function AyatQuran() {
  return (
    <div className="px-7 mt-20">
      <Fade direction="up" triggerOnce>
        <Card>
          <div className=" px-3 py-5">
            {/* <img src="/r-r.webp" alt="Rahma & Ridho" className="w-[200px] h-[200px] mx-auto aspect-square" /> */}
            <p className=" text-opacity-20 text-center text">
              "dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan
              pasangan-pasangan untukmu dari jenismu sendiri, agar kamu
              cenderung dan merasa tenteram kepadanya, dan Dia menjadikan
              diantaramu rasa kasih dan sayang. Sungguh, pada yang demikian itu
              benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang
              berpikir."
            </p>
            <p className=" text-opacity-20 text-center mt-5">
              (QS. Ar-Rum: 21)
            </p>
          </div>
        </Card>
      </Fade>
    </div>
  );
}
