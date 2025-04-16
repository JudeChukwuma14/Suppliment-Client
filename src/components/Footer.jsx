import { Link } from "react-router-dom"
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Youtube } from "lucide-react"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-50 pt-12 pb-6">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-[#2196F3]">
                Kli<span className="text-[#87CEEB]">Store</span>
              </span>
            </Link>
            <p className="mt-4 text-gray-600">
              Your trusted online pharmacy for quality medications and healthcare products.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-[#2196F3]">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-[#2196F3]">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-[#2196F3]">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-[#2196F3]">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/shop" className="text-gray-600 hover:text-[#2196F3]">
                  Shop
                </Link>
              </li>
              <li>
                <Link to="/prescription" className="text-gray-600 hover:text-[#2196F3]">
                  Upload Prescription
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-[#2196F3]">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-[#2196F3]">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-600 hover:text-[#2196F3]">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-600 hover:text-[#2196F3]">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/terms" className="text-gray-600 hover:text-[#2196F3]">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-600 hover:text-[#2196F3]">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/returns" className="text-gray-600 hover:text-[#2196F3]">
                  Returns Policy
                </Link>
              </li>
              <li>
                <Link to="/disclaimer" className="text-gray-600 hover:text-[#2196F3]">
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone size={18} className="mr-2 text-[#2196F3] mt-1" />
                <span className="text-gray-600">+234 800 123 4567</span>
              </li>
              <li className="flex items-start">
                <Mail size={18} className="mr-2 text-[#2196F3] mt-1" />
                <span className="text-gray-600">support@klistore.com</span>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 text-[#2196F3] mt-1" />
                <span className="text-gray-600">123 Health Street, Lagos, Nigeria</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-10 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm mb-4 md:mb-0">
              &copy; {currentYear} KliStore. All rights reserved. PCN Registered.
            </p>
            <div className="flex items-center space-x-4">
              <img src="/images/payment-visa.svg" alt="Visa" className="h-6" />
              <img src="/images/payment-mastercard.svg" alt="Mastercard" className="h-6" />
              <img src="/images/payment-paystack.svg" alt="Paystack" className="h-6" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
