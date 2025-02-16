import { useRef, useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
import {
    IconArmchair2,
    IconSparkles,
    IconArchive,
    IconLaurelWreathFilled,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { NavLink, Outlet } from "react-router";
import { basic } from "@/configs/site.config";
import { ScrollProgress } from "@/components/magicui/scroll-progress";
import { Logo } from "@/components/skeleton/Logo";
export function Layout() {
    const scrollRef = useRef(null);
    const links = [
        {
            label: "主页",
            href: "/home",
            icon: (
                <IconArmchair2 className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
            ),
        },
        {
            label: "博客",
            href: "/blog",
            icon: (
                <IconSparkles className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
            ),
        },
        {
            label: "归档",
            href: "/archive",
            icon: (
                <IconArchive className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
            ),
        },
        {
            label: "关于",
            href: "/about",
            icon: (
                <IconLaurelWreathFilled className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
            ),
        },
    ];
    const [open, setOpen] = useState(false);

    return (
        <div
            className={cn(
                "flex flex-col md:flex-row bg-gray-100 dark:bg-neutral-800 w-full flex-1 mx-auto border border-neutral-200 dark:border-neutral-700 overflow-hidden",
                "h-screen" // for your use case, use `h-screen` instead of `h-[60vh]`
            )}>
            <Sidebar
                open={open}
                setOpen={setOpen}>
                <SidebarBody className="justify-between gap-10">
                    <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
                        <SidebarLink
                            className="flex items-center space-x-2 relative z-20 font-extrabold"
                            link={{
                                label: "Sea Light",
                                href: "/",
                                icon: (
                                    <Logo
                                        height="1.25rem"
                                        width="1.5rem"></Logo>
                                ),
                            }}
                        />

                        <div className="mt-8 flex flex-col gap-2">
                            {links.map((link, idx) => (
                                <SidebarLink
                                    key={idx}
                                    link={link}
                                />
                            ))}
                        </div>
                    </div>
                    <div>
                        <SidebarLink
                            link={{
                                label: basic.author,
                                href: "/my",
                                icon: (
                                    <img
                                        src={basic.avatar}
                                        className="h-7 w-7 flex-shrink-0 rounded-full"
                                        width={50}
                                        height={50}
                                        alt="Avatar"
                                    />
                                ),
                            }}
                        />
                    </div>
                </SidebarBody>
            </Sidebar>

            <ScrollProgress
                contianerRef={scrollRef}
                className="h-1"
            />
            <div
                ref={scrollRef}
                className="min-h-screen bg-white rounded-tl-2xl p-8 overflow-y-auto  border flex-1">
                <Outlet />
            </div>
        </div>
    );
}
