import { popularProducts } from "@/Products";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { SplideCard } from "../SplideCard";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";

export const Carousel = () => {
  return (
    <div>
      <Splide
        options={{
          rewind: true,
          arrows: false,
          pagination: false,
          type: "loop",
          drag: "free",
          focus: "center",
          perPage: 3,
          autoScroll: {
            pauseOnHover: false,
            pauseOnFocus: false,
            rewind: false,
            speed: 1,
          },
        }}
        extensions={{ AutoScroll }}>
        {popularProducts.map((product) => (
          <SplideSlide>
            <SplideCard data={product} />
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

{
  /* <div className=" h-[300px] bg-secondary w-[200px]"></div> */
}
{
  /* <Card className="h-[275px] w-[311px]">
            <CardContent>
              <div className="relative rounded-lg aspect-square bg-foreground/5 dark:bg-background">
                <img
                  src={consoleImage}
                  alt="product image"
                  className="object-cover transition-all duration-300 rounded-lg aspect-square hover:scale-105"
                />
              </div>
            </CardContent>
          </Card> */
}
