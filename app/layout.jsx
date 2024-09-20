import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";

// Importing Montserrat font
const montserrat = localFont({
  src: "./fonts/Montserrat-VariableFont_wght.ttf",
  variable: "--font-montserrat",
  weight: "100 900",
});

export const metadata = {
  title: "",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable}    antialiased `}>
        <Navbar />
        <main className="   max-w-screen-xl mx-auto ">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
