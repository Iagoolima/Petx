import QRCode from "qrcode.react";

const ShowQRCodePetOrganisms = ({ link }) => {
  return (
    <div className="w-3/4 h-full flex flex-col justify-center items-center gap-2 mb-10">
      <h1 className="text-3xl text-custom-blue">Escaneie</h1>
      <QRCode value={link} size={160} />
    </div>
  );
};

export default ShowQRCodePetOrganisms;
