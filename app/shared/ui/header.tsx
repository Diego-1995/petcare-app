'use client';

import { motion, useScroll, useTransform } from "framer-motion";
import Discount from "./discount";
import Navbar from "./navbar";

export default function Header() {
  // Use the `useScroll` hook to get scroll position
  const { scrollY } = useScroll();

  // Use `useTransform` to set a threshold for changing the background color
  const backgroundColor = useTransform(scrollY, [0, 100], ['rgba(0, 0, 0, 0)', 'hsl(21, 100%, 95%)']);

  return (
    <motion.header
      className="w-full sticky top-0 z-20"
      style={{
        backgroundColor,
        transition: 'background-color 0.6s ease-in-out' // Add smooth transition here
      }}
    >
      <Discount />
      <Navbar />
    </motion.header>
  );
};

