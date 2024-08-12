import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import LabeledInput from "@/components/molecules/labeledinput";
import InputImage from "@/components/molecules/inputImage";
import LabeledSelect from "@/components/molecules/labeledSelect";
import { atualizarImagemPet, atualizarPet, cadastrarPet } from "./utils";

interface Types {
  titleFormPet: string;
  uuid: string;
  petUpdate: {
    nome?: string;
    especie?: string;
    raca?: string;
    cor?: string;
    porte?: string;
    peso?: string;
    genero?: string;
    dataNascimento?: Date;
  };
  updateImage: boolean;
  imagemPet: string;
  setStateRender: () => void;
  setNameTemplate: () => void;
}

interface DataInput {
  nome: string;
  especie: string;
  raca: string;
  cor: string;
  porte: string;
  peso: string;
  genero: string;
  dataNascimento: Date;
}

const FormPetOrganisms = ({
  titleFormPet,
  uuid,
  petUpdate,
  updateImage,
  imagemPet,
  setStateRender,
  setNameTemplate,
  fetchPets,
  setFetchPets,
}: Types) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm<DataInput>({
    defaultValues: petUpdate,
  });

  const [image, setImage] = useState<string | null>(null);
  const especieValue = watch("especie");

  const onSubmit = async (data: any) => {
    if (petUpdate) {
      const dataForm = { ...data, uuid };
      atualizarPet(dataForm, fetchPets, setFetchPets);
      if (image != null) {
        const dataImage = { imagemPet: image, uuid };
        atualizarImagemPet(dataImage, fetchPets, setFetchPets);
      }
      setStateRender(true);
    } else {
      if (image != null) {
        const dataForm = { ...data, uuid };
        const dataImage = { imagemPet: image, uuid };
        cadastrarPet(setNameTemplate, dataForm, dataImage);
      } else {
        toast.error("Insira uma imagem");
      }
    }
  };

  return (
    <div className="w-full md:w-3/4 bg-slate-50 flex flex-col shadow-xl justify-start items-start font-roboto gap-2 p-5 rounded-xl">
      <h1 className="text-custom-blue text-3xl">{titleFormPet}</h1>
      <div className="w-full flex flex-col md:flex-row md:justify-between items-start gap-2">
        <div className="w-full md:w-1/2 flex items-start justify-start pt-2">
          <InputImage
            image={image}
            setImage={setImage}
            linkImagem={imagemPet}
            updateImage={updateImage}
          />
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full md:w-1/2 flex flex-col items-end gap-3"
        >
          <LabeledInput
            id="nome"
            label="Nome"
            color="text-custom-blue"
            fontSize="text-md"
            type="text"
            placeholder="Nome do seu pet"
            width="w-full"
            height="h-10"
            register={register}
            name="nome"
            error={errors.nome}
            textShow=""
          />

          <LabeledSelect
            id="especie"
            label="Espécie"
            color="text-custom-blue"
            fontSize="text-md"
            placeholder="Selecione"
            width="w-full"
            height="h-10"
            register={register}
            name="especie"
            list={"pet"}
            params="Especie"
            defaultValue={petUpdate?.especie || ""}
          />

          <LabeledSelect
            id="raca"
            label="Raça"
            color="text-custom-blue"
            fontSize="text-md"
            placeholder="Selecione"
            width="w-full"
            height="h-10"
            register={register}
            name="raca"
            list={"pet"}
            params={especieValue}
            defaultValue={petUpdate?.raca || ""}
          />

          <LabeledSelect
            id="cor"
            label="Cor"
            color="text-custom-blue"
            fontSize="text-md"
            placeholder="Selecione"
            width="w-full"
            height="h-10"
            register={register}
            name="cor"
            list={"pet"}
            params="Cor"
            defaultValue={petUpdate?.cor || ""}
          />

          <LabeledSelect
            id="genero"
            label="Gênero"
            color="text-custom-blue"
            fontSize="text-md"
            placeholder="Selecione"
            width="w-full"
            height="h-10"
            register={register}
            name="genero"
            list={"pet"}
            params="Genero"
            defaultValue={petUpdate?.genero || ""}
          />
          <div className="w-full flex justify-end gap-1">
            {petUpdate && (
              <button
                className="w-full md:w-1/2 h-12 md:h-auto border border-custom-blue text-custom-blue rounded-full mb-2 md:mb-0 md:mr-2"
                onClick={() => setStateRender(true)}
              >
                Voltar
              </button>
            )}

            <button
              className="w-full md:w-1/2 h-12 bg-custom-blue rounded-full"
              type="submit"
            >
              {petUpdate ? "Salvar" : "Cadastrar"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormPetOrganisms;
