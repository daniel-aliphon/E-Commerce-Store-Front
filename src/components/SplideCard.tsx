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
      <Card className="border-2 rounded-lg w-[311px]">
        <CardContent className="pt-4">
          <div className="relative rounded-lg aspect-square bg-foreground/5 dark:bg-background">
            <img
              src={data.images?.[0]}
              alt="product image"
              className="object-cover transition-all duration-300 rounded-lg aspect-square hover:scale-105"
            />
          </div>
          <div className="flex flex-col items-start mt-4">
            <div>
              <p className="text-lg font-semibold ">{data.name}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </a>
  );
};
