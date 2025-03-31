import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function WhatsappButton() {
    return (
        <div className="fixed bottom-5 right-5 md:hidden">
            <Button className="bg-accent px-4 py-6 rounded-full">
                <Image src={'/images/whatsapp.svg'} width={20} height={20} alt="whatsapp" />
            </Button>
        </div>        
    )
}