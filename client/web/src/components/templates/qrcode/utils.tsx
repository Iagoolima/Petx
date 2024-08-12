import { QRCodeApi } from "@/services/api/qrcode/qrcodeApi";
import { UUID } from "crypto";

interface Props {
  tag: UUID;
  setDadosPet: React.Dispatch<React.SetStateAction<string>>;
  setStateRenderQRCode: React.Dispatch<React.SetStateAction<string>>;
}

export const consultaQRCode = (tag, setDadosPet, setStateRenderQRCode) => {
  QRCodeApi.getQRCode(tag)
    .then((data) => {
      setStateRenderQRCode("petEncontrado");
      setDadosPet(data);
    })
    .catch((e) => {
      if (e.response.data.message == "pet nao cadastrado") {
        setStateRenderQRCode("cadastrarPet");
      }
      if (e.response.data.message == "pet nao encontrado") {
        setStateRenderQRCode("petInvalido");
      }
    });
};
