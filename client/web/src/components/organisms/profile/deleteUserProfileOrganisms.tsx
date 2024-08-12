import { useRouter } from "next/router";
import { deletaUsuario } from "./utils";

const DeleteUserProfileOrganisms = ({ setStateRender }) => {
  const router = useRouter();

  const deleteUser = async () => {
    deletaUsuario(router);
  };

  return (
    <div className="w-full md:w-1/2 h-auto flex flex-col gap-4 rounded-md shadow-md bg-white p-4">
      <h1 className="text-red-400 text-2xl">Deletar conta</h1>
      <p className="text-slate-500 text-md">
        Após excluir sua conta, todos os pets registrados serão excluídos, sendo
        assim será possível reutilizar a tagQRCode.
      </p>
      <div className="w-full flex flex-col md:flex-row gap-2">
        <button
          type="submit"
          className="w-full md:w-1/2 h-12 rounded-md text-custom-blue border-2 border-custom-blue"
          onClick={() => setStateRender("menu")}
        >
          Voltar
        </button>
        <button
          onClick={deleteUser}
          className="w-full md:w-1/2 h-12 bg-red-400 text-white rounded-md"
        >
          Deletar conta
        </button>
      </div>
    </div>
  );
};

export default DeleteUserProfileOrganisms;
