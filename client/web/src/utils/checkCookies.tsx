import { consultarTokenAuthService } from "@/services/api/auth/authService";
import { ValidateUUID } from "./validateUUID";
import Cookies from "js-cookie";
import { QRCodeApi } from "@/services/api/qrcode/qrcodeApi";

export const consultaCookieEmail = () => {
  const emailCookie = Cookies.get("email");
  if (emailCookie) {
    return emailCookie;
  }
  return "";
};

export const consultarCookieAuth = () => {
  const authCookie = Cookies.get("auth");
  if (authCookie) {
    const consultarTokenService = async () => {
      try {
        return await consultarTokenAuthService();
      } catch {
        return false;
      }
    };
    return consultarTokenService();
  }
  return false;
};

export const consultaCookieQRCode = () => {
  const uuidQRCodePet = Cookies.get("uuid_qrcode");
  if (uuidQRCodePet) {
    if (ValidateUUID(uuidQRCodePet)) {
      return QRCodeApi.validarQRCode(uuidQRCodePet)
        .then(() => {
          return uuidQRCodePet;
        })
        .catch((e) => {
          console.error(e);
          return "";
        });
    }
    return Promise.resolve("");
  }
  return Promise.resolve("");
};

export const consultaCookieEstadoCadastroUsuario = () => {
  const estadoCadastro = Cookies.get("formCadastro");
  console.log(estadoCadastro);
  if (estadoCadastro == "true") {
    return true;
  }
  return false;
};
