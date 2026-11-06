import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

export const metadata = {
  title: "Nando Adiletta — Tattoo Artist & Visual Artist",
  description:
    "Tattoo portfolio and selected creative work by Nando Adiletta. Explore tattoos, style and visual art.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
