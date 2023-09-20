import { ShoppingCart, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Card, CardTitle, CardContent, CardFooter } from "@/components/ui/card";

export const CartButton = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Button
          className="mr-2"
          variant={"ghost"}
          size={"icon"}
          aria-label="Shopping Cart">
          <ShoppingCart className="w-6 h-6" />
          <span className="sr-only ">Shopping Cart</span>
        </Button>
      </SheetTrigger>

      <SheetContent
        side={"right"}
        className="pt-11 w-[230px] sm:w-[300px]">
        <Card className="flex flex-col justify-between p-5 space-y-4 ">
          <CardTitle>
            <h1 className="flex items-center gap-3 pb-5 border-b text3xl">
              Shopping Cart
              <ShoppingCart className="w-5 h-5" />
            </h1>
          </CardTitle>

          <CardContent className="p-0">
            <div className="h-56 ">Cart Empty</div>
          </CardContent>

          <CardFooter className="p-0">
            <Button className="gap-1">
              Checkout <ArrowRight className="w-5 h-5" />
            </Button>
          </CardFooter>
        </Card>
      </SheetContent>
    </Sheet>
  );
};
