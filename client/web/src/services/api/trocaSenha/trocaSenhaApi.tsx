import api from "@/services/axios";

import { UUID } from "crypto";

const trocaSenhaBaseUrl = "/usuario/validar";

async function requestBaseApi({ url, ...options }) {
  return api.request({
    url: `${trocaSenhaBaseUrl}${url}`,
    ...options,
  });
}

export const trocaSenhaApi = {
  validarLink: async function (tag: UUID) {
    const response = await requestBaseApi({
      url: `/link/${tag}`,
      method: "POST",
    });

    return response.data;
  },

  trocaSenha: async function (tag: UUID, novaSenha: object) {
    console.log(novaSenha);
    const response = await requestBaseApi({
      url: `/troca-senha/${tag}`,
      data: novaSenha,
      method: "PUT",
    });

    return response.data;
  },
};
