import { Card, CardContent } from "@/components/ui/card";
import { Product } from "@/types";

interface CategoriesProductCard {
  data: Product;
}

export const CategoriesProductCard: React.FC<CategoriesProductCard> = ({
  data,
}) => {
  return (
    <a
      href=""
      className="rounded-lg outline-0 ring-primary transition duration-300 hover:ring-2">
      <Card className="rounded-lg border-2">
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
            </div>
          </div>
        </CardContent>
      </Card>
    </a>
  );
};
