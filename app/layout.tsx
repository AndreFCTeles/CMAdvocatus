import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "@/app/styles/globals.css";
import ClientProviders from "@/app/lib/ClientProviders";

const poppins = Poppins({
  weight: ["100","200","300","400","500","600","700","800","900"],
  style: ["normal","italic"] ,
  subsets: ["latin"]
});


export const metadata: Metadata = {
  title: "CM Advocatus",
  description: "Aplicação web desenvolvida por André Teles, para Carla Magalhães e CM Advocatus",
  verification: { 
    google: "QdQgkDxzVMihSVKuSRU20F6f_f6hjm4wR1axD96VYZY"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${poppins} antialiased xl:text-xl`}>
        <ClientProviders>
          {children}
        </ClientProviders>
      </body>
    </html>
  );
}