import logo from "../../../../public/logo-petx-blue.png";

interface TypeText {
  title: string;
  textWelcome: string;
  titleAbout: string;
  textAbout: string;
  handleRender: () => void;
  handleClosedBox: () => void;
}

const BoxMessage = ({
  title,
  textWelcome,
  titleAbout,
  textAbout,
  handleRender,
  setNameTemplate,
}: TypeText) => {
  return (
    <div className="w-full md:w-1/2 h-auto flex flex-col bg-custom-yellow p-4 rounded-xl justify-start items-center gap-2 shadow-xl">
      <div className="w-full h-auto flex gap-2 font-roboto justify-center items-center">
        <img src={logo.src} alt="PetX Logo" className="h-24 md:h-44" />
        <h1 className=" text-2xl md:text-4xl text-custom-blue font-bold">
          {title}
        </h1>
      </div>

      <div className="w-full md:w-3/4 h-auto flex">
        <p className="text-xl">{textWelcome}</p>
      </div>

      <div className="w-full md:w-3/4 h-auto flex flex-col">
        <h2 className="text-xl bg-custom-yellow text-custom-blue px-2 py-1 rounded-lg">
          {titleAbout}
        </h2>
        <p className="text-sm p-2 bg-custom-blue rounded-lg">{textAbout}</p>
      </div>

      <div className="w-full flex justify-end items-center gap-4 mt-4">
        <button
          className="text-custom-blue underline"
          onClick={() => setNameTemplate("pet")}
        >
          Cancelar
        </button>
        <button
          onClick={handleRender}
          className="bg-custom-blue text-white w-20 h-12 rounded-full animate-pulse"
        >
          Seguir
        </button>
      </div>
    </div>
  );
};

export default BoxMessage;
