import { PopularProductCard } from "./PopularProductCard";
import { Product } from "@/types";

interface PopularProductsList {
  items: Product[];
}

export const PopularProductsList: React.FC<PopularProductsList> = ({
  items,
}) => {
  return (
    <div className="space-y-4 ">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {items.map((item) => (
          <PopularProductCard
            key={item.id}
            data={item}
          />
        ))}
      </div>
    </div>
  );
};
