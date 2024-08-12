const MessageNotPet = () => {
  return (
    <div className="w-full h-1/2 flex justify-center pt-5">
      <div className=" w-full md:w-1/2 h-auto bg-custom-blue p-3 rounded-xl">
        <h1 className="text-custom-yellow">
          Você ainda não cadastrou nenhum pet. Por favor, escaneie uma tag
          QRCode para começar!
        </h1>
      </div>
    </div>
  );
};

export default MessageNotPet;
