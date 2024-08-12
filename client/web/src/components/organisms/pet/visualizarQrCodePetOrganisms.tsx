interface VisualizarQrCodePetOrganismsProps {
  link: string;
  setStateQRCode: React.Dispatch<React.SetStateAction<boolean>>;
  stateQRCode: boolean;
}

const VisualizarQrCodePetOrganisms: React.FC<
  VisualizarQrCodePetOrganismsProps
> = ({ link, setStateQRCode, stateQRCode }) => {
  return (
    <div className="w-full gap-2 md:w-1/2 h-auto flex flex-col md:flex-row justify-around items-center px-5 py-2 bg-slate-50 shadow-xl rounded-xl">
      <a
        className="bg-custom-yellow w-full md:w-auto p-3 rounded-xl text-center"
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        Link QRCode
      </a>
      <button
        onClick={() => setStateQRCode(!stateQRCode)}
        className="bg-custom-blue w-full md:w-auto p-3 rounded-xl text-center"
      >
        {stateQRCode ? "Visualizar QRCode" : "Voltar"}
      </button>
    </div>
  );
};

export default VisualizarQrCodePetOrganisms;
