import { ContactButton } from "@/components/ContactButton";
import { Button } from "@/components/ui/button";

import {
  Copyright,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";

export const Footer = () => {
  //
  const socialMediaLinks = [
    {
      name: "Instagram",
      icon: <Instagram />,
      href: "",
    },
    {
      name: "Facebook",
      icon: <Facebook />,
      href: "",
    },
    {
      name: "Twitter",
      icon: <Twitter />,
      href: "",
    },
    {
      name: "Linkedin",
      icon: <Linkedin />,
      href: "",
    },
  ];

  return (
    <div className="mt-48 w-full bg-secondary bg-cover px-4 sm:px-6 lg:px-8">
      <div
        id="Contact"
        className="mx-auto flex h-48 max-w-7xl justify-between gap-5 border-x p-5 max-sm:h-auto max-sm:flex-col max-sm:gap-9">
        {/*  */}
        <div className="flex min-w-max flex-col justify-between gap-1 rounded-lg p-3 max-sm:items-center sm:pr-2">
          <h1 className="text-2xl font-bold">#Store Name</h1>

          <div className="flex gap-3">
            {socialMediaLinks.map((link) => (
              <Button
                key={link.name}
                className="rounded-full">
                {link.icon}
              </Button>
            ))}
          </div>
          <p className="flex items-center gap-2 text-lg">
            <Copyright /> 2023 Daniel Aliphon
          </p>
        </div>

        <div className="flex flex-col items-center justify-around rounded-lg text-center max-sm:hidden">
          <h1 className="text-2xl font-semibold">About Us</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate
            odio quo, quia labore non fuga! At ea esse non nam atque dicta
            soluta temporibus eius? Nulla et consequuntur quam sed?
          </p>
        </div>

        <div className="min-w-48 flex flex-col items-end justify-evenly rounded-lg pr-4 text-end max-sm:items-center max-sm:p-4 max-sm:text-center">
          <ContactButton />

          <p>Lorem ipsum dolor sit amet adipisicing elit.</p>
        </div>
      </div>
    </div>
  );
};
