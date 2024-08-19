import React, { useMemo } from "react";
import CopyName from "../page/copy-name";

export default function usePage() {
  console.log(window.location);

  const route = useMemo(() => {
    let isRouting = false;
    let components = null;

    if (window.location.pathname === "/copy-name") {
      isRouting = true;
      components = <CopyName />;
    }

    return {
      isRouting,
      components,
    };
    return;
  }, []);

  return route;
}
