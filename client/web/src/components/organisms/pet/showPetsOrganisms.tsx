import { useState } from "react";
import CardPet from "@/components/molecules/pet/cardPet";
import FormPetOrganisms from "./formPetOrganisms";
import DeletePetOrganisms from "./deletePetOrganisms";
import { buscarPet } from "./utils";
import VisualizarQrCodePetOrganisms from "./visualizarQrCodePetOrganisms";
import ShowQRCodePetOrganisms from "./showQrCodePetOrganisms";

interface Pet {
  uuid: string;
  nome: string;
  raca: string;
  imagem: string;
}

interface ShowPetsOrganismsProps {
  listPets: Pet[];
  fetchPets: () => void;
  setFetchPets: (fetch: () => void) => void;
}

const ShowPetsOrganisms: React.FC<ShowPetsOrganismsProps> = ({
  listPets,
  fetchPets,
  setFetchPets,
}) => {
  const portaServe = process.env.NEXT_PUBLIC_BACK_APP_API_URL;
  const portaClient =
    process.env.NEXT_PUBLIC_FRONT_APP_API_URL + "/qrcode?tag=";
  const [stateRender, setStateRender] = useState<boolean>(true);
  const [stateQRCode, setStateQRCode] = useState<boolean>(true);
  const [pet, setPet] = useState<Pet | null>(null);
  let link = portaClient + pet?.uuid;

  const showCardPet = async (uuid: string) => {
    buscarPet(uuid, setPet, stateRender, setStateRender);
  };

  return (
    <>
      {stateRender ? (
        <div className="flex flex-wrap gap-2 min-h-min w-full justify-center">
          {listPets.map((pet) => (
            <CardPet
              key={pet.uuid}
              imagem={portaServe + pet.imagem}
              uuid={pet.uuid}
              nome={pet.nome}
              raca={pet.raca}
              handleShowCardPet={showCardPet}
            />
          ))}
        </div>
      ) : (
        pet && (
          <div className="flex flex-col w-full justify-center items-center">
            {stateQRCode ? (
              <FormPetOrganisms
                titleFormPet={pet.nome}
                uuid={pet.uuid}
                imagemPet={portaServe + pet.imagem}
                updateImage={true}
                petUpdate={pet}
                setStateRender={setStateRender}
                fetchPets={fetchPets}
                setFetchPets={setFetchPets}
              />
            ) : (
              <ShowQRCodePetOrganisms link={link} />
            )}
            <div className="flex-col flex md:flex-row gap-2 w-full md:w-3/4 mt-2 justify-center">
              <VisualizarQrCodePetOrganisms
                link={link}
                setStateQRCode={setStateQRCode}
                stateQRCode={stateQRCode}
              />

              {stateQRCode && (
                <DeletePetOrganisms
                  nome={pet.nome}
                  uuid={pet.uuid}
                  setStateRender={setStateRender}
                  fetchPets={fetchPets}
                  setFetchPets={setFetchPets}
                />
              )}
            </div>
          </div>
        )
      )}
    </>
  );
};

export default ShowPetsOrganisms;
