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
  title: {
    template: "%s | Personal Site Base",
    default: "Personal Site Base"
  },
  description: "Base template for a personal website to be utilized by developers",
  openGraph: {
    title: "Personal Site Base",
    description: "Base template for a personal website to be utilized by developers",
    url: "https://localhost:3000/",
    siteName: "Personal Site Base",
    // Feel free to include images below
    //images: []
    locale: "en_US",
    type: "website"
  }
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
