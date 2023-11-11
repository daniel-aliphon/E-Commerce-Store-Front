import hero from "../assets/hero-1920x1080.jpg";
import { Button } from "../components/ui/button";
import { ShoppingBag } from "lucide-react";
export const Hero = () => {
  return (
    <div
      id="Hero"
      className="overflow-hidden rounded-lg p-4 sm:p-6 lg:p-8">
      <div
        style={{ backgroundImage: `url(${hero})` }}
        className="relative mt-32 aspect-square overflow-hidden rounded-lg bg-cover md:aspect-[2.4/1]">
        <div className="flex h-full w-full flex-col items-center justify-center gap-y-8 text-center">
          <div className="max-w-xs rounded-lg bg-secondary/60 p-4 text-3xl font-bold text-deep-blue dark:text-white sm:max-w-xl sm:text-5xl lg:text-6xl">
            #Store Name
            <Button
              size="lg"
              className="w-full py-6 text-xl">
              <ShoppingBag className="mr-2" />
              Lets Go Shopping
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
