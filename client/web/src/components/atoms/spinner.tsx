import logoAmarelo from "../../../public/logo-flip-amarelo.svg";
import logoAzul from "../../../public/logo-flip-azul.svg";

const Spinnerloading = ({ cor, width }) => {
  return (
    <img
      src={
        cor === "amarelo"
          ? logoAmarelo.src
          : cor === "azul"
            ? logoAzul.src
            : "erro"
      }
      className={`animate-spin ${width}`}
    />
  );
};

export default Spinnerloading;
