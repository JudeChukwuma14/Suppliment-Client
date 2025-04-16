"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { Heart, ShoppingCart, Check } from "lucide-react"
import { useCart } from "../context/CartContext"

const ProductCard = ({ product }) => {
  const [isAddedToCart, setIsAddedToCart] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const { addToCart } = useCart()

  const handleAddToCart = (e) => {
    e.preventDefault()
    addToCart(product)
    setIsAddedToCart(true)

    setTimeout(() => {
      setIsAddedToCart(false)
    }, 2000)
  }

  return (
    <div className="card group" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <Link to={`/products/${product.id}`} className="block">
        <div className="relative overflow-hidden">
          <img
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {/* Product badges */}
          {product.isNew && (
            <span className="absolute top-2 left-2 bg-[#2196F3] text-white text-xs px-2 py-1 rounded-md">New</span>
          )}
          {product.discount > 0 && (
            <span className="absolute top-2 right-2 bg-[#F44336] text-white text-xs px-2 py-1 rounded-md">
              -{product.discount}%
            </span>
          )}

          {/* Action buttons on hover */}
          <div
            className={`absolute top-2 right-2 flex flex-col gap-2 transition-opacity duration-300 ${isHovered ? "opacity-100" : "opacity-0"}`}
          >
            <button className="bg-white p-2 rounded-full shadow-md hover:bg-[#2196F3] hover:text-white transition-colors">
              <Heart size={16} />
            </button>
          </div>

          {/* Stock status */}
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-xs py-1 text-center">
            {product.inStock ? (
              <span className="text-green-300 flex items-center justify-center gap-1">
                <Check size={12} /> In Stock
              </span>
            ) : (
              <span className="text-red-300">Out of Stock</span>
            )}
          </div>
        </div>

        <div className="p-4">
          <div className="mb-2">
            <span className="text-xs text-gray-500">{product.category}</span>
          </div>
          <h3 className="font-semibold text-gray-800 mb-1 truncate">{product.name}</h3>
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              {product.discount > 0 ? (
                <>
                  <span className="font-bold text-[#2196F3]">
                    ₦{((product.price * (100 - product.discount)) / 100).toFixed(2)}
                  </span>
                  <span className="text-gray-500 text-sm line-through">₦{product.price.toFixed(2)}</span>
                </>
              ) : (
                <span className="font-bold text-[#2196F3]">₦{product.price.toFixed(2)}</span>
              )}
            </div>
          </div>

          <button
            onClick={handleAddToCart}
            disabled={!product.inStock || isAddedToCart}
            className={`w-full py-2 px-3 rounded flex items-center justify-center transition-all ${
              isAddedToCart
                ? "bg-[#4CAF50] text-white"
                : product.inStock
                  ? "bg-[#87CEEB] hover:bg-[#2196F3] text-white"
                  : "bg-gray-200 text-gray-500 cursor-not-allowed"
            }`}
          >
            {isAddedToCart ? (
              <>
                <Check size={16} className="mr-1" /> Added
              </>
            ) : (
              <>
                <ShoppingCart size={16} className="mr-1" /> Add to Cart
              </>
            )}
          </button>
        </div>
      </Link>
    </div>
  )
}

export default ProductCard
