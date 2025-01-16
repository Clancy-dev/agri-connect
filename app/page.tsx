'use client'

import { CartPopup } from '@/components/CartPopUp';
import { Categories } from '@/components/Categories';
import { Menu } from '@/components/Menu';
import { Products } from '@/components/Products';
// import SearchBarr from '@/components/SearchBarr';
// import { SearchBarr } from '@/components/SearchBarr';

import { useEffect, useRef, useState } from 'react'


export default function Home() {
  const [cartItems, setCartItems] = useState<{ id: number; name: string; price: number }[]>([])
  const [isIntersecting, setIsIntersecting] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting)
      },
      { rootMargin: '-10px' }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  const addToCart = (product: { id: number; name: string; price: number }) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevItems.filter((item) => item.id !== product.id);
      } else {
        return [...prevItems, product];
      }
    });
  };

  const removeFromCart = (id: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-green-600">Agri-Connect</h1>
          <CartPopup cartItems={cartItems} removeFromCart={removeFromCart} />
        </div>
        <Menu />
        {/* <SearchBarr/> */}
        
      
      </header>
      <main className="container mx-auto px-4 py-8">
        <div
          ref={ref}
          className={`transition-all duration-1000 ease-in-out ${
            isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <Categories/>
          <Products addToCart={addToCart} cartItems={cartItems} />
        </div>
      </main>
      <footer className="bg-green-600 text-white py-4">
        <div className="container mx-auto px-4 text-center">
          <p>© 2023 Agri-Connect. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

