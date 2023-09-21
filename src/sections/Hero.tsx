import hero from "../assets/hero-1920x1080.jpg";
import { Button } from "../components/ui/button";
import { ShoppingBag } from "lucide-react";
export const Hero = () => {
  return (
    <div
      id="Hero"
      className="p-4 overflow-hidden rounded-lg sm:p-6 lg:p-8">
      <div
        style={{ backgroundImage: `url(${hero})` }}
        className=" rounded-lg relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover mt-32">
        <div className="flex flex-col items-center justify-center w-full h-full text-center gap-y-8">
          <div className="max-w-xs p-4 text-3xl font-bold rounded-lg text-deep-blue sm:text-5xl lg:text-6xl sm:max-w-xl dark:text-white bg-secondary/60">
            Welcome
            <Button
              size="lg"
              className="w-full py-6 text-xl ">
              <ShoppingBag className="mr-2" />
              Lets Go Shopping
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
