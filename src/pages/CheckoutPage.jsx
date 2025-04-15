"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { useCart } from "../context/CartContext"
import { ChevronLeft, CreditCard, CheckCircle, AlertCircle } from "lucide-react"

const CheckoutPage = () => {
  const { cartItems, getCartTotal, clearCart } = useCart()
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "Lagos",
    paymentMethod: "card",
  })
  const [errors, setErrors] = useState({})
  const [orderPlaced, setOrderPlaced] = useState(false)
  const [isProcessing, setIsProcessing] = useState(false)

  // Calculate totals
  const subtotal = getCartTotal()
  const deliveryFee = subtotal > 10000 ? 0 : 1000
  const total = subtotal + deliveryFee

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })

    // Clear error when field is being edited
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      })
    }
  }

  const validateForm = () => {
    const newErrors = {}

    // Required fields
    const requiredFields = ["firstName", "lastName", "email", "phone", "address", "city", "state"]
    requiredFields.forEach((field) => {
      if (!formData[field]) {
        newErrors[field] = "This field is required"
      }
    })

    // Email validation
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    // Phone validation
    if (formData.phone && !/^\d{11}$/.test(formData.phone.replace(/\s/g, ""))) {
      newErrors.phone = "Please enter a valid 11-digit phone number"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    // Simulate order processing
    setIsProcessing(true)

    setTimeout(() => {
      setIsProcessing(false)
      setOrderPlaced(true)
      clearCart()
    }, 2000)
  }

  // States in Nigeria for dropdown
  const nigerianStates = [
    "Abia",
    "Adamawa",
    "Akwa Ibom",
    "Anambra",
    "Bauchi",
    "Bayelsa",
    "Benue",
    "Borno",
    "Cross River",
    "Delta",
    "Ebonyi",
    "Edo",
    "Ekiti",
    "Enugu",
    "FCT",
    "Gombe",
    "Imo",
    "Jigawa",
    "Kaduna",
    "Kano",
    "Katsina",
    "Kebbi",
    "Kogi",
    "Kwara",
    "Lagos",
    "Nasarawa",
    "Niger",
    "Ogun",
    "Ondo",
    "Osun",
    "Oyo",
    "Plateau",
    "Rivers",
    "Sokoto",
    "Taraba",
    "Yobe",
    "Zamfara",
  ]

  if (orderPlaced) {
    return (
      <div className="container-custom py-12">
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-green-100 p-3 rounded-full">
              <CheckCircle size={48} className="text-green-600" />
            </div>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Order Placed Successfully!</h1>
          <p className="text-gray-600 mb-6">
            Thank you for your order. We've received your order and will begin processing it right away. You will
            receive a confirmation email shortly.
          </p>
          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <p className="font-medium text-gray-800">
              Order Reference: <span className="text-[#2196F3]">KLI-{Math.floor(100000 + Math.random() * 900000)}</span>
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/" className="btn-accent">
              Return to Home
            </Link>
            <Link to="/shop" className="btn-primary">
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="container-custom py-8">
      <div className="flex items-center text-sm text-gray-500 mb-6">
        <Link to="/" className="hover:text-[#2196F3]">
          Home
        </Link>
        <span className="mx-2">/</span>
        <Link to="/cart" className="hover:text-[#2196F3]">
          Cart
        </Link>
        <span className="mx-2">/</span>
        <span className="text-gray-700">Checkout</span>
      </div>

      <h1 className="text-2xl md:text-3xl font-bold mb-8">Checkout</h1>

      {cartItems.length === 0 ? (
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <div className="flex justify-center mb-4">
            <AlertCircle size={48} className="text-yellow-500" />
          </div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Your cart is empty</h2>
          <p className="text-gray-600 mb-6">You need to add items to your cart before checking out.</p>
          <Link to="/shop" className="btn-accent">
            Browse Products
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-6 pb-4 border-b">Shipping Information</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className={`w-full rounded-lg border ${errors.firstName ? "border-red-500" : "border-gray-300"} shadow-sm focus:border-[#2196F3] focus:ring-[#2196F3]`}
                  />
                  {errors.firstName && <p className="mt-1 text-sm text-red-600">{errors.firstName}</p>}
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className={`w-full rounded-lg border ${errors.lastName ? "border-red-500" : "border-gray-300"} shadow-sm focus:border-[#2196F3] focus:ring-[#2196F3]`}
                  />
                  {errors.lastName && <p className="mt-1 text-sm text-red-600">{errors.lastName}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full rounded-lg border ${errors.email ? "border-red-500" : "border-gray-300"} shadow-sm focus:border-[#2196F3] focus:ring-[#2196F3]`}
                  />
                  {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="e.g. 08012345678"
                    className={`w-full rounded-lg border ${errors.phone ? "border-red-500" : "border-gray-300"} shadow-sm focus:border-[#2196F3] focus:ring-[#2196F3]`}
                  />
                  {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                  Delivery Address *
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className={`w-full rounded-lg border ${errors.address ? "border-red-500" : "border-gray-300"} shadow-sm focus:border-[#2196F3] focus:ring-[#2196F3]`}
                />
                {errors.address && <p className="mt-1 text-sm text-red-600">{errors.address}</p>}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div>
                  <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                    City *
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className={`w-full rounded-lg border ${errors.city ? "border-red-500" : "border-gray-300"} shadow-sm focus:border-[#2196F3] focus:ring-[#2196F3]`}
                  />
                  {errors.city && <p className="mt-1 text-sm text-red-600">{errors.city}</p>}
                </div>
                <div>
                  <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">
                    State *
                  </label>
                  <select
                    id="state"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    className={`w-full rounded-lg border ${errors.state ? "border-red-500" : "border-gray-300"} shadow-sm focus:border-[#2196F3] focus:ring-[#2196F3]`}
                  >
                    {nigerianStates.map((state) => (
                      <option key={state} value={state}>
                        {state}
                      </option>
                    ))}
                  </select>
                  {errors.state && <p className="mt-1 text-sm text-red-600">{errors.state}</p>}
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-1">
                  Order Notes (Optional)
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  rows="3"
                  placeholder="Special instructions for delivery or order"
                  className="w-full rounded-lg border border-gray-300 shadow-sm focus:border-[#2196F3] focus:ring-[#2196F3]"
                ></textarea>
              </div>

              <h2 className="text-xl font-semibold mb-6 pb-4 border-b">Payment Method</h2>

              <div className="space-y-4 mb-6">
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="card"
                    name="paymentMethod"
                    value="card"
                    checked={formData.paymentMethod === "card"}
                    onChange={handleChange}
                    className="w-4 h-4 text-[#2196F3] focus:ring-[#2196F3]"
                  />
                  <label htmlFor="card" className="ml-2 flex items-center">
                    <CreditCard size={20} className="mr-2 text-gray-600" />
                    <span>Credit/Debit Card</span>
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                    type="radio"
                    id="payOnDelivery"
                    name="paymentMethod"
                    value="payOnDelivery"
                    checked={formData.paymentMethod === "payOnDelivery"}
                    onChange={handleChange}
                    className="w-4 h-4 text-[#2196F3] focus:ring-[#2196F3]"
                  />
                  <label htmlFor="payOnDelivery" className="ml-2">
                    Pay on Delivery
                  </label>
                </div>
              </div>

              <div className="flex justify-between mt-8">
                <Link to="/cart" className="flex items-center text-[#2196F3] hover:text-[#1976D2]">
                  <ChevronLeft size={16} className="mr-1" /> Back to Cart
                </Link>
                <button type="submit" className="btn-success flex items-center justify-center" disabled={isProcessing}>
                  {isProcessing ? "Processing..." : "Place Order"}
                </button>
              </div>
            </form>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
              <h2 className="text-xl font-semibold mb-6 pb-4 border-b">Order Summary</h2>

              <div className="max-h-60 overflow-y-auto mb-6">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-center py-3 border-b">
                    <div className="w-16 h-16 flex-shrink-0">
                      <img
                        src={item.image || item.images?.[0]}
                        alt={item.name}
                        className="w-full h-full object-cover rounded-md"
                      />
                    </div>
                    <div className="ml-4 flex-grow">
                      <h3 className="text-sm font-medium text-gray-800">{item.name}</h3>
                      <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                    </div>
                    <div className="text-right">
                      <span className="font-medium text-gray-800">
                        ₦
                        {(
                          (item.discount ? (item.price * (100 - item.discount)) / 100 : item.price) * item.quantity
                        ).toFixed(2)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">₦{subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Delivery Fee</span>
                  <span className="font-medium">{deliveryFee === 0 ? "Free" : `₦${deliveryFee.toFixed(2)}`}</span>
                </div>
                <div className="border-t pt-3 flex justify-between font-bold text-gray-800">
                  <span>Total</span>
                  <span className="text-[#2196F3]">₦{total.toFixed(2)}</span>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg text-sm text-gray-600">
                <p className="mb-2">By placing your order, you agree to our:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>
                    <Link to="/terms" className="text-[#2196F3] hover:underline">
                      Terms & Conditions
                    </Link>
                  </li>
                  <li>
                    <Link to="/privacy" className="text-[#2196F3] hover:underline">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link to="/returns" className="text-[#2196F3] hover:underline">
                      Returns Policy
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default CheckoutPage
