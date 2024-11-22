import Providers from "@/components/Providers";
import TopHeader from "@/components/TopHeader";
import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AICana | Where Mysticism Meets Technology",
  description:
    "Tarot reading service that blends the mystical world of tarot with cutting-edge technology.",
  keywords: ["tarot", "tarot reading", "tarot cards", "frontend project"],
  openGraph: {
    title: "AICana | Where Mysticism Meets Technology",
    description:
      "Tarot reading service that blends the mystical world of tarot with cutting-edge technology.",
    type: "website",
    url: "https://aicana.vercel.app",
    images: [
      {
        url: "https://utfs.io/f/qswX8nWCj4Lu0ESi5HGW6l4fhBQSVRiIv3mpeMxT1dbZyw2j",
        width: 1200,
        height: 630,
        alt: "AICana | Where Mysticism Meets Technology",
      },
    ],
  },
  twitter: {
    title: "AICana | Where Mysticism Meets Technology",
    description:
      "Tarot reading service that blends the mystical world of tarot with cutting-edge technology.",
    images: [
      {
        url: "https://utfs.io/f/qswX8nWCj4Lu0ESi5HGW6l4fhBQSVRiIv3mpeMxT1dbZyw2j",
        width: 1200,
        height: 630,
        alt: "AICana | Where Mysticism Meets Technology",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`relative flex flex-col items-center w-screen h-screen overflow-y-scroll bg-[#201D1C] bg-grid-yellow-300/10 ${playfairDisplay.className}`}
      >
        <Providers>
          <TopHeader />
          <div className={`absolute top-0 w-full flex-1 max-w-screen-xl`}>
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
