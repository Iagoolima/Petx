import { useEffect } from "react";
import { MdErrorOutline } from "react-icons/md";
import { useRouter } from "next/router";

const NotFound = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center gap-2">
      <MdErrorOutline size={30} />
      <h1 className="text-xl font-roboto">Pagina indisponivel</h1>
    </div>
  );
};

export default NotFound;
