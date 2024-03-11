import type { Metadata } from "next";

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
      <body id="body">{children}</body>
    </html>
  );
}
