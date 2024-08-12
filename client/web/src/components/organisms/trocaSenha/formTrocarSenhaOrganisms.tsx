import { useState } from "react";
import { trocaSenha } from "./utils";
import { useForm } from "react-hook-form";
import LabeledInput from "@/components/molecules/labeledinput";
import { useRouter } from "next/router";

interface DataInput {
  senha: string;
  senhaConfirmar: string;
}

const FormTrocarSenhaOrganisms = ({ tag }) => {
  const [errorMessage, setErrorMessage] = useState<string>("");
  const route = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<DataInput>();

  const onSubmit = async (data: any) => {
    let error;
    if (data.senha !== data.senhaConfirmar) {
      error = "as senhas são diferentes";
    }

    if (!error) {
      const { senhaConfirmar, ...novaSenha } = data;
      trocaSenha(tag, novaSenha, route);
    } else {
      setErrorMessage(error);
    }
  };

  return (
    <div className="w-full sm:w-1/2 h-auto flex flex-col gap-2 rounded-md shadow-md bg-white p-4 sm:p-6">
      <h1 className="text-custom-blue-2 text-xl sm:text-2xl">
        Atualizar dados de Usuario
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
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
          maxLength={100}
          error={errors.senha}
          textShow=""
        />

        <LabeledInput
          id={"senhaConfirmar"}
          label={"Confirmar Senha"}
          color={"text-custom-blue"}
          fontSize={"text-md"}
          type={"password"}
          placeholder={"Digite a mesma senha"}
          width={"w-full"}
          height={"h-10"}
          register={register}
          name={"senhaConfirmar"}
          maxLength={100}
          error={errors.senhaConfirmar}
          textShow=""
        />
        {errorMessage && <p className="text-md text-red-400">{errorMessage}</p>}

        <div className="w-full flex gap-2 justify-end">
          <button
            type="submit"
            className="w-full sm:w-1/2 h-12 bg-custom-blue rounded-md"
          >
            Confirmar
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormTrocarSenhaOrganisms;
