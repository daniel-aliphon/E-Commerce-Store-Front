import { ContactButton } from "@/components/ContactButton";
import { Button } from "@/components/ui/button";

import {
  Copyright,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";

const routes = [
  {
    href: "#Hero",
    label: "Home",
  },
  {
    href: "#PopularProducts",
    label: "Popular",
  },
  {
    href: "#Categories",
    label: "Categories",
  },
  {
    href: "#On-Sale",
    label: "Deals",
  },
];

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
    <div className="px-4 mt-48 bg-cover sm:px-6 lg:px-8">
      <div
        id="Contact"
        className="flex justify-between h-48 gap-5 p-5 rounded-t-lg max-sm:h-auto max-sm:gap-9 max-sm:flex-col bg-secondary ">
        {/*  */}
        <div className="flex flex-col justify-between max-sm:items-center sm:pr-2 sm:border-r min-w-max">
          <h1 className="text-2xl font-bold">#Store Name</h1>

          <p>
            |
            {routes.map((route) => (
              <a
                key={route.label}
                href={route.href}>
                {" "}
                {route.label} |
              </a>
            ))}
          </p>
          <div className="flex gap-3">
            {socialMediaLinks.map((link) => (
              <Button
                key={link.name}
                className="">
                {link.icon}
              </Button>
            ))}
          </div>
          <p className="flex items-center gap-2 text-lg">
            <Copyright /> copyright
          </p>
        </div>

        <div className="flex flex-col items-center justify-between text-center max-sm:hidden">
          <h1 className="text-2xl font-semibold ">About Us</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate
            odio quo, quia labore non fuga! At ea esse non nam atque dicta
            soluta temporibus eius? Nulla et consequuntur quam sed?Lorem ipsum
          </p>
        </div>

        <div className="flex flex-col items-center justify-around pl-2 text-center sm:border-l min-w-48">
          <ContactButton />

          <p>
            Lorem ipsum dolor sit amet adipisicing elit. Quisquam asperiores
            blanditiis sed.
          </p>
        </div>
      </div>
    </div>
  );
};
