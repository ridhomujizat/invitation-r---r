import { useState, useEffect } from "react";

export default function CountDown() {
  const calculateTimeLeft = () => {
    const targetDate = new Date("2024-09-01T08:00:00"); // Set your target date here
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();

    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleSaveToCalendar = () => {
    const targetDate = new Date("2024-09-01T09:00:00");
    const event = {
      title: "Wedding Rahma & Ridho",
      start: targetDate.toISOString(),
      end: new Date(targetDate.getTime() + 60 * 60 * 1000).toISOString(), // 1 hour event
    };

    const calendarUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
      event.title
    )}&dates=${event.start.replace(/-|:|\.\d\d\d/g, "")}/${event.end.replace(
      /-|:|\.\d\d\d/g,
      ""
    )}`;

    window.open(calendarUrl, "_blank");
  };

  return (
    <div className="bg-primary px-10 py-10">
      <div className="bg-current bg-center bg-cover overflow-hidden rounded-xl relative h-[400px]">
        <div
          className="absolute top-0 left-0 w-full h-full bg-opacity-50 bg-[#E4DBD6]"
          style={{
            backgroundSize: "inherit",
            scale: 1.5,
            zIndex: 1,
          }}
        ></div>
        <div className="absolute top-0 left-0 w-full z-10 flex flex-col justify-center items-center">
          <img
            src="/r-r.webp"
            alt="Rahma & Ridho"
            className="w-[200px] h-[200px] mx-auto aspect-square opacity-80"
          />
          <p className="font-semibold text-xl ">Count Down</p>
          <div className="flex items-center space-x-2 gap-1 mt-2 ">
            <div className="flex flex-col items-center text-center bg-primary p-2 rounded min-w-[59px] min-h-[59px]">
              <p className="text-lg font-semibold text-white">{timeLeft.days}</p>
              <p className="text-[10px] text-white">Days</p>
            </div>
            <div className="flex flex-col items-center text-center bg-primary p-2 rounded min-w-[59px] min-h-[59px]">
              <p className="text-lg font-semibold text-white">{timeLeft.hours}</p>
              <p className="text-[10px] text-white">Hours</p>
            </div>
            <div className="flex flex-col items-center text-center bg-primary p-2 rounded min-w-[59px] min-h-[59px]">
              <p className="text-lg font-semibold text-white">{timeLeft.minutes}</p>
              <p className="text-[10px] text-white">Minutes</p>
            </div>
            <div className="flex flex-col items-center text-center bg-primary p-2 rounded min-w-[59px] min-h-[59px]">
              <p className="text-lg font-semibold text-white">{timeLeft.seconds}</p>
              <p className="text-[10px] text-white">Seconds</p>
            </div>
          </div>
          <button
            className="bg-[#8A4041] text-white py-1 px-2 rounded border shadow-md text-[10px] my-5"
            onClick={handleSaveToCalendar}
          >
            Save to Calendar
          </button>
        </div>
      </div>
    </div>
  );
}
