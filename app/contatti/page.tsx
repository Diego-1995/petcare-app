'use client';

import dynamic from 'next/dynamic';

const MapEmbed = dynamic(() => import('../shared/ui/map-embed'), { ssr: false });

export default function ContactsPage() {
    return (
        <>
            <header className="p-6 md:p-20 text-center">
                <h1 className="text-2xl mb-4 md:text-5xl">
                    <span className="text-accent font-bold">Contattaci</span>
                </h1>
                <p className="text-base md:text-2xl">
                    Dove e come raggiungerci
                </p>
            </header>
            <main className='flex flex-col md:flex-row mb-6 md:mb-20 gap-12'>
                <div className='flex-1'>
                    <MapEmbed />
                </div>
                <div className='flex-1 px-6'>
                    <div>
                        <div>
                            <div className='mb-3'>
                                <h1 className='text-xl md:text-2xl mb-3'>Orari</h1>
                                <p className='text-base'>
                                    <strong>
                                        Lun - Ven: 09:30 - 18:00
                                    </strong>
                                </p>
                                <p className='text-base'>
                                    <strong>
                                        Sabato: 09:30 - 13:30
                                    </strong>
                                </p>
                                <p className='text-base'>
                                    <strong>
                                        Dom: Chiuso
                                    </strong>
                                </p>
                            </div>
                            <div className='mb-3'>
                                <h1 className='text-xl md:text-2xl mb-3'>Indirizzo</h1>
                                <a className='text-sm md:text-base' 
                                href="https://maps.app.goo.gl/DGBQ4a3fWjwHBJXX6" target='_blank' rel='noopener'>
                                    Via Cortivallo 3 , 6900 Lugano 
                                </a>
                            </div>
                            <div>
                                <h1 className='text-xl md:text-2xl mb-3'>Recapiti</h1>
                                <p>
                                    Email: &nbsp;
                                    <a href="mailto:31m2ofbeauty@gmail.com">31m2ofbeauty@gmail.com</a> <br />
                                </p>
                                <p>
                                    Cell: &nbsp;
                                    <a href="tel:0041763083244">0041 76 308 32 44</a>
                                </p>
                                <p>
                                    Whatsapp: &nbsp;
                                    <a href="https://wa.me/41763083244" target='_blank'>+41 76 308 32 44</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}