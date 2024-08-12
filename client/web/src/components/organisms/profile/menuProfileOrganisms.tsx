const MenuProfileOrganisms = ({ setStateRender }) => {
  return (
    <div className="w-full md:w-1/2 h-auto flex flex-col justify-start items-center">
      <h1 className="text-custom-blue text-2xl">O que deseja fazer?</h1>
      <div className="w-full h-auto flex flex-col justify-start items-center gap-3 mt-10">
        <button
          className="w-3/4 md:w-1/2 h-12 bg-custom-blue text-white rounded-lg"
          onClick={() => setStateRender("formProfile")}
        >
          Alterar Informações
        </button>
        <button
          className="w-3/4 md:w-1/2 h-12 bg-custom-blue text-white rounded-lg"
          onClick={() => setStateRender("formPasswordProfile")}
        >
          Trocar Senha
        </button>
        <button
          className="w-3/4 md:w-1/2 h-12 bg-red-300 text-white rounded-lg"
          onClick={() => setStateRender("deleteUser")}
        >
          Apagar Conta
        </button>
      </div>
    </div>
  );
};

export default MenuProfileOrganisms;
