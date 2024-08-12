import { autenticarApi } from "@/services/api/autenticacao/autenticacaoApi";
import Cookies from "js-cookie";
import { toast } from "react-toastify";

export const autenticaUsuario = (data, setLoading, route) => {
  Cookies.remove("auth");
  autenticarApi
    .autenticar(data)
    .then((response) => {
      Cookies.set("auth", response.token, { expires: 7 });
      route.push("/dashboard");
    })
    .catch((e) => {
      toast.error(e.response.data.message);
    })
    .finally(() => {
      setLoading(false);
    });
};

export const enviarEmailDeValidacao = (data, setLoading, route) => {
  autenticarApi
    .enviarEmailValidacao(data)
    .then((response) => {
      Cookies.set("email", data.email, { expires: 1 });
      route.push("/cadastrar");
    })
    .catch((e) => {
      toast.error(e.response.data.message);
    })
    .finally(() => {
      setLoading(false);
    });
};

export const esqueceuSenha = (data, setLoading, setEmailSent) => {
  autenticarApi
    .esqueceuSenha(data)
    .then((response) => {
      toast.success(response);
      setEmailSent(data.email);
    })
    .catch((e) => {
      toast.error(e.response.data.message);
    })
    .finally(() => {
      setLoading(false);
    });
};

export const autenticarGoogleUsuario = (credential, route) => {
  autenticarApi
    .autenticarGoogleUsuario(credential)
    .then((response) => {
      Cookies.set("auth", response.token, { expires: 7 });
      if (!response.cadastroFinalizado) {
        console.log(response.cadastroFinalizado);
        Cookies.set("formCadastro", "true", { expires: 1 });
        toast.success("Bem vindo! Cadastre esse Formulario!");
      }
      route.push("/dashboard");
    })
    .catch((e) => {
      console.error(e);
    });
};
