import { Link } from 'react-router-dom';
    import CartButton from './CartButton';
    import { MenuItem } from './types';

    interface MobileMenuProps {
      isOpen: boolean;
      menuItems: MenuItem[];
      cartCount: number;
      onItemClick: () => void;
    }

    const MobileMenu = ({ isOpen, menuItems, cartCount, onItemClick }: MobileMenuProps) => {
      if (!isOpen) return null;

      return (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                onClick={onItemClick}
              >
                {item.name}
              </Link>
            ))}
            <div className="relative inline-block">
              <CartButton cartCount={cartCount} />
            </div>
          </div>
        </div>
      );
    };

    export default MobileMenu;
