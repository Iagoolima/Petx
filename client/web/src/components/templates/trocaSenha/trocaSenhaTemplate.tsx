import { useEffect } from "react";
import { validarLink } from "./utils";
import { useRouter } from "next/router";
import FormTrocarSenhaOrganisms from "@/components/organisms/trocaSenha/formTrocarSenhaOrganisms";

const TrocaSenhaTemplate = ({ tag }) => {
  const route = useRouter();

  useEffect(() => {
    if (tag) {
      validarLink(tag, route);
    }
  }, [tag]);

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <FormTrocarSenhaOrganisms tag={tag} />
    </div>
  );
};

export default TrocaSenhaTemplate;
