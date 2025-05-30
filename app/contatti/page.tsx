'use client';

import dynamic from 'next/dynamic';
import HeaderDetail from '../shared/ui/header-detail';

const MapEmbed = dynamic(() => import('../shared/ui/map-embed'), { ssr: false });

export default function ContactsPage() {
    return (
        <>
            <HeaderDetail title='Contattaci' subtitle='Dove e come raggiungerci'/>
            <main className='flex flex-col md:flex-row mb-6 md:mb-20 gap-12'>
                <div className='flex-1'>
                    <MapEmbed />
                </div>
                <div className='flex-1 px-6'>
                    <div>
                        <div>
                            <div className='mb-3'>
                                <h1 className='text-xl md:text-2xl mb-3'>
                                    Orari (Disponibile anche fuori orario su richiesta!)
                                </h1>
                                <p className='text-base'>
                                    <strong>
                                        Lun - Ven: 08:00 - 17:30
                                    </strong>
                                </p>
                                <p className='text-base'>
                                    <strong>
                                        Sabato: 09:00 - 16:00
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
                                    Via della Cervara, 19, 38121 Trento TN
                                </a>
                            </div>
                            <div>
                                <h1 className='text-xl md:text-2xl mb-3'>Recapiti</h1>
                                <p>
                                    Email: &nbsp;
                                        <a href="mailto:lacasadioresteasilo@gmail.com">lacasadioresteasilo@gmail.com</a> <br />
                                    </p>
                                <p>
                                    Cell: &nbsp;
                                    <a href="tel:00393381457299">+39 33 81 45 72 99</a>
                                </p>
                                <p>
                                    Whatsapp: &nbsp;
                                    <a href="https://wa.me/41763083244" target='_blank'>+39 33 81 45 72 99</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}