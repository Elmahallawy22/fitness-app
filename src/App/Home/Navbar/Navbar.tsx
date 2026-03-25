import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuLink,
} from "../../../Components/ui/navigation-menu";
import logo from "../../../assets/Images/fit 1.png";
import { Button } from "../../../Components/ui/button";
import arrow from "../../../assets/Images/arrow.png";
import { useState } from "react";

export default function Navbar() {
  // useState Hook
  const [active, setActive] = useState("/");

  //   TODO: THIS LINKS PATHES WILL BE CHANGE AFTER SETUP REACT-RPUTER-DOM
  const links = [
    { name: "home", path: "/" },
    { name: "about", path: "#about" },
    { name: "classes", path: "#classes" },
    { name: "healthy", path: "#healthy" },
  ];

  return (
    <nav className="px-20 py-10  absolute top-0 left-0 right-0  z-50">
      <div className="flex items-center justify-between">
        {/* logo */}
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>

        {/* nav links */}
        <div className="links ">
          <NavigationMenu>
            <NavigationMenuList>
              {links.map((link) => (
                <NavigationMenuItem key={link.path}>
                  <NavigationMenuLink
                    href={link.path}
                    onClick={() => setActive(link.path)}
                    data-active={active === link.path}>
                    {link.name}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* buttons */}
        <div className="auth gap-x-8 flex items-center ">
          {/* login */}
          <div className="flex items-center">
            <Button variant="default" className="w-16 h-11 px-8 py-2">
              login
            </Button>
            <img
              src={arrow}
              alt="img-button"
              className="border-2 -ms-2 border-white w-9 h-9 bg-orange-600 rounded-full"
            />
          </div>

          {/* sign up */}
          <div className="flex items-center">
            <Button
              variant="default"
              className={`w-16 h-11 px-8 py-2 bg-transparent border border-orange-600 text-orange-600`}>
              sign up
            </Button>
            <img
              src={arrow}
              alt="img-button"
              className="border-2 -ms-1 border-white w-9 h-9 bg-orange-600 rounded-full"
            />
          </div>
        </div>
      </div>
    </nav>
  );
}
