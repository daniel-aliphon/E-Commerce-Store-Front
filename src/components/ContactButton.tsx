import { ArrowDown } from "lucide-react";
import { Button } from "./ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export const ContactButton = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Button className="flex flex-row gap-2'">
          Contact Now <ArrowDown className="w-5 h-5" />
        </Button>
      </SheetTrigger>
      <SheetContent
        side={"bottom"}
        className=" max-sm:pt-10 max-sm:h-80 md:h-64">
        <div className="flex justify-center gap-2">
          <div className="flex flex-col justify-between w-64">
            <Textarea
              placeholder="Your Name:"
              className="resize-none "
            />
            <Textarea
              placeholder="Your Email:"
              className="resize-none "
            />
            <Textarea
              placeholder="How you found us: (optional)"
              className="resize-none "
            />
          </div>
          <div className="flex flex-col w-64 gap-5">
            <Textarea
              placeholder="Your message:"
              className="h-40 resize-none "
            />
            <Button>Send message</Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};
