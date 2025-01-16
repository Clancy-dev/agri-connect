'use client'


import Link from "next/link"
import { Button } from "./ui/button"

interface Project {
  title: string
  description: string
  image: string
  link: string
}

const categories = [
  { name: 'Fruits', image: '/placeholder.svg?height=100&width=100' },
  { name: 'Vegetables', image: '/placeholder.svg?height=100&width=100' },
  { name: 'Dairy', image: '/placeholder.svg?height=100&width=100' },
  { name: 'Grains', image: '/placeholder.svg?height=100&width=100' },
  { name: 'Meat', image: '/placeholder.svg?height=100&width=100' },
]

export function Categories() {
  return (
    <div>
      <div className="text-2xl font-bold mb-4">Shop By Categories</div>
      <div className="w-full h-[10vh]">
        <Link href="/new/category">
        <Button className="px-3 py-2 bg-green-600 text-white rounded-[10px]">
        Create New Category
        </Button>
        </Link>
        
        </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 mb-8">
      {categories.map((category) => (
        <div
          key={category.name}
          className="flex flex-col items-center cursor-pointer group"
        >
          <div className=" mb-2">
            <div className="w-30 h-30 rounded-[10px] border-[2px] border-green-500 p-[10px]">
            <img
              src={category.image || "/placeholder.svg"}
              alt={category.name}
              className="w-24 h-24 rounded-full object-cover"
            />

            </div>
            
          </div>
          <h3 className="text-lg font-semibold text-center">{category.name}</h3>
        </div>
      ))}
    </div>
    </div>
  )
}

