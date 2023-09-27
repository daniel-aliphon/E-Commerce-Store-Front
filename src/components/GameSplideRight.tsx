import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import { gamesProducts } from "@/Products";
import { GamesCard } from "@/components/GamesCard";

export const GamesCarouselRight = () => {
  return (
    <div>
      <Splide
        options={{
          rewind: true,
          gap: "500px",
          arrows: false,
          direction: "ttb",
          pagination: false,
          height: "900px",
          type: "loop",
          drag: "free",
          focus: "center",
          perPage: 3,
          autoScroll: {
            pauseOnHover: false,
            pauseOnFocus: false,
            rewind: false,
            speed: -1,
          },
        }}
        extensions={{ AutoScroll }}>
        {gamesProducts.right.map((game) => (
          <SplideSlide>
            <GamesCard data={game} />
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};
