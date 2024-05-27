"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChangeEvent, useState } from "react";

const Header = () => {
  const pathname = usePathname();
  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpandMenu = (e: ChangeEvent<HTMLInputElement>) => {
    setIsExpanded(e.target.checked);
  };

  const handleRemoveMenu = () => {
    setIsExpanded(false);
  };

  return (
    <header className="navbar px-8 py-8 border-b-2 border-waikawa-gray-200/50 lg:px-20">
      <div className="flex-1">
        <Link
          href="/"
          className={`flex items-center gap-2 btn btn-ghost ${
            pathname == "/" ? "btn-active" : ""
          } text-lg`}
          onClick={handleRemoveMenu}
        >
          <Image
            src="/hello-world-logo.svg"
            width={32}
            height={32}
            alt="The logo of Hello World, it's double slash."
          />
          Hello World
        </Link>
      </div>
      <label className="btn btn-circle btn-ghost swap swap-rotate text-waikawa-gray-800 grid lg:hidden">
        <input
          type="checkbox"
          onChange={(e) => handleExpandMenu(e)}
          checked={isExpanded}
          aria-controls="menu"
          aria-expanded={isExpanded ? true : false}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-8 h-8 swap-off fill-current"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 9h16.5m-16.5 6.75h16.5"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-8 h-8 swap-on fill-current"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
      </label>
      <nav
        id="menu"
        className={`absolute top-28 z-20 bg-waikawa-gray-50 left-0 lg:static lg:block ${
          isExpanded ? "block" : "hidden"
        }`}
        role="navigation"
      >
        <ul className="flex flex-col items-center gap-4 w-dvw h-[calc(100dvh-7rem)] p-8 lg:flex-row lg:w-fit lg:h-fit lg:p-0">
          <li>
            <Link
              href="/picture"
              className={`btn btn-ghost ${
                pathname == "/picture" ? "btn-active" : ""
              } text-lg`}
              onClick={handleRemoveMenu}
            >
              Picture Generator
            </Link>
          </li>
          <li>
            <Link
              href="/manifest"
              className={`btn btn-ghost ${
                pathname == "/manifest" ? "btn-active" : ""
              } text-lg`}
              onClick={handleRemoveMenu}
            >
              Manifest Generator
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
