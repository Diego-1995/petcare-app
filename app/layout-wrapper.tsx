import Footer from "./shared/ui/footer";
import Header from "./shared/ui/header";
import WhatsappButton from "./shared/ui/whatsapp-button";

export default function LayoutWrapper({children}:{ children: React.ReactNode }) {
    return (
        <>
            <Header/>
                {children}
            <Footer />
            <WhatsappButton />

        </>
    )
}