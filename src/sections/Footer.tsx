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
    <div className="w-full px-4 mt-48 bg-cover sm:px-6 lg:px-8 bg-secondary">
      <div
        id="Contact"
        className="flex justify-between h-48 gap-5 p-5 mx-auto border-x max-w-7xl max-sm:h-auto max-sm:gap-9 max-sm:flex-col ">
        {/*  */}
        <div className="flex flex-col justify-between gap-1 p-3 rounded-lg max-sm:items-center sm:pr-2 min-w-max">
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

        <div className="flex flex-col items-center justify-around text-center rounded-lg max-sm:hidden">
          <h1 className="text-2xl font-semibold ">About Us</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate
            odio quo, quia labore non fuga! At ea esse non nam atque dicta
            soluta temporibus eius? Nulla et consequuntur quam sed?
          </p>
        </div>

        <div className="flex flex-col items-end pr-4 rounded-lg max-sm:items-center max-sm:text-center max-sm:p-4 justify-evenly text-end min-w-48">
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
