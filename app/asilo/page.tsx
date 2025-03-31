import Image from "next/image";


export default function AsiloPage() {
    return (
      <>
       <header className="p-6 md:p-20 text-center">
          <h1 className="text-2xl mb-4 md:text-5xl">
              <span className="text-accent font-bold">Asilo</span>
          </h1>
          <p className="text-base md:text-2xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          </p>
        </header>
        <main className="mb-20">
          <div className="flex flex-col lg:flex-row mx-6 lg:mx-20 bg-primary rounded-2xl">
                  {/* Contenitore immagine con relative e altezza fissa */}
                  <div className="w-full lg:w-1/2 relative h-64 md:h-auto"> 
                    <Image 
                        src="/images/background_dog.jpg" 
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
        </main>
      </>
     
    );
  }
  