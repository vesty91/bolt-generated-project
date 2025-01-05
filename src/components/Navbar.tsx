import { ShoppingCart, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-primary text-primary-foreground py-4 px-6 fixed w-full top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-xl font-bold">ConfigMaster Pro</h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <a href="/" className="hover:text-secondary transition-colors">
            Accueil
          </a>
          <a href="/configurator" className="hover:text-secondary transition-colors">
            Configurateur
          </a>
          <a href="/categories" className="hover:text-secondary transition-colors">
            Catégories
          </a>
          <a href="/account" className="hover:text-secondary transition-colors">
            Mon Compte
          </a>
          <Button variant="secondary" size="sm" className="flex items-center gap-2">
            <ShoppingCart className="w-4 h-4" />
            <span>Panier (0)</span>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="sm"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu className="w-6 h-6" />
        </Button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-primary py-4 px-6 animate-fadeIn">
          <div className="flex flex-col space-y-4">
            <a href="/" className="hover:text-secondary transition-colors">
              Accueil
            </a>
            <a href="/configurator" className="hover:text-secondary transition-colors">
              Configurateur
            </a>
            <a href="/categories" className="hover:text-secondary transition-colors">
              Catégories
            </a>
            <a href="/account" className="hover:text-secondary transition-colors">
              Mon Compte
            </a>
            <Button variant="secondary" size="sm" className="flex items-center gap-2">
              <ShoppingCart className="w-4 h-4" />
              <span>Panier (0)</span>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};
