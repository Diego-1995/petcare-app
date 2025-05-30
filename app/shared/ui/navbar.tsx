'use client';

import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent, SheetTitle } from "@/components/ui/sheet";
import { iconMenuMap } from "@/config/icons";
import { menuLinks } from "@/config/menu-links";
import { NavigationMenu, NavigationMenuList, NavigationMenuLink } from "@radix-ui/react-navigation-menu";
import { Instagram, MenuIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="h-20 md:h-28 flex items-center justify-between bg-white px-6 shadow-[0_2px_4px_var(--color-primary)]">
      <div className="flex items-center h-full">
        <Link href="/" className="block relative" prefetch={false}>
          <Image 
            src="/images/logo.png" 
            alt="logo"
            width={80}
            height={80}
                  className="w-20 h-20 sm:w-24 sm:h-24" // Aggiungi classi responsive
          />
        </Link>
      </div>

      {/* Mobile Navigation - Sheet */}
      <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
        <SheetTrigger asChild className="w-12">
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            aria-label="Open navigation menu"
          >
            <MenuIcon />
          </Button>
        </SheetTrigger>
        <SheetContent side="right">
          <SheetTitle>
            <Image 
              src="/images/logo.png" 
              alt="Logo" 
              width={80}
              height={80}
            />
          </SheetTitle>
          <div className="grid gap-">
            {menuLinks.map((item, index) => (
              <Link
                key={index}
                onClick={() => setIsSheetOpen(false)}
                href={item.href}
                className="text-base flex w-full items-center p-2 font-semibold text-foreground border-b-2 border-primary"
                prefetch={false}
              >
                    <span className="mr-2">{iconMenuMap[item.icon]}</span> 
                {item.text}
              </Link>

            ))}
          </div>
        </SheetContent>
      </Sheet>

      {/* Desktop Navigation */}
      <NavigationMenu className="hidden lg:flex w-2/3 justify-center">
        <NavigationMenuList className="flex items-center justify-around gap-20 px-12">
          {menuLinks.map((item) => (
            <NavigationMenuLink asChild key={item.href} className={`${pathname === item.href ? 'border-primary' : 'border-transparent'} text-lg text-foreground border-b-4`}>
              <Link href={item.href} prefetch={false} className="relative group">
                {item.text}
                <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-[4px] bg-primary transition-all duration-300 ease-in-out group-hover:w-full group-hover:translate-x-[-50%]"></span>
              </Link>
            </NavigationMenuLink>
          ))}
        </NavigationMenuList>
      </NavigationMenu>

      <div className="lg:flex items-center gap-6 hidden">
        <a href="https://www.instagram.com/lacasadioresteasilo/?api=postMessage%2F" target="_blank" rel="noopener noreferrer">
          <Instagram className="text-foreground"/>
        </a>
        <a href="https://www.tiktok.com/@lacasadioresteasilo?_t=ZN-8vCmNxnU8Uo&_r=1" target="_blank" rel="noopener noreferrer">
          <Image src={'/images/tiktok.svg'} width={20} height={20} alt="tiktok" />
        </a>
        <a href="https://wa.me/393381457299">
          <Button className="material-button">
            Contattaci
            <Image src={'/images/whatsapp.svg'} width={20} height={20} alt="whatsapp" />
          </Button>
        </a>
      </div>
    </nav>
  );
}
