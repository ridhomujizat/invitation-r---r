import { useEffect, useMemo } from "react";
import useUIStore from "../store/useUiStore";

export default function useGetParams() {
  const { dataParams, setDataParams } = useUIStore((s) => s);

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);

    setDataParams({
      name: queryParams.get("name"),
      config: queryParams.get("c"),
    });
  }, []);

  const config = useMemo(() => {
    const cParams = dataParams?.config || "";
    const hideGift = !cParams.includes("a");
    const hideKado = !cParams.includes("b");
    return {
      hideGift,
      hideKado,
    };
  }, [dataParams?.config]);

  return {
    name: dataParams?.name || "",
    config,
  };
}
