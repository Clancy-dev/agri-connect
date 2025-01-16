import { ShoppingCart, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'

interface CartItem {
  id: number
  name: string
  price: number
}

interface CartPopupProps {
  cartItems: CartItem[]
  removeFromCart: (id: number) => void
}

export function CartPopup({ cartItems, removeFromCart }: CartPopupProps) {
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0)

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" className="relative">
          <ShoppingCart className="h-5 w-5 mr-2" />
          Cart
          {cartItems.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
              {cartItems.length}
            </span>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Your Cart</SheetTitle>
        </SheetHeader>
        {cartItems.length === 0 ? (
          <p className="text-center mt-4">Your cart is empty</p>
        ) : (
          <div className="mt-4">
            {cartItems.map((item) => (
              <div key={item.id} className="flex justify-between items-center mb-2 p-2 bg-gray-100 rounded">
                <span>{item.name}</span>
                <div className="flex items-center">
                  <span className="mr-2">${item.price.toFixed(2)}</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => removeFromCart(item.id)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
            <div className="mt-4 pt-4 border-t border-gray-200">
              <div className="flex justify-between items-center font-bold">
                <span>Total:</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
            </div>
            <Button className="w-full mt-4">Checkout</Button>
          </div>
        )}
      </SheetContent>
    </Sheet>
  )
}

