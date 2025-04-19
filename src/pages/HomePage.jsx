import { Link } from "react-router-dom"
import ProductCard from "../components/ProductCard"
import CategoryCard from "../components/CategoryCard"
import TestimonialCard from "../components/TestimonialCard"
import NewsletterForm from "../components/NewsletterForm"
import { TruckIcon, Pill, ShieldCheck, Clock, Headphones, BadgePercent } from "lucide-react"
import goli from "../../public/goli.png"

const HomePage = () => {
  const featuredProducts = [
    {
      id: 1,
      name: "Vitamin C 1000mg",
      price: 3500,
      discount: 0,
      image: "https://www.masonvitamins.com/wp-content/uploads/573-100FRONT.jpg",
      category: "Vitamins",
      inStock: true,
      isNew: true,
    },
    {
      id: 2,
      name: "Blood Pressure Monitor",
      price: 15000,
      discount: 10,
      image: "https://www.masonvitamins.com/wp-content/uploads/573-100FRONT.jpg",
      category: "Medical Devices",
      inStock: true,
      isNew: false,
    },
    {
      id: 3,
      name: "Calcium + Vitamin D3",
      price: 4500,
      discount: 0,
      image: "https://www.masonvitamins.com/wp-content/uploads/573-100FRONT.jpg",
      category: "Supplements",
      inStock: true,
      isNew: false,
    },
    {
      id: 4,
      name: "Thermometer Digital",
      price: 2500,
      discount: 0,
      image: "https://www.masonvitamins.com/wp-content/uploads/573-100FRONT.jpg",
      category: "Medical Devices",
      inStock: false,
      isNew: false,
    },
    {
      id: 5,
      name: "Pain Relief Gel",
      price: 1800,
      discount: 5,
      image: "https://www.masonvitamins.com/wp-content/uploads/573-100FRONT.jpg",
      category: "Pain Relief",
      inStock: true,
      isNew: true,
    },
    {
      id: 6,
      name: "Facial Cleanser",
      price: 3200,
      discount: 0,
      image: "https://www.masonvitamins.com/wp-content/uploads/573-100FRONT.jpg",
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
      icon: "https://i.pinimg.com/736x/9c/67/62/9c6762530db70b24ae324459e6e74355.jpg",
      productCount: 42,
    },
    {
      id: 2,
      name: "Supplements",
      slug: "supplements",
      icon: "https://i.pinimg.com/736x/9c/67/62/9c6762530db70b24ae324459e6e74355.jpg",
      productCount: 56,
    },
    {
      id: 3,
      name: "Medical Devices",
      slug: "medical-devices",
      icon: "https://i.pinimg.com/736x/9c/67/62/9c6762530db70b24ae324459e6e74355.jpg",
      productCount: 24,
    },
    {
      id: 4,
      name: "Pain Relief",
      slug: "pain-relief",
      icon: "https://i.pinimg.com/736x/9c/67/62/9c6762530db70b24ae324459e6e74355.jpg",
      productCount: 18,
    },
    {
      id: 5,
      name: "Skin Care",
      slug: "skin-care",
      icon: "https://i.pinimg.com/736x/9c/67/62/9c6762530db70b24ae324459e6e74355.jpg",
      productCount: 37,
    },
    {
      id: 6,
      name: "First Aid",
      slug: "first-aid",
      icon: "https://i.pinimg.com/736x/9c/67/62/9c6762530db70b24ae324459e6e74355.jpg",
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
      avatar: "https://i.pinimg.com/736x/3b/0e/c6/3b0ec6ed87d312bc4d449f7ed05016ff.jpg",
    },
    {
      id: 2,
      name: "Chioma Okonkwo",
      location: "Abuja",
      rating: 4,
      comment: "I love that I can upload my prescription and have my medications delivered right to my doorstep.",
      avatar: "https://i.pinimg.com/736x/3b/0e/c6/3b0ec6ed87d312bc4d449f7ed05016ff.jpg",
    },
    {
      id: 3,
      name: "Emmanuel Osei",
      location: "Port Harcourt",
      rating: 5,
      comment: "The prices are competitive and the website is so easy to use. I've made KliStore my go-to pharmacy.",
      avatar: "https://i.pinimg.com/736x/3b/0e/c6/3b0ec6ed87d312bc4d449f7ed05016ff.jpg",
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
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <h1 className="mb-4 text-3xl font-bold text-gray-800 md:text-4xl lg:text-5xl">
                Shop Quality Medicines <span className="text-[#2196F3]">With Confidence</span>
              </h1>
              <p className="mb-8 text-lg text-gray-600">
                Your trusted online pharmacy for all your healthcare needs. Licensed by the Pharmacists Council of
                Nigeria.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link to="/shop" className="text-center btn-success">
                  Shop Now
                </Link>
                <Link to="/prescription" className="text-center btn-accent">
                  Upload Prescription
                </Link>
              </div>
              <div className="flex flex-wrap items-center gap-4 mt-8">
                <div className="flex items-center px-4 py-2 text-sm bg-white rounded-full shadow-sm">
                  <ShieldCheck size={16} className="text-[#4CAF50] mr-1" />
                  <span>PCN Registered</span>
                </div>
                <div className="flex items-center px-4 py-2 text-sm bg-white rounded-full shadow-sm">
                  <TruckIcon size={16} className="text-[#2196F3] mr-1" />
                  <span>Same-Day Delivery</span>
                </div>
                <div className="flex items-center px-4 py-2 text-sm bg-white rounded-full shadow-sm">
                  <Pill size={16} className="text-[#FF9800] mr-1" />
                  <span>Genuine Products</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src={goli}
                alt="KliStore Products"
                className=""
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="mb-10 text-center">
            <h2 className="mb-4 text-2xl font-bold text-gray-800 md:text-3xl">Shop By Categories</h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              Browse our wide range of healthcare products categorized for your convenience.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6 md:gap-6">
            {categories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="flex flex-col items-center justify-between mb-10 md:flex-row">
            <div>
              <h2 className="mb-2 text-2xl font-bold text-gray-800 md:text-3xl">Featured Products</h2>
              <p className="text-gray-600">Explore our handpicked selection of high-quality healthcare products.</p>
            </div>
            <Link to="/shop" className="mt-4 md:mt-0 btn-accent">
              View All Products
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="mb-10 text-center">
            <h2 className="mb-4 text-2xl font-bold text-gray-800 md:text-3xl">What Our Customers Say</h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              Trusted by thousands of customers across Nigeria for their healthcare needs.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Features/Benefits Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="mb-10 text-center">
            <h2 className="mb-4 text-2xl font-bold text-gray-800 md:text-3xl">Why Choose KliStore</h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              We're committed to providing you with the best healthcare experience possible.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-6 text-center bg-white border border-gray-100 rounded-lg shadow-sm"
              >
                {feature.icon}
                <h3 className="mt-4 mb-2 text-lg font-semibold text-gray-800">{feature.title}</h3>
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
