import Navbar from "@/app/components/navbar/Navbar";
import "./globals.css";
import { Inter, Roboto, Poppins } from "next/font/google";
import Footer from "@/app/components/footer/Footer"
import { ThemeProvider } from "@/context/ThemeContext";
// import AuthProvider from "@/components/AuthProvider/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "This is the description",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          
            <div className="container">
              <Navbar />
              {children}
              <Footer />
            </div>
          
        </ThemeProvider>
      </body>
    </html>
  )
}