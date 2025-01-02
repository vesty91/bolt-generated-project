import { Link } from 'react-router-dom';
    import CartButton from './CartButton';
    import { MenuItem } from './types';

    interface DesktopMenuProps {
      menuItems: MenuItem[];
      cartCount: number;
    }

    const DesktopMenu = ({ menuItems, cartCount }: DesktopMenuProps) => (
      <div className="hidden md:block">
        <div className="ml-10 flex items-baseline space-x-4">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              {item.name}
            </Link>
          ))}
          <CartButton cartCount={cartCount} />
        </div>
      </div>
    );

    export default DesktopMenu;
