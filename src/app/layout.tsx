import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";

export const metadata = {
  title: "Portafolio - Damian Garces",
  description: "Portfolio personal de Damian Garces",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        {children}
        <PrismicPreview repositoryName={repositoryName} />
      </body>
    </html>
  );
}
