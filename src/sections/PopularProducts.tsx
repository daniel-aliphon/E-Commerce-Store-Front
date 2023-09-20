import { PopularProductsList } from "../components/PopularProductLists";
import { popularProducts } from "../Products";

export const PopularProducts = () => {
  return (
    <div
      id="PopularProducts"
      className="flex flex-col px-4 mt-24 text-center gap-y-8 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold rounded-lg text-deep-blue sm:text-5xl lg:text-6xl dark:text-white">
        Popular Products
      </h1>
      <p>Our most sought after and highly valued products to date</p>
      <PopularProductsList items={popularProducts} />
    </div>
  );
};
