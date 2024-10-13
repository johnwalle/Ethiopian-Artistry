import React from 'react';

interface ProductCardProps {
  product: {
    id: string;
    name: string;
    price: number;
    image: string;
    description: string;
  };
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="border p-4 rounded-md shadow-lg">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-md" />
      <h3 className="text-xl font-bold mt-4">{product.name}</h3>
      <p className="text-gray-700 mt-2">{product.description}</p>
      <p className="text-lg font-semibold text-green-600 mt-4">${product.price}</p>
    </div>
  );
};

export default ProductCard;
