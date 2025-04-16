"use client"

import { useState, useEffect } from "react"
import { MessageCircle, X } from "lucide-react"

const WhatsAppButton = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  // WhatsApp number - replace with your actual number
  const whatsappNumber = "+2348012345678"

  // Handle scroll behavior - hide when scrolling down, show when scrolling up
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > lastScrollY && currentScrollY > 300) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  const handleWhatsAppClick = () => {
    // Open WhatsApp with predefined message
    const message = "Hello! I'm interested in your products at KliStore."
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, "_blank")
    setIsOpen(false)
  }

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 transition-transform duration-300 ${isVisible ? "translate-y-0" : "translate-y-28"}`}
    >
      {/* Popup message */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 bg-white rounded-lg shadow-lg p-4 mb-2 w-64 animate-fade-in">
          <button onClick={() => setIsOpen(false)} className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
            <X size={16} />
          </button>
          <p className="text-gray-800 mb-3">Need help with your order or have questions?</p>
          <button
            onClick={handleWhatsAppClick}
            className="bg-[#25D366] hover:bg-[#20BD5C] text-white py-2 px-4 rounded-lg w-full flex items-center justify-center"
          >
            <MessageCircle size={18} className="mr-2" />
            Chat with us now
          </button>
        </div>
      )}

      {/* WhatsApp button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-[#25D366] hover:bg-[#20BD5C] text-white p-4 rounded-full shadow-lg flex items-center justify-center relative"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle size={24} className="animate-pulse" />

        {/* Notification dot */}
        <span className="absolute top-0 right-0 h-3 w-3 bg-red-500 rounded-full"></span>
      </button>
    </div>
  )
}

export default WhatsAppButton
