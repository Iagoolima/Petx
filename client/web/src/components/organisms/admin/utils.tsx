import { autenticarAdminApi } from "@/services/api/admin/login/loginAdminService";
import { adminApi } from "@/services/api/admin/panel/panelAdminService";
import { toast } from "react-toastify";

const linkQRCODE = `${process.env.NEXT_PUBLIC_FRONT_APP_API_URL}/qrcode?tag=`;

export const autenticar = (data, route) => {
  autenticarAdminApi
    .autenticar(data)
    .then((response) => {
      toast.success("Bem vindo!");
      route.push("/admin/panel");
    })
    .catch((e) => {
      toast.error(e.response.data.message);
    });
};

export const finalizarQRCode = (uuid, setFetchStateRegistro) => {
  adminApi
    .finalizarQRCode(uuid)
    .then((response) => {
      toast.success(response);
      setFetchStateRegistro((prev) => !prev);
    })
    .catch((e) => {
      console.error(e);
    });
};

export const consultarQRCodeDisponiveis = (setLink, setUuid) => {
  adminApi
    .consultarQRCodeDisponiveis()
    .then((response) => {
      if (response.length > 0) {
        setLink(linkQRCODE + response[0].uuidqrcode);
        setUuid(response[0].uuidqrcode);
      } else {
        setUuid("");
        toast.error("Nenhum QRCode disponível.");
      }
    })
    .catch((e) => {
      setUuid("");
      console.error(e);
    });
};

export const gerarQRCode = (qtd, setQtd, setFetchStateRegistro) => {
  adminApi
    .gerarQRCode(qtd)
    .then((response) => {
      setQtd(0);
      toast.success(response);
      setFetchStateRegistro((prev) => !prev);
    })
    .catch((e) => {
      console.error(e);
    });
};

export const consultaRegistroPet = (
  setPetsCadastrados,
  setQRCodeGerado,
  setQRCodeDisponiveis,
) => {
  adminApi
    .consultarRegistroPet()
    .then((response) => {
      setPetsCadastrados(response.petCadastrado);
      setQRCodeGerado(response.qrcodeGerado);
      setQRCodeDisponiveis(response.disponivel);
    })
    .catch((e) => {
      console.error(e);
    });
};
