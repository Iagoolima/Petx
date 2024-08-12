import { trocaSenhaApi } from "@/services/api/trocaSenha/trocaSenhaApi";
import { toast } from "react-toastify";

export const trocaSenha = (tag, novaSenha, route) => {
  trocaSenhaApi
    .trocaSenha(tag, novaSenha)
    .then((response) => {
      toast.success(response);
      setTimeout(() => {
        route.push("/login");
      }, 2000);
    })
    .catch((e) => {
      console.error(e);
    });
};
