import { GamesCarouselRight } from "@/components/GameSplideRight";
import { GamesCarouselLeft } from "@/components/GamesSplideLeft";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Games = () => {
  return (
    <>
      <div
        id="Games"
        className="grid grid-cols-3 px-4 max-sm:grid-cols-1 mt-52 border-y sm:px-6 lg:px-8">
        <div>
          <GamesCarouselLeft />
        </div>

        <div className="relative pb-5 text-center">
          <div className="sticky top-[50%] space-y-5 px-4">
            <h1 className="text-6xl font-semibold ">Games</h1>
            <p>
              Experience a wide array of games, ranging from AAA titles to indie
              gems, totaling almost 10,000 options.
            </p>
            <Button>
              View All in Store <ArrowRight />{" "}
            </Button>
          </div>
        </div>

        <div>
          <GamesCarouselRight />
        </div>
      </div>
    </>
  );
};
