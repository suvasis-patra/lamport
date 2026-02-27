"use client";

import { HERO_SECTION_ACTIONS, WHY_SOLANA } from "@/lib/constants";
import { motion, useReducedMotion } from "motion/react";
import { MoveRight } from "lucide-react";
import { SolTerminal } from "./sol-terminal";
import { Button } from "./ui/button";

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

const hoverLift = (reduceMotion: boolean | null) => {
  if (reduceMotion === true) return {};

  return {
    whileHover: {
      y: -4,
      boxShadow: "0 18px 35px -26px rgba(24, 24, 27, 0.5)",
    },
  };
};

const HeroSection = () => {
  const reduceMotion = useReducedMotion();

  return (
    <div className="mt-20 md:mt-25">
      <div className="flex w-full flex-col items-center justify-center gap-5">
        <motion.div className="flex items-center gap-3" {...reveal(0.06, reduceMotion)}>
          <p className="flex items-center gap-3 rounded-2xl bg-primary/10 px-3 py-1.5 text-sm font-semibold uppercase text-primary">
            <motion.span
              className="flex h-3 w-3 items-center justify-center rounded-full bg-primary"
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
            secure & non-custodial
          </p>
        </motion.div>

        <motion.h1
          className="text-center text-2xl font-bold uppercase md:text-4xl lg:text-6xl"
          {...reveal(0.12, reduceMotion)}
        >
          Own Your <span className="text-primary">Digital</span> <br />
          <span>Sovereignty</span>
        </motion.h1>

        <motion.div className="px-2 text-center font-medium md:px-0" {...reveal(0.18, reduceMotion)}>
          <p>A minimalist, high-performance wallet for the Solana ecosystem.</p>
          <p>Manage assets, stake SOL, and explore dApps with absolute security.</p>
        </motion.div>
      </div>

      <div className="mt-12 flex flex-col items-center justify-center gap-15 md:flex-row">
        {HERO_SECTION_ACTIONS.map((action, idx) => (
          <motion.div
            key={action.title}
            className="flex min-w-90 flex-col items-center justify-center rounded-2xl border border-zinc-300 bg-zinc-100/50 p-6 shadow-sm"
            {...reveal(0.22 + idx * 0.1, reduceMotion)}
            {...hoverLift(reduceMotion)}
          >
            <div
              className={`my-3 flex items-center justify-center rounded-xl p-4 ${action.iconBgColor === "" ? "bg-primary" : action.iconBgColor}`}
            >
              {action.icon}
            </div>
            <h3 className="my-3 text-xl font-bold uppercase">{action.title}</h3>
            <p className="max-w-40 text-center text-base text-zinc-700">{action.description}</p>
            <Button
              className="mt-5 flex items-center gap-3 capitalize"
              variant={idx % 2 === 0 ? "outline" : "default"}
              size={"lg"}
            >
              {action.actionBtnContent}
              <span>
                <MoveRight />
              </span>
            </Button>
          </motion.div>
        ))}
      </div>

      <div className="mt-18 flex flex-col items-center justify-center gap-8">
        <motion.h3
          className="text-center text-base font-semibold uppercase text-primary"
          {...reveal(0.08, reduceMotion)}
        >
          Why Solana?
        </motion.h3>
        <div className="flex flex-col gap-5 px-4 md:flex-row md:items-center md:justify-center md:px-0">
          {WHY_SOLANA.map((item, idx) => (
            <motion.div
              key={item.title}
              className="flex w-full flex-col items-center justify-center gap-2.5 rounded-2xl border border-zinc-300 bg-zinc-100/50 p-6 text-center shadow-sm md:max-w-80"
              {...reveal(0.14 + idx * 0.08, reduceMotion)}
              {...hoverLift(reduceMotion)}
            >
              <div className="rounded-full bg-zinc-200/50 p-3">{item.icon}</div>
              <h3 className="text-center text-base font-semibold uppercase">{item.title}</h3>
              <p className="text-zinc-600">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <section className="mt-14 border-y border-zinc-300/80 bg-zinc-100/70 py-10 md:py-16">
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 px-4 md:px-6 lg:grid-cols-2 lg:items-start lg:gap-14 lg:px-10">
          <motion.div {...reveal(0.08, reduceMotion)}>
            <h3 className="text-3xl leading-tight font-bold uppercase text-zinc-900 md:text-4xl">
              The Modern Standard for SOL Assets
            </h3>

            <div className="mt-7 space-y-4">
              <motion.div
                className="rounded-xl border border-zinc-200 bg-white p-4 shadow-sm"
                {...reveal(0.16, reduceMotion)}
                {...hoverLift(reduceMotion)}
              >
                <div className="flex items-start gap-3">
                  <span className="inline-flex h-9 min-w-9 items-center justify-center rounded-lg bg-zinc-100 text-base font-semibold text-green-500">
                    01
                  </span>
                  <div className="space-y-1">
                    <p className="text-lg font-semibold text-zinc-900">Direct Network Access</p>
                    <p className="text-base text-zinc-600">
                      Interact directly with RPC nodes. No middleman, no tracking, pure
                      decentralization.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="rounded-xl border border-zinc-200 bg-white p-4 shadow-sm"
                {...reveal(0.24, reduceMotion)}
                {...hoverLift(reduceMotion)}
              >
                <div className="flex items-start gap-3">
                  <span className="inline-flex h-9 min-w-9 items-center justify-center rounded-lg bg-zinc-100 text-base font-semibold text-green-500">
                    02
                  </span>
                  <div className="space-y-1">
                    <p className="text-lg font-semibold text-zinc-900">Audit-Ready Security</p>
                    <p className="text-base text-zinc-600">
                      Built on proven cryptographic libraries. Our architecture prioritizes
                      safety over flashy features.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div className="w-full lg:pt-2" {...reveal(0.2, reduceMotion)}>
            <SolTerminal />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
