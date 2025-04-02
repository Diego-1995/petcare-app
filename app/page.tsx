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
              Ciao io sono Erminia, quando avevo 18 anni mi sono trasferita a Trento da sola e il mio unico compagno di vita era Oreste, il mio coniglio. <br />
            </p>
            <p className="text-xl lg:text-2xl mb-6">
              Abbiamo vissuto tantissime avventure insieme finché un giorno Oreste si è ammalato e, nonostante tutti i miei sforzi, non ce l&apos;ha fatta.
            </p>
            <p className="text-xl lg:text-2xl mb-6">
              Quel dolore mi ha cambiato e ho deciso di dedicare la mia vita interamente agli animali. Così nasce &quot;La Casa di Oreste&quot;, un grande progetto che inizia qui. <br />
            </p>
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
