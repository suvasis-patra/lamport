"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { Button } from "./ui/button";
import { ArrowUpRight } from "lucide-react";

const Navbar = () => {
  const reduceMotion = useReducedMotion();

  return (
    <motion.nav
      className="border-b border-b-zinc-700/20 bg-white/85 px-3 py-2 backdrop-blur md:px-8"
      initial={reduceMotion ? undefined : { opacity: 0, y: -10 }}
      animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      transition={
        reduceMotion
          ? undefined
          : { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }
      }
    >
      <div className="w-full flex items-center justify-between">
        <motion.div
          initial={reduceMotion ? undefined : { opacity: 0, y: 12 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={
            reduceMotion
              ? undefined
              : { duration: 0.5, delay: 0.08, ease: [0.22, 1, 0.36, 1] as const }
          }
        >
          <Image
            src={"/assets/lamport_logo.svg"}
            height={70}
            width={200}
            alt="lamport"
            className="h-auto w-36 sm:w-40 md:w-44"
          />
        </motion.div>
        <motion.div
          initial={reduceMotion ? undefined : { opacity: 0, y: 12 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          whileHover={reduceMotion ? undefined : { y: -2 }}
          transition={
            reduceMotion
              ? undefined
              : { duration: 0.45, delay: 0.14, ease: [0.22, 1, 0.36, 1] as const }
          }
        >
          <Button className="group flex items-center gap-3 bg-primary px-5">
            Get Started
            <span className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
              <ArrowUpRight />
            </span>
          </Button>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
