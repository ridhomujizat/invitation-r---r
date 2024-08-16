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

function App() {
  return (
    <Theming>
      <div className="flex justify-end items-center h-screen ">
        <div className="aspect-[414/697] h-full image-current bg-white overflow-y-auto overflow-x-hidden relative  bg-current bg-cover bg-center bg-opacity-30">
          <div className="z-10 relative">
            <Cover />
            <Intro />
            <AyatQuran />
            <Mempelai />
            {/* <CountDown /> */}
            <Rundown />
            <Gift />
            <Ucapan />
            <Saythanks />
            <Footer />
          </div>
          <div className="fixed top-0 left-0 w-full h-full bg-white bg-opacity-70"></div>
        </div>
      </div>
    </Theming>
  );
}

export default App;
