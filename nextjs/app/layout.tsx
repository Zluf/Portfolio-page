import type { Metadata } from "next";
import { Inter } from "next/font/google";
import classes from "../styles/styles.module.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Slav Konovalov - Front End Developer",
  description: "Front End Development portfolio page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={classes.testsass} id="body">
        {children}
      </body>
    </html>
  );
}
