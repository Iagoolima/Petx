import LabeledInput from "@/components/molecules/labeledinput";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { atualizaUsuario, buscaUsuario } from "./utils";
import LabeledSelect from "@/components/molecules/labeledSelect";

const FormProfileOrganisms = ({ setStateRender }) => {
  const [isUserLoaded, setIsUserLoaded] = useState(false);
  const [user, setUser] = useState({
    email: "",
    nome: "",
    telefone: "",
    cidade: "",
    estado: "",
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm({
    defaultValues: {
      nome: "",
      telefone: "",
      estado: "",
      cidade: "",
    },
  });

  const estadoValue = watch("estado");

  useEffect(() => {
    const fetchUser = async () => {
      await buscaUsuario(setUser, setIsUserLoaded);
    };
    fetchUser();
  }, []);

  useEffect(() => {
    if (isUserLoaded) {
      setValue("nome", user.nome);
      setValue("telefone", user.telefone);
      setValue("estado", user.estado);
      setValue("cidade", user.cidade);
    }
  }, [isUserLoaded, user, setValue]);

  const onSubmit = async (data) => {
    await atualizaUsuario(data, setStateRender);
  };

  return (
    <div className="w-full md:w-1/2 h-auto flex flex-col gap-4 rounded-md shadow-md bg-white p-4">
      <h1 className="text-custom-blue-2 text-2xl">
        Atualizar dados de Usuário
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <LabeledInput
          id={"email"}
          label={"Email"}
          color={"text-custom-blue"}
          fontSize={"text-md"}
          type={"show"}
          width={"w-full"}
          height={"h-10"}
          textShow={user.email}
        />
        <LabeledInput
          id={"nome"}
          label={"Nome"}
          color={"text-custom-blue"}
          fontSize={"text-md"}
          type={"text"}
          placeholder={"Digite o nome"}
          width={"w-full"}
          height={"h-10"}
          register={register}
          name={"nome"}
          error={errors.nome}
          textShow={""}
        />
        <LabeledInput
          id={"telefone"}
          label={"Telefone"}
          color={"text-custom-blue"}
          fontSize={"text-md"}
          type={"telephone"}
          placeholder={"Digite seu telefone"}
          width={"w-full"}
          height={"h-10"}
          register={register}
          name={"telefone"}
          minLength={10}
          error={errors.telefone}
          textShow={""}
        />
        <LabeledSelect
          id="estado"
          label="Estado"
          color="text-custom-blue"
          fontSize="text-md"
          placeholder="Selecione"
          width="w-full"
          height="h-10"
          register={register}
          name="estado"
          list={"localizacao"}
          params={"Estados"}
          defaultValue={user?.estado || ""}
        />
        <LabeledSelect
          id="cidade"
          label="Cidade"
          color="text-custom-blue"
          fontSize="text-md"
          placeholder="Selecione"
          width="w-full"
          height="h-10"
          register={register}
          name="cidade"
          list={"localizacao"}
          params={estadoValue}
          defaultValue={user?.cidade || ""}
        />
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

export default FormProfileOrganisms;