import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./ui/navigation/header";
import Footer from "./ui/navigation/footer";

const helvetica = localFont({ 
  src: './Helvetica-Light.woff2',
  display: 'swap'
});

export const metadata: Metadata = {
  title: "Personal Site Base",
  description: "Base template for a personal website to be utilized by developers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${helvetica.className} antialiased`}>
        <Header/>

        {children}
        
        <Footer/>
      </body>
    </html>
  );
}
