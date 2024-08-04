import React from "react";

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
//           <p className=" text-white text-sm text-center">
//             “ Dan di antara tanda-tanda (kebesaran) -Nya adalah Dia menciptakan
//             pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung
//             dan merasa tenteram kepadanya "
//           </p>
//           <p className="text-white text-sm text-center mt-5">
//             (QS. Ar-Rum: 21)
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

export default function AyatQuran() {
  return (
    <div className="bg-[#976C74] px-7 py-20 ">
        {/* <img src="/r-r.webp" alt="Rahma & Ridho" className="w-[200px] h-[200px] mx-auto aspect-square" /> */}
      <p className="text-white text-sm text-center">
        “ Dan di antara tanda-tanda (kebesaran) -Nya adalah Dia menciptakan
        pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan
        merasa tenteram kepadanya "
      </p>
      <p className="text-white text-sm text-center mt-5">(QS. Ar-Rum: 21)</p>
    </div>
  );
}
