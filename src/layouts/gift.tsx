import { Button, message } from "antd";
import {
  CopyOutlined,
  GiftOutlined,
  HomeFilled,
  SmileOutlined,
  WalletOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import useGetParams from "../hooks/use-get-params";
import service from "../service";

const address =
  "Jl. Kebagusan III No.6 1, RT.1/RW.5, Kebagusan, Ps. Minggu, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12520. No 6.1.R";

const bcaImage = "https://shl.co.id/wp-content/uploads/2022/11/lg-BCA-1.png";
const norek = [
  {
    bank: "BCA",
    norek: "3780523076",
    an: "Rahma Nurul Khoirayanti",
  },
  {
    bank: "BCA",
    norek: "3780595093",
    an: "Ridho",
  },
];
export default function Gift() {
  const [visible, setVisible] = useState<string | null>(null);
  const params = useGetParams();

  const storeToDB = (to: string, type: string) => {
    service.post("/gift", {
      name: params.name,
      type: type,
      sendTo: to,
    }).then((res) => {
      console.log(res);
    })
  }

  const sendAllert = (text) => {
    message.success({
      icon: <SmileOutlined />,
      content: `Terimkasih, ${params.name}!`,
    });
  }
  return (
    <div className="bg-primary px-10 py-10">
      <div className="bg-river bg-bottom bg-cover overflow-hidden rounded-xl relative h-[400px]">
        {/* <div
          className="absolute top-0 left-0 w-full h-full bg-opacity-10 bg-[#E4DBD6]"
          style={{
            backgroundSize: "inherit",
            scale: 1.5,
            zIndex: 1,
          }}
        ></div> */}
        <div className="absolute top-0 left-0 w-full z-10 flex flex-col justify-center items-center h-full gap-2">
          <p className=" text-center">Tanda Kasih</p>
          <p className=" text-center  w-[80%]">
            Doa Restu Anda merupakan karunia yang sangat berarti bagi kami.
          </p>
          <div className="flex gap-2 items-center">
            <Button
              size="small"
              type="primary"
              shape="round"
              className="mt-3"
              onClick={() => {
                setVisible("cashless");
              }}
            >
              <WalletOutlined style={{ color: "white" }} />
              <p className="text-white text-[10px]">Cashless</p>
            </Button>
            <Button
              size="small"
              type="primary"
              shape="round"
              className="mt-3"
              onClick={() => {
                setVisible("gift");
              }}
            >
              <GiftOutlined />
              <p className="text-white text-[10px]">Kirim Kado</p>
            </Button>
          </div>
          {visible === "cashless" && (
            <>
              {norek.map((item, index) => (
                <div
                  key={index}
                  className="flex gap-2 items-center bg-primary rounded p-2 w-[80%]"
                >
                  <img
                    src={bcaImage}
                    alt="qr-code"
                    className="w-10 h-10 bg-white rounded"
                  />
                  <div className="flex justify-between flex-1 gap-2 items-center">
                    <div>
                      <p className="text-[10px] text-white font-semibold">
                        {item.norek}
                      </p>
                      <p className="text-[10px] text-white">A.n {item.an}</p>
                    </div>
                    <Button
                      className=" opacity-50"
                      icon={<CopyOutlined />}
                      shape="circle"
                      size="small"
                      onClick={() => {
                        navigator.clipboard.writeText(address);
                        sendAllert("No Rekening")
                        storeToDB(`${item.norek} - ${item.an}`, "cashless")
                      }}
                    />
                  </div>
                </div>
              ))}
            </>
          )}
          {visible === "gift" && (
            <div className="flex gap-2 items-start bg-primary rounded p-2 w-[80%]">
              <HomeFilled
                style={{
                  marginTop: 2,
                  opacity: 0.5,
                  color: "white",
                }}
              />
              <div className="flex gap-2 items-center justify-between flex-1">
                <p className="text-[10px] text-white">{address}</p>
                <Button
                  className=" opacity-50"
                  icon={<CopyOutlined />}
                  shape="circle"
                  size="small"
                  onClick={() => {
                    navigator.clipboard.writeText(address);
                    sendAllert("Alamat")
                    storeToDB('Rumah', "gift")

                  }}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
