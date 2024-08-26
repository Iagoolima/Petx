import LabeledInput from "@/components/molecules/labeledinput";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { atualizaSenhaUsuario } from "./utils";
import { useState } from "react";

interface DataInput {
  senha: string;
}

const FormPasswordProfileOrganisms = ({ setStateRender }) => {
  const [errorMessage, setErrorMessage] = useState<string | undefined>();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<DataInput>();

  const onSubmit = async (data: any) => {
    let error;
    if (data.senha !== data.senhaConfirmar) {
      error = "As senhas são diferentes";
    }

    if (!error) {
      const { senhaConfirmar, ...senhaUnica } = data;
      atualizaSenhaUsuario(senhaUnica);
      reset();
    } else {
      setErrorMessage(error);
    }
  };

  return (
    <div className="w-full md:w-1/2 h-auto flex flex-col gap-4 rounded-md shadow-md bg-white p-4">
      <h1 className="text-custom-blue-2 text-2xl">Atualizar senha</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <LabeledInput
          id={"senha"}
          label={"Senha"}
          color={"text-custom-blue"}
          fontSize={"text-md"}
          type={"password"}
          placeholder={"Digite a nova senha"}
          width={"w-full"}
          height={"h-10"}
          register={register}
          name={"senha"}
          minLength={4}
          maxLength={50}
          error={errors.senha}
        />

        <LabeledInput
          id={"senhaConfirmar"}
          label={"Repita a senha"}
          color={"text-custom-blue"}
          fontSize={"text-md"}
          type={"password"}
          placeholder={"Digite a nova senha novamente"}
          width={"w-full"}
          height={"h-10"}
          register={register}
          name={"senhaConfirmar"}
          minLength={4}
          maxLength={50}
        />
        {errorMessage && <p className="text-red-400">{errorMessage}</p>}
        <div className="w-full flex flex-col md:flex-row gap-2">
          <button
            type="button"
            className="w-full md:w-1/2 h-12 rounded-md text-custom-blue border-2 border-custom-blue"
            onClick={() => setStateRender("menu")}
          >
            Voltar
          </button>
          <button
            type="submit"
            className="w-full md:w-1/2 h-12 bg-custom-blue text-white rounded-md"
          >
            Salvar
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormPasswordProfileOrganisms;
