"use client";

import { usePathname } from "next/navigation";
import Footer from "./Footer";
import Navbar from "./Navbar";

const darkPagePrefixes = [
  "/contact",
  "/privacy",
  "/terms",
];

export default function SiteChrome({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const useDarkLogo = darkPagePrefixes.some(
    (prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`)
  );

  return (
    <>
      <Navbar logoVariant={useDarkLogo ? "dark" : "light"} />
      {children}
      <Footer />
    </>
  );
}