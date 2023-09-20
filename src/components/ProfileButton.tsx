import profile from "../assets/profile.jpg";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const ProfileButton = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="rounded-full">
        <Avatar className="w-9 h-9">
          <AvatarImage src={profile} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="cursor-pointer ">Profile</DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer ">Billing</DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer ">
          Subscription
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer ">Log Out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
