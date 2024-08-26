import pet from "./../../../public/img_pet_2.png";
import { useRouter } from "next/router";

const ScreenOne = () => {
  const route = useRouter();

  return (
    <div className="w-full min-h-screen bg-custom-yellow flex flex-col md:flex-row justify-center items-center p-2">
<div className="w-full md:w-1/2 h-auto md:h-1/2 flex flex-col items-start md:items-center justify-start mb-7 gap-2 p-5 md:ml-3 bg-custom-blue-2 rounded-3xl shadow-2xl">        <h1 className="text-custom-blue text-3xl md:text-4xl font-semibold text-left">
          SEJA BEM-VINDO!
        </h1>
        <div className="w-full h-auto p-4 md:w-3/ rounded-md mt-6">
          <h1 className="text-custom-blue text-lg md:text-xl font-bold text-left md:text-center">
            Conheça um pouco sobre o PETX
          </h1>
          <p className="text-white text-xl md:text-lg mt-2 text-left md:text-center">
            O PETX foi criado para ajudar a reunir famílias e seus amados pets.
            Com o uso de um QR code exclusivo, você pode cadastrar as
            informações do seu pet e prendê-lo na coleira. Se ele se perder,
            quem encontrá-lo pode acessar suas informações e garantir que ele
            volte para casa em segurança.
          </p>
        </div>

        <button
          className="bg-custom-blue p-3 rounded-md text-white font-bold mt-4"
          onClick={() => route.push("/login")}
        >
          Acessar plataforma
        </button>
      </div>
      <div className="w-full md:w-1/2 h-auto flex justify-center items-center flex-col p-5 mt-10 md:mt-0">
        <img
          src={pet.src}
          alt="Imagem de um pet feliz"
          className="w-1/2 md:w-4/5"
        />
      </div>
    </div>
  );
};

export default ScreenOne;
