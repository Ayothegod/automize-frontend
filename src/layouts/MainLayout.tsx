import Logo from "@/components/layout/Logo";
import TopBar from "@/components/layout/TopBar";
import * as Icons from "lucide-react";
import logoblack from "@/assets/logoblack.svg";
import { Button } from "@/components/ui/button";
import { sidebarData } from "@/lib/data";
import Cookies from "js-cookie";
import { Link, Outlet, useLocation } from "react-router-dom";
// import logowhite from "@/assets/logowhite.svg";

export default function MainLayout() {
  const location = useLocation();
  const path = location.pathname;

  const logout = async () => {
    Cookies.remove("user_access");
    return window.location.reload();
  };

  return (
    <div className="">
      <section className="max-w-6xl mx-auto flex px-2">
        {/* DESKTOP-SIDEBAR */}
        <div className="hidden md:flex md:w-[240px] flex-col flex-shrink-0 px-1">
          <div className="w-full max-h-screen py-4 space-y-4">
            <div className="flex items-center gap-4 text-2xl font-bold">
              <Logo logo={logoblack} className="h-6 w-6" />
              <span>Automize</span>
            </div>

            <ul className="flex flex-col">
              {sidebarData.map((data) => {
                const IconComponent: any =
                  Icons[data.iconType as keyof typeof Icons];
                return (
                  <Link
                    to={data.url}
                    key={data.id}
                    className={`flex items-center gap-4 p-2 rounded-md text-neutral-500 hover:bg-neutral-100 ${
                      data.url === path && "bg-neutral-100 text-black"
                    }`}
                  >
                    {IconComponent && <IconComponent className="w-5 h-5" />}
                    <li>{data.title}</li>
                  </Link>
                );
              })}
            </ul>
          </div>

          <div className="mt-auto mb-4 w-full">
            <div className="">
              <Button onClick={logout} className="w-full">Log out</Button>
            </div>
            {/* <Link
              to="/settings"
              className={`flex items-center gap-4 rounded-md p-2 text-neutral-500 hover:bg-neutral-100 ${
                path === "/settings" && "bg-neutral-100 text-black"
              }`}
            >
              <Icons.Settings className="h-5 w-5" />
              <li className="list-none">Settings</li>
            </Link> */}
          </div>
        </div>

        <div className="w-full flex-grow min-h-screen">
          <TopBar picture={"picture"} user={"user"} />
          <Outlet />
        </div>

        {/* MOBILE-MENU  */}
        <div className="hidden md:">Sidebar</div>
      </section>
    </div>
  );
}
