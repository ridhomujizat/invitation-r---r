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
import Card from "../components/card";
import { Fade, Zoom } from "react-awesome-reveal";

const address =
  "Komplek Kohanas 6, No 6.1.R, Jl. Kebagusan III No.6 1, RT.1/RW.5, Kebagusan, Ps. Minggu, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12520.";

const bcaImage = "https://shl.co.id/wp-content/uploads/2022/11/lg-BCA-1.png";
const mandiriImage =  "https://w7.pngwing.com/pngs/1004/749/png-transparent-bank-mandiri-hd-logo-thumbnail.png"
const norek = [
  {
    bank: "BCA",
    norek: "3780523076",
    an: "Rahma Nurul Khoirayanti",
    image: bcaImage,
  },
  {
    bank: "BCA",
    norek: "3780595093",
    image: bcaImage,
    an: "Ridho",
  },
  {
    bank: "Mandiri",
    norek: "1030007899152",
    an: "Ridho",
    image: mandiriImage,
  },
];
export default function Gift() {
  const {config} = useGetParams()
  const [visible, setVisible] = useState<string | null>(null);
  const params = useGetParams();

  const storeToDB = (to: string, type: string) => {
    service
      .post("/gift", {
        name: params.name,
        type: type,
        sendTo: to,
      })
      .then((res) => {
        console.log(res);
      });
  };

  const sendAllert = (text) => {
    message.success({
      icon: <SmileOutlined />,
      content: `Terima kasih, ${params.name}!`,
    });
  };
  return (
    <Fade direction="up" triggerOnce>
      <div className=" px-10 mt-20">
        <Card className="p-5 py-15 flex flex-col items-center u gap-2">
          <p className=" text-center font-semibold font-greetFibes text-xl border-b border-primary ">
            Wedding Gift
          </p>
          <p className=" text-center">
            Kehadiran Anda di pernikahan kami sudah sangat berarti. Namun, bila
            Anda ingin memberikan hadiah, kami menyediakan Alamat serta Amplop Digital untuk
            kemudahan. Terima kasih.
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
            {config.hideKado && (
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
            )}
          </div>
          <Fade duration={500} cascade className="flex flex-col gap-2 w-[80%]">
            {visible === "cashless" && (
              <>
                {norek.map((item, index) => (
                  <div
                    key={index}
                    className="flex gap-2 items-center bg-primary rounded p-2 w-full"
                  >
                    <img
                      src={item.image}
                      alt="qr-code"
                      className="w-10 h-10 bg-white rounded"
                    />
                    <div className="flex justify-between flex-1 gap-2 items-center">
                      <div>
                        <p className="text-[10px] text-white font-semibold">
                          {item.norek}
                        </p>
                        <p className="text-[10px] text-white">a.n {item.an}</p>
                      </div>
                      <Button
                        className=" opacity-50"
                        icon={<CopyOutlined />}
                        shape="circle"
                        size="small"
                        onClick={() => {
                          navigator.clipboard.writeText(item.norek);
                          sendAllert("No Rekening");
                          storeToDB(`${item.norek} - ${item.an}`, "cashless");
                        }}
                      />
                    </div>
                  </div>
                ))}
              </>
            )}
            {visible === "gift" && (
              <div className="flex gap-2 items-start bg-primary rounded p-2 ">
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
                      sendAllert("Alamat");
                      storeToDB("Rumah", "gift");
                    }}
                  />
                </div>
              </div>
            )}
          </Fade>
        </Card>
      </div>
    </Fade>
  );
}
