"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";

const reveal = (delay: number, reduceMotion: boolean | null) => {
  if (reduceMotion === true) return {};

  return {
    initial: { opacity: 0, y: 14 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.3 },
    transition: {
      duration: 0.6,
      delay,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  };
};

const Footer = () => {
  const reduceMotion = useReducedMotion();

  return (
    <motion.footer
      className="mt-14 border-t border-zinc-200/80 bg-zinc-50/70"
      {...reveal(0, reduceMotion)}
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-4 py-10 md:px-8 lg:flex-row lg:items-start lg:justify-between lg:gap-14">
        <motion.div className="max-w-sm" {...reveal(0.08, reduceMotion)}>
          <Image
            src={"/assets/lamport_logo.svg"}
            height={70}
            width={220}
            alt="lamport"
            className="h-auto w-40 sm:w-48"
          />
          <p className="mt-3 text-sm text-zinc-600 sm:text-base">
            The most secure way to manage your Solana assets.
          </p>
        </motion.div>

        <div className="grid w-full grid-cols-2 gap-8 sm:grid-cols-3 lg:w-auto lg:gap-14">
          <motion.nav {...reveal(0.15, reduceMotion)}>
            <h3 className="text-base font-bold uppercase text-zinc-900">
              Product
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-zinc-600 sm:text-base">
              <li className="transition-colors duration-200 hover:text-green-500">
                Security
              </li>
              <li className="transition-colors duration-200 hover:text-green-500">
                Networks
              </li>
              <li className="transition-colors duration-200 hover:text-green-500">
                Browser Extension
              </li>
            </ul>
          </motion.nav>

          <motion.nav {...reveal(0.22, reduceMotion)}>
            <h3 className="text-base font-bold uppercase text-zinc-900">
              Resources
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-zinc-600 sm:text-base">
              <li className="transition-colors duration-200 hover:text-green-500">
                Support
              </li>
              <li className="transition-colors duration-200 hover:text-green-500">
                Terms of Service
              </li>
              <li className="transition-colors duration-200 hover:text-green-500">
                Privacy Policies
              </li>
            </ul>
          </motion.nav>

          <motion.nav
            className="col-span-2 sm:col-span-1"
            {...reveal(0.29, reduceMotion)}
          >
            <h3 className="text-base font-bold uppercase text-zinc-900">
              Community
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-zinc-600 sm:text-base">
              <li className="transition-colors duration-200 hover:text-green-500">
                Twitter
              </li>
              <li className="transition-colors duration-200 hover:text-green-500">
                Discord
              </li>
              <li className="transition-colors duration-200 hover:text-green-500">
                Github
              </li>
            </ul>
          </motion.nav>
        </div>
      </div>

      <motion.div className="border-t border-zinc-200/80" {...reveal(0.33, reduceMotion)}>
        <p className="px-4 py-4 text-center text-xs text-zinc-500 sm:text-sm">
          (c) {new Date().getFullYear()} Lamport. All rights reserved.
        </p>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
