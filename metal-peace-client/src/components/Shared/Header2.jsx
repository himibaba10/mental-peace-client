import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Calendar, Facebook, Instagram, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

const Header2 = () => {
  return (
    <div className="section py-6 flex justify-between items-center">
      <Link to="/" className="font-playfair text-3xl font-bold">
        Mental Peace
      </Link>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem className="space-x-5">
            <Link to="/">Home</Link>
            <Link to="/sessions">Sessions</Link>
            <Link to="/client-experiences">Client experiences</Link>
            <Link to="/about">About Us</Link>
            <Link to="/blogs">Blogs</Link>
            <Link to="/contact">Contact Us</Link>
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
