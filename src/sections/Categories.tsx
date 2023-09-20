import { categories } from "@/Products";
import { CategoriesProductCard } from "@/components/CategoriesProductCard";
import { Button } from "@/components/ui/button";
import catbg from "../assets/categoriesbg.jpg";

export const Categories = () => {
  return (
    <div
      id="Categories"
      className="relative flex flex-col px-4 text-center md:flex-row sm:px-6 lg:px-8 mt-28">
      <div
        className="relative mr-4 rounded-lg bg-secondary"
        style={{ backgroundImage: `url(${catbg})` }}>
        <div className="sticky top-[40%] p-4 mt-28 md:my-[106px] bg-secondary/60">
          <h1 className="text-3xl font-bold rounded-lg text-deep-blue sm:text-5xl lg:text-6xl dark:text-white">
            Categories
          </h1>
          <br />
          <p>
            Equip youself with hardware and every accessory you will ever need
            with our endless selection of products
          </p>
        </div>
      </div>

      <div className="space-y-10 ">
        {categories.map((category) => (
          <div key={category.Title}>
            <h1 className="mb-2 text-2xl font-semibold sm:text-4xl lg:text-5xl">
              {category.Title}
            </h1>

            <p>Description</p>

            <div className="md:grid md:grid-cols-3 md:gap-4 sm:grid sm:grid-cols-2 sm:gap-4">
              {category.products.map((product) => (
                <CategoriesProductCard
                  key={product.id}
                  data={product}
                />
              ))}
            </div>

            <Button className="my-4">View in Store</Button>

            <hr />
          </div>
        ))}
      </div>
    </div>
  );
};
