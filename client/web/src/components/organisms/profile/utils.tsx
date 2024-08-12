import { perfilApi } from "@/services/api/profile/profileApi";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import { consultaCookieQRCode } from "@/utils/checkCookies";

export const deletaUsuario = (route) => {
  perfilApi
    .deletaUsuario()
    .then((response) => {
      route.push("/login");
    })
    .catch((e) => {
      console.error(e);
    });
};

export const atualizaSenhaUsuario = (data) => {
  perfilApi
    .atualizaSenhaUsuario(data)
    .then((response) => {
      toast.success(response);
    })
    .catch((e) => {
      console.error(e);
    });
};

export const buscaUsuario = async (setUser, setIsUserLoaded, reset) => {
  await perfilApi
    .buscaUsuario()
    .then((response) => {
      setUser({
        email: response.email,
        nome: response.nome,
        telefone: response.telefone || "",
        cidade: response.cidade,
        estado: response.estado,
      });
      setIsUserLoaded(true);
      reset({
        nome: response.nome,
        telefone: response.telefone,
        cidade: response.cidade,
        estado: response.estado,
      });
    })
    .catch((e) => {
      console.error(e);
    });
};

export const atualizaUsuario = (data, setStateRender) => {
  perfilApi
    .atualizaUsuario(data)
    .then((response) => {
      toast.success(response);
      if (Cookies.get("formCadastro")) {
        Cookies.remove("formCadastro");
        setStateRender("menu");
      }
    })
    .catch((e) => {
      console.error(e);
    });
};
