import React, { useEffect } from "react";

export default function CoverHidden() {
  const [isScrolled, setIsScrolled] = React.useState(false);

  useEffect(() => {
    const getContent = document.getElementById("content");
    const handleScroll = () => {
      if (getContent) {
        console.log(getContent.scrollTop, window.innerHeight);
        if (getContent.scrollTop >= window.innerHeight) {
          setIsScrolled((prev) => true);
          getContent.removeEventListener("scroll", handleScroll);
        }
      }
    };
    getContent.addEventListener("scroll", handleScroll);
    return () => {
      getContent.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (isScrolled) {
    return <></>;
  }
  return <div className="min-h-screen w-full"></div>;
}
