import { Button, Checkbox, Input, message } from "antd";
import React from "react";

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

  console.log(param);
  return (
    <div className="bg-primary w-full h-screen flex justify-center items-center flex-col gap-1 ">
      <div className="w-[80%] p-3 flex flex-col justify-center items-start gap-2">
        <Input
          placeholder="Ketik Name yang di undang"
          value={param?.name}
          onChange={(e) => setParam({ ...param, name: e.target.value })}
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
              }name=${param.name}`
            );
            message.success({
              content: `Url Tercopy, coba paste aja!`,
            });
          }}
          disabled={!param?.name}
        >
          Copy Url
        </Button>
      </div>
    </div>
  );
}
