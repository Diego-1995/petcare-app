import { petfoods } from '@/config/pet-foods';
import ImagesSlider from '../shared/ui/conventions-slider';
import HeaderDetail from '../shared/ui/header-detail';
import Image from "next/image";
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';


export default function PetFoodPage() {
    return (
        <>
            <HeaderDetail title='Pet Food'/>
             <main className="mb-20">
                      <div className="flex flex-col lg:flex-row mx-6 lg:mx-20 bg-primary rounded-2xl border-2 border-primary-foreground mb-5 lg:mb-20">
                              {/* Contenitore immagine con relative e altezza fissa */}
                              <div className="w-full lg:w-1/2 relative h-64 md:h-auto"> 
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
                                  Siamo qui per supportarti!
                                </h1>
                                <p className="text-xl lg:text-2xl mb-6">
                                   Coniugare vita lavorativa e vita privata è difficile, soprattutto con i ritmi sempre più incalzanti che ci richiede la routine.
                                </p>
                                <p className="text-xl lg:text-2xl mb-6">
                                   L&apos;amore di un cane però, è impagabile. <br />
                                   Non rinunciarci, siamo qui per te!
                                </p>
                                <a href="/files/catalog.pdf">
                                  <Button className="material-button !bg-primary-foreground !p-6">
                                    Vedi i prezzi
                                    <Download />
                                  </Button>
                                </a>
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
                                 <a href="/files/catalog.pdf">
                                  <Button className="material-button !bg-primary-foreground !p-6">
                                    Vedi i prezzi
                                    <Download />
                                  </Button>
                                </a>
                              </div>
                              {/* Contenitore immagine con relative e altezza fissa */}
                              <div className="w-full lg:w-1/2 relative h-64 md:h-auto"> 
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
                              <div className="w-full lg:w-1/2 relative h-64 md:h-auto"> 
                                <Image 
                                    src="/images/imperial-food-oceans.jpg" 
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
                                  Per nostra scelta non ci sono recinti, né gabbie: La Casa di Oreste è un&apos;estensione dell&apos;ambiente domestico, in cui vogliamo ricreare l&apos;atmosfera felice, serena e familiare che fa sentire il nostro compagno sereno e al sicuro.                     
                                </p>
                                 <a href="/files/catalog.pdf">
                                  <Button className="material-button !bg-primary-foreground !p-6">
                                    Vedi i prezzi
                                    <Download />
                                  </Button>
                                </a>
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
                                 <a href="/files/catalog.pdf">
                                  <Button className="material-button !bg-primary-foreground !p-6">
                                    Vedi i prezzi
                                    <Download />
                                  </Button>
                                </a>
                              </div>
                              {/* Contenitore immagine con relative e altezza fissa */}
                              <div className="w-full lg:w-1/2 relative h-64 md:h-auto"> 
                                <Image 
                                    src="/images/imperial-food-starfish.jpg" 
                                    alt="logo"
                                    fill
                                    className="object-cover rounded-bl-2xl lg:rounded-bl-none lg:rounded-tr-2xl rounded-br-2xl"
                                  />
                              </div>
                      </div>
             </main>
            <ImagesSlider title="Da definire" images={petfoods} />
        </>
    )
}