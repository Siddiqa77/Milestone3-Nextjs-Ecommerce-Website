import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { CartProvider } from "@/components/CartContext";



export const metadata: Metadata = {
  title: "Ecommerce Website",
  description: "Nextjs Milestone3 Ecommerce Website ",
};

export default function RootLayout({
  children
}:{
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
      
      >
        <Header/>
        <CartProvider>
        {children}
        </CartProvider>
        <Footer/>
      </body>
    </html>
  );
}
