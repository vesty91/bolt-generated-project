import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface CartButtonProps {
  cartCount: number;
}

const CartButton = ({ cartCount }: CartButtonProps) => (
  <Link to="/cart">
    <Button variant="ghost" size="icon" className="ml-4 relative">
      <ShoppingCart className="h-5 w-5" />
      {cartCount > 0 && (
        <Badge 
          variant="destructive" 
          className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs"
        >
          {cartCount}
        </Badge>
      )}
    </Button>
  </Link>
);

export default CartButton;
