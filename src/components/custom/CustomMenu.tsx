import { Link, useLocation } from "react-router";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

export const CustomMenu = () => {
  const { pathname } = useLocation();

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <NavigationMenu>
      <NavigationMenuList>
        {/* Home */}
        <NavigationMenuItem>
          <NavigationMenuLink
            className={`rounded-md p-2 ${isActive("/") ? "bg-slate-300" : "bg-slate-200"}`}
            render={<Link to="/" />}
          >
            Inicio
          </NavigationMenuLink>
        </NavigationMenuItem>

        {/* search */}
        <NavigationMenuItem>
          <NavigationMenuLink
            className={`rounded-md p-2 ${isActive("/search") ? "bg-slate-300" : "bg-slate-200"}`}
            render={<Link to="/search" />}
          >
            Buscar
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
