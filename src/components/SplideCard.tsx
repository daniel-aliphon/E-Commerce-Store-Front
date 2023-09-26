import { Card, CardContent } from "@/components/ui/card";
import { Product } from "@/types";

interface SplideCard {
  data: Product;
}

export const SplideCard: React.FC<SplideCard> = ({ data }) => {
  return (
    <a
      href="/"
      className="transition duration-300 rounded-lg outline-0 ring-primary">
      <Card className="border-2 relative max-sm:w-[200px]  overflow-hidden rounded-lg w-[311px]">
        <CardContent className="pt-4">
          <div className="relative rounded-lg aspect-square bg-foreground/5">
            <img
              src={data.images?.[0]}
              alt="product image"
              className="object-cover transition-all duration-300 rounded-lg aspect-square hover:scale-105"
            />
          </div>
          <div className="flex flex-col items-start mt-4">
            <div>
              <p className="text-lg font-semibold ">{data.name}</p>
              <p className="text-sm">{data.category}</p>
            </div>
            <div>
              <p className="flex gap-3 text-lg font-semibold ">
                <span className="line-through decoration-red-500 w-11 decoration-[3px]">
                  {data.price}
                </span>
                <span className="text-red-500 ">{data.discountedPrice}</span>
              </p>
            </div>
          </div>
        </CardContent>
        <div className="rotate-[45deg] max-sm:left-0 left-[25%] absolute w-80 text-center bg-red-500 top-[18%]">
          50% OFF!
        </div>
      </Card>
    </a>
  );
};
