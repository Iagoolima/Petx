import { ValidateUUID } from "@/utils/validateUUID";
import { useRouter } from "next/router";
import { useEffect } from "react";

const EsqueceuSenha = () => {
  const router = useRouter();
  const { tag } = router.query;

  useEffect(() => {
    if (router.isReady) {
      if (!tag || !ValidateUUID(tag)) {
        router.push("/login");
      }
    }
  }, [router.isReady, tag]);

  return (
    <>
      <EsqueceuSenhaTemplate tag={tag} />
      <ToastContainer />
    </>
  );
};

export default EsqueceuSenha;
