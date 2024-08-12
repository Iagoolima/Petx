import api from "@/services/axios";

const usuarioBaseUrl = "/usuario";

async function requestBaseApi({ url, ...options }) {
  return api.request({
    url: `${usuarioBaseUrl}${url}`,
    ...options,
  });
}

export const autenticarApi = {
  autenticar: async function (data: any) {
    const response = await requestBaseApi({
      url: `/autenticar`,
      method: "POST",
      data: data,
    });
    return response.data;
  },

  enviarEmailValidacao: async function (data: any) {
    const response = await requestBaseApi({
      url: `/validar/email`,
      method: "POST",
      data: data,
    });
    return response.data;
  },

  validarEmail: async function (data: any) {
    const response = await requestBaseApi({
      url: `/confirmar/email`,
      method: "POST",
      data: data,
    });
    return response.data;
  },

  cadastrarUsuario: async function (data: any) {
    const response = await requestBaseApi({
      url: ``,
      method: "POST",
      data: data,
    });
    return response.data;
  },

  esqueceuSenha: async function (data: any) {
    const response = await requestBaseApi({
      url: `/validar/esquecer-senha`,
      method: "POST",
      data: data,
    });

    return response.data;
  },
  autenticarGoogleUsuario: async function (data: any) {
    const response = await requestBaseApi({
      url: `/cadastrar/gmail`,
      method: "POST",
      data: data,
    });

    return response.data;
  },
};
