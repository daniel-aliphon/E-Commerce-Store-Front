import { Card, CardContent } from "@/components/ui/card";
import { Product } from "@/types";

interface GamesCard {
  data: Product;
}

export const GamesCard: React.FC<GamesCard> = ({ data }) => {
  return (
    <a
      href="/"
      className="transition duration-300 rounded-lg outline-0 ring-primary">
      <Card className="relative overflow-hidden border-2 rounded-lg">
        <CardContent className="pt-4">
          <div className="relative rounded-lg aspect-square bg-foreground/5">
            <img
              src={data.images?.[0]}
              alt="product image"
              className="object-cover transition-all duration-300 rounded-lg aspect-square hover:scale-105"
            />
          </div>
        </CardContent>
      </Card>
    </a>
  );
};
