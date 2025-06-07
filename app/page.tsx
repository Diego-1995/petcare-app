import Image from "next/image";
import ConventionsSlider from "./shared/ui/conventions-slider";

export default function Home() {
  return (
    <>
      <main>
      <div className="relative overflow-hidden flex flex-col lg:flex-row m-6 lg:m-20 bg-primary rounded-2xl border-2 border-primary-foreground ">
      {/* Contenitore immagine con relative e altezza fissa */}
          <div className="w-full lg:w-1/2 relative h-80 lg:h-[1000px]"> 
            <Image 
                src="/images/home.jpg" 
                alt="logo"
                fill
                className="object-cover rounded-tl-2xl rounded-tr-2xl lg:rounded-tr-none lg:rounded-bl-2xl"
              />
          </div>

          {/* Testo accanto all'immagine */}
          <div className="w-full lg:w-1/2 p-6 lg:py-20 lg:px-30">
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
        <ConventionsSlider />
      </main>
    </>
  );
}
