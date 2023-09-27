import { GamesCarouselRight } from "@/components/GameSplideRight";
import { GamesCarouselLeft } from "@/components/GamesSplideLeft";

export const Games = () => {
  return (
    <>
      <div
        id="Games"
        className="grid grid-cols-3">
        <div>
          <GamesCarouselLeft />
        </div>

        <div className="relative text-center">
          <div className="sticky h-28 top-[50%] space-y-5 px-4">
            <h1 className="text-6xl font-semibold ">Games</h1>
            <p>
              Experience a wide array of games, ranging from AAA titles to indie
              gems, totaling almost 10,000 options.
            </p>
          </div>
        </div>

        <div>
          <GamesCarouselRight />
        </div>
      </div>
    </>
  );
};
