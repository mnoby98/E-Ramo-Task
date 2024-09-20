import Links from "../Navbar/Links";
import WebInfo from "../Navbar/WebInfo";

const Navbar = () => {
  return (
    <nav className=" max-w-screen-xl mx-auto py-8">
      {/* Info-Logo-Vandor */}
      <WebInfo />
      {/*  */}
      <Links />
    </nav>
  );
};

export default Navbar;
