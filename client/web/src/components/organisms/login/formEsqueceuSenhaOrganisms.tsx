import BackgroundLogin from "@/components/atoms/backgroundLogin";
import { esqueceuSenha } from "./utils";
import { useForm } from "react-hook-form";
import { useState } from "react";
import LabeledInput from "@/components/molecules/labeledinput";
import Spinnerloading from "@/components/atoms/spinner";

interface DataInput {
  email: string;
}

const FormEsqueceuSenhaOrganisms = ({ setStateRender }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [emailSent, setEmailSent] = useState<String>("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<DataInput>();

  const onSubmit = async (data: any) => {
    setLoading(true);
    esqueceuSenha(data, setLoading, setEmailSent);
  };

  return (
    <>
      <div
        className={`relative w-full lg:w-2/3 xl:w-1/2 h-full flex flex-col bg-glass-blue backdrop-blur-md justify-center items-center sm:rounded-xl lg:rounded-l-xl lg:rounded-none transition-transform duration-300 ease-in-out`}
      >
        <h1 className="mb-5 lg:mb-0 w-4/5 text-4xl font-roboto font-bold text-custom-blue">
          Esqueceu Senha
        </h1>
        <form className="w-4/5 mt-5" onSubmit={handleSubmit(onSubmit)}>
          <div className="relative mb-6">
            <LabeledInput
              id={"email"}
              label={"Email"}
              color={"text-custom-blue"}
              fontSize={"text-xl"}
              type={emailSent == "" ? "text" : "show"}
              placeholder={"Insira seu email"}
              width={"w-full"}
              height={"h-12"}
              register={register}
              name={"email"}
              error={errors.email}
              textShow={emailSent == "" ? "" : `${emailSent}`}
            />
          </div>
          {emailSent == "" ? (
            <>
              <button
                className="w-full h-12 bg-custom-blue text-m font-roboto rounded-md text-custom-yellow mt-2 mb-4 flex justify-center items-center"
                type="submit"
              >
                {loading ? (
                  <Spinnerloading cor={"amarelo"} width={"w-5"} />
                ) : (
                  "Trocar Senha"
                )}
              </button>
              <div className="w-full flex flex-col justify-center items-center gap-4">
                <button
                  className="w-full h-12 bg-custom-yellow text-m font-roboto rounded-md"
                  onClick={() => setStateRender("login")}
                >
                  voltar
                </button>

                <p className="text-custom-blue font-bold text-md">
                  Será enviado um link para acessar e trocar a senha
                </p>
              </div>
            </>
          ) : (
            <h1 className="text-custom-blue bg-custom-yellow text-xl p-3 text-center rounded-md">
              Verifique seu E-Mail
            </h1>
          )}
        </form>
      </div>
      <BackgroundLogin />
    </>
  );
};

export default FormEsqueceuSenhaOrganisms;
