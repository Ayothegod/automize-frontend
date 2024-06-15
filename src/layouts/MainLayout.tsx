import TopBar from "@/components/layout/TopBar";
// import { sidebarData } from "@/lib/data";
// import * as Icons from "lucide-react";
import { LinkIcon } from "lucide-react";
import { Link, Outlet} from "react-router-dom";

export default function MainLayout() {
    // const location = useLocation()
  return (
    <div className="">
    <section className="max-w-6xl mx-auto flex px-2">
      {/* DESKTOP-SIDEBAR */}
      <div className="hidden md:flex md:w-[280px] flex-shrink-0 debug">
        <div className="w-full h-screen py-4 space-y-4">
          <div className="flex items-center gap-4 text-2xl font-bold">
            <LinkIcon className="w-6 h-6" />
            <span>SocialSync</span>
          </div>

          <div>Active accounts</div> 
          <Link to="/login">To login</Link>

          {/* <ul className="flex flex-col gap-1">
            {sidebarData.map((data) => {
              const IconComponent: any = Icons[data.iconType as keyof typeof Icons]
              return (
                <Link to={data.url} key={data.id} className={`flex items-center gap-4 p-2 rounded-md text-neutral-500 hover:bg-neutral-100 ${data.url === path && "bg-neutral-100 text-black"}`}>
                  {IconComponent && <IconComponent className="w-5 h-5" />} 
                  <li>{data.title}</li>
                </Link>
              );
            })}
          </ul> */}
        </div>
      </div>

      <div className="w-full flex-grow min-h-screen debug">
        <TopBar/>
        <Outlet />
      </div>

      {/* MOBILE-MENU  */}
      <div className="hidden md:">Sidebar</div>
    </section>
  </div>
  )
}
