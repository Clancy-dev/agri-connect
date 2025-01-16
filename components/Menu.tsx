import Link from 'next/link'

const menuItems = [
  { name: 'Home', href: '/' },
  { name: 'Farmers', href: '/farmers' },
  { name: 'Consumers', href: '/consumers' },
  { name: 'Transportation', href: '/transportation' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
]

export function Menu() {
  return (
    <nav className="bg-green-500 text-white">
      <ul className="container mx-auto px-4 py-2 flex flex-wrap justify-center items-center gap-4">
        {menuItems.map((item) => (
          <li key={item.name}>
            <Link href={item.href} className="hover:text-green-200 transition-colors">
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

