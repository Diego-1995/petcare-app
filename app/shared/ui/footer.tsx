import { Instagram, } from "lucide-react";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-primary px-6 shadow-[0_2px_4px_var(--color-accent)]">
           
            <div className=" border-b-1 border-accent-foreground border-opacity-20">
              <div className="flex flex-col md:flex-row justify-between text-black">
                {/* <div className="flex-3 hidden md:block">
                  <Image 
                  src="/images/logo.png" 
                  alt="Logo" 
                  width={300}
                  height={100}
                  />
                </div>
                <div className="flex-3 md:hidden">
                  <Image 
                  src="/images/logo.png" 
                  alt="Logo" 
                  width={100}
                  height={100}
                  className="m-auto"
                  />
                </div> */}
                <div className="flex-1 flex flex-col md:flex-row text-center justify-around py-6 md:py-20 gap-6">
                    <div>
                      <h1 className="text-xl font-bold mb-3 text-foreground" >Indirizzo</h1>
                      <a className='text-sm md:text-base' 
                        href="https://maps.app.goo.gl/DGBQ4a3fWjwHBJXX6" target='_blank' rel='noopener'>
                            Via Cortivallo 3 , 6900 Lugano 
                      </a>
                    </div>
                    <div>
                      <h1 className="text-xl font-bold mb-3 text-foreground">Orari</h1>
                      <p>
                        <strong className="text-foreground">Lun - Ven: 09:30 - 18:00</strong>
                      </p>
                      <p>
                        <strong className="text-foreground">Sabato: 09:30 - 13:30</strong>
                      </p>
                      <p>
                        <strong className="text-foreground">Dom: Chiuso</strong>
                      </p>
                    </div>
                    <div>
                      <h1 className="text-xl font-bold mb-3 text-foreground">Contatti</h1>
                      <p className="text-base">
                        <strong className="text-foreground">
                        Email: &nbsp; 
                        </strong>
                        <a href="mailto:31m2ofbeauty@gmail.com">31m2ofbeauty@gmail.com</a> <br />
                      </p>
                      <p className="text-base">
                        <strong className="text-foreground">
                          Cell: &nbsp; 
                        </strong>
                        <a href="tel:0041763083244">+41 76 308 32 44</a>
                      </p>
                      <p className="text-base">
                        <strong className="text-foreground">
                        Whatsapp: &nbsp; 
                        </strong>
                        <a href="https://wa.me/41763083244" target='_blank'>+41 76 308 32 44</a>
                      </p>
                    </div>
                    <div >
                      <h1 className="text-xl font-bold mb-3 text-foreground">Social</h1>
                      <p className="flex justify-center">
                        <a href="https://www.instagram.com/31_mqofbeauty?igsh=MTQxbjgyc3RxM2oyZA==" target="_blank" rel="noopener noreferrer">
                            <Instagram className="text-foreground"/>
                        </a>
                      </p>
                    </div>
                </div>
              </div>
            </div>
            <div className="py-3 text-right">
              <Link href="/cookie-policy text-foreground">
                Privacy & Cookie Policy
              </Link>
            </div>
      </footer>
    )
}