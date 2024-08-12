import { autenticarApi } from "@/services/api/autenticacao/autenticacaoApi";
import { toast } from "react-toastify";
import Cookies from "js-cookie";

// interface Props {
//   data?: string;
//   email?: string;
//   setButtonLoadingReenviarEmail:
//   setStateForm:
//   setErrorMessage:string;
//   setButtonValidarState:
//   setTimeRemaining: number,
// }

export const validarCodigoVerificacao = ({
  data,
  setButtonLoadingReenviarEmail,
  setStateForm,
  setErrorMessage,
  setButtonValidarState,
  route,
}) => {
  autenticarApi
    .validarEmail(data)
    .then((response) => {
      setButtonLoadingReenviarEmail(true);
      setStateForm(false);
    })
    .catch((e) => {
      if (e.response.data.message === "Codigo incorreto") {
        setErrorMessage(e.response.data.message);
      }
      if (e.response.data.message === "Codigo expirado") {
        setErrorMessage(e.response.data.message);
        setButtonValidarState(false);
      }
      if (e.response.message === "Erro ao salvar usuario sem autenticar") {
        route.push("/cadastrar");
      }
    });
};

export const reenviarCodigoDeVerificacao = ({
  email,
  setButtonValidarState,
  setButtonLoadingReenviarEmail,
  setTimeRemaining,
  timeRemaining,
}) => {
  periodoReenviarEmail({
    setButtonLoadingReenviarEmail,
    setTimeRemaining,
    timeRemaining,
  });
  setButtonValidarState(true);
  autenticarApi
    .enviarEmailValidacao({ email })
    .then((response) => {
      toast.success(response);
    })
    .catch((e) => {
      console.error(e);
    });
};

export const cadastrarUsuario = (data, route) => {
  autenticarApi
    .cadastrarUsuario(data)
    .then((response) => {
      Cookies.set("auth", response.token, { expires: 7 });
      toast.success("Bem vindo!");
      route.push("/dashboard");
    })
    .catch((e) => {
      console.error(e);
    });
};

export const periodoReenviarEmail = ({
  setButtonLoadingReenviarEmail,
  setTimeRemaining,
  timeRemaining,
}) => {
  setButtonLoadingReenviarEmail(false);
  setTimeRemaining(60);
  const interval = setInterval(() => {
    setTimeRemaining((prev) => {
      if (prev === 1) {
        clearInterval(interval);
        setButtonLoadingReenviarEmail(true);
        return 0;
      }
      return prev - 1;
    });
  }, 1000);
};
