import { IoInformationCircleOutline } from "react-icons/io5";
import { toast } from "react-toastify";
import { deletePet } from "./utils";
import { useState } from "react";

interface Pet {
  nome: string;
  uuid: string;
  setStateRender: () => void;
  fetchPets: boolean;
  setFetchPets: (fetchPets: boolean) => void;
}

const DeletePetOrganisms = ({
  nome,
  uuid,
  setStateRender,
  fetchPets,
  setFetchPets,
}: Pet) => {
  const [handleRender, setHandleRender] = useState<Boolean>(false);

  const deletarPet = async () => {
    deletePet(uuid, nome, setStateRender, fetchPets, setFetchPets);
  };

  return (
    <div className="w-full md:w-1/2 h-auto flex flex-col md:flex-row justify-between items-center px-5 py-2 bg-slate-50 shadow-xl rounded-xl">
      <div className="flex flex-row md:flex-row items-center justify-between w-full md:w-auto mb-2 md:mb-0">
        <h1 className="text-custom-blue text-md ml-2 md:ml-0">
          Excluir o QRCode da: {nome}
        </h1>
      </div>
      <div className="flex flex-col md:flex-row w-full md:w-auto gap-2 md:gap-4 mt-2 md:mt-0">
        {handleRender ? (
          <>
            <button
              onClick={() => setHandleRender(false)}
              className="bg-gray-400 w-full md:w-auto p-3 rounded-xl"
            >
              Voltar
            </button>
            <button
              onClick={deletarPet}
              className="bg-red-400 w-full md:w-auto p-3 rounded-xl"
            >
              Confirmar
            </button>
          </>
        ) : (
          <button
            onClick={() => setHandleRender(true)}
            className="bg-red-400 w-full md:w-auto p-3 rounded-xl"
          >
            Excluir
          </button>
        )}
      </div>
    </div>
  );
};

export default DeletePetOrganisms;
