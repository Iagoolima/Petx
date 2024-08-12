import api from "@/services/axios";

const usuarioBaseUrl = "/usuario";

async function requestBaseApi({ url, ...options }) {
  return api.request({
    url: `${usuarioBaseUrl}${url}`,
    ...options,
  });
}

export const perfilApi = {
  buscaUsuario: async function () {
    const response = await requestBaseApi({
      url: ``,
      method: "GET",
    });

    return response.data;
  },
  deletaUsuario: async function () {
    const response = await requestBaseApi({
      url: ``,
      method: "DELETE",
    });

    return response.data;
  },
  atualizaUsuario: async function (data: any) {
    const response = await requestBaseApi({
      url: ``,
      data: data,
      method: "PUT",
    });

    return response.data;
  },
  atualizaSenhaUsuario: async function (data: any) {
    const response = await requestBaseApi({
      url: `/atualizaSenha`,
      data: data,
      method: "PUT",
    });

    return response.data;
  },
};
