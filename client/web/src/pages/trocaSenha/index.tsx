import { useEffect } from "react";
import { useRouter } from "next/router";
import { ValidateUUID } from "@/utils/validateUUID";
import TrocaSenhaTemplate from "@/components/templates/trocaSenha/trocaSenhaTemplate";
import { ToastContainer } from "react-toastify";

const TrocarSenha = () => {
  const route = useRouter();
  const { tag } = route.query;

  useEffect(() => {
    if (route.isReady) {
      if (!tag || !ValidateUUID(tag)) {
        route.push("/notFound");
      }
    }
  }, [route.isReady, tag]);

  return (
    <>
      <TrocaSenhaTemplate tag={tag} />
    </>
  );
};

export default TrocarSenha;
