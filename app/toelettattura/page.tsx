import HeaderDetail from "../shared/ui/header-detail"

export default function ToilettaturaPage() {
    return (
      <>
        <HeaderDetail title="Toelettatura" subtitle="lorem ipsum"/>
        <main className="mb-20">
          <div className="flex flex-col lg:flex-row mx-6 lg:mx-20 bg-primary rounded-2xl border-2 border-primary-foreground">
            {/* Contenitore immagine con relative e altezza fissa */}
            <div className="w-full lg:w-1/2 relative h-64 md:h-auto"> 
              <video
                      className="w-full h-60 md:h-[calc(100vh-136px)] object-cover rounded-tr-2xl rounded-tl-2xl lg:rounded-tr-none lg:rounded-l-2xl"
                      autoPlay
                      loop
                      muted
                      playsInline
                      preload="auto"
                  >
                      <source
                          src="/video/toeletta_clips.mp4"
                          type="video/mp4"
                          media="(min-width: 768px)"
                      />
                      <source
                          src="/video/toeletta_clips.mp4"
                          type="video/mp4"
                          media="(max-width: 767px)"
                      />
                </video>
            </div>
    
            {/* Testo accanto all'immagine */}
            <div className="w-full lg:w-1/2 p-6 lg:py-20 lg:px-30">
              <h1 className="text-2xl lg:text-5xl uppercase mb-12">
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
      </>
    );
  }
  