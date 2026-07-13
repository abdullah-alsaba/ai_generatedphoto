import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import { Toaster } from "react-hot-toast";

const outFitFont = Outfit({
  
  subsets: ["latin"],
});



export const metadata = {
  title: "Pixgen",
  description: "AI generated picture website ",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${outFitFont.className}  h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Navbar></Navbar>
        <main>{children}</main>
        <Footer></Footer>
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 3000,
            style: {
              borderRadius: "12px",
              background: "#18181b",
              color: "#fff",
            },
          }}
        />
      </body>
    </html>
  );
}
