import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuLink,
} from "../../../Components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/Components/ui/sheet";
import { Button } from "@/components/ui/button";
import logo from "../../../assets/Images/fit 1.png";
import { Menu } from "lucide-react";
import { useState } from "react";
import { useTranslations } from "use-intl";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import ThemeToggle from "@/App/shared/theme-toggle/theme-toggle";

export default function Navbar() {
  // Router
  const navigate = useNavigate();
  const { locale } = useParams();
  const location = useLocation();

  // state to track active link
  const [active, setActive] = useState(location.pathname);

  // Translations
  const t = useTranslations("Navbar");

  // links data
  const links = [
    { name: t("home"), path: `/${locale}` },
    { name: t("about"), path: `/${locale}/about` },
    { name: t("classes"), path: `/${locale}/classes` },
    { name: t("healthy"), path: `/${locale}/healthy` },
  ];

  const handleNavigate = (path: string) => {
    navigate(path);
    setActive(path);
  };

  return (
    <nav className="px-6 lg:px-20 py-6 lg:py-10 absolute top-0 left-0 right-0 z-50">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <img
          src={logo}
          alt="Logo"
          className="cursor-pointer"
          onClick={() => handleNavigate(`/${locale}`)}
        />

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-10">
          <NavigationMenu>
            <NavigationMenuList>
              {links.map((link) => (
                <NavigationMenuItem key={link.path}>
                  <NavigationMenuLink
                    onClick={() => handleNavigate(link.path)}
                    className={`px-4 py-2 text-xl font-bold capitalize cursor-pointer transition ${
                      active === link.path
                        ? "text-orange-600 dark:text-orange-400"
                        : "text-zinc-900 dark:text-zinc-100 hover:text-orange-600"
                    }`}>
                    {link.name}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Buttons */}
          <div className="flex items-center gap-6">
            <Button onClick={() => navigate(`/${locale}/login`)}>
              {t("login")}
            </Button>

            <Button
              variant="outline"
              className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
              onClick={() => navigate(`/${locale}/register`)}>
              {t("sign up")}
            </Button>

            <ThemeToggle />
          </div>
        </div>

        {/* Mobile   */}
        <div className="lg:hidden">
          <Sheet>
            {/* Burger */}
            <SheetTrigger asChild>
              <button className="bg-orange-600 rounded-full p-2">
                <Menu size={28} />
              </button>
            </SheetTrigger>

            {/* Drawer */}
            <SheetContent
              side={locale === "ar" ? "left" : "right"}
              className="w-[80%] p-6 flex flex-col">
              {/* Links */}
              <div className="flex flex-col gap-4 mt-6">
                {links.map((link) => (
                  <button
                    key={link.path}
                    onClick={() => handleNavigate(link.path)}
                    className={`text-lg font-semibold text-left capitalize transition ${
                      active === link.path
                        ? "text-orange-600"
                        : "text-zinc-900 dark:text-zinc-100"
                    }`}>
                    {link.name}
                  </button>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex flex-col gap-4 mt-6">
                <Button onClick={() => navigate(`/${locale}/login`)}>
                  {t("login")}
                </Button>

                <Button
                  variant="outline"
                  className="border-orange-600 text-orange-600"
                  onClick={() => navigate(`/${locale}/register`)}>
                  {t("sign up")}
                </Button>
              </div>

              {/* Theme Toggle */}
              <div className="mt-auto">
                <ThemeToggle />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
