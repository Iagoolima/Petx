import NavbarOrganisms from "@/components/organisms/navbar/navBarOrganisms";
import CadastrarPetQRCodeTemplate from "@/components/templates/dashboard/cadastrarPetQRcodeTemplate";
import HomeTemplate from "@/components/templates/dashboard/homeTemplate";
import PetTemplate from "@/components/templates/dashboard/petTemplate";
import ProfileTemplate from "@/components/templates/dashboard/profileTemplate";
import { useAuth } from "@/context/authContext";
import {
  consultaCookieEstadoCadastroUsuario,
  consultaCookieQRCode,
  consultarCookieAuth,
} from "@/utils/checkCookies";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";

const Dashboard = () => {
  const router = useRouter();
  const { auth, isAuth } = useAuth();
  const [uuidQRCode, setUuidQRcode] = useState<string>("");
  const [nameTemplate, setNameTemplate] = useState<String>("pet");
  const [formProfile, setFormProfile] = useState<String>("menu");

  useEffect(() => {
    if (!auth) {
      if (consultarCookieAuth()) {
        isAuth(true);
      } else {
        router.push("/login");
      }
    }
  }, [auth, router]);

  useEffect(() => {
    const checkQRCodeAndState = async () => {
      const qrCode = await consultaCookieQRCode();
      setUuidQRcode(qrCode);

      if (consultaCookieEstadoCadastroUsuario()) {
        setNameTemplate("profile");
        setFormProfile("formProfile");
      } else if (qrCode != "") {
        setNameTemplate("cadastrarPetQRCode");
      }
    };
    checkQRCodeAndState();
  }, []);

  const renderTemplate = () => {
    switch (nameTemplate) {
      case "home":
        return <HomeTemplate />;
      case "profile":
        return (
          <ProfileTemplate
            stateRenderProfile={formProfile}
            setNameTemplate={setNameTemplate}
          />
        );
      case "pet":
        return (
          <PetTemplate
            setNameTemplate={setNameTemplate}
            setUuidQRcode={setUuidQRcode}
          />
        );
      case "cadastrarPetQRCode":
        return (
          <CadastrarPetQRCodeTemplate
            uuid={uuidQRCode}
            setNameTemplate={setNameTemplate}
          />
        );
    }
  };

  return (
    <div className="flex flex-col md:flex-row">
      <NavbarOrganisms handleStateTemplate={setNameTemplate} />
      <div className="flex-grow">{renderTemplate()}</div>
      <ToastContainer />
    </div>
  );
};

export default Dashboard;
