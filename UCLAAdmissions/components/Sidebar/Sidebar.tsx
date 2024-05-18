import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import {
  MenuIcon,
  Calendar,
  GalleryHorizontalEnd,
  LucideFileQuestion,
  LucideAreaChart,
  LucideMessageCircle,
  LucideLayoutDashboard
} from "lucide-react";
import { useSidebar } from "./use-sidebar";
import { cn } from "@/app/libs/utlis";
import LinkItem from "./LinkItem";

interface SidebarProps {}

const Sidebar = ({}: SidebarProps) => {
  const pathname = usePathname();
  const { isSidebarOpen, toggleSidebar } = useSidebar((state) => state);

  return (
    <>
      <aside
        className={cn(
          `absolute left-0 top-0 z-9999 flex h-screen w-20 flex-col overflow-y-hidden bg-blue-400 duration-300 ease-linear  dark:bg-boxdark lg:static lg:translate-x-0 `,
          {
            "w-70": isSidebarOpen,
          },
        )}
      >
        {/* <!-- SIDEBAR HEADER --> */}
        <div className="relative flex w-full items-center justify-between gap-2 px-6 py-5.5 lg:py-6.5">
          <Link className="flex items-center" href="/">
            <Image
              className="h-6 w-6 rounded-md"
              width={400}
              height={400}
              src={"/images/logo/sohamPic.jpg"}
              alt="Logo"
            />
            {isSidebarOpen && (
              <h1 className=" ml-2 text-xl font-semibold text-white">
                Soham Pilli
              </h1>
            )}
          </Link>
          {isSidebarOpen && (
            <MenuIcon onClick={toggleSidebar} className="h-6 w-6" />
          )}
        </div>
        {/* <!-- SIDEBAR HEADER --> */}

        <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
          {/* <!-- Sidebar Menu --> */}
          <nav className="px-4 py-4  lg:px-6">
            {/* <!-- Menu Group --> */}
            <div>
              <ul
                className={cn("mb-9 flex flex-col gap-15", {
                  "items-center justify-center": !isSidebarOpen,
                })}
              >
                {/* <!-- Menu Item Dashboard --> */}
                <li>
                    <LinkItem
                      icon={<LucideLayoutDashboard />}
                      title="Admissions Dashboard"
                      href="/"
                    />
                </li>
                {/* <!-- Menu Item Dashboard --> */}

                {/* <!-- Menu Item Calendar --> */}
                <li>
                  <LinkItem
                    title="Calendar"
                    href="/calendar"
                    icon={<Calendar className="h-6 w-6" />}
                  ></LinkItem>
                </li>

                {/* My Profile Page */}
                <li>
                  <LinkItem
                    title="My Profile"
                    href="/profile"
                    icon={<GalleryHorizontalEnd className="h-6 w-6" />}
                  ></LinkItem>
                </li>

                {/* Example Tester Page */}
                {/* <li>
                  <LinkItem
                    title="Pick Your Major"
                    href="/exampleTester"
                    icon={<LucideAreaChart className="h-6 w-6" />}
                  ></LinkItem>
                </li> */}
                {/* Example Tester Page End */}

                {/* Chatbot and FAQ Page*/}
                {/* <li>
                  <LinkItem
                    title="Chatbot FAQ"
                    href="/chatbotFAQ"
                    icon={<LucideFileQuestion className="h-6 w-6" />}
                  ></LinkItem>
                </li> */}
                {/* */}
                {/* <li>
                  <LinkItem
                    title="Chatbot Tester"
                    href="/chatbotTester"
                    icon={<LucideMessageCircle className="h-6 w-6" />}
                  ></LinkItem>
                </li> */}
                {/* <li>
                  <LinkItem
                    title="Video Carousel"
                    href="/videoCarousel"
                    icon={<GalleryHorizontalEnd className="h-6 w-6" />}
                  ></LinkItem>
                </li> */}
                {/* Add the image below the sidebar menu */}
                <div className="items-center justify-center absolute bottom-[10rem]">
                  <Image
                    src="/images/logo/UCLA.png"
                    alt="UCLA Logo"
                    width={300}
                    height={200}
                  />
                </div>
              </ul>
            </div>
          </nav>
          {/* <!-- Sidebar Menu --> */}
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
