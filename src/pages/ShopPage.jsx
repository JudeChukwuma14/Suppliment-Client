"use client"

import { useState } from "react"
import { Search, Filter, ChevronDown, X } from "lucide-react"
import ProductCard from "../components/ProductCard"

const ShopPage = () => {
  const [filters, setFilters] = useState({
    category: "all",
    priceRange: "all",
    brand: "all",
    inStock: false,
  })

  const [showFilters, setShowFilters] = useState(false)
  const [activeSort, setActiveSort] = useState("popular")

  // Sample product data
  const products = [
    {
      id: 1,
      name: "Vitamin C 1000mg",
      price: 3500,
      discount: 0,
      image: "/placeholder.svg?height=300&width=300",
      category: "Vitamins",
      inStock: true,
      isNew: true,
      brand: "Nature's Best",
    },
    {
      id: 2,
      name: "Blood Pressure Monitor",
      price: 15000,
      discount: 10,
      image: "/placeholder.svg?height=300&width=300",
      category: "Medical Devices",
      inStock: true,
      isNew: false,
      brand: "HealthGuard",
    },
    {
      id: 3,
      name: "Calcium + Vitamin D3",
      price: 4500,
      discount: 0,
      image: "/placeholder.svg?height=300&width=300",
      category: "Supplements",
      inStock: true,
      isNew: false,
      brand: "VitalCare",
    },
    {
      id: 4,
      name: "Thermometer Digital",
      price: 2500,
      discount: 0,
      image: "/placeholder.svg?height=300&width=300",
      category: "Medical Devices",
      inStock: false,
      isNew: false,
      brand: "HealthGuard",
    },
    {
      id: 5,
      name: "Pain Relief Gel",
      price: 1800,
      discount: 5,
      image: "/placeholder.svg?height=300&width=300",
      category: "Pain Relief",
      inStock: true,
      isNew: true,
      brand: "MediRelief",
    },
    {
      id: 6,
      name: "Facial Cleanser",
      price: 3200,
      discount: 0,
      image: "/placeholder.svg?height=300&width=300",
      category: "Skin Care",
      inStock: true,
      isNew: false,
      brand: "DermaCare",
    },
    {
      id: 7,
      name: "Multivitamin Complete",
      price: 5500,
      discount: 0,
      image: "/placeholder.svg?height=300&width=300",
      category: "Vitamins",
      inStock: true,
      isNew: false,
      brand: "Nature's Best",
    },
    {
      id: 8,
      name: "Hand Sanitizer",
      price: 1000,
      discount: 0,
      image: "/placeholder.svg?height=300&width=300",
      category: "First Aid",
      inStock: true,
      isNew: false,
      brand: "CleanGuard",
    },
    {
      id: 9,
      name: "Omega-3 Fish Oil",
      price: 4800,
      discount: 10,
      image: "/placeholder.svg?height=300&width=300",
      category: "Supplements",
      inStock: true,
      isNew: true,
      brand: "VitalCare",
    },
    {
      id: 10,
      name: "Glucose Monitor Kit",
      price: 12000,
      discount: 15,
      image: "/placeholder.svg?height=300&width=300",
      category: "Medical Devices",
      inStock: false,
      isNew: false,
      brand: "HealthGuard",
    },
    {
      id: 11,
      name: "Hydrating Moisturizer",
      price: 3800,
      discount: 0,
      image: "/placeholder.svg?height=300&width=300",
      category: "Skin Care",
      inStock: true,
      isNew: false,
      brand: "DermaCare",
    },
    {
      id: 12,
      name: "First Aid Kit",
      price: 6500,
      discount: 5,
      image: "/placeholder.svg?height=300&width=300",
      category: "First Aid",
      inStock: true,
      isNew: false,
      brand: "MediRelief",
    },
  ]

  // Filter categories for the dropdown
  const categories = [...new Set(products.map((product) => product.category))]
  const brands = [...new Set(products.map((product) => product.brand))]

  // Filter price ranges
  const priceRanges = [
    { label: "Under ₦2,000", value: "under-2000" },
    { label: "₦2,000 - ₦5,000", value: "2000-5000" },
    { label: "₦5,000 - ₦10,000", value: "5000-10000" },
    { label: "Over ₦10,000", value: "over-10000" },
  ]

  // Handle filter changes
  const handleFilterChange = (name, value) => {
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  // Filter products based on current filters
  const filteredProducts = products.filter((product) => {
    // Category filter
    if (filters.category !== "all" && product.category !== filters.category) {
      return false
    }

    // Brand filter
    if (filters.brand !== "all" && product.brand !== filters.brand) {
      return false
    }

    // Price range filter
    if (filters.priceRange !== "all") {
      if (filters.priceRange === "under-2000" && product.price >= 2000) {
        return false
      } else if (filters.priceRange === "2000-5000" && (product.price < 2000 || product.price > 5000)) {
        return false
      } else if (filters.priceRange === "5000-10000" && (product.price < 5000 || product.price > 10000)) {
        return false
      } else if (filters.priceRange === "over-10000" && product.price <= 10000) {
        return false
      }
    }

    // In-stock filter
    if (filters.inStock && !product.inStock) {
      return false
    }

    return true
  })

  // Sort products based on active sort
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (activeSort === "price-low") {
      return a.price - b.price
    } else if (activeSort === "price-high") {
      return b.price - a.price
    } else if (activeSort === "newest") {
      return a.isNew ? -1 : 1
    }
    // Default: popular (no specific sort)
    return 0
  })

  return (
    <div className="container-custom py-8 md:py-12">
      <div className="flex flex-col md:flex-row justify-between mb-8">
        <h1 className="text-2xl md:text-3xl font-bold mb-4 md:mb-0">Shop Products</h1>

        <div className="relative">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full md:w-60 lg:w-80 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 pl-10"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={18} />
            </div>

            <button
              onClick={() => setShowFilters(!showFilters)}
              className="md:hidden flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-4 rounded-lg"
            >
              <Filter size={18} />
              Filters
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Filters - Desktop (Left Column) */}
        <div className="hidden md:block">
          <div className="bg-white rounded-lg shadow p-4">
            <h2 className="font-bold text-lg mb-4">Filters</h2>

            <div className="space-y-6">
              {/* Category Filter */}
              <div>
                <h3 className="font-medium mb-2">Categories</h3>
                <ul className="space-y-2">
                  <li>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="category"
                        checked={filters.category === "all"}
                        onChange={() => handleFilterChange("category", "all")}
                        className="w-4 h-4 text-[#2196F3] focus:ring-[#2196F3]"
                      />
                      <span className="ml-2 text-gray-700">All Categories</span>
                    </label>
                  </li>
                  {categories.map((category, index) => (
                    <li key={index}>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="category"
                          checked={filters.category === category}
                          onChange={() => handleFilterChange("category", category)}
                          className="w-4 h-4 text-[#2196F3] focus:ring-[#2196F3]"
                        />
                        <span className="ml-2 text-gray-700">{category}</span>
                      </label>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Price Range Filter */}
              <div>
                <h3 className="font-medium mb-2">Price Range</h3>
                <ul className="space-y-2">
                  <li>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="priceRange"
                        checked={filters.priceRange === "all"}
                        onChange={() => handleFilterChange("priceRange", "all")}
                        className="w-4 h-4 text-[#2196F3] focus:ring-[#2196F3]"
                      />
                      <span className="ml-2 text-gray-700">All Prices</span>
                    </label>
                  </li>
                  {priceRanges.map((range, index) => (
                    <li key={index}>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="priceRange"
                          checked={filters.priceRange === range.value}
                          onChange={() => handleFilterChange("priceRange", range.value)}
                          className="w-4 h-4 text-[#2196F3] focus:ring-[#2196F3]"
                        />
                        <span className="ml-2 text-gray-700">{range.label}</span>
                      </label>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Brand Filter */}
              <div>
                <h3 className="font-medium mb-2">Brands</h3>
                <ul className="space-y-2">
                  <li>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="brand"
                        checked={filters.brand === "all"}
                        onChange={() => handleFilterChange("brand", "all")}
                        className="w-4 h-4 text-[#2196F3] focus:ring-[#2196F3]"
                      />
                      <span className="ml-2 text-gray-700">All Brands</span>
                    </label>
                  </li>
                  {brands.map((brand, index) => (
                    <li key={index}>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="brand"
                          checked={filters.brand === brand}
                          onChange={() => handleFilterChange("brand", brand)}
                          className="w-4 h-4 text-[#2196F3] focus:ring-[#2196F3]"
                        />
                        <span className="ml-2 text-gray-700">{brand}</span>
                      </label>
                    </li>
                  ))}
                </ul>
              </div>

              {/* In Stock Filter */}
              <div>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={filters.inStock}
                    onChange={(e) => handleFilterChange("inStock", e.target.checked)}
                    className="w-4 h-4 text-[#2196F3] focus:ring-[#2196F3]"
                  />
                  <span className="ml-2 text-gray-700">In Stock Only</span>
                </label>
              </div>

              <button
                onClick={() =>
                  setFilters({
                    category: "all",
                    priceRange: "all",
                    brand: "all",
                    inStock: false,
                  })
                }
                className="text-[#2196F3] text-sm font-medium mt-2"
              >
                Clear All Filters
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Filters (Collapsible) */}
        {showFilters && (
          <div className="md:hidden bg-white rounded-lg shadow p-4 mb-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-bold text-lg">Filters</h2>
              <button onClick={() => setShowFilters(false)} className="text-gray-500">
                <X size={20} />
              </button>
            </div>

            <div className="space-y-6">
              {/* Category Filter */}
              <div>
                <h3 className="font-medium mb-2">Categories</h3>
                <select
                  value={filters.category}
                  onChange={(e) => handleFilterChange("category", e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md text-sm"
                >
                  <option value="all">All Categories</option>
                  {categories.map((category, index) => (
                    <option key={index} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>

              {/* Price Range Filter */}
              <div>
                <h3 className="font-medium mb-2">Price Range</h3>
                <select
                  value={filters.priceRange}
                  onChange={(e) => handleFilterChange("priceRange", e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md text-sm"
                >
                  <option value="all">All Prices</option>
                  {priceRanges.map((range, index) => (
                    <option key={index} value={range.value}>
                      {range.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Brand Filter */}
              <div>
                <h3 className="font-medium mb-2">Brands</h3>
                <select
                  value={filters.brand}
                  onChange={(e) => handleFilterChange("brand", e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md text-sm"
                >
                  <option value="all">All Brands</option>
                  {brands.map((brand, index) => (
                    <option key={index} value={brand}>
                      {brand}
                    </option>
                  ))}
                </select>
              </div>

              {/* In Stock Filter */}
              <div>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={filters.inStock}
                    onChange={(e) => handleFilterChange("inStock", e.target.checked)}
                    className="w-4 h-4 text-[#2196F3] focus:ring-[#2196F3]"
                  />
                  <span className="ml-2 text-gray-700">In Stock Only</span>
                </label>
              </div>

              <div className="flex justify-between pt-4">
                <button
                  onClick={() =>
                    setFilters({
                      category: "all",
                      priceRange: "all",
                      brand: "all",
                      inStock: false,
                    })
                  }
                  className="text-[#2196F3] text-sm font-medium"
                >
                  Clear All
                </button>
                <button
                  onClick={() => setShowFilters(false)}
                  className="bg-[#2196F3] text-white px-4 py-2 rounded-md text-sm"
                >
                  Apply Filters
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Products Grid (Right Column) */}
        <div className="md:col-span-3">
          {/* Sort Options */}
          <div className="flex justify-between items-center mb-6 bg-white rounded-lg p-3 shadow-sm">
            <p className="text-gray-500 text-sm">
              Showing <span className="font-medium">{sortedProducts.length}</span> products
            </p>

            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-500 hidden sm:inline">Sort by:</span>
              <div className="relative">
                <select
                  value={activeSort}
                  onChange={(e) => setActiveSort(e.target.value)}
                  className="appearance-none bg-gray-50 border border-gray-200 text-gray-700 py-2 px-4 pr-8 rounded-lg focus:outline-none focus:border-[#2196F3] text-sm"
                >
                  <option value="popular">Popular</option>
                  <option value="newest">Newest</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
                <ChevronDown
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"
                  size={16}
                />
              </div>
            </div>
          </div>

          {/* Products Grid */}
          {sortedProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sortedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-16 bg-white rounded-lg shadow">
              <img src="/placeholder.svg?height=120&width=120" alt="No Products Found" className="w-24 h-24 mb-4" />
              <h3 className="text-lg font-medium text-gray-800 mb-2">No Products Found</h3>
              <p className="text-gray-500 text-center max-w-md mb-6">
                We couldn't find any products that match your filters. Try changing your filters or browse our other
                categories.
              </p>
              <button
                onClick={() =>
                  setFilters({
                    category: "all",
                    priceRange: "all",
                    brand: "all",
                    inStock: false,
                  })
                }
                className="btn-accent"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ShopPage
