import { InstagramOutlined } from "@ant-design/icons";
import React from "react";

export default function InstagramButton({ un }: { un: string }) {
  const handleClick = () => {
    window.open(`https://instagram.com/${un}`, "_blank");
  };
  return (
    <button onClick={handleClick}>
      <div className="flex gap-1 text-[12px] font-montserrat border-b border-primary  ">
        <InstagramOutlined />
        <p className=" font-montserrat">@{un}</p>
      </div>
    </button>
  );
}
