import { Link } from "react-router-dom"

const CategoryCard = ({ category }) => {
  return (
    <Link
      to={`/shop?category=${category.slug}`}
      className="card group flex flex-col items-center justify-center p-6 text-center"
    >
      <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#E3F2FD] flex items-center justify-center mb-4 group-hover:bg-[#BBDEFB] transition-colors">
        <img
          src={category.icon || "/placeholder.svg"}
          alt={category.name}
          className="w-8 h-8 md:w-10 md:h-10 object-contain"
        />
      </div>
      <h3 className="font-medium text-gray-800 group-hover:text-[#2196F3] transition-colors">{category.name}</h3>
      <p className="text-sm text-gray-500 mt-1">{category.productCount} items</p>
    </Link>
  )
}

export default CategoryCard
