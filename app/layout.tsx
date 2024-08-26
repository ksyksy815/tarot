import Footer from "@/components/Footer";
import Providers from "@/components/Providers";
import TopHeader from "@/components/TopHeader";
import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import "./globals.css";

const robotoMono = Roboto_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`relative flex flex-col items-center w-screen h-screen overflow-y-scroll ${robotoMono.className}`}
      >
        <Providers>
          <TopHeader />
          <div className={`w-full flex-1 max-w-screen-xl`}>{children}</div>
        </Providers>

        <Footer />
      </body>
    </html>
  );
}
