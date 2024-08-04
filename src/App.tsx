import Theming from "./components/theming";
import Alamat from "./layouts/alamat";
import AyatQuran from "./layouts/ayat";
import CountDown from "./layouts/count-down";
import Cover from "./layouts/cover";
import Gift from "./layouts/gift";
import Intro from "./layouts/intro";
import Mempelai from "./layouts/mempelai";
import Rundown from "./layouts/rundown";

function App() {
  return (
    <Theming>
      <div className="flex justify-center items-center h-screen bg-[#976C75]">
        <div className=" aspect-[414/697]  h-full bg-white image-current overflow-y-auto">
          <Cover />
          <Intro />
          <AyatQuran />
          <Mempelai />
          <CountDown />
          <Rundown />
          <Alamat />
          <Gift />
        </div>
      </div>
    </Theming>
  );
}

export default App;
