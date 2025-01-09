import React, { useState, useRef, useEffect } from 'react';
    import { Link, useLocation } from 'react-router-dom';
    import { ShoppingCart, User, Cpu, Home, Settings, HeartHandshake, Package } from 'lucide-react';
    import { ComponentCategory } from '../../types';
    import { categoryIcons } from '../../utils/icons';
    import { useCart } from '../../context/CartContext';

    const Navbar = () => {
      const navItems = [
        { label: 'Accueil', icon: <Home className="w-5 h-5" />, path: '/' },
        { label: 'Configurateur', icon: <Cpu className="w-5 h-5" />, path: '/builder' },
        {
          label: 'Composants',
          icon: <Package className="w-5 h-5" />,
          path: '/components',
          subItems: Object.values(ComponentCategory).map(category => ({
            label: category,
            path: `/components/${category.toLowerCase().replace(/ /g, '-')}`,
            icon: categoryIcons[category]
          })),
        },
        { label: 'PC Préfabriqués', icon: <Settings className="w-5 h-5" />, path: '/prebuilt' },
        { label: 'Support', icon: <HeartHandshake className="w-5 h-5" />, path: '/support' },
      ];

      const location = useLocation();
      const [isComponentsOpen, setIsComponentsOpen] = useState(false);
      const componentsRef = useRef(null);
      const { cartItems } = useCart();

      const handleComponentsClick = () => {
        setIsComponentsOpen(!isComponentsOpen);
      };

      const handleCloseMenu = (e: MouseEvent) => {
        if (componentsRef.current && !componentsRef.current.contains(e.target)) {
          setIsComponentsOpen(false);
        }
      };

      useEffect(() => {
        document.addEventListener('mousedown', handleCloseMenu);
        return () => {
          document.removeEventListener('mousedown', handleCloseMenu);
        };
      }, []);

      return (
        <nav className="bg-gradient-to-r from-pink-600 to-purple-600 shadow-lg">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-between items-center h-16">
              <Link to="/" className="flex items-center space-x-2">
                <img
                  src="https://i.ibb.co/9bGxR5B/il-fullxfull-5588368482-hjdm-removebg-preview.png"
                  alt="Logo"
                  className="w-8 h-8 rounded-full"
                />
                <span className="font-bold text-xl text-white">PC Builder Pro</span>
              </Link>

              <div className="hidden md:flex items-center space-x-8">
                {navItems.map((item) => (
                  <div key={item.label} className="relative" ref={item.subItems ? componentsRef : null}>
                    {item.subItems ? (
                      <button
                        onClick={handleComponentsClick}
                        className={`flex items-center space-x-1 text-white/80 hover:text-white transition-colors py-2 px-3 rounded-md ${location.pathname.startsWith('/components') ? 'text-white' : ''}`}
                      >
                        {item.icon}
                        <span>{item.label}</span>
                      </button>
                    ) : (
                      <Link
                        to={item.path}
                        className={`flex items-center space-x-1 text-white/80 hover:text-white transition-colors py-2 px-3 rounded-md ${location.pathname === item.path ? 'text-white' : ''}`}
                      >
                        {item.icon}
                        <span>{item.label}</span>
                      </Link>
                    )}
                    {item.subItems && isComponentsOpen && (
                      <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg z-20">
                        {item.subItems.map(subItem => (
                          <Link
                            key={subItem.label}
                            to={subItem.path}
                            onClick={() => setIsComponentsOpen(false)}
                            className={`flex items-center gap-2 px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors ${location.pathname === subItem.path ? 'bg-gray-100' : ''}`}
                          >
                            <subItem.icon className="w-4 h-4 text-pink-600" />
                            <span>{subItem.label}</span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="flex items-center space-x-4">
                <Link to="/cart" className="text-white/80 hover:text-white relative" title="Panier">
                  <ShoppingCart className="w-6 h-6" />
                  {cartItems.length > 0 && (
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1.5 py-0.5">
                      {cartItems.length}
                    </span>
                  )}
                </Link>
                <button className="text-white/80 hover:text-white" title="Mon Compte">
                  <User className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        </nav>
      );
    };

    export default Navbar;
