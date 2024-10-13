// app/artisan/[slug]/page.tsx
'use client';

import { useRouter } from 'next/router';
import Link from 'next/link';

const artisanData = [
  {
    slug: "lidya-assefa",
    name: "Lidya Assefa",
    bio: "Lidya is an artisan from Addis Ababa, known for her expertise in weaving beautiful traditional scarves.",
    image: "/images/artisan1.jpg",
    products: [
      {
        slug: "ethiopian-handwoven-scarf",
        name: "Ethiopian Handwoven Scarf",
        price: 25,
        description: "A beautiful traditional Ethiopian scarf made from high-quality fabric, ideal for any occasion.",
        image: "https://cdn.gamma.app/m3rdunp6aj4a2ph/generated-images/-pnWGG6HoRihzcI_ywwk-.jpg"
      },
      {
        slug: "handwoven-basket",
        name: "Handwoven Basket",
        price: 30,
        description: "A traditional basket from Ethiopia, handwoven with care.",
        image: "/images/product1.jpg"
      }
    ]
  },
  {
    slug: "abiya-mohammed",
    name: "Abiya Mohammed",
    bio: "Abiya specializes in creating intricate pottery pieces that reflect Ethiopian culture.",
    image: "/images/artisan2.jpg",
    products: [
      {
        slug: "traditional-coffee-pot",
        name: "Traditional Coffee Pot (Jebena)",
        price: 50,
        description: "A handmade clay coffee pot, perfect for brewing traditional Ethiopian coffee.",
        image: "/images/product2.jpg"
      },
      {
        slug: "ceramic-plate",
        name: "Ceramic Plate",
        price: 15,
        description: "Hand-painted ceramic plate with traditional Ethiopian designs.",
        image: "/images/product3.jpg"
      }
    ]
  },
  {
    slug: "tesfaye-derese",
    name: "Tesfaye Derese",
    bio: "Tesfaye is known for his exquisite handmade jewelry, combining traditional and modern designs.",
    image: "/images/artisan3.jpg",
    products: [
      {
        slug: "handmade-jewelry",
        name: "Handmade Jewelry",
        price: 80,
        description: "Exquisite Ethiopian jewelry made with precision and care.",
        image: "/images/product4.jpg"
      }
    ]
  }
];

const ArtisanProfilePage = ({ params }: { params: { slug: string } }) => {
    const { slug } = params;

    // Fetch artisan data based on slug
    const artisan = artisanData.find(artisan => artisan.slug === slug);

    if (!artisan) {
        return <div>Artisan not found</div>;
    }

    return (
        <div className="container mx-auto py-10 px-4">
            <h1 className="text-4xl font-bold mb-6">{artisan.name}</h1>
            <img src={artisan.image} alt={artisan.name} className="w-32 h-32 rounded-full mb-4" />
            <p className="text-lg text-gray-700 mb-6">{artisan.bio}</p>
            <h3 className="text-2xl font-semibold mb-4">Products by {artisan.name}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {artisan.products.map((product) => (
                    <Link key={product.slug} href={`/product-details/${product.slug}`}>
                        <div className="border p-4 rounded-md shadow-lg cursor-pointer hover:shadow-xl transition-shadow duration-200">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-32 object-cover rounded-md mb-4"
                            />
                            <h3 className="text-lg font-semibold">{product.name}</h3>
                            <p className="text-green-600">${product.price}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default ArtisanProfilePage;
