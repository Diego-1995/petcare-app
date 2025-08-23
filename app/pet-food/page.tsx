import MediaSlider from '../shared/ui/media-slider';
import HeaderDetail from '../shared/ui/header-detail';
import Image from "next/image";
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import { petFoodGallery } from '@/config/pet-food-gallery';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Pet Food | La Casa di Oreste - Cibo per cani a Trento",
  description:
    "Pet Food a Trento - Crocchette Imperial Food e umido Pet Alpin. Cibo sano, naturale e 100% made in Italy per il benessere del tuo cane. Scopri cataloghi e ordina su WhatsApp!",
  keywords: [
    "pet food Trento",
    "cibo per cani Trento",
    "crocchette per cani Imperial Food",
    "umido Pet Alpin",
    "alimentazione naturale cani",
    "negozio cibo cani Trento",
    "La Casa di Oreste Trento"
  ],
  openGraph: {
    title: "Pet Food | La Casa di Oreste",
    description:
      "Cibo sano e naturale per cani: crocchette Imperial Food e umido Pet Alpin. Qualità italiana a prezzi accessibili.",
    url: "https://www.lacasadioreste.it/pet-food",
    siteName: "La Casa di Oreste",
    locale: "it_IT",
    type: "website",
    images: [
      {
        url: "https://www.lacasadioreste.it/images/imperial-food-all.jpg",
        width: 1200,
        height: 630,
        alt: "Pet Food Trento - Imperial Food e Pet Alpin",
      },
    ],
  },
};


export default function PetFoodPage() {
    return (
        <>
            <HeaderDetail title='Pet Food'/>
             <main className="mb-20">
                      <div className="flex flex-col lg:flex-row mx-6 lg:mx-20 bg-primary rounded-2xl border-2 border-primary-foreground mb-5 lg:mb-20">
                              {/* Contenitore immagine con relative e altezza fissa */}
                              <div className="w-full lg:w-1/2 relative h-64"> 
                                <Image 
                                    src="/images/imperial-food-all.jpg" 
                                    alt="logo"
                                    fill
                                    className="object-cover rounded-tl-2xl rounded-tr-2xl lg:rounded-tr-none lg:rounded-bl-2xl"
                                  />
                              </div>
                      
                              {/* Testo accanto all'immagine */}
                              <div className="w-full lg:w-1/2 p-6 xl:py-20 xl:px-30">
                                <h1 className="text-2xl lg:text-5xl uppercase mb-12">
                                  Il benessere inizia a tavola (o nella ciotola!)
                                </h1>
                                <p className="text-xl lg:text-2xl mb-6">
                                   Un&apos;alimentazione sana è importante per tutti. La Casa di Oreste si occupa del benessere del tuo cane a 360 gradi e, dunque, non potevamo lasciare da parte la pappa!
                                </p>
                                <p className="text-xl lg:text-2xl mb-6">
                                   L&apos;amore di un cane però, è impagabile. <br />
                                   Non rinunciarci, siamo qui per te!
                                </p>
                              </div>
                        </div>
                      <div className="flex flex-col lg:flex-row mx-6 lg:mx-20 bg-primary rounded-2xl border-2 border-primary-foreground mb-5 lg:mb-20">
                        <div className="w-full lg:w-1/2 p-6 xl:py-20 xl:px-30">
                                <h1 className="text-2xl lg:text-5xl uppercase mb-12">
                                  Il secco
                                </h1>
                                <p className="text-xl lg:text-2xl mb-6">
                                   La Casa di Oreste propone, per le crocchette, la linea Imperial Food.
                                </p>
                                <p className="text-xl lg:text-2xl mb-6"> 
                                  Un marchio 100% made in Italy, da un&apos;azienda con esperienza trentennale nella produzione di cibo per cani. 
                                </p>
                                <p className="text-xl lg:text-2xl mb-6">
                                  Le specialità della casa sono: Energy, OceanS, StarFish e First Class. Ogni tipologia di crocchetta è pensata per supportare il fabbisogno nutritivo del tuo cane in modo equilibrato e gustoso, ponendo la massima attenzione alle sue esigenze. 
                                  Intolleranze alimentari, controllo del peso, cura del pelo... ce n&apos;è per tutti i gusti. 
                                </p>
                                <p className="text-xl lg:text-2xl mb-6">
                                  E occhio al prezzo! Da noi la qualità costa meno del cibo industriale da banco, provare per credere!
                                </p>
                                 <a href="/files/catalogo-crocchette.pdf">
                                  <Button className="material-button !bg-primary-foreground !p-6">
                                    Scarica il catalogo
                                    <Download />
                                  </Button>
                                </a>
                              </div>
                              {/* Contenitore immagine con relative e altezza fissa */}
                              <div className="w-full lg:w-1/2 relative h-64"> 
                                <Image 
                                    src="/images/imperial-food-first-class.jpg" 
                                    alt="logo"
                                    fill
                                    className="object-cover rounded-bl-2xl lg:rounded-bl-none lg:rounded-tr-2xl rounded-br-2xl"
                                  />
                              </div>
                        </div>
                      <div className="flex flex-col lg:flex-row mx-6 lg:mx-20 bg-primary rounded-2xl border-2 border-primary-foreground mb-5 lg:mb-20">
                              {/* Contenitore immagine con relative e altezza fissa */}
                              <div className="w-full lg:w-1/2 relative h-64"> 
                                <Image 
                                    src="/images/umido_petfood.jpg" 
                                    alt="logo"
                                    fill
                                    className="object-cover rounded-tl-2xl rounded-tr-2xl lg:rounded-tr-none lg:rounded-bl-2xl"
                                  />
                              </div>
                      
                              {/* Testo accanto all'immagine */}
                              <div className="w-full lg:w-1/2 p-6 xl:py-20 xl:px-30">
                                <h1 className="text-2xl lg:text-5xl uppercase mb-12">
                                  L&apos;umido
                                </h1>
                                <p className="text-xl lg:text-2xl mb-6">
                                  Per i nostri umidi la scelta è chiara: Pet Alpin!
                                </p>
                                <p className="text-xl lg:text-2xl mb-6">
                                  100% made in Italy e a km0.
                                  Prodotto in Alto Adige con materie prime del territorio da un team di specialisti del benessere animale, tra cui un veterinario e un macellaio, per garantire la qualità del prodotto sotto tutti i punti di vista.                                 
                                </p>
                                <p className="text-xl lg:text-2xl mb-6">
                                  In diversi gusti e misure a un prezzo concorrenziale rispetto agli equivalenti industriali &quot;di qualità&quot;. Vi invitiamo ad aprire un barattolino e annusarlo per capire di cosa stiamo parlando!
                                </p>
                                 <a href="/files/catalogo-umido.pdf">
                                  <Button className="material-button !bg-primary-foreground !p-6">
                                    Scarica il catalogo
                                    <Download />
                                  </Button>
                                </a>
                              </div>
                        </div>
                      <div className="flex flex-col lg:flex-row mx-6 lg:mx-20 bg-primary rounded-2xl border-2 border-primary-foreground mb-5 lg:mb-20">
                        <div className="w-full lg:w-1/2 p-6 xl:py-20 xl:px-30">
                                <h1 className="text-2xl lg:text-5xl uppercase mb-12">
                                  La nostra vision
                                </h1>
                                <p className="text-xl lg:text-2xl mb-6">
                                  Per noi è fondamentale supportare realtà che siano eticamente affini ai nostri valori. 
                                </p>
                                <p className="text-xl lg:text-2xl mb-6">
                                  Per questo il cibo che vendiamo e 100% made in Italy, da aziende attente all&apos;ambiente e viene prodotto da persone che conosciamo personalmente o con le quali siamo in contatto diretto e che abbracciano il nostro stesso modo di pensare quando si tratta del benessere dei nostri compagni di vita.                                 
                                </p>
                              </div>
                              {/* Contenitore immagine con relative e altezza fissa */}
                              <div className="w-full lg:w-1/2 relative h-64"> 
                                <Image 
                                    src="/images/imperial-food-starfish.jpg" 
                                    alt="logo"
                                    fill
                                    className="object-cover rounded-bl-2xl lg:rounded-bl-none lg:rounded-tr-2xl rounded-br-2xl"
                                  />
                              </div>
                      </div>

             </main>
            <div className='w-full flex justify-center content-center mb-20'>
              <a href="https://wa.me/393381457299">
                <Button className="material-button !p-6 lg:!py-12 lg:!px-16 lg:!text-2xl">
                  Clicca qui per ordinare via WhatsApp!
                  <Image src={'/images/whatsapp.svg'} width={30} height={30} alt="whatsapp" className='lg:ml-6' />
                </Button>
              </a>
            </div>
            <MediaSlider title="La nostra gallery" media={petFoodGallery} />
        </>
    )
}