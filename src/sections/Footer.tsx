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
    <div className="px-8 mt-48 bg-cover">
      <div
        id="Contact"
        className="flex justify-between h-64 p-5 bg-secondary">
        <div className="flex flex-col justify-between">
          <h1 className="text-2xl font-bold">#Store Name</h1>
          <div className="flex gap-2">
            {socialMediaLinks.map((link) => (
              <Button>{link.icon}</Button>
            ))}
          </div>
          <p className="flex items-center gap-2 text-lg">
            <Copyright /> copyright
          </p>
        </div>
        <div className="flex flex-col justify-between max-sm:hidden">
          <Button> Contact Now</Button>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            asperiores blanditiis sed.
          </p>
        </div>
      </div>
    </div>
  );
};
