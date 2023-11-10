import { Card, CardContent } from "@/components/ui/card";
import { Product } from "@/types";

interface GamesCard {
  data: Product;
}

export const GamesCard: React.FC<GamesCard> = ({ data }) => {
  return (
    <a
      href=""
      className="rounded-lg outline-0 ring-primary transition duration-300">
      <Card className="relative overflow-hidden rounded-lg border-2">
        <CardContent className="pt-4">
          <div className="relative aspect-square rounded-lg bg-foreground/5">
            <img
              src={data.images?.[0]}
              alt="product image"
              className="aspect-square rounded-lg object-cover transition-all duration-300 hover:scale-105"
            />
          </div>
        </CardContent>
      </Card>
    </a>
  );
};
