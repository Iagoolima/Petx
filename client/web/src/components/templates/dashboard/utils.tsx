import { petApi } from "@/services/api/pet/petApi";

export const consultaListPet = (setListPets, setStateRender) => {
  petApi
    .consultarListaPet()
    .then((response) => {
      if (response.length === 0) {
        setStateRender("NotPet");
      } else {
        setListPets(response);
        setStateRender("PetPresent");
      }
    })
    .catch((e) => {
      console.error(e);
    });
};
