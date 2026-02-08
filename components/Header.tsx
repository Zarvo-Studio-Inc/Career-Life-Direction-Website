'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

export default function Header() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null)

  const navigation = [
    { name: 'Framework', href: '/framework' },
    { name: 'How It Works', href: '/how-it-works' },
    {
      name: 'Services',
      href: '/services',
      sublinks: [
        { name: 'Technology Mentorship', href: '/technology-mentorship' },
        { name: 'Scholarship', href: '/scholarships' }
      ],
    },
    { name: 'Contact Us', href: '/contact' },
    { name: 'About', href: '/about' },
  ]

  return (
      <header className="fixed top-0 left-0 right-0 z-50 pt-4 px-4">
        <nav className="max-w-7xl mx-auto bg-primary-50 border border-primary-200 rounded-2xl shadow" aria-label="Main navigation">
        <div className="flex justify-between items-center h-20 md:h-24 px-6 sm:px-8 lg:px-10">
          {/* Logo / Brand */}
          <div className="flex-shrink-0">
            <Link href="/" className="hover:opacity-80 transition-opacity">
              <div className="relative w-[140px] md:w-[150px]">
                <Image
                  src="/logo.png"
                  alt="Zarvo Studio Logo"
                  width={150}
                  height={150}
                  className="object-contain w-full h-auto"
                  priority
                />
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-8">
            {navigation.map((item) => (
              item.sublinks ? (
                <div className="relative group" key={item.name}>
                  <Link
                    href={item.href}
                    className={`text-sm font-bold uppercase tracking-wide transition-colors relative flex items-center group ${
                      pathname === item.href
                        ? 'text-brand'
                        : 'text-gray-700 hover:text-brand'
                    }`}
                  >
                    {item.name}
                    <svg className="ml-2 w-4 h-4 text-gray-500 group-hover:text-brand transition-colors" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M6 9l6 6 6-6" /></svg>
                    <span className={`absolute -bottom-0 left-0 h-0.5 bg-brand transition-all duration-300 ease-out ${
                      pathname === item.href ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}></span>
                  </Link>
                  <div className="absolute left-0  w-56  z-20 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity">
                    <ul className="mt-2 bg-white border border-primary-200 rounded-lg shadow-lg">
                      {item.sublinks.map((sub) => (
                        <li key={sub.name}>
                          <Link
                            href={sub.href}
                            className="block px-4 py-2 text-xs font-semibold uppercase text-gray-700 hover:text-brand hover:bg-primary-50 rounded-lg transition-colors"
                          >
                            {sub.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-sm font-bold uppercase tracking-wide transition-colors relative group ${
                    pathname === item.href
                      ? 'text-brand'
                      : 'text-gray-700 hover:text-brand'
                  }`}
                >
                  {item.name}
                  <span className={`absolute -bottom-0 left-0 h-0.5 bg-brand transition-all duration-300 ease-out ${
                    pathname === item.href ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></span>
                </Link>
              )
            ))}
            
            
            {/* CTA Button removed */}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              type="button"
              className="text-gray-700 hover:text-brand p-2 rounded-lg hover:bg-brand/5 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {mobileMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <div className="fixed inset-0 z-50 bg-white animate-slideDown flex flex-col">
              <div className="flex justify-between items-center mb-8 pt-6 px-6">
                <Link href="/" className="hover:opacity-80 transition-opacity">
                  <div className="relative w-[120px] bg-white">
                    <Image
                      src="/logo.png"
                      alt="Zarvo Studio Logo"
                      width={120}
                      height={40}
                      className="object-contain w-full h-auto"
                      priority
                    />
                  </div>
                </Link>
                <button onClick={() => setMobileMenuOpen(false)} aria-label="Close menu" className="p-2 rounded-full hover:bg-primary-100 transition-colors">
                  <svg className="w-7 h-7 text-gray-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
              </div>
              <nav className="flex-1 flex flex-col gap-2 px-6">
                {navigation.map((item) => (
                  item.sublinks ? (
                    <div key={item.name}>
                      <div className={`flex items-center justify-between px-4 py-3 rounded-lg text-base font-bold uppercase tracking-wide transition-colors ${
                        pathname === item.href
                          ? 'text-brand bg-brand/10'
                          : 'text-gray-700 hover:text-brand hover:bg-brand/5'
                      }`}>
                        <span className="flex items-center">{item.name}</span>
                        <svg className="ml-2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M6 9l6 6 6-6" /></svg>
                      </div>
                      <div className="pl-2 border-l-2 border-primary-100 mt-1">
                        {item.sublinks.map((sub) => (
                          <Link
                            key={sub.name}
                            href={sub.href}
                            className="block text-xs font-semibold uppercase text-gray-700 hover:text-brand hover:bg-primary-50 rounded-lg transition-colors px-4 py-2 mb-1"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`text-base font-bold uppercase tracking-wide transition-colors px-4 py-3 rounded-lg ${
                        pathname === item.href
                          ? 'text-brand bg-brand/10'
                          : 'text-gray-700 hover:text-brand hover:bg-brand/5'
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )
                ))}
              </nav>
              <div className="mt-auto pt-8 pb-4 px-6 text-center text-sm text-gray-500 border-t border-primary-100">
                <div className="mb-1">
                  <span className="font-semibold">Email:</span> <a href="mailto:contact@zarvostudio.com" className="underline hover:text-brand">contact@zarvostudio.com</a>
                </div>
                <div>
                  <span className="font-semibold">Phone:</span> <a href="tel:+1234567890" className="underline hover:text-brand">+1 234 567 890</a>
                </div>
              </div>
            </div>
            <style jsx>{`
              @keyframes slideDown {
                from { transform: translateY(-40px); opacity: 0; }
                to { transform: translateY(0); opacity: 1; }
              }
              .animate-slideDown {
                animation: slideDown 0.25s cubic-bezier(.4,0,.2,1);
              }
            `}</style>
          </>
        )}
      </nav>
    </header>
  )
}
