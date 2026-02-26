import { ExternalLink } from "lucide-react";
import { Button } from "./ui/button";

export function SolTerminal() {
  return (
    <div className="w-full rounded-2xl border border-zinc-200 bg-white p-6 shadow-[0_12px_35px_-20px_rgba(34,197,94,0.45)] md:p-7">
      <div className="mb-8 flex items-center justify-between">
        <span className="h-3 w-3 rounded-full bg-red-500" />
        <span className="text-[11px] uppercase tracking-wide text-zinc-500">
          solana-wallet-v1.0.0
        </span>
      </div>

      <div className="space-y-3 font-mono text-sm text-zinc-700">
        <p>$ solana-wallet init</p>
        <p>{"> Generating secure entropy..."}</p>
        <p>{"> Encrypting with AES-256-GCM..."}</p>
        <p className="font-semibold text-green-500">
          {"> Wallet ready for 1,000+ tokens"}
        </p>
      </div>

      <div className="mt-10 flex justify-end">
        <Button
          variant="outline"
          className="h-9 rounded-xl border-zinc-300 bg-white px-4 text-zinc-700 hover:bg-zinc-100"
        >
          View Source
          <ExternalLink className="size-4" />
        </Button>
      </div>
    </div>
  );
}
