import Links from "../Navbar/Links";
import WebInfo from "../Navbar/WebInfo";

const Navbar = () => {
  return (
    // Min Screen width for laptop 1280
    <nav className=" max-w-screen-xl mx-auto py-8">
      {/* Info-Logo-Vandor */}
      <WebInfo />

      {/* Pages Links  - Notifications */}
      <Links />
    </nav>
  );
};

export default Navbar;
