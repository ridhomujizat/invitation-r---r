import React, { useEffect } from "react";
import useUIStore from "../store/useUiStore";

export default function CoverHidden() {

  const{openCover} = useUIStore((s) => s);
  return <div className="h-screen"></div>;
  return <div className={`w-full ${openCover && 'animate-hiddenHight'} `}></div>;
}
