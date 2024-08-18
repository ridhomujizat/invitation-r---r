import { useState, useEffect } from "react";
import service from "../service";
import useGetParams from "../hooks/use-get-params";
import { Button } from "antd";
import { CalendarOutlined } from "@ant-design/icons";
import useUIStore from "../store/useUiStore";
import { Fade } from "react-awesome-reveal";

export default function CountDown() {
  const { trigger } = useUIStore();
  const params = useGetParams();
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

  const storeToDB = () => {
    service
      .post("/save-calendar", {
        name: params.name,
        clicked: true,
      })
      .then((res) => {
        console.log(res);
      });
  };

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

    storeToDB();
    window.open(calendarUrl, "_blank");
  };

  useEffect(() => {
    if (trigger?.calender) {
      handleSaveToCalendar();
    }
  }, [trigger?.calender]);

  return (
    <div className="">
      <div className=" w-full z-10 flex flex-col justify-center items-center">
        <Fade direction="up" triggerOnce>
          <div className="flex items-center space-x-2 gap-1 mt-12 ">
            <div className="flex flex-col items-center text-center border border-primary rounded min-w-[40px] min-h-[40px]">
              <p className="text-lg font-semibold ">{timeLeft.days}</p>
              <p className="text-[10px] ">Days</p>
            </div>
            <div className="flex flex-col items-center text-center border border-primary rounded min-w-[40px] min-h-[40px]">
              <p className="text-lg font-semibold ">{timeLeft.hours}</p>
              <p className="text-[10px] ">Hours</p>
            </div>
            <div className="flex flex-col items-center text-center border border-primary rounded min-w-[40px] min-h-[40px]">
              <p className="text-lg font-semibold ">{timeLeft.minutes}</p>
              <p className="text-[10px] ">Minutes</p>
            </div>
            <div className="flex flex-col items-center text-center border border-primary rounded min-w-[40px] min-h-[40px]">
              <p className="text-lg font-semibold ">{timeLeft.seconds}</p>
              <p className="text-[10px] ">Seconds</p>
            </div>
          </div>
        </Fade>
          <Button
            type="primary"
            shape="round"
            size="small"
            onClick={handleSaveToCalendar}
            icon={<CalendarOutlined />}
            className="mt-5 "
          >
            <p className="text-white text-[10px]">Save to Calendar</p>
          </Button>
      </div>
    </div>
  );
}
