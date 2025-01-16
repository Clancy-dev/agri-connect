'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Star, ShoppingCart } from 'lucide-react'
import { Button } from '@/components/ui/button'

const products = [
  {
    id: 1,
    name: 'Fresh Apples',
    description: 'Juicy and crisp apples',
    image: '/placeholder.svg',
    rating: 4.5,
    inStock: true,
    price: 2.99,
    action: 'add',
  },
  {
    id: 2,
    name: 'Tractor',
    description: 'Heavy-duty farming tractor',
    image: '/placeholder.svg',
    rating: 4.8,
    inStock: true,
    price: 299.99,
    action: 'rent',
  },
  // Add more products as needed
]

interface ProductsProps {
  addToCart: (product: { id: number; name: string; price: number }) => void;
  cartItems: { id: number; name: string; price: number }[];
}

export function Products({ addToCart, cartItems }: ProductsProps) {
  const isProductInCart = (productId: number) => cartItems.some((item) => item.id === productId);

  const handleCartAction = (product: (typeof products)[number]) => {
    addToCart({ id: product.id, name: product.name, price: product.price });
  };

  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              width={300}
              height={200}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-sm text-blue-600 mb-1">{product.description}</h3>
              <h4 className="text-lg font-semibold mb-2">{product.name}</h4>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'
                    }`}
                    fill="currentColor"
                  />
                ))}
                <span className="ml-1 text-sm text-gray-600">{product.rating}</span>
              </div>
              <div className="text-sm mb-2">
                {product.inStock ? (
                  <span className="text-green-600">In Stock</span>
                ) : (
                  <span className="text-red-600">Out of Stock</span>
                )}
              </div>
              <div className="text-lg font-bold mb-2">${product.price.toFixed(2)}</div>
              <Button
                onClick={() => handleCartAction(product)}
                className={`w-full ${
                  isProductInCart(product.id) ? 'bg-blue-500' : 'bg-green-500'
                } hover:bg-blue-600 text-white font-bold py-2 px-4 rounded`}
              >
                {isProductInCart(product.id) ? (
                  product.action === 'rent' ? (
                    'Cancel Rent'
                  ) : (
                    'Remove from Cart'
                  )
                ) : product.action === 'rent' ? (
                  'Rent Now'
                ) : (
                  <>
                    <ShoppingCart className="inline-block mr-2 h-5 w-5" />
                    Add to Cart
                  </>
                )}
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

