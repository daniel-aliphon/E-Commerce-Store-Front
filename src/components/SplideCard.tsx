import { Card, CardContent } from "@/components/ui/card";
import { Product } from "@/types";

interface SplideCard {
  data: Product;
}

export const SplideCard: React.FC<SplideCard> = ({ data }) => {
  return (
    <a
      href=""
      className="rounded-lg outline-0 ring-primary transition duration-300">
      <Card className="relative w-[311px] overflow-hidden rounded-lg border-2 max-sm:w-[200px]">
        <CardContent className="pt-4">
          <div className="relative aspect-square rounded-lg bg-foreground/5">
            <img
              src={data.images?.[0]}
              alt="product image"
              className="aspect-square rounded-lg object-cover transition-all duration-300 hover:scale-105"
            />
          </div>
          <div className="mt-4 flex flex-col items-start">
            <div>
              <p className="text-lg font-semibold">{data.name}</p>
              <p className="text-sm">{data.category}</p>
            </div>
            <div>
              <p className="flex gap-3 text-lg font-semibold">
                <span className="w-11 line-through decoration-red-500 decoration-[3px]">
                  {data.price}
                </span>
                <span className="text-red-500">R999</span>
              </p>
            </div>
          </div>
        </CardContent>
        <div className="absolute left-[25%] top-[18%] w-80 rotate-[45deg] bg-red-500 text-center max-sm:left-0">
          50% OFF!
        </div>
      </Card>
    </a>
  );
};
