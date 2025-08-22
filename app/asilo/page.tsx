import Image from "next/image";
import HeaderDetail from "../shared/ui/header-detail";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Asilo e Pensione per Cani a Trento | La Casa di Oreste",
  description:
    "Scopri l’asilo e la pensione per cani de La Casa di Oreste a Trento. Servizi diurni e pensione casalinga per offrire al tuo cane una seconda casa sicura e amorevole.",
  keywords: [
    "asilo cani Trento",
    "pensione cani Trento",
    "dog sitting Trento",
    "pensione casalinga cani Trento",
    "asilo diurno cani",
    "La Casa di Oreste",
  ],
  openGraph: {
    title: "Asilo e Pensione per Cani a Trento | La Casa di Oreste",
    description:
      "Asilo diurno e pensione casalinga per cani a Trento. Una seconda casa sicura e amorevole per il tuo amico a 4 zampe.",
    url: "https://www.lacasadioreste.it/asilo", // cambia con il tuo dominio reale
    siteName: "La Casa di Oreste",
    images: [
      {
        url: "/images/asilo-1.jpg",
        width: 1200,
        height: 630,
        alt: "Asilo e Pensione per Cani a Trento - La Casa di Oreste",
      },
    ],
    locale: "it_IT",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Asilo e Pensione per Cani a Trento | La Casa di Oreste",
    description:
      "Asilo e pensione casalinga per cani a Trento. Offriamo un ambiente familiare e sicuro per il tuo cane.",
    images: ["/images/asilo-1.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.lacasadioreste.it/asilo",
  },
};


export default function AsiloPage() {
    return (
      <>
        <HeaderDetail title="Asilo e Pensione"/>
        <main className="mb-20">
          <div className="flex flex-col lg:flex-row mx-6 lg:mx-20 bg-primary rounded-2xl border-2 border-primary-foreground mb-5 lg:mb-20">
                  {/* Contenitore immagine con relative e altezza fissa */}
                  <div className="w-full lg:w-1/2 relative h-64 md:h-auto"> 
                    <Image 
                        src="/images/asilo-1.jpg" 
                        alt="logo"
                        fill
                        className="object-cover rounded-tl-2xl rounded-tr-2xl lg:rounded-tr-none lg:rounded-bl-2xl"
                      />
                  </div>
          
                  {/* Testo accanto all'immagine */}
                  <div className="w-full lg:w-1/2 p-6 xl:py-20 xl:px-30">
                    <h1 className="text-2xl lg:text-5xl uppercase mb-12">
                      Siamo qui per supportarti!
                    </h1>
                    <p className="text-xl lg:text-2xl mb-6">
                       Coniugare vita lavorativa e vita privata è difficile, soprattutto con i ritmi sempre più incalzanti che ci richiede la routine.
                    </p>
                  </div>
            </div>
          <div className="flex flex-col lg:flex-row mx-6 lg:mx-20 bg-primary rounded-2xl border-2 border-primary-foreground mb-5 lg:mb-20">
            <div className="w-full lg:w-1/2 p-6 xl:py-20 xl:px-30">
                    <h1 className="text-2xl lg:text-5xl uppercase mb-12">
                      I nostri Servizi!
                    </h1>
                    <p className="text-xl lg:text-2xl mb-6">
                       La Casa di Oreste offre sia un servizio di asilo diurno, che una pensione casalinga. 
                    </p>
                    <p className="text-xl lg:text-2xl mb-6"> 
                      Che si tratti di poche ore o di più giorni, puoi affidarti a noi per la cura del tuo cane mentre ottemperi ai tuoi impegni o ti regali un po&apos; di tempo per te. 
                    </p>
                  </div>
                  {/* Contenitore immagine con relative e altezza fissa */}
                  <div className="w-full lg:w-1/2 relative h-64 md:h-auto"> 
                    <Image 
                        src="/images/asilo-2.jpg" 
                        alt="logo"
                        fill
                        className="object-cover rounded-bl-2xl lg:rounded-bl-none lg:rounded-tr-2xl rounded-br-2xl"
                      />
                  </div>
            </div>
          <div className="flex flex-col lg:flex-row mx-6 lg:mx-20 bg-primary rounded-2xl border-2 border-primary-foreground ">
                  {/* Contenitore immagine con relative e altezza fissa */}
                  <div className="w-full lg:w-1/2 relative h-64 md:h-auto"> 
                    <Image 
                        src="/images/asilo-3.jpg" 
                        alt="logo"
                        fill
                        className="object-cover rounded-tl-2xl rounded-tr-2xl lg:rounded-tr-none lg:rounded-bl-2xl"
                      />
                  </div>
          
                  {/* Testo accanto all'immagine */}
                  <div className="w-full lg:w-1/2 p-6 xl:py-20 xl:px-30">
                    <h1 className="text-2xl lg:text-5xl uppercase mb-12">
                      La loro seconda casa!
                    </h1>
                    <p className="text-xl lg:text-2xl mb-6">
                       La nostra struttura si sviluppa su due piani open space, uno spazio chiuso dedicato alla toelettatura e un poggiolo esterno per l&apos;estate.
                    </p>
                    <p className="text-xl lg:text-2xl mb-6">
                      La Casa di Oreste è un&apos;estensione dell&apos;ambiente domestico, in cui vogliamo ricreare l&apos;atmosfera felice, serena e familiare che fa sentire il nostro compagno sereno e al sicuro.                     
                    </p>
                  </div>
            </div>
        </main>
      </>
     
    );
  }
  