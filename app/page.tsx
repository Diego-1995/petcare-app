import Image from "next/image";
import { partners } from "@/config/conventions";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "La Casa di Oreste - Asilo e Pensione per Cani a Trento",
  description:
    "La Casa di Oreste offre asilo, pensione, toelettatura e food shop per cani a Trento. Uno spazio sicuro e accogliente dove il tuo amico a 4 zampe è di casa.",
  keywords: [
    "asilo per cani Trento",
    "pensione cani Trento",
    "toelettatura cani Trento",
    "dog sitting Trento",
    "La Casa di Oreste",
    "cani Trento",
    "dog food shop Trento",
  ],
  openGraph: {
    title: "La Casa di Oreste - Asilo e Pensione per Cani a Trento",
    description:
      "Struttura a Trento che offre asilo, pensione, toelettatura e food shop per cani. Vieni a conoscerci!",
    url: "https://www.lacasadioreste.it", // ← cambia con il tuo dominio reale
    siteName: "La Casa di Oreste",
    images: [
      {
        url: "/images/home.jpg", // meglio se metti una immagine ottimizzata 1200x630
        width: 1200,
        height: 630,
        alt: "La Casa di Oreste - Asilo e Pensione per Cani a Trento",
      },
    ],
    locale: "it_IT",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "La Casa di Oreste - Asilo e Pensione per Cani a Trento",
    description:
      "Asilo, pensione, toelettatura e food shop per cani a Trento. Scopri La Casa di Oreste!",
    images: ["/images/home.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.lacasadioreste.it",
  },
};

export default function Home() {
  return (
    <>
      <main className="p-6 lg:p-20">
        <div className="relative overflow-hidden flex flex-col lg:flex-row mb-6 lg:mb-20 bg-primary rounded-2xl border-2 border-primary-foreground ">
        {/* Contenitore immagine con relative e altezza fissa */}
            <div className="w-full lg:w-1/2 relative h-80 md:h-[800px] xl:h-[1000px]"> 
              <Image 
                  src="/images/home.jpg" 
                  alt="logo"
                  fill
                  className="object-cover rounded-tl-2xl rounded-tr-2xl lg:rounded-tr-none lg:rounded-bl-2xl"
                />
            </div>

            {/* Testo accanto all'immagine */}
            <div className="w-full lg:w-1/2 p-6 xl:py-20 xl:px-30">
              <h1 className="text-2xl lg:text-5xl uppercase mb-12">Chi Siamo</h1>
              <p className="text-xl lg:text-2xl mb-6">
                Mi chiamo Erminia e la mia fedele compagna di vita è Talia, siamo le fondatrici de La Casa di Oreste. Una struttura che comprende un asilo/pensione, una toelettatura e un food shop per cani.            </p>
              <p className="text-xl lg:text-2xl mb-6">
                L&apos;amore per gli animali mi accompagna da tutta la vita, sono una volontaria da quando avevo 18 anni e sto ultimando il mio percorso da addestratrice cinofila.            </p>
              <p className="text-xl lg:text-2xl mb-6">
                A marzo del 2025 sono riuscita a dare forma al mio progetto. La Casa di Oreste è il primo passo per la realizzazione di un sogno d&apos;amore che inizia qui nella nostra struttura.             </p>
              <p className="text-xl lg:text-2xl">
              Se ne vuoi sapere di più, vieni a trovarci!
              </p>
            </div>
          </div>
        <h2 className="text-3xl text-center font-bold mb-5 lg:mb-20">
          I notri partner
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {partners.map((convention, index) => (
            <div
              key={index}
              className="relative flex justify-center flex-col items-center"
            >
              <div className="relative">
                <a href={convention.extLink}>
                  <Image
                    src={convention.url}
                    alt={convention.label}
                    width={200}
                    height={200}
                    className="object-cover object-center rounded-3xl"
                    quality={100}
                  />
                </a>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
