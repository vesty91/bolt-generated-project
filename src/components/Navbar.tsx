import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Logo from './navbar/Logo';
import DesktopMenu from './navbar/DesktopMenu';
import MobileMenu from './navbar/MobileMenu';
import { MenuItem } from './navbar/types';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  const menuItems: MenuItem[] = [
    { name: 'Accueil', path: '/' },
    { name: 'Configurer votre PC', path: '/configure' },
    { name: 'Composants', path: '/components' },
    { name: 'Configurations préconçues', path: '/prebuilt' },
    { name: 'Mon compte', path: '/account' },
    { name: 'Assistance', path: '/support' },
  ];

  return (
    <nav className="bg-card shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Logo />
          
          <DesktopMenu menuItems={menuItems} cartCount={cartCount} />

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      <MobileMenu 
        isOpen={isOpen}
        menuItems={menuItems}
        cartCount={cartCount}
        onItemClick={() => setIsOpen(false)}
      />
    </nav>
  );
};

export default Navbar;
