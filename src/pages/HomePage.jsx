import { Link } from "react-router-dom"
import { TruckIcon, Pill, ShieldCheck, Clock, Headphones, BadgePercent } from "lucide-react"
import CategoryCard from "../components/reuseable/CategoryCard"
import ProductCard from "../components/reuseable/ProductCard"
import TestimonialCard from "../components/reuseable/TestimonialCard"

const HomePage = () => {
  const featuredProducts = [
    {
      id: 1,
      name: "Vitamin C 1000mg",
      price: 3500,
      discount: 0,
      image: "/placeholder.svg?height=300&width=300",
      category: "Vitamins",
      inStock: true,
      isNew: true,
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
    },
  ]

  const categories = [
    {
      id: 1,
      name: "Vitamins",
      slug: "vitamins",
      icon: "/placeholder.svg?height=64&width=64",
      productCount: 42,
    },
    {
      id: 2,
      name: "Supplements",
      slug: "supplements",
      icon: "/placeholder.svg?height=64&width=64",
      productCount: 56,
    },
    {
      id: 3,
      name: "Medical Devices",
      slug: "medical-devices",
      icon: "/placeholder.svg?height=64&width=64",
      productCount: 24,
    },
    {
      id: 4,
      name: "Pain Relief",
      slug: "pain-relief",
      icon: "/placeholder.svg?height=64&width=64",
      productCount: 18,
    },
    {
      id: 5,
      name: "Skin Care",
      slug: "skin-care",
      icon: "/placeholder.svg?height=64&width=64",
      productCount: 37,
    },
    {
      id: 6,
      name: "First Aid",
      slug: "first-aid",
      icon: "/placeholder.svg?height=64&width=64",
      productCount: 15,
    },
  ]

  const testimonials = [
    {
      id: 1,
      name: "Adebayo Johnson",
      location: "Lagos",
      rating: 5,
      comment: "KliStore's same-day delivery saved me when I urgently needed medicine for my daughter. Great service!",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 2,
      name: "Chioma Okonkwo",
      location: "Abuja",
      rating: 4,
      comment: "I love that I can upload my prescription and have my medications delivered right to my doorstep.",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 3,
      name: "Emmanuel Osei",
      location: "Port Harcourt",
      rating: 5,
      comment: "The prices are competitive and the website is so easy to use. I've made KliStore my go-to pharmacy.",
      avatar: "/placeholder.svg?height=100&width=100",
    },
  ]

  const features = [
    {
      icon: <TruckIcon className="w-10 h-10 text-[#2196F3]" />,
      title: "Fast Delivery",
      description: "Same-day delivery available in selected areas",
    },
    {
      icon: <Pill className="w-10 h-10 text-[#2196F3]" />,
      title: "Genuine Products",
      description: "All products are sourced from authorized distributors",
    },
    {
      icon: <ShieldCheck className="w-10 h-10 text-[#2196F3]" />,
      title: "Secure Payments",
      description: "Multiple secure payment options available",
    },
    {
      icon: <Clock className="w-10 h-10 text-[#2196F3]" />,
      title: "24/7 Support",
      description: "Our pharmacists are available round the clock",
    },
    {
      icon: <Headphones className="w-10 h-10 text-[#2196F3]" />,
      title: "Professional Advice",
      description: "Get expert advice from our certified pharmacists",
    },
    {
      icon: <BadgePercent className="w-10 h-10 text-[#2196F3]" />,
      title: "Regular Discounts",
      description: "Special offers and promotions every week",
    },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-[#E3F2FD] py-16 md:py-24">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
                Shop Quality Medicines <span className="text-[#2196F3]">With Confidence</span>
              </h1>
              <p className="text-gray-600 text-lg mb-8">
                Your trusted online pharmacy for all your healthcare needs. Licensed by the Pharmacists Council of
                Nigeria.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/shop" className="btn-success text-center">
                  Shop Now
                </Link>
                <Link to="/prescription" className="btn-accent text-center">
                  Upload Prescription
                </Link>
              </div>
              <div className="mt-8 flex items-center flex-wrap gap-4">
                <div className="bg-white px-4 py-2 rounded-full text-sm flex items-center shadow-sm">
                  <ShieldCheck size={16} className="text-[#4CAF50] mr-1" />
                  <span>PCN Registered</span>
                </div>
                <div className="bg-white px-4 py-2 rounded-full text-sm flex items-center shadow-sm">
                  <TruckIcon size={16} className="text-[#2196F3] mr-1" />
                  <span>Same-Day Delivery</span>
                </div>
                <div className="bg-white px-4 py-2 rounded-full text-sm flex items-center shadow-sm">
                  <Pill size={16} className="text-[#FF9800] mr-1" />
                  <span>Genuine Products</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/placeholder.svg?height=500&width=500"
                alt="KliStore Products"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Shop By Categories</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Browse our wide range of healthcare products categorized for your convenience.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
            {categories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-center mb-10">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">Featured Products</h2>
              <p className="text-gray-600">Explore our handpicked selection of high-quality healthcare products.</p>
            </div>
            <Link to="/shop" className="mt-4 md:mt-0 btn-accent">
              View All Products
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">What Our Customers Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Trusted by thousands of customers across Nigeria for their healthcare needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Features/Benefits Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Why Choose KliStore</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We're committed to providing you with the best healthcare experience possible.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex flex-col items-center text-center"
              >
                {feature.icon}
                <h3 className="font-semibold text-lg text-gray-800 mt-4 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="section-padding">
        <div className="container-custom">
          <NewsletterForm />
        </div>
      </section>
    </div>
  )
}

export default HomePage
