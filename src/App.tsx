import { useEffect } from "react";
import Theming from "./components/theming";
import Alamat from "./layouts/alamat";
import AyatQuran from "./layouts/ayat";
import CountDown from "./layouts/count-down";
import Cover from "./layouts/cover";
import Footer from "./layouts/footer";
import Gift from "./layouts/gift";
import Intro from "./layouts/intro";
import Mempelai from "./layouts/mempelai";
import Rundown from "./layouts/rundown";
import Saythanks from "./layouts/saythanks";
import Ucapan from "./layouts/ucapan";
import useUIStore from "./store/useUiStore";
import CoverHidden from "./layouts/cover-hidden";

function App() {
  const { openCover } = useUIStore((s) => s);

  useEffect(() => {
    if (!openCover) return;
    const contentElement = document.getElementById("content");
    const buttonCalender = document.getElementById("calender-button-absolut");

    contentElement.addEventListener("scroll", (e) => {
      if (contentElement.scrollTop > 2515) {
        buttonCalender?.classList.add("hidden");
      } else {
        buttonCalender?.classList.remove("hidden");
      }
      console.log(contentElement.scrollTop);
    });
  }, [openCover]);

  return (
    <Theming>
      <div className="flex justify-end items-center h-screen relative">
        <Cover />
        <section
          id="content"
          className="aspect-[414/697] h-full image-current bg-white overflow-y-auto overflow-x-hidden relative  bg-current bg-cover bg-center bg-opacity-30"
        >
          <div className="z-10 relative top-0">
            {openCover && (
              <>
                <Intro />
                <AyatQuran />
                <Mempelai />
                {/* <CountDown /> */}
                <Rundown />
                <Gift />
                <Ucapan />
                <Saythanks />
                <Footer />
              </>
            )}
          </div>
          <div className="fixed top-0 left-0 w-full h-full bg-white bg-opacity-70"></div>
        </section>
      </div>
    </Theming>
  );
}

export default App;
