import BoxMessage from "@/components/molecules/cadastrarPetQRcode/boxMessage";
import FormPetOrganisms from "@/components/organisms/pet/formPetOrganisms";
import { useState } from "react";

const CadastrarPetQRCodeTemplate = ({ uuid, setNameTemplate }) => {
  const [stateRender, setStateRender] = useState<boolean>(true);

  return (
    <>
      <div className="w-full min-h-screen bg-white bg-[url('/background-petx.png')] bg-repeat bg-cover justify-center items-center flex py-3 px-1">
        {stateRender ? (
          <BoxMessage
            title={
              <>
                VOCÊ ESCANEOU <br /> UM QR CODE!
              </>
            }
            textWelcome={
              "Olá! Você acaba de escanear um QR code que ainda não está registrado em nosso sistema. Para garantir a segurança e facilitar a identificação do seu pet no futuro, vamos registrar suas informações agora mesmo."
            }
            titleAbout={"SOBRE"}
            textAbout={
              "Nosso site foi criado com o objetivo de ajudar famílias a reencontrarem seus pets perdidos. Acreditamos que, ao fornecer um sistema de registro simples e acessível, podemos fazer a diferença na vida de muitos animais e seus donos. Este é um serviço totalmente gratuito e sem fins lucrativos, dedicado exclusivamente ao bem-estar dos nossos amigos peludos."
            }
            handleRender={() => setStateRender(false)}
            setNameTemplate={setNameTemplate}
          />
        ) : (
          <FormPetOrganisms
            titleFormPet={"Cadastre"}
            uuid={uuid}
            setNameTemplate={setNameTemplate}
          />
        )}
      </div>
    </>
  );
};

export default CadastrarPetQRCodeTemplate;
