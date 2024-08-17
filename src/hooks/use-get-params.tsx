import { useEffect } from "react";
import useUIStore from "../store/useUiStore";

export default function useGetParams() {
  const { dataParams, setDataParams } = useUIStore((s) => s);

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);

    setDataParams({
      name: queryParams.get("name"),
    });

  }, []);

  return {
    name: dataParams?.name || '',
    config: dataParams?.config || {},
  };
}
