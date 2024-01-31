import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Calendar, Facebook, Instagram, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

const Header2 = () => {
  return (
    <div className="section py-6 flex justify-between items-center">
      <Link to="/" className="font-playfair text-3xl font-bold">
        De Gnostische Weg
      </Link>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem className="space-x-5">
            <Link to="/" legacyBehavior passHref>
              <NavigationMenuLink>Home</NavigationMenuLink>
            </Link>
            <Link to="/sessions" legacyBehavior passHref>
              <NavigationMenuLink>Sessions</NavigationMenuLink>
            </Link>
            <Link to="/client-experiences" legacyBehavior passHref>
              <NavigationMenuLink>Client experiences</NavigationMenuLink>
            </Link>
            <Link to="/about" legacyBehavior passHref>
              <NavigationMenuLink>About Us</NavigationMenuLink>
            </Link>
            <Link to="/blogs" legacyBehavior passHref>
              <NavigationMenuLink>Blogs</NavigationMenuLink>
            </Link>
            <Link to="/contact" legacyBehavior passHref>
              <NavigationMenuLink>Contact Us</NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <div className="flex items-center gap-3">
        <Facebook size={22} fill="#000000" color="#ffffff" strokeWidth={1} />
        <Youtube size={28} fill="#000000" color="#ffffff" strokeWidth={1} />
        <Instagram size={20} strokeWidth={1} />
        <Button className="bg-primary rounded-none px-8 py-4">
          <Calendar
            size={20}
            color="#ffffff"
            strokeWidth={1}
            className="mr-2"
          />
          Contact
        </Button>
      </div>
    </div>
  );
};

export default Header2;
