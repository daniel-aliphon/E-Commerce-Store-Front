import { Carousel } from "@/components/ui/splide";

export const Deals = () => {
  return (
    <div
      id="Deals"
      className="relative p-4 sm:p-6 lg:p-8">
      <div className="flex flex-col justify-between">
        <div className="text-center my-11">
          <h1 className="mb-3 text-3xl font-bold rounded-lg text-deep-blue sm:text-5xl lg:text-6xl dark:text-white">
            <span className="text-red-500 ">Specials</span> &{" "}
            <span className="text-red-500 ">Deals</span>
          </h1>
          <p>on selected products</p>
        </div>
        <div className="mt-5">
          <Carousel />
        </div>
      </div>
    </div>
  );
};
