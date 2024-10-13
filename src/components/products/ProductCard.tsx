// components/ProductCard.tsx
import React from 'react';
import Link from 'next/link';

interface ProductCardProps {
  product: {
    slug: string; // Using slug
    name: string;
    price: number;
    image: string;
    description: string;
  };
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="border p-4 rounded-md shadow-lg hover:shadow-xl transition-shadow duration-200">
      {/* Product Image */}
      <img
        src={product.image}
        alt={`Image of ${product.name}`}
        className="w-full h-48 object-cover rounded-md"
      />

      {/* Product Title with Link */}
      <Link href={`/product-details/${product.slug}`}>
        <h3 className="text-xl font-bold mt-4 cursor-pointer hover:underline">
          {product.name}
        </h3>
      </Link>

      {/* Product Description */}
      <p className="text-gray-700 mt-2">{product.description}</p>

      {/* Product Price */}
      <p className="text-lg font-semibold text-green-600 mt-4">${product.price}</p>
    </div>
  );
};

export default ProductCard;
