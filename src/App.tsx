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
import MusicPlayer from "./hooks/use-music";
import useGetParams from "./hooks/use-get-params";
import usePage from "./hooks/use-page";
import useLoading from "./hooks/use-loading";
import { MailOutlined } from "@ant-design/icons";

function App() {
  const { openCover } = useUIStore((s) => s);
  const { config } = useGetParams();

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
    });
  }, [openCover]);

  const loading = useLoading();
  const routing = usePage();

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-primary">
        <div className=" absolute t-[50%] l-[50%]">
          <MailOutlined className="text-white text-3xl" />
        </div>
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 ">
        </div>
      </div>
    );
  }

  if (routing.isRouting) {
    return routing.components;
  }

  return (
    <Theming>
      <div className="flex justify-center md:justify-end items-center h-screen relative">
        <Cover />
        <div className="hidden md:block relative  h-full overflow-hidden w-full bg-current z-10">
          <img
            src="rr.png"
            alt="cover"
            className="object-cover z-10 h-full w-full"
          />
          {/* <div className="absolute inset-0 bg-gradient-to-l from-primary to-transparent z-20 opacity-45"></div> */}
        </div>
        <section
          id="content"
          className="aspect-[414/697] lg:aspect-[1/1.3] h-full image-current bg-white overflow-y-auto overflow-x-hidden relative  bg-current bg-cover bg-center bg-opacity-30"
        >
          <div className="z-10 relative top-0">
            <MusicPlayer />
            {openCover && (
              <>
                <Intro />
                <AyatQuran />
                <Mempelai />
                {/* <CountDown /> */}
                <Rundown />
                {config.hideGift && <Gift />}

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
