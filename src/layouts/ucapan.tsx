import { useEffect, useRef, useState } from "react";
import service from "../service";
import { Button, Input, message, Select } from "antd";
import useGetParams from "../hooks/use-get-params";
import TextArea from "antd/es/input/TextArea";
import {
  CheckCircleOutlined,
  ClockCircleOutlined,
  CloseCircleOutlined,
} from "@ant-design/icons";
import moment from "moment";
export default function Ucapan() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const params = useGetParams();
  const [ucapanList, setUcapanList] = useState<any[]>([]);
  const [name, setName] = useState<string>("");
  const [ucapan, setUcapan] = useState<string>("");
  const [konfirmasi, setKonfirmasi] = useState<string>("");
  const [onClicked, setOnClicked] = useState<boolean>(false);

  useEffect(() => {
    service.get("/comment").then((res) => {
      console.log(res);
      setUcapanList(res?.reverse());
    });
  }, []);

  useEffect(() => {
    if (params.name) {
      setName(params.name);
    }
  }, [params]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }, [ucapan]); // Empty dependency array ensures this runs only once after the initial render

  const sendToDB = () => {
    service
      .post("/comment", {
        name,
        ucapan,
        konfirmasi,
        date: new Date().toISOString(),
      })
      .then((res) => {
        console.log(res);
        setUcapanList([...ucapanList, res]);
        setKonfirmasi("");
        setUcapan("");
        setOnClicked(false);
      });
  };
  return (
    <div className=" py-20 px-8 gap-5 flex flex-col items-center justify-center text-center bg-cover bg-center ">
      <h2 className="text-xl ">Wedding Wish</h2>
      <div className="flex flex-col gap-2 w-[90%]">
        <Input
          placeholder="Name"
          // disabled={Boolean(name)}
          value={name}
          status={onClicked && !name ? "error" : undefined}
        />
        <TextArea
          value={ucapan}
          onChange={(e) => setUcapan(e.target.value)}
          placeholder="Ketik Ucapan buat Rahma dan Ridho"
          autoSize={{ minRows: 3, maxRows: 5 }}
          status={onClicked && !ucapan ? "error" : undefined}
        />
        <Select
          // onChange={handleChange}
          // value={konfirmasi}
          value={konfirmasi || undefined}
          style={{
            textAlign: "left",
          }}
          onChange={(value) => setKonfirmasi(value)}
          placeholder="Konfirmasi Kehadiran"
          options={[
            { label: "Hadir", value: "Hadir" },
            { label: "Tidak Hadir", value: "Tidak Hadir" },
          ]}
          status={onClicked && !konfirmasi ? "error" : undefined}
        />
        <Button
          size="small"
          type="primary"
          onClick={() => {
            if (name && ucapan && konfirmasi) {
              message.success("Berhasil Mengirimkan Ucapan");
              setOnClicked(true);
              sendToDB();
            } else {
              setOnClicked(true);
            }
          }}
        >
          Kirim Ucapan
        </Button>
        <div className=" h-[300px] w-full overflow-y-auto" ref={scrollRef}>
          <div className="flex flex-col gap-2  mt-5">
            {ucapanList.map((item, index) => (
              <div className=" bg-primary bg-opacity-35 p-2 rounded w-full">
                <div className="flex gap-1 text-[11px]">
                  <p className=" font-semibold">{item?.name}</p>
                  {item?.konfirmasi === "Hadir" ? (
                    <CheckCircleOutlined className="text-green-500" />
                  ) : (
                    <CloseCircleOutlined className="text-red-500" />
                  )}
                </div>
                <div className="flex gap-1 text-[8px] opacity-50 ">
                  <ClockCircleOutlined />
                  <p>{moment(item?.date).fromNow()}</p>
                </div>
                <p className=" text-left ">{item?.ucapan}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
