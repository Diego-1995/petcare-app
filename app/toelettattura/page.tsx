import { petGroomingGallery } from "@/config/pet-grooming-gallery";
import MediaSlider from "../shared/ui/media-slider";
import HeaderDetail from "../shared/ui/header-detail"
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Toelettatura per Cani a Trento | La Casa di Oreste",
  description:
    "Toelettatura professionale per cani a Trento. Prodotti naturali, vegani e cruelty-free per il benessere e la cura del tuo amico a 4 zampe.",
  keywords: [
    "toelettatura cani Trento",
    "lavaggio cani Trento",
    "cura pelo cani Trento",
    "taglio pelo cani Trento",
    "toelettatura professionale Trento",
    "La Casa di Oreste",
  ],
  openGraph: {
    title: "Toelettatura per Cani a Trento | La Casa di Oreste",
    description:
      "Scopri la toelettatura di La Casa di Oreste a Trento: prodotti naturali, vegani e cruelty-free per il benessere dei cani.",
    url: "https://www.lacasadioreste.it/toelettatura",
    siteName: "La Casa di Oreste",
    images: [
      {
        url: "https://www.lacasadioreste.it/video/toeletta_home.jpg", // snapshot/thumbnail del video salvato nella cartella video
        width: 1200,
        height: 630,
        alt: "Toelettatura per cani a Trento - La Casa di Oreste",
      },
    ],
    locale: "it_IT",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Toelettatura per Cani a Trento | La Casa di Oreste",
    description:
      "Toelettatura con prodotti naturali, vegani e cruelty-free a Trento. Benessere e cura per tutti i cani.",
    images: ["https://www.lacasadioreste.it/video/toeletta_home.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.lacasadioreste.it/toelettatura",
  },
};

export default function ToilettaturaPage() {
    return (
      <>
        <HeaderDetail title="Toelettatura"/>
        <main className="mb-20">
          <div className="flex flex-col lg:flex-row mx-6 lg:mx-20 bg-primary rounded-2xl border-2 border-primary-foreground">
            
            <div className="w-full lg:w-1/2 relative h-64 md:h-auto"> 
              <video
                      className="w-full h-60 md:h-[calc(100vh-136px)] object-cover rounded-tr-2xl rounded-tl-2xl lg:rounded-tr-none lg:rounded-l-2xl"
                      autoPlay
                      loop
                      muted
                      playsInline
                      poster="/images/home.jpg"
                  >
                      <source
                          src="/video/toeletta_home.mp4"
                          type="video/mp4"
                      />
                      Il tuo browser non supporta il video
              </video>
            </div>
    
            {/* Testo accanto all'immagine */}
            <div className="w-full lg:w-1/2 p-6 xl:py-20 xl:px-30 text-justify">
              <h1 className="text-2xl lg:text-5xl uppercase mb-12 break-words">
                Coccole&Benessere
              </h1>
              <p className="text-xl lg:text-2xl mb-6">
                Che si tratti di un pelo riccio, liscio o ondulato, di grandi o di piccini, tutti i cani hanno bisogno di cura.
              </p>
              <p className="text-xl lg:text-2xl mb-6">
                La toelettatura non è solo un fatto estetico, la base è il benessere del cane. 
                Per questo, qualsiasi sia il trattamento da eseguire, parto dal rispetto dell&apos;animale tenendo sempre conto delle sue caratteristiche e necessità.
              </p>
              <p className="text-xl lg:text-2xl">
                Poiché ci teniamo al benessere di tutti gli animali, nel nostro salone utilizziamo solo prodotti di qualità non testati su animali, vegani e con materie prime di origine naturale. 
              </p>
            </div>
         </div>
        </main>
         <MediaSlider title="La nostra Gallery" media={petGroomingGallery} />
      </>
    );
  }
  