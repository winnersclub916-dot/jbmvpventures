"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Blog", href: "/blog" },
  ];

  return (
    <header className="w-full shadow-sm">
      <div className="mx-auto px-4 sm:px-6 md:px-8 lg:px-10 flex items-center justify-between h-16">
        <Link
          href="/"
          className="text-2xl font-serif font-medium tracking-wide"
        >
          WIN<span className="text-red-800 font-serif">N</span>ERS
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors ${
                  isActive ? "text-primary" : "text-foreground hover:text-primary"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <Button
          variant="outline"
          className="!border-primary md:flex hidden text-foreground hover:!bg-primary rounded-full hover:text-white"
        >
          <Link href="/contact">Contact Us</Link>
        </Button>
        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button>
                <Menu className="h-6 w-6" />
              </button>
            </SheetTrigger>

            <SheetContent side="left" className="p-6">
              <SheetHeader>
                <SheetTitle className="text-2xl font-serif">
                  WIN<span className="text-red-800 font-serif">N</span>ERS
                </SheetTitle>
              </SheetHeader>

              <div className="mt-6 flex flex-col space-y-4">
                {[...navItems, { label: "Contact Us", href: "/contact" }].map(
                  (item) => {
                    const isActive = pathname === item.href;
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className={`text-lg font-medium ${
                          isActive
                            ? "text-primary"
                            : "text-gray-800 hover:text-primary"
                        }`}
                      >
                        {item.label}
                      </Link>
                    );
                  }
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
