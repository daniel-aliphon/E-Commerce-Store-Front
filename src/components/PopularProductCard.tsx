import { Card, CardContent } from "@/components/ui/card";
import { Product } from "@/types";

interface PopularProductCard {
  data: Product;
}

export const PopularProductCard: React.FC<PopularProductCard> = ({ data }) => {
  return (
    <a
      href="/"
      className="transition duration-300 rounded-lg outline-0 focus:ring-2 hover:ring-2 ring-primary">
      <Card className="border-2 rounded-lg ">
        <CardContent className="pt-4">
          <div className="relative rounded-lg aspect-square bg-secondary/60">
            <img
              src={data.images?.[0]}
              alt="product image"
              className="object-cover transition-all duration-300 rounded-lg aspect-square hover:scale-105"
            />
          </div>
          <div className="flex flex-col items-start mt-4">
            <div>
              <p className="text-lg font-semibold ">{data.name}</p>
              <p className="text-sm text-start text-primary/80">
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
