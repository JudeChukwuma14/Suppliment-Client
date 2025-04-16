"use client"

import { useState } from "react"
import { useParams, Link } from "react-router-dom"
import { Star, Truck, ShieldCheck, Heart, Plus, Minus, Info, CheckCircle } from "lucide-react"
import { useCart } from "../context/CartContext"
import ProductCard from "../components/ProductCard"

const ProductDetail = () => {
  const { id } = useParams()
  const [quantity, setQuantity] = useState(1)
  const [activeTab, setActiveTab] = useState("description")
  const [activeImage, setActiveImage] = useState(0)
  const { addToCart } = useCart()

  // Sample product data
  const product = {
    id: Number.parseInt(id),
    name: "Premium Vitamin C 1000mg with Zinc",
    price: 5500,
    discount: 10,
    description:
      "Premium Vitamin C 1000mg with Zinc provides immune support and antioxidant protection. Each tablet delivers a powerful dose of Vitamin C enhanced with Zinc for optimal absorption and effectiveness.",
    inStock: true,
    category: "Vitamins & Supplements",
    brand: "Nature's Best",
    sku: "VIT-C1000-ZN",
    dosage: "1 tablet daily with food",
    expiryDate: "12/2024",
    images: [
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
    ],
    ingredients:
      "Vitamin C (as Ascorbic Acid) 1000mg, Zinc (as Zinc Citrate) 15mg, Citrus Bioflavonoids 25mg, Rose Hips 25mg, Cellulose, Stearic Acid, Magnesium Stearate",
    usage: "Take 1 tablet daily with food. Best taken in the morning or as directed by a healthcare professional.",
    warnings:
      "Keep out of reach of children. Do not use if pregnant or nursing without consulting a doctor. Do not exceed recommended dose.",
    features: [
      "High potency 1000mg of Vitamin C per tablet",
      "Added Zinc for enhanced immune support",
      "Slow-release formula for optimal absorption",
      "Suitable for vegetarians",
      "Free from artificial colors and preservatives",
    ],
    rating: 4.5,
    reviewCount: 47,
  }

  // Sample related products
  const relatedProducts = [
    {
      id: 101,
      name: "Vitamin D3 5000 IU",
      price: 3800,
      discount: 0,
      image: "/placeholder.svg?height=300&width=300",
      category: "Vitamins",
      inStock: true,
      isNew: false,
    },
    {
      id: 102,
      name: "Zinc + Vitamin C Gummies",
      price: 4200,
      discount: 5,
      image: "/placeholder.svg?height=300&width=300",
      category: "Vitamins",
      inStock: true,
      isNew: true,
    },
    {
      id: 103,
      name: "Multivitamin Complete",
      price: 6500,
      discount: 0,
      image: "/placeholder.svg?height=300&width=300",
      category: "Vitamins",
      inStock: true,
      isNew: false,
    },
  ]

  const handleQuantityChange = (action) => {
    if (action === "decrease" && quantity > 1) {
      setQuantity(quantity - 1)
    } else if (action === "increase") {
      setQuantity(quantity + 1)
    }
  }

  const handleAddToCart = () => {
    addToCart({
      ...product,
      quantity,
    })
  }

  // Calculate discounted price
  const discountedPrice = product.discount ? (product.price * (100 - product.discount)) / 100 : product.price

  return (
    <div className="container-custom py-8">
      {/* Breadcrumb */}
      <div className="flex items-center text-sm text-gray-500 mb-6">
        <Link to="/" className="hover:text-[#2196F3]">
          Home
        </Link>
        <span className="mx-2">/</span>
        <Link to="/shop" className="hover:text-[#2196F3]">
          Shop
        </Link>
        <span className="mx-2">/</span>
        <Link
          to={`/shop?category=${product.category.toLowerCase().replace(" & ", "-")}`}
          className="hover:text-[#2196F3]"
        >
          {product.category}
        </Link>
        <span className="mx-2">/</span>
        <span className="text-gray-700">{product.name}</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white rounded-lg shadow-md p-4 md:p-6 mb-8">
        {/* Product Images */}
        <div>
          <div className="mb-4 rounded-lg overflow-hidden">
            <img
              src={product.images[activeImage] || "/placeholder.svg"}
              alt={product.name}
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="grid grid-cols-4 gap-2">
            {product.images.map((image, index) => (
              <div
                key={index}
                className={`rounded-lg overflow-hidden border-2 ${
                  activeImage === index ? "border-[#2196F3]" : "border-transparent"
                } cursor-pointer`}
                onClick={() => setActiveImage(index)}
              >
                <img
                  src={image || "/placeholder.svg"}
                  alt={`${product.name} - ${index + 1}`}
                  className="w-full h-20 object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">{product.name}</h1>

          <div className="flex items-center gap-2 mb-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  className={`${
                    i < Math.floor(product.rating)
                      ? "text-yellow-400 fill-yellow-400"
                      : i < product.rating
                        ? "text-yellow-400 fill-yellow-400 half-star"
                        : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-gray-500">({product.reviewCount} reviews)</span>
          </div>

          <div className="mb-4">
            {product.discount > 0 ? (
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-[#2196F3]">₦{discountedPrice.toFixed(2)}</span>
                <span className="text-lg text-gray-500 line-through">₦{product.price.toFixed(2)}</span>
                <span className="bg-red-500 text-white text-xs px-2 py-1 rounded">{product.discount}% OFF</span>
              </div>
            ) : (
              <span className="text-2xl font-bold text-[#2196F3]">₦{product.price.toFixed(2)}</span>
            )}
          </div>

          <div className="flex items-center gap-3 mb-4">
            <span
              className={`text-sm px-3 py-1 rounded-full ${
                product.inStock ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
              }`}
            >
              {product.inStock ? "In Stock" : "Out of Stock"}
            </span>
            <span className="text-sm text-gray-500">SKU: {product.sku}</span>
          </div>

          <p className="text-gray-600 mb-6">{product.description}</p>

          <div className="mb-6">
            <div className="flex items-center mb-2">
              <span className="w-20 text-gray-600">Brand:</span>
              <span className="font-medium">{product.brand}</span>
            </div>
            <div className="flex items-center mb-2">
              <span className="w-20 text-gray-600">Category:</span>
              <span className="font-medium">{product.category}</span>
            </div>
            <div className="flex items-center">
              <span className="w-20 text-gray-600">Expires:</span>
              <span className="font-medium">{product.expiryDate}</span>
            </div>
          </div>

          {product.inStock && (
            <div className="mb-6">
              <div className="flex items-center mb-4">
                <span className="mr-4 text-gray-700">Quantity:</span>
                <div className="flex items-center border border-gray-300 rounded-md">
                  <button
                    onClick={() => handleQuantityChange("decrease")}
                    className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                    disabled={quantity <= 1}
                  >
                    <Minus size={16} />
                  </button>
                  <input
                    type="number"
                    min="1"
                    value={quantity}
                    onChange={(e) => setQuantity(Number.parseInt(e.target.value) || 1)}
                    className="w-12 text-center border-x border-gray-300 py-1"
                  />
                  <button
                    onClick={() => handleQuantityChange("increase")}
                    className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                  >
                    <Plus size={16} />
                  </button>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={handleAddToCart}
                  className="btn-success flex-grow flex items-center justify-center gap-1"
                >
                  Add to Cart
                </button>
                <button className="btn-accent flex items-center justify-center gap-1">
                  <Heart size={18} /> Add to Wishlist
                </button>
              </div>
            </div>
          )}

          <div className="border-t border-gray-200 pt-4 space-y-3">
            <div className="flex items-center text-gray-600">
              <Truck size={18} className="mr-2 text-[#2196F3]" />
              <span>Free shipping for orders over ₦10,000</span>
            </div>
            <div className="flex items-center text-gray-600">
              <ShieldCheck size={18} className="mr-2 text-[#2196F3]" />
              <span>Secure payment & PCN verified product</span>
            </div>
          </div>
        </div>
      </div>

      {/* Product Tabs */}
      <div className="bg-white rounded-lg shadow-md mb-8">
        <div className="border-b border-gray-200">
          <div className="flex overflow-x-auto">
            <button
              className={`px-4 py-3 text-sm font-medium whitespace-nowrap ${
                activeTab === "description"
                  ? "text-[#2196F3] border-b-2 border-[#2196F3]"
                  : "text-gray-500 hover:text-gray-700"
              }`}
              onClick={() => setActiveTab("description")}
            >
              Description
            </button>
            <button
              className={`px-4 py-3 text-sm font-medium whitespace-nowrap ${
                activeTab === "ingredients"
                  ? "text-[#2196F3] border-b-2 border-[#2196F3]"
                  : "text-gray-500 hover:text-gray-700"
              }`}
              onClick={() => setActiveTab("ingredients")}
            >
              Ingredients
            </button>
            <button
              className={`px-4 py-3 text-sm font-medium whitespace-nowrap ${
                activeTab === "usage"
                  ? "text-[#2196F3] border-b-2 border-[#2196F3]"
                  : "text-gray-500 hover:text-gray-700"
              }`}
              onClick={() => setActiveTab("usage")}
            >
              Usage & Dosage
            </button>
            <button
              className={`px-4 py-3 text-sm font-medium whitespace-nowrap ${
                activeTab === "reviews"
                  ? "text-[#2196F3] border-b-2 border-[#2196F3]"
                  : "text-gray-500 hover:text-gray-700"
              }`}
              onClick={() => setActiveTab("reviews")}
            >
              Reviews ({product.reviewCount})
            </button>
          </div>
        </div>

        <div className="p-4 md:p-6">
          {activeTab === "description" && (
            <div>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <h3 className="font-semibold text-gray-800 mb-2">Key Features</h3>
              <ul className="space-y-2 mb-4">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle size={18} className="mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="bg-yellow-50 border border-yellow-200 rounded-md p-4 text-yellow-800 flex items-start">
                <Info size={18} className="mr-2 mt-0.5 flex-shrink-0" />
                <p className="text-sm">
                  This product is not intended to diagnose, treat, cure, or prevent any disease. Always consult with a
                  qualified healthcare professional before starting any supplement regimen.
                </p>
              </div>
            </div>
          )}

          {activeTab === "ingredients" && (
            <div>
              <h3 className="font-semibold text-gray-800 mb-3">Active Ingredients</h3>
              <p className="text-gray-600 mb-4">{product.ingredients}</p>
              <h3 className="font-semibold text-gray-800 mb-3">Nutritional Information</h3>
              <div className="border border-gray-200 rounded-md overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Nutrient
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Amount Per Serving
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        % Daily Value
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-4 py-3 text-sm text-gray-700">Vitamin C (as Ascorbic Acid)</td>
                      <td className="px-4 py-3 text-sm text-gray-700">1000mg</td>
                      <td className="px-4 py-3 text-sm text-gray-700">1667%</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm text-gray-700">Zinc (as Zinc Citrate)</td>
                      <td className="px-4 py-3 text-sm text-gray-700">15mg</td>
                      <td className="px-4 py-3 text-sm text-gray-700">136%</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm text-gray-700">Citrus Bioflavonoids</td>
                      <td className="px-4 py-3 text-sm text-gray-700">25mg</td>
                      <td className="px-4 py-3 text-sm text-gray-700">*</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm text-gray-700">Rose Hips</td>
                      <td className="px-4 py-3 text-sm text-gray-700">25mg</td>
                      <td className="px-4 py-3 text-sm text-gray-700">*</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-gray-500 mt-2">* Daily Value not established.</p>
            </div>
          )}

          {activeTab === "usage" && (
            <div>
              <h3 className="font-semibold text-gray-800 mb-3">Recommended Usage</h3>
              <p className="text-gray-600 mb-4">{product.usage}</p>

              <h3 className="font-semibold text-gray-800 mb-3">Dosage Information</h3>
              <p className="text-gray-600 mb-4">{product.dosage}</p>

              <h3 className="font-semibold text-gray-800 mb-3">Warnings & Precautions</h3>
              <p className="text-gray-600 mb-4">{product.warnings}</p>

              <div className="bg-red-50 border border-red-200 rounded-md p-4 text-red-800 flex items-start">
                <Info size={18} className="mr-2 mt-0.5 flex-shrink-0" />
                <p className="text-sm">
                  If you are pregnant, nursing, taking medications, or have a medical condition, consult your physician
                  before using this product. Keep out of reach of children.
                </p>
              </div>
            </div>
          )}

          {activeTab === "reviews" && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <div className="flex items-center">
                    <span className="text-3xl font-bold text-gray-800 mr-2">{product.rating}</span>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={18}
                          className={`${
                            i < Math.floor(product.rating)
                              ? "text-yellow-400 fill-yellow-400"
                              : i < product.rating
                                ? "text-yellow-400 fill-yellow-400 half-star"
                                : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">{product.reviewCount} verified reviews</p>
                </div>
                <button className="btn-accent">Write a Review</button>
              </div>

              {/* Sample Reviews */}
              <div className="space-y-6">
                <div className="border-b border-gray-100 pb-6">
                  <div className="flex justify-between mb-2">
                    <div className="flex items-center">
                      <img
                        src="/placeholder.svg?height=100&width=100"
                        alt="User Avatar"
                        className="w-10 h-10 rounded-full mr-3"
                      />
                      <div>
                        <h4 className="font-medium text-gray-800">Michael O.</h4>
                        <p className="text-xs text-gray-500">Verified Purchase • 2 weeks ago</p>
                      </div>
                    </div>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={14}
                          className={i < 5 ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
                        />
                      ))}
                    </div>
                  </div>
                  <h5 className="font-medium text-gray-800 mb-2">Excellent quality product</h5>
                  <p className="text-gray-600 text-sm">
                    I've been using this for a month now and I can definitely notice an improvement in my immune health.
                    The tablets are easy to swallow and don't have a strange aftertaste like some others I've tried.
                  </p>
                </div>

                <div className="border-b border-gray-100 pb-6">
                  <div className="flex justify-between mb-2">
                    <div className="flex items-center">
                      <img
                        src="/placeholder.svg?height=100&width=100"
                        alt="User Avatar"
                        className="w-10 h-10 rounded-full mr-3"
                      />
                      <div>
                        <h4 className="font-medium text-gray-800">Sarah T.</h4>
                        <p className="text-xs text-gray-500">Verified Purchase • 1 month ago</p>
                      </div>
                    </div>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={14}
                          className={i < 4 ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
                        />
                      ))}
                    </div>
                  </div>
                  <h5 className="font-medium text-gray-800 mb-2">Great value for money</h5>
                  <p className="text-gray-600 text-sm">
                    This is my second time ordering this product. The price is reasonable compared to other vitamin C
                    supplements with the same dosage. Delivery was prompt and packaging was secure.
                  </p>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <div className="flex items-center">
                      <img
                        src="/placeholder.svg?height=100&width=100"
                        alt="User Avatar"
                        className="w-10 h-10 rounded-full mr-3"
                      />
                      <div>
                        <h4 className="font-medium text-gray-800">David K.</h4>
                        <p className="text-xs text-gray-500">Verified Purchase • 3 months ago</p>
                      </div>
                    </div>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={14}
                          className={i < 4 ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
                        />
                      ))}
                    </div>
                  </div>
                  <h5 className="font-medium text-gray-800 mb-2">Good product but tablets are large</h5>
                  <p className="text-gray-600 text-sm">
                    The quality is good but I find the tablets a bit large and sometimes difficult to swallow.
                    Otherwise, it seems to be working well for boosting my immunity during the rainy season.
                  </p>
                </div>
              </div>

              <div className="mt-6 text-center">
                <button className="text-[#2196F3] font-medium">View All {product.reviewCount} Reviews</button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Related Products */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800">You Might Also Like</h2>
          <Link to="/shop" className="text-[#2196F3] text-sm font-medium hover:underline">
            View All
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {relatedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
