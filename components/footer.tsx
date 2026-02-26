import Image from "next/image";

const Footer = () => {
  return (
    <footer className="mt-14">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-4 py-10 md:px-8 lg:flex-row lg:items-start lg:justify-between lg:gap-14">
        <div className="max-w-sm">
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
        </div>

        <div className="grid w-full grid-cols-2 gap-8 sm:grid-cols-3 lg:w-auto lg:gap-14">
          <nav>
            <h3 className="text-base font-bold uppercase text-zinc-900">
              Product
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-zinc-600 sm:text-base">
              <li>Security</li>
              <li>Networks</li>
              <li>Browser Extension</li>
            </ul>
          </nav>

          <nav>
            <h3 className="text-base font-bold uppercase text-zinc-900">
              Resources
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-zinc-600 sm:text-base">
              <li>Support</li>
              <li>Terms of Service</li>
              <li>Privacy Policies</li>
            </ul>
          </nav>

          <nav className="col-span-2 sm:col-span-1">
            <h3 className="text-base font-bold uppercase text-zinc-900">
              Community
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-zinc-600 sm:text-base">
              <li>Twitter</li>
              <li>Discord</li>
              <li>Github</li>
            </ul>
          </nav>
        </div>
      </div>

      <div className="border-t border-zinc-200/80">
        <p className="px-4 py-4 text-center text-xs text-zinc-500 sm:text-sm">
          © {new Date().getFullYear()} Lamport. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
