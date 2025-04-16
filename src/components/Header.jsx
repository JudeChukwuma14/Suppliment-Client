"use client"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { useCart } from "../context/CartContext"
import { ShoppingCart, Heart, User, Search, Menu, X, ChevronDown, Phone } from "lucide-react"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isCategoryOpen, setIsCategoryOpen] = useState(false)
  const { cartItems } = useCart()

  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const categories = [
    "Vitamins & Supplements",
    "Pain Relief",
    "Skin Care",
    "First Aid",
    "Medical Devices",
    "Baby Care",
    "Personal Care",
    "Sexual Health",
  ]

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Notification Bar */}
      <div className="bg-[#2196F3] text-white py-2 px-4 text-sm">
        <div className="container-custom flex justify-between items-center">
          <p className="text-xs md:text-sm">
            Delivery timeline: For Orders placed before 12pm will deliver same day in Lagos State Only. Cash on Delivery
            Option is only Applicable in Lagos State
          </p>
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center">
              <span>₦ NGN</span>
              <ChevronDown size={14} className="ml-1" />
            </div>
            <Link to="/account" className="flex items-center hover:underline">
              <User size={14} className="mr-1" />
              My account
            </Link>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className={`bg-white ${isScrolled ? "shadow-md py-2" : "py-4"} transition-all duration-300`}>
        <div className="container-custom">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-[#2196F3]">
                Kli<span className="text-[#87CEEB]">Store</span>
              </span>
              <span className="hidden md:block text-xs text-gray-500 ml-2">Nigeria's Trusted Online Pharmacy</span>
            </Link>

            {/* Search Bar */}
            <div className="hidden md:flex flex-1 max-w-xl mx-4">
              <div className="relative flex w-full">
                <div className="relative">
                  <button
                    className="h-full px-4 bg-gray-100 border border-gray-300 rounded-l-lg flex items-center text-gray-700 font-medium"
                    onClick={() => setIsCategoryOpen(!isCategoryOpen)}
                  >
                    Category
                    <ChevronDown size={16} className="ml-1" />
                  </button>

                  {isCategoryOpen && (
                    <div className="absolute top-full left-0 mt-1 w-56 bg-white shadow-lg rounded-lg z-50 py-2">
                      {categories.map((category, index) => (
                        <Link
                          key={index}
                          to={`/shop?category=${category.toLowerCase().replace(/\s+/g, "-")}`}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          onClick={() => setIsCategoryOpen(false)}
                        >
                          {category}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
                <input
                  type="text"
                  placeholder="What are you looking for?"
                  className="flex-1 border border-gray-300 border-l-0 border-r-0 py-2 px-4 focus:outline-none"
                />
                <button className="bg-[#F5A623] hover:bg-[#E69512] text-white px-5 rounded-r-lg flex items-center justify-center">
                  <Search size={20} />
                </button>
              </div>
            </div>

            {/* Contact Info */}
            <div className="hidden lg:flex items-center mr-4">
              <Phone size={20} className="text-[#2196F3] mr-2" />
              <div>
                <p className="text-sm text-gray-500">Sales & Service Support</p>
                <p className="font-semibold">080-1234-5678</p>
              </div>
            </div>

            {/* Icons */}
            <div className="flex items-center space-x-4">
              <Link to="/wishlist" className="text-gray-700 hover:text-[#2196F3] hidden md:block">
                <Heart size={20} />
              </Link>
              <Link to="/cart" className="text-gray-700 hover:text-[#2196F3] relative">
                <ShoppingCart size={20} />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-[#2196F3] text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                    {totalItems}
                  </span>
                )}
              </Link>
              <button className="text-gray-700 hover:text-[#2196F3] md:hidden" onClick={toggleMenu}>
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Search - Only visible on mobile */}
          <div className="mt-3 md:hidden">
            <div className="relative flex w-full">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full border border-gray-300 rounded-l-lg py-2 px-4 focus:outline-none"
              />
              <button className="bg-[#F5A623] hover:bg-[#E69512] text-white px-3 rounded-r-lg flex items-center justify-center">
                <Search size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="bg-gray-50 border-b border-gray-200 hidden md:block">
        <div className="container-custom">
          <div className="flex items-center">
            <div className="relative group">
              <button className="flex items-center space-x-2 py-3 px-4 font-medium text-gray-700 hover:text-[#2196F3]">
                <Menu size={18} />
                <span>All Categories</span>
              </button>
              <div className="absolute left-0 top-full w-56 bg-white shadow-lg rounded-b-lg z-40 hidden group-hover:block">
                {categories.map((category, index) => (
                  <Link
                    key={index}
                    to={`/shop?category=${category.toLowerCase().replace(/\s+/g, "-")}`}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    {category}
                  </Link>
                ))}
              </div>
            </div>
            <Link to="/" className="py-3 px-4 font-medium text-gray-700 hover:text-[#2196F3]">
              Home
            </Link>
            <Link to="/shop" className="py-3 px-4 font-medium text-gray-700 hover:text-[#2196F3]">
              Shop
            </Link>
            <Link to="/shop?type=brand" className="py-3 px-4 font-medium text-gray-700 hover:text-[#2196F3]">
              Shop by Brand
            </Link>
            <Link to="/shop?type=category" className="py-3 px-4 font-medium text-gray-700 hover:text-[#2196F3]">
              Shop by Category
            </Link>
            <Link to="/shop?type=conditions" className="py-3 px-4 font-medium text-gray-700 hover:text-[#2196F3]">
              Shop by Conditions
            </Link>
            <Link to="/blog" className="py-3 px-4 font-medium text-gray-700 hover:text-[#2196F3]">
              Pharmacy Blog
            </Link>
            <Link to="/contact" className="py-3 px-4 font-medium text-gray-700 hover:text-[#2196F3]">
              Contact us
            </Link>
            <Link to="/shop?clearance=true" className="py-3 px-4 font-medium text-gray-700 hover:text-[#2196F3]">
              Clearance Sales
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 px-4 z-50">
          <nav className="flex flex-col space-y-4">
            <Link
              to="/"
              className="flex items-center justify-between text-gray-700 hover:text-[#2196F3] font-medium py-2 border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/shop"
              className="flex items-center justify-between text-gray-700 hover:text-[#2196F3] font-medium py-2 border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Shop
            </Link>
            <Link
              to="/shop?type=brand"
              className="flex items-center justify-between text-gray-700 hover:text-[#2196F3] font-medium py-2 border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Shop by Brand
            </Link>
            <Link
              to="/shop?type=category"
              className="flex items-center justify-between text-gray-700 hover:text-[#2196F3] font-medium py-2 border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Shop by Category
            </Link>
            <Link
              to="/shop?type=conditions"
              className="flex items-center justify-between text-gray-700 hover:text-[#2196F3] font-medium py-2 border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Shop by Conditions
            </Link>
            <Link
              to="/prescription"
              className="flex items-center justify-between text-gray-700 hover:text-[#2196F3] font-medium py-2 border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Upload Prescription
            </Link>
            <Link
              to="/blog"
              className="flex items-center justify-between text-gray-700 hover:text-[#2196F3] font-medium py-2 border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Pharmacy Blog
            </Link>
            <Link
              to="/about"
              className="flex items-center justify-between text-gray-700 hover:text-[#2196F3] font-medium py-2 border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="flex items-center justify-between text-gray-700 hover:text-[#2196F3] font-medium py-2 border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              to="/shop?clearance=true"
              className="flex items-center justify-between text-gray-700 hover:text-[#2196F3] font-medium py-2 border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Clearance Sales
            </Link>

            <div className="flex justify-between pt-2">
              <Link
                to="/account"
                className="text-gray-700 hover:text-[#2196F3] flex items-center gap-1"
                onClick={() => setIsMenuOpen(false)}
              >
                <User size={18} /> Account
              </Link>
              <Link
                to="/wishlist"
                className="text-gray-700 hover:text-[#2196F3] flex items-center gap-1"
                onClick={() => setIsMenuOpen(false)}
              >
                <Heart size={18} /> Wishlist
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header
