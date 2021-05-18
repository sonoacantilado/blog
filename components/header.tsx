import React from "react";
import Link from "next/link";
import { useTheme } from "next-themes";

import DarkIcon from "./icons/dark";
import LogoIcon from "./icons/logo";

type Props = {
  logoText: string;
};

const Header = ({ logoText }: Props) => {
  const { resolvedTheme, setTheme } = useTheme();

  const handleChangeTheme = () => {
    setTheme(resolvedTheme === "light" ? "dark" : "light");
  };

  return (
    <header className="flex items-center justify-between px-6 py-4 container max-w-4xl mx-auto h-16">
      <Link href="/">
        <a className="flex items-center p-2">
          <LogoIcon size="lg" className="mr-2" />
          <span className="text-lg font-bold">{logoText}</span>
        </a>
      </Link>
      <button
        className="text-gray-400 hover:text-black transition-colors p-2"
        onClick={handleChangeTheme}
        aria-label="Toggle theme"
      >
        <DarkIcon />
      </button>
    </header>
  );
};

export default Header;
