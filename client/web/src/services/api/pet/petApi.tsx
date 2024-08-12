import api from "@/services/axios";
import Cookies from "js-cookie";

const petBaseUrl = "/pet";

async function requestBaseApi({ url, ...options }) {
  return api.request({
    url: `${petBaseUrl}${url}`,
    ...options,
  });
}

export const petApi = {
  consultarListaPet: async function () {
    const response = await requestBaseApi({
      url: `/list`,
      method: "get",
    });
    return response.data;
  },

  cadastrarFormPet: async function (data) {
    await requestBaseApi({
      url: ``,
      method: "post",
      data: data,
    });
    Cookies.remove("uuid_qrcode");
  },
  cadastrarImagemPet: async function (data) {
    const formData = new FormData();

    Object.keys(data).forEach((key) => {
      formData.append(key, data[key]);
    });

    const response = await requestBaseApi({
      headers: { "Content-Type": "multipart/form-data" },
      url: `/cadastrarImagem`,
      method: "post",
      data: formData,
    });
    Cookies.remove("uuid_qrcode");
    return response.data;
  },
  atualizarFormPet: async function (data) {
    const response = await requestBaseApi({
      url: ``,
      method: "put",
      data: data,
    });
    return response.data;
  },
  atualizarImagemPet: async function (data) {
    const formData = new FormData();

    Object.keys(data).forEach((key) => {
      formData.append(key, data[key]);
    });

    const response = await requestBaseApi({
      headers: { "Content-Type": "multipart/form-data" },
      url: `/atualizarImagem`,
      method: "put",
      data: formData,
    });
    Cookies.remove("uuid_qrcode");
    return response.data;
  },
  buscarPet: async function (uuid: string) {
    const response = await requestBaseApi({
      url: `/${uuid}`,
      method: "get",
    });
    return response.data;
  },

  deletarPet: async function (uuid: string) {
    const response = await requestBaseApi({
      url: `/${uuid}`,
      method: "delete",
    });
    return response.data;
  },
};
