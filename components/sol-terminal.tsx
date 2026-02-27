"use client";

import { motion, useReducedMotion } from "motion/react";
import { ExternalLink } from "lucide-react";
import { Button } from "./ui/button";

const reveal = (delay: number, reduceMotion: boolean | null) => {
  if (reduceMotion === true) return {};

  return {
    initial: { opacity: 0, y: 10 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.4 },
    transition: {
      duration: 0.45,
      delay,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  };
};

export function SolTerminal() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className="w-full rounded-2xl border border-zinc-200 bg-white p-6 shadow-[0_12px_35px_-20px_rgba(34,197,94,0.45)] md:p-7"
      whileHover={
        reduceMotion
          ? undefined
          : {
              y: -4,
              boxShadow: "0 22px 40px -24px rgba(34, 197, 94, 0.45)",
            }
      }
    >
      <div className="mb-8 flex items-center justify-between">
        <motion.span
          className="h-3 w-3 rounded-full bg-green-500"
          animate={
            reduceMotion
              ? undefined
              : {
                  boxShadow: [
                    "0 0 0 0 rgba(34, 197, 94, 0.35)",
                    "0 0 0 8px rgba(34, 197, 94, 0)",
                    "0 0 0 0 rgba(34, 197, 94, 0)",
                  ],
                }
          }
          transition={
            reduceMotion
              ? undefined
              : { duration: 1.8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }
          }
        />
        <span className="text-[11px] uppercase tracking-wide text-zinc-500">
          solana-wallet-v1.0.0
        </span>
      </div>

      <div className="space-y-3 font-mono text-sm text-zinc-700">
        <motion.p {...reveal(0.08, reduceMotion)}>$ solana-wallet init</motion.p>
        <motion.p {...reveal(0.18, reduceMotion)}>
          {"> Generating secure entropy..."}
        </motion.p>
        <motion.p {...reveal(0.28, reduceMotion)}>
          {"> Encrypting with AES-256-GCM..."}
        </motion.p>
        <motion.p className="font-semibold text-green-500" {...reveal(0.38, reduceMotion)}>
          {"> Wallet ready for 1,000+ tokens"}
        </motion.p>
      </div>

      <motion.div className="mt-10 flex justify-end" whileHover={reduceMotion ? undefined : { y: -1 }}>
        <Button
          variant="outline"
          className="h-9 rounded-xl border-zinc-300 bg-white px-4 text-zinc-700 hover:bg-zinc-100"
        >
          View Source
          <ExternalLink className="size-4" />
        </Button>
      </motion.div>
    </motion.div>
  );
}
