import { Card, CardContent } from "@/components/ui/card";
import { Product } from "@/types";

interface PopularProductCard {
  data: Product;
}

export const PopularProductCard: React.FC<PopularProductCard> = ({ data }) => {
  return (
    <a
      href=""
      className="rounded-lg outline-0 ring-primary transition duration-300 hover:ring-2 focus:ring-2">
      <Card className="rounded-lg border-2">
        <CardContent className="pt-4">
          <div className="relative aspect-square rounded-lg bg-secondary/60">
            <img
              src={data.images?.[0]}
              alt="product image"
              className="aspect-square rounded-lg object-cover transition-all duration-300 hover:scale-105"
            />
          </div>
          <div className="mt-4 flex flex-col items-start">
            <div>
              <p className="text-lg font-semibold">{data.name}</p>
              <p className="text-start text-sm text-primary/80">
                {data.category}
              </p>
            </div>
            <div className="flex items-center justify-between">
              {data?.price}
            </div>
          </div>
        </CardContent>
      </Card>
    </a>
  );
};
