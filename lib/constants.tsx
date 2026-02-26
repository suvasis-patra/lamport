import { CirclePlus, Cpu, Download, Key, ShieldCheck } from "lucide-react";

import { THeroAction, TWhySol } from "./types";

export const HERO_SECTION_ACTIONS: THeroAction[] = [
  {
    title: "create new wallet",
    description:
      "Generate a fresh vault with a new 12-word recovery phrase. Secure and private",
    actionBtnContent: "get started",
    actionBtnType: "",
    icon: <CirclePlus className="text-white" />,
    iconBgColor: "",
  },
  {
    title: "import wallet",
    description:
      "Already have a wallet? Restore it using your existing mnemonic phrase or private key.",
    actionBtnContent: "get started",
    actionBtnType: "",
    icon: <Download className="text-black" />,
    iconBgColor: "bg-zinc-200",
  },
];

export const WHY_SOLANA: TWhySol[] = [
  {
    title: "local encryption",
    description:
      "Your private keys never leave your device. Encrypted locally with your master password.",
    icon: <ShieldCheck className="text-primary" />,
  },
  {
    title: "bip39 standard",
    description:
      "Compatible with industry standards. Use your mnemonic phrase anywhere in the crypto world.",
    icon: <Key className="text-primary" />,
  },
  {
    title: "native speed",
    description:
      "Optimized for Solana's 400ms block times. Instant balances and lightning-fast transactions.",
    icon: <Cpu className="text-primary" />,
  },
];
