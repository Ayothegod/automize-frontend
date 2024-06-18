import logo from "@/assets/logoblack.svg";
import { Bell, Mail, Search } from "lucide-react";
import { Input } from "../ui/input";
import Logo from "./Logo";

export default function TopBar({ picture, user }: any) {
  console.log(picture, user);
  return (
    <div className="flex h-12 w-full items-center justify-between px-2 text-neutral-500">
      <div className="flex-shrink-0 md:mr-16 md:hidden">
        <Logo logo={logo} className="h-8 w-8" />
      </div>

      <div className="ml-auto flex items-center divide-x-2 md:flex-grow">
        <div className="flex w-full items-center gap-2 pr-2">
          <Input
            className="hidden md:flex md:h-full md:flex-grow"
            placeholder="search through your profile.."
          />
          <div className="rounded-md border p-1 md:hidden">
            <Search className="h-5 w-5 md:h-6 md:w-6" />
          </div>
          <div className="rounded-md border p-1">
            <Mail className="h-5 w-5 md:h-6 md:w-6" />
          </div>
          <div className="rounded-md border p-1">
            <Bell className="h-5 w-5 md:h-6 md:w-6" />
          </div>
        </div>
      </div>
    </div>
  );
}
