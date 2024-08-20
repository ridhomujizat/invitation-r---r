/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Button, Checkbox, Input, message } from "antd";
import React from "react";

function capitalize(str: string): string {
  if (!str) return str;
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

function CheckboxLabel(props: any) {
  return (
    <div className="flex items-center gap-1 text-white">
      <Checkbox
        checked={props.param?.c?.includes(props.value)}
        onChange={(e) =>
          props.setParam({
            ...props.param,
            c: e.target.checked
              ? (props.param?.c || "") + props.value
              : props.param?.c?.replaceAll(props.value, ""),
          })
        }
      />
      <span>{props.label}</span>
    </div>
  );
}

export default function CopyName() {
  const [param, setParam] = React.useState<any>({});
  const urlParams = new URLSearchParams(window.location.search);
  const type = urlParams.get("type");

  const copyTemplate = (type: string) => {
    let templateString: string = "";
    const url = `${window.location.origin}/?${
      param?.c ? `c=${param?.c}&` : ""
    }name=${param.name.replaceAll(" ", "+")}`;

    switch (type) {
      case "orangtua":
        templateString = `
[ UNDANGAN PERNIKAHAN ]
———————————————
        
Bismillahirrahmanirrahim,
Assalamu'alaikum Warahmatullahi Wabarakatuh.

Kepada: Yth. Bpk/Ibu/Sdr/i *{{nama}}*,

Dengan mengharapkan Ridho dan Rahmat Allah SWT, serta tanpa mengurangi rasa hormat, perkenankan kami mengundang Bpk/Ibu/Sdr/i untuk hadir di acara pernikahan Putra dan Putri kami:

Rahma Nurul Khoirayanti, S.Ak.
&
Ridho, S.Kom.

Merupakan suatu kehormatan bagi kami apabila Bpk/Ibu/Sdr/i berkenan hadir untuk menyaksikan prosesi pernikahan Putra dan Putri kami pada hari dan tanggal yang ada ditautan dibawah ini:

*{{link}}*

Kami juga mengharapkan ucapan, harapan, serta do'a dari Bpk/Ibu/Sdr/i untuk kami.

Atas perhatiannya kami ucapkan terima kasih.

Salam hangat dari Keluarga kami. 💓
`;
        break;
      case "orang-terhormat":
        templateString = `
[ UNDANGAN PERNIKAHAN ]
———————————————

Bismillahirrahmanirrahim,
Assalamu'alaikum Warahmatullahi Wabarakatuh.

Kepada: Yth. Bpk/Ibu/Sdr/i *{{nama}}*,

Dengan mengharapkan Ridho dan Rahmat Allah SWT, serta tanpa mengurangi rasa hormat, perkenankan kami mengundang Bpk/Ibu/Sdr/i untuk hadir di acara pernikahan kami:

Rahma Nurul
&
Ridho

Merupakan suatu kehormatan bagi kami apabila Bpk/Ibu/Sdr/i berkenan hadir untuk menyaksikan prosesi pernikahan kami pada hari dan tanggal yang ada ditautan dibawah ini:

*{{link}}*

Kami juga mengharapkan ucapan, harapan, serta do'a dari Bpk/Ibu/Sdr/i untuk kami.

Atas perhatiannya kami ucapkan terima kasih.

Salam hangat dari kami,
Rahma & Ridho. 💓`;
        break;
      case "teman-sebaya":
        templateString = `
Dear *{{nama}}*,

Waktu yang dinanti-nanti akhirnya tiba. Kami akan merayakan cinta dan komitmen kami, memulai perjalanan baru bersama. Dengan hangat, kami mengundangmu untuk hadir di hari pernikahan kami dan berbagi kebahagiaan ini.

Nama: Rahma & Ridho
Tanggal: Minggu, 01 September 2024
Waktu: 09.00 - 16.00 WIB
Tempat: Boemi Prasasti, Cikarang

Mohon konfirmasi kehadiranmu dan tinggalkan pesan untuk kami. Kehadiranmu akan membuat hari kami semakin istimewa.

*{{link}}*

Salam hangat,
Rahma & Ridho. 💓
          `;
        break;
      case "teman-sebaya-ing":
        templateString = `
Dear *{{nama}}*,

The time has come for us to celebrate our love and commitment as we embark on this new journey together. We warmly invite you to join us on our wedding day to share in our happiness.

Name: Rahma & Ridho
Date: Sunday, 01 September 2024
Time: 09.00 - 16.00 WIB
Place: Boemi Prasasti, Cikarang

Please confirm your attendance and leave us a message. Your presence will make our day even more special.

*{{link}}*

With love,
Rahma & Ridho. 💓
  `;
        break;
      default:
        break;
    }
    const result = templateString
      // @ts-ignore
      .replaceAll("{{nama}}", param?.name)
      .replaceAll("{{link}}", url);
    navigator.clipboard.writeText(result);
    message.success({
      content: `Template Tercopy, coba paste aja!`,
    });
  };
  return (
    <div className="bg-primary w-full h-screen flex justify-center items-center flex-col gap-1 ">
      <div className="w-[80%] p-3 flex flex-col justify-center items-start gap-2">
        <Input
          placeholder="Ketik Name yang di undang"
          value={param?.name}
          onChange={(e) =>
            setParam({
              ...param,
              name: e.target.value
                ?.split(" ")
                .map((word) => capitalize(word))
                .join(" "),
            })
          }
        />
        <CheckboxLabel
          param={param}
          setParam={setParam}
          value="a"
          label="Sembunyikan Gift"
        />
        <CheckboxLabel
          param={param}
          setParam={setParam}
          value="b"
          label="Sembunyikan Alamat Kado"
        />
        <Button
          onClick={() => {
            navigator.clipboard.writeText(
              `${window.location.origin}/?${
                param?.c ? `c=${param?.c}&` : ""
              }name=${param.name.replaceAll(" ", "+")}`
            );
            message.success({
              content: `Url Tercopy, coba paste aja!`,
            });
          }}
          disabled={!param?.name}
        >
          Copy Link
        </Button>
        {type === "orangtua" ? (
          <>
            <Button
              disabled={!param?.name}
              onClick={() => copyTemplate("orangtua")}
            >
              Copy template
            </Button>
          </>
        ) : (
          <>
            <Button
              disabled={!param?.name}
              onClick={() => copyTemplate("orang-terhormat")}
            >
              Copy template orang lebih tua
            </Button>
            <Button
              disabled={!param?.name}
              onClick={() => copyTemplate("teman-sebaya-ing")}
            >
              Copy template teman sebaya b.ing
            </Button>
            <Button
              disabled={!param?.name}
              onClick={() => copyTemplate("teman-sebaya")}
            >
              Copy template teman sebaya
            </Button>
          </>
        )}
      </div>
    </div>
  );
}
