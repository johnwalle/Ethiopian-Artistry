// app/product-details/[slug]/page.tsx
'use client';

import Link from 'next/link';

// Mock product data (replace with real data fetching)
const productData = {
    'ethiopian-handwoven-scarf': {
        slug: 'ethiopian-handwoven-scarf',
        name: 'Ethiopian Handwoven Scarf',
        price: 25,
        images: [
            "https://cdn.gamma.app/m3rdunp6aj4a2ph/generated-images/-pnWGG6HoRihzcI_ywwk-.jpg",
            "https://cdn.gamma.app/m3rdunp6aj4a2ph/generated-images/-pnWGG6HoRihzcI_ywwk-.jpg",
        ],
        description:
            'A beautiful traditional Ethiopian scarf made from high-quality fabric, ideal for any occasion.',
        materials: 'Cotton, Silk',
        artisan: {
            name: 'Lidya Assefa',
            slug: 'lidya-assefa',  // Add a slug for the artisan
            bio: 'Lidya is an artisan from Addis Ababa, known for her expertise in weaving beautiful traditional scarves.',
            image: '/images/artisan1.jpg',
        },
        reviews: [
            { user: 'John Doe', rating: 4, comment: 'Beautiful scarf, very comfortable to wear!' },
            { user: 'Jane Smith', rating: 5, comment: 'I love the design and quality!' },
        ],
        relatedProducts: [
            { slug: 'handwoven-basket', name: 'Handwoven Basket', image: '/images/product1.jpg', price: 30 },
            { slug: 'traditional-coffee-pot', name: 'Traditional Coffee Pot (Jebena)', image: '/images/product2.jpg', price: 50 },
        ],
    },
    // Add other products here with their respective slugs
};

// The Product Detail Page Component
const ProductDetailPage = ({ params }: { params: { slug: string } }) => {
    const { slug } = params;

    // Fetch product data based on slug (mock data for example)
    const product = productData[slug];

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <div className="container mx-auto py-10 px-4">
            {/* Product Title */}
            <h1 className="text-4xl font-bold mb-6">{product.name}</h1>

            {/* Product Images */}
            <div className="flex gap-6 mb-8">
                {product.images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={product.name}
                        className="w-full md:w-1/2 h-64 object-cover rounded-lg shadow-lg"
                    />
                ))}
            </div>

            {/* Product Description */}
            <p className="text-lg text-gray-700 mb-6">{product.description}</p>
            <p className="text-sm text-gray-600 mb-4">
                <strong>Materials:</strong> {product.materials}
            </p>

            {/* Price & Purchase Options */}
            <div className="flex items-center gap-6 mb-8">
                <p className="text-2xl font-semibold text-green-600">${product.price}</p>
                <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-500">
                    Add to Cart
                </button>
            </div>

            {/* Artisan Information */}
            <div className="flex items-center mb-8">
                <Link href={`/artisan/${product.artisan.slug}`}>
                    <img
                        src={product.artisan.image}
                        alt={product.artisan.name}
                        className="w-16 h-16 rounded-full mr-4 cursor-pointer"
                    />
                </Link>
                <div>
                    <h3 className="font-semibold text-lg">
                        <Link href={`/artisan/${product.artisan.slug}`}>
                            {product.artisan.name}
                        </Link>
                    </h3>
                    <p className="text-gray-500">{product.artisan.bio}</p>
                </div>
            </div>

            {/* User Reviews */}
            <h3 className="text-2xl font-semibold mb-4">User Reviews</h3>
            <div className="space-y-4 mb-8">
                {product.reviews.map((review, index) => (
                    <div key={index} className="border p-4 rounded-md shadow-sm">
                        <p className="text-gray-700">
                            <strong>{review.user}</strong> rated it {review.rating} stars
                        </p>
                        <p className="text-gray-600">{review.comment}</p>
                    </div>
                ))}
            </div>

            {/* Related Products */}
            <h3 className="text-2xl font-semibold mb-4">Related Products</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {product.relatedProducts.map((relatedProduct) => (
                    <Link key={relatedProduct.slug} href={`/product-details/${relatedProduct.slug}`}>
                        <div className="border p-4 rounded-md shadow-lg cursor-pointer hover:shadow-xl transition-shadow duration-200">
                            <img
                                src={relatedProduct.image}
                                alt={relatedProduct.name}
                                className="w-full h-32 object-cover rounded-md mb-4"
                            />
                            <h3 className="text-lg font-semibold">{relatedProduct.name}</h3>
                            <p className="text-green-600">${relatedProduct.price}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default ProductDetailPage;
