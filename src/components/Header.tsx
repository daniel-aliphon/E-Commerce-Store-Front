"use client";

import { useTheme } from "next-themes";
import { Button } from "./ui/button";
import Container from "./ui/container";
import { ProfileButton } from "./ProfileButton";
import { Sun, Moon, Menu } from "lucide-react";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { CartButton } from "./CartButton";

export const Header = () => {
  const { theme, setTheme } = useTheme();

  const routes = [
    {
      href: "#PopularProducts",
      label: "Popular",
    },
    {
      href: "#Contact",
      label: "Contact",
    },
    {
      href: "#Categories",
      label: "Categories",
    },
    {
      href: "#Games",
      label: "Games",
    },
    {
      href: "#Deals",
      label: "On Sale",
    },
  ];

  return (
    <header className="fixed z-10 w-full px-4 py-3 dark:bg-[hsl(222.2,84%,4.9%)] bg-white border-b sm:flex sm:justify-between">
      <Container>
        <div className="relative flex items-center justify-between w-full h-16 px-4 sm:px-6 lg:px-8">
          <div className="flex items-center">
            <Sheet>
              <SheetTrigger>
                <Menu className="h-6 md:hidden" />
              </SheetTrigger>

              <SheetContent
                side={"left"}
                className=" w-[300px] sm:w-[400px] pt-11">
                <nav className="flex flex-col gap-4">
                  {routes.map((route, i) => (
                    <Button
                      asChild
                      key={route.label}
                      variant={"ghost"}>
                      <a
                        key={i}
                        className="block px-2 py-1 text-lg"
                        href={route.href}>
                        {route.label}
                      </a>
                    </Button>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>

            <a
              href=""
              className="ml-4 lg:ml-0">
              <h1 className="text-xl font-bold">#Store Name</h1>
            </a>
          </div>
          <nav className="flex items-center hidden mx-6 space-x-4 lg:space-x-6 md:block">
            {routes.map((route, i) => (
              <Button
                asChild
                variant={"ghost"}
                key={route.label}>
                <a
                  className="text-sm font-medium transition-colors "
                  key={i}
                  href={route.href}>
                  {route.label}
                </a>
              </Button>
            ))}
          </nav>
          <div className="flex items-center">
            <CartButton />
            <Button
              variant={"ghost"}
              size={"icon"}
              aria-label="Toggle Theme"
              className="mr-6 rounded-full"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
              <Sun className="w-6 h-6 transition-all scale-100 rotate-0 dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute w-6 h-6 transition-all scale-0 rotate-90 dark:-rotate-0 dark:scale-100" />

              <span className="sr-only ">Toggle Theme</span>
            </Button>
            <ProfileButton />
          </div>
        </div>
      </Container>
    </header>
  );
};
