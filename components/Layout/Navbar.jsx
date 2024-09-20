import Links from "../Navbar/Links";
import WebInfo from "../Navbar/WebInfo";

const Navbar = () => {
  return (
    // Min Screen width for laptop 1280
    <nav className=" px-6 md:px-16 lg:px-0 lg:max-w-screen-xl mx-auto py-8">
      {/* Info-Logo-Vandor */}
      <WebInfo />

      {/* Pages Links  - Notifications */}
      <Links />
    </nav>
  );
};

export default Navbar;
