import { petApi } from "@/services/api/pet/petApi";
import { toast } from "react-toastify";

export const atualizarPet = (dataForm, fetchPets, setFetchPets) => {
  petApi
    .atualizarFormPet(dataForm)
    .then((response) => {
      setFetchPets(!fetchPets);
    })
    .catch((e) => {
      console.error(e);
    });
};

export const atualizarImagemPet = (dataImage, fetchPets, setFetchPets) => {
  petApi
    .atualizarImagemPet(dataImage)
    .then((response) => {
      setFetchPets(!fetchPets);
      toast.success(response);
    })
    .catch((e) => {
      console.error(e);
    });
};

export const cadastrarPet = async (setNameTemplate, dataForm, dataImage) => {
  await petApi
    .cadastrarFormPet(dataForm)
    .then(() => {})
    .catch((e) => {
      console.error(e);
    });

  petApi
    .cadastrarImagemPet(dataImage)
    .then((response) => {
      toast.success(response);
      setNameTemplate("pet");
    })
    .catch((e) => {
      console.error(e);
    });
};

export const cadastrarImagemPet = (dataImage) => {
  petApi
    .cadastrarImagemPet(dataImage)
    .then((response) => {})
    .catch((e) => {
      console.error(e);
    });
};

export const buscarPet = (uuid, setPet, stateRender, setStateRender) => {
  petApi
    .buscarPet(uuid)
    .then((response) => {
      setPet({
        uuid: uuid,
        imagem: response.linkImagem,
        nome: response.nome,
        raca: response.raca,
        especie: response.especie,
        cor: response.cor,
        genero: response.genero,
      });
      setStateRender(!stateRender);
    })
    .catch((e) => {
      console.error(e);
    });
};

export const deletePet = (
  uuid,
  nome,
  setStateRender,
  fetchPets,
  setFetchPets,
) => {
  petApi
    .deletarPet(uuid)
    .then((response) => {
      toast.success(response);
      setStateRender(true);
      setFetchPets(!fetchPets);
    })
    .catch((e) => {
      console.error(e);
    });
};
