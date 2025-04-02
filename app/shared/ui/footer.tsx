import { Instagram, } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

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
                            Via della Cervara, 19, 38121 Trento TN 
                      </a>
                    </div>
                    <div>
                      <h1 className="text-xl font-bold mb-3 text-foreground">Orari</h1>
                      <p>
                        <strong className="text-foreground">Lun - Ven: 08:00 - 17:30</strong>
                      </p>
                      <p>
                        <strong className="text-foreground">Sabato: 09:00 - 16:00</strong>
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
                        <a href="mailto:lacasadioresteasilo@gmail.com">lacasadioresteasilo@gmail.com</a> <br />
                      </p>
                      <p className="text-base">
                        <strong className="text-foreground">
                          Cell: &nbsp; 
                        </strong>
                        <a href="tel:00393381457299">+39 33 81 45 72 99</a>
                      </p>
                      <p className="text-base">
                        <strong className="text-foreground">
                        Whatsapp: &nbsp; 
                        </strong>
                        <a href="https://wa.me/41763083244" target='_blank'>+39 33 81 45 72 99</a>
                      </p>
                    </div>
                    <div >
                      <h1 className="text-xl font-bold mb-3 text-foreground">Social</h1>
                      <p className="flex justify-center gap-3">
                        <a href="https://www.instagram.com/lacasadioresteasilo/?api=postMessage%2F" target="_blank" rel="noopener noreferrer">
                            <Instagram className="text-foreground"/>
                        </a>
                        <a href="https://www.tiktok.com/@lacasadioresteasilo?_t=ZN-8vCmNxnU8Uo&_r=1" target="_blank" rel="noopener noreferrer">
                          <Image src={'/images/tiktok.svg'} width={20} height={20} alt="tiktok" />
                        </a>
                        <a href="https://wa.me/393381457299">
                            <Image src={'/images/whatsapp.svg'} width={20} height={20} alt="whatsapp" />
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