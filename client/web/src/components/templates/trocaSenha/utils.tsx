import { trocaSenhaApi } from "@/services/api/trocaSenha/trocaSenhaApi";

export const validarLink = (tag, route) => {
  trocaSenhaApi
    .validarLink(tag)
    .then((response) => {})
    .catch((e) => {
      route.push("/notFound");
    });
};
