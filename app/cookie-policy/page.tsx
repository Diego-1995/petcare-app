import Head from 'next/head';

export default function CookiePolicyPage() {
    return (
        <>
            <Head>
                <title>Cookie Policy | 31 M2 OF BEAUTY</title>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            <main className='px-6 py-6'>
                <header className="p-6 md:p-20 text-center">
                    <h1 className="text-2xl mb-4 md:text-5xl">
                        <span className="text-accent font-bold">Cookie Policy</span>
                    </h1>
                </header>
                <section className='mb-4'>
                    <h2 className='text-xl md:text-2xl mb-2'>1. Cosa sono i cookie?</h2>
                    <p>I cookie sono piccoli file di testo che vengono salvati sul tuo dispositivo quando visiti un sito web. Servono per migliorare l’esperienza di navigazione e garantire il corretto funzionamento del sito.</p>
                </section>
                <section className='mb-4'>
                    <h2 className='text-xl md:text-2xl mb-2'>2. Tipologie di cookie utilizzati</h2>
                    <p>Il sito di <strong>31 M2 OF BEAUTY, SAGL</strong> utilizza solo cookie tecnici essenziali, necessari per:</p>
                    <ul>
                        <li>Permettere la navigazione del sito.</li>
                        <li>Garantire la sicurezza e il corretto funzionamento del sito.</li>
                    </ul>
                    <p>Questi cookie non raccolgono informazioni personali e non richiedono il consenso dell’utente.</p>
                </section>
                <section className='mb-4'>
                    <h2 className='text-xl md:text-2xl mb-2'>3. Cookie di terze parti</h2>
                    <p>Il nostro sito non utilizza cookie di terze parti per analisi, pubblicità o tracciamento degli utenti.</p>
                </section>
                <section className='mb-4'>
                    <h2 className='text-xl md:text-2xl mb-2'>4. Gestione dei cookie</h2>
                    <p>Poiché utilizziamo solo cookie tecnici, la loro disattivazione potrebbe compromettere il funzionamento del sito. Tuttavia, puoi configurare il tuo browser per bloccare o eliminare i cookie nelle impostazioni di sicurezza.</p>
                </section>
                <section className='mb-4'>
                    <h2 className='text-xl md:text-2xl mb-2'>5. Modifiche alla Cookie Policy</h2>
                    <p>Ci riserviamo il diritto di aggiornare questa Cookie Policy. Eventuali modifiche saranno pubblicate su questa pagina.</p>
                    <p>Per qualsiasi domanda, puoi contattarci a: <a href="mailto:31m2ofbeauty@gmail.com">31m2ofbeauty@gmail.com</a></p>
                </section>
            </main>
        </>
    );
}
