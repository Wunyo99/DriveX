"use client";

import { Link, NavLink, useLocation } from "react-router-dom";
import { CarFront, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import logo from "../assets/logo.png";
import { useEffect, useState } from "react";

const navLinks = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Cars",
    path: "/cars",
  },
  {
    name: "Services",
    path: "/services",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

const Navbar = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const showHeaderBg = !isHome || isScrolled;
  return (
    <header
      className={`sticky top-0 z-50 bg-green-  ${showHeaderBg ? "bg-black shadow-2xl" : "transparent"}`}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          {/* <CarFront className="text-lime-300" size={35}/> */}
          <div className="rounded-full overflow-hidden p-1">
            {" "}
            <img src={logo} alt="" className="w-12" />
          </div>
          <Link
            to="/"
            className="text-2xl md:text-4xl font-bold tracking-tight text-green-900"
          >
            Drive<span className="text-lime-300">X</span>
          </Link>
        </div>
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList className="gap-2">
            {navLinks.map((link) => (
              <NavigationMenuItem key={link.name}>
                <NavigationMenuLink asChild>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `rounded-md px-4 py-2 text-sm font-medium transition-colors ${
                        isActive
                          ? "bg-green-800 text-white"
                          : "hover:bg-green-800 text-lime-300"
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* <div className="hidden items-center gap-3 lg:flex">
          <Link className="bg-lime-300 py-1 px-4 rounded-md font-medium text-gray-800">
            Login
          </Link>

          <Link className="bg-lime-300 py-1 px-4 rounded-md font-medium text-gray-800">
            Sign Up
          </Link>
        </div> */}

        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="default" size="lg">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="w-72">
              <div className="mt-10 flex flex-col gap-2">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.name}
                    to={link.path}
                    className={({ isActive }) =>
                      `rounded-md px-4 py-3 text-lime-300 font-medium transition ${
                        isActive ? "bg-black text-white" : "hover:bg-black"
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                ))}

                <div className=" items-center gap-3 flex">
                  <Link className="bg-lime-300 py-2 px-4 rounded-md font-medium text-gray-800">
                    Login
                  </Link>

                  <Link className="bg-lime-300 py-2 px-4 rounded-md font-medium text-gray-800">
                    Sign Up
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};
export default Navbar;
