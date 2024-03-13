import type { Metadata } from "next";
import "../styles/globals.css";
import "../styles/header.scss";
import "../styles/main.scss";
import Header from "./components/Header";
import Icons from "./components/Icons";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Slav Konovalov | Front End Developer",
  description: "Front End Developer Portfolio",
  icons: ["/img/sk-logo.png"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body id="body">
        <Header />
        <Icons />
        {children}
      </body>
    </html>
  );
}
