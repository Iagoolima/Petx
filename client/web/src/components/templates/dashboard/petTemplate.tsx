import MessageNotPet from "@/components/atoms/messageNotPet";
import TitleTemplate from "@/components/atoms/titleTemplate";
import ShowPetsOrganisms from "@/components/organisms/pet/showPetsOrganisms";
import { useEffect, useState } from "react";
import Loading from "./../../../../public/logo-flip-amarelo.png";
import { consultaListPet } from "./utils";
import {
  consultaCookieEstadoCadastroUsuario,
  consultaCookieQRCode,
} from "@/utils/checkCookies";
import { ToastContainer, toast } from "react-toastify";

const PetTemplate = ({ setNameTemplate, setUuidQRcode }) => {
  const [listPets, setListPets] = useState([]);
  const [fetchPets, setFetchPets] = useState(false);
  const [stateRender, setStateRender] = useState<string>("Loading");

  useEffect(() => {
    consultaListPet(setListPets, setStateRender);
  }, [fetchPets]);

  const consultaQrCodeCookie = async () => {
    if (!consultaCookieEstadoCadastroUsuario()) {
      const qrCode = await consultaCookieQRCode();
      if (qrCode) {
        setUuidQRcode(qrCode);
        setNameTemplate("cadastrarPetQRCode");
      } else {
        toast.error("Não existe QRCode para ser cadastrado.");
      }
    } else {
      toast.error("É necessario atualizar seus dados primeiro.");
    }
  };

  const renderComponent = () => {
    switch (stateRender) {
      case "NotPet":
        return <MessageNotPet />;
      case "PetPresent":
        return (
          <ShowPetsOrganisms
            listPets={listPets}
            fetchPets={fetchPets}
            setFetchPets={setFetchPets}
          />
        );
      default:
        return <img src={Loading.src} className="w-10 h-10 animation-spin" />;
    }
  };
  return (
    <div className="w-full min-h-screen bg-slate-50 font-roboto p-2 pt-10">
      <TitleTemplate titleText={"Área do seu pet"} />
      <button
        className="text-custom-blue text-md border-b-2 border-custom-blue-2"
        onClick={consultaQrCodeCookie}
      >
        Cadastrar pet
      </button>
      <div className="w-full min-h-fit flex p-3 ">{renderComponent()}</div>
      <ToastContainer />
    </div>
  );
};

export default PetTemplate;
