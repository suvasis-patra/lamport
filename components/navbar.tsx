import Image from "next/image";
import { Button } from "./ui/button";
import { ArrowUpRight } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="border-b border-b-zinc-700/20 py-2 px-3 md:px-8">
      <div className="w-full flex items-center justify-between">
        <div>
          <Image
            src={"./assets/lamport_logo.svg"}
            height={70}
            width={200}
            alt="lamport"
          />
        </div>
        <div>
          <Button className="flex items-center gap-3 bg-primary">
            Get Started
            <span>
              <ArrowUpRight />
            </span>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
