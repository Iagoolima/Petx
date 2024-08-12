import Logo from "./../../../public/logo-login.png";

const BackgroundLogin = () => {
  return (
    <div
      className={`hidden w-1/2 lg:flex h-full bg-custom-blue justify-center items-center transition-transform duration-300 ease-in-out`}
    >
      <img src={Logo.src} alt="petx" className="w-1/2" />
    </div>
  );
};

export default BackgroundLogin;
