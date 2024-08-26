import logo from "./../../../public/logo-petx-blue.png";

const Header = () => {
  return (
    <div className="w-full h-20 bg-custom-blue-2 flex justify-start items-center pl-10 shadow-2xl fixed top-0 left-0 z-50">
      <img src={logo.src} alt="logo" className="h-20 w-auto p-2 ml-5" />
    </div>
  );
};

export default Header;
