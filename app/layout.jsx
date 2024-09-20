import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";

// Import Montserrat Form Google Font
const montserrat = Montserrat({
  subsets: ["latin"],
});

export const metadata = {
  title: "E-Ramo Task",
  description: "Home Page ui contains Navbar,Footer and OurClients ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={` overflow-x-hidden  ${montserrat.className}    antialiased `}>
        <Navbar />
        <main className="    max-w-screen-xl mx-auto ">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
