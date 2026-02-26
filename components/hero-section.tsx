import { HERO_SECTION_ACTIONS, WHY_SOLANA } from "@/lib/constants";
import { Button } from "./ui/button";
import { MoveRight } from "lucide-react";
import { SolTerminal } from "./sol-terminal";

const HeroSection = () => {
  return (
    <div className="mt-20 md:mt-25">
      <div className="w-full flex flex-col items-center justify-center gap-5">
        <div className="flex items-center gap-3">
          <p className="flex items-center gap-3 rounded-2xl px-3 py-1.5 text-sm bg-primary/10 uppercase text-primary font-semibold">
            <span className="flex justify-center rounded-full items-center h-3 w-3 bg-primary"></span>
            secure & non-custodial
          </p>
        </div>
        <h1 className="text-center uppercase font-bold text-2xl md:text-4xl lg:text-6xl">
          Own Your <span className="text-primary">Digital</span> <br />
          <span>Sovereignty</span>
        </h1>
        <div className="text-center font-medium px-2 md:px-0">
          <p>A minimalist, high-performance wallet for the Solana ecosystem.</p>
          <p>
            Manage assets, stake SOL, and explore dApps with absolute security.
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center gap-15 mt-12">
        {HERO_SECTION_ACTIONS.map((action, idx) => (
          <div
            className="flex p-6 items-center justify-center flex-col rounded-2xl bg-zinc-100/50 border border-zinc-300 min-w-90 shadow-sm"
            key={action.title}
          >
            <div
              className={`p-4 rounded-xl flex items-center justify-center my-3 ${action.iconBgColor === "" ? "bg-primary" : action.iconBgColor}`}
            >
              {action.icon}
            </div>
            <h3 className="text-xl font-bold uppercase my-3">{action.title}</h3>
            <p className="max-w-40 text-base text-zinc-700 text-center">
              {action.description}
            </p>
            <Button
              className="flex items-center gap-3 capitalize mt-5"
              variant={idx % 2 === 0 ? "outline" : "default"}
              size={"lg"}
            >
              {action.actionBtnContent}
              <span>
                <MoveRight />
              </span>
            </Button>
          </div>
        ))}
      </div>
      <div className="mt-18 flex flex-col gap-8 items-center justify-center">
        <h3 className="font-semibold text-base text-center uppercase text-primary">
          Why Solana?
        </h3>
        <div className="flex flex-col px-4 md:px-0 md:flex-row gap-5 md:items-center md:justify-center">
          {WHY_SOLANA.map((item) => (
            <div
              key={item.title}
              className="flex p-6 items-center justify-center flex-col gap-2.5 rounded-2xl bg-zinc-100/50 border border-zinc-300 w-full md:max-w-80 shadow-sm text-center"
            >
              <div className="p-3 rounded-full bg-zinc-200/50">{item.icon}</div>
              <h3 className="uppercase text-base font-semibold text-cente">
                {item.title}
              </h3>
              <p className="text-zinc-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
      <section className="mt-14 border-y border-zinc-300/80 bg-zinc-100/70 py-10 md:py-16">
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 px-4 md:px-6 lg:grid-cols-2 lg:items-start lg:gap-14 lg:px-10">
          <div>
            <h3 className="text-3xl font-bold uppercase leading-tight text-zinc-900 md:text-4xl">
              The Modern Standard for SOL Assets
            </h3>

            <div className="mt-7 space-y-4">
              <div className="rounded-xl border border-zinc-200 bg-white p-4 shadow-sm">
                <div className="flex items-start gap-3">
                  <span className="inline-flex h-9 min-w-9 items-center justify-center rounded-lg bg-zinc-100 text-base font-semibold text-green-500">
                    01
                  </span>
                  <div className="space-y-1">
                    <p className="text-lg font-semibold text-zinc-900">
                      Direct Network Access
                    </p>
                    <p className="text-base text-zinc-600">
                      Interact directly with RPC nodes. No middleman, no
                      tracking, pure decentralization.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-zinc-200 bg-white p-4 shadow-sm">
                <div className="flex items-start gap-3">
                  <span className="inline-flex h-9 min-w-9 items-center justify-center rounded-lg bg-zinc-100 text-base font-semibold text-green-500">
                    02
                  </span>
                  <div className="space-y-1">
                    <p className="text-lg font-semibold text-zinc-900">
                      Audit-Ready Security
                    </p>
                    <p className="text-base text-zinc-600">
                      Built on proven cryptographic libraries. Our architecture
                      prioritizes safety over flashy features.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:pt-2">
            <SolTerminal />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
