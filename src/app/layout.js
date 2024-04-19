import "@fontsource-variable/onest";
import "./globals.css";

export const metadata = {
  title: "Porfolio de Ulises Alejandro Larrabe",
  description:
    "Porfolio de Ulises Alejandro Larrabe, desarrollador FrontEnd de ReactJs, React Native y NextJs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] p-2">
        {children}
      </body>
    </html>
  );
}
