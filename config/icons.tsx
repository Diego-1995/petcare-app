import { IconSvgProps } from "@/types";
import { Contact, Cookie, Footprints, Hand, Home, PawPrint, Scissors, Store } from "lucide-react";
import { JSX } from "react";

export const MenuIcon: React.FC<IconSvgProps> = (props) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
};


export const iconMenuMap: { [key: string]: JSX.Element } = {
  home: <Home />,
  contact: <Contact />,
  pawPrint: <PawPrint />,
  scissors: <Scissors />,
  food: <Cookie />
};

export const iconSpecializationMap: { [key: string]: JSX.Element } = {
  home: <Home />,
  feet: <Footprints />,
  hand: <Hand />,
  skin: <Store />,
};

