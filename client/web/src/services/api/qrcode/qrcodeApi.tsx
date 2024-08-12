import api from "@/services/axios";
import { UUID } from "crypto";

const qrCodeBaseUrl = "/qrcode";

async function requestBaseApi({ url, ...options }) {
  return api.request({
    url: `${qrCodeBaseUrl}${url}`,
    ...options,
  });
}

export const QRCodeApi = {
  getQRCode: async function (tag: UUID) {
    const response = await requestBaseApi({
      url: `/${tag}`,
      method: "GET",
    });
    return response.data;
  },

  validarQRCode: async function (tag: UUID) {
    const response = await requestBaseApi({
      url: `/validar/${tag}`,
      method: "POST",
    });

    return response.data;
  },
};
