'use client'

// Import React and Framer Motion
import React from 'react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faScissors, faCoffee, faRing, faBasketShopping } from '@fortawesome/free-solid-svg-icons'; // Import alternative icons


const Home: React.FC = () => {

  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);


  return (
    <div>
      {/* Hero Section */}
      <div
        className="relative h-[80vh] bg-cover bg-center"
        style={{ backgroundImage: "url('https://cdn.gamma.app/m3rdunp6aj4a2ph/generated-images/BMYV5xTrAe_b5ae6vN-1p.jpg')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-80 backdrop-blur-sm"></div>

        {/* Text Container */}
        <div className="relative z-10 flex flex-col ml-8 sm:ml-16 md:ml-24 lg:ml-32 pt-12 sm:pt-24 md:pt-32 lg:pt-36 text-white">
          {/* Title Animation */}
          <motion.h1
            className="text-5xl md:text-7xl max-w-2xl mb-4"
            whileInView={{ opacity: [0, 1], y: [-50, 0] }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Celebrate Ethiopian Artistry
          </motion.h1>

          {/* Paragraph Animation */}
          <motion.p
            className="max-w-2xl mb-8"
            whileInView={{ opacity: [0, 1], y: [20, 0] }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Explore a rich selection of hand-crafted Ethiopian artifacts, made by local artisans, and inspired by centuries of culture and tradition.
          </motion.p>

          {/* Buttons Animation */}
          <motion.div
            className="flex space-x-4"
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-md">
              Shop Now
            </button>
            <button className="bg-transparent border border-white hover:bg-white hover:text-black text-white font-bold py-2 px-6 rounded-md">
              Learn More
            </button>
          </motion.div>
        </div>
      </div>

      {/* Features Section */}
      <div className="flex flex-col md:flex-row items-center justify-center py-16"> {/* Adjusted padding */}

        {/* Left Side - Image */}
        <div
          className="w-full md:w-1/2 mb-8  md:mb-0"
        >
          <img
            src="https://cdn.gamma.app/m3rdunp6aj4a2ph/generated-images/liy3fUWyThnmn-k07Pc_e.jpg"
            alt="Ethiopian Art"
            className="rounded-lg shadow-lg  w-full h-full object-cover"
          />
        </div>

        {/* Right Side - Content */}
        <motion.div
          className="w-full md:w-1/2 md:pl-12 pl-10 text-[#5C3D2E] pt-24"
        >
          <h2 className="text-4xl md:text-5xl  font-bold mb-6">Explore Ethiopian Culture</h2>

          {/* Numbered list */}
          <ol className="space-y-10 py-8">
            {/* Item 1 */}
            <motion.li
              className="flex items-start"
              whileInView={{ opacity: [0, 1], y: [50, 0] }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Number with border */}
              <div className="flex-shrink-0 bg-white border border-[#5C3D2E] text-[#5C3D2E] font-bold w-10 h-10 flex items-center justify-center rounded-full mr-4">
                1
              </div>
              {/* Content */}
              <div className="flex flex-col">
                <strong className="mb-2">Handmade Artifacts</strong>
                <p className="text-base text-[#5C3D2E]">
                  Beautifully crafted items inspired by rich cultural traditions.
                </p>
              </div>
            </motion.li>

            {/* Item 2 */}
            <motion.li
              className="flex items-start"
              whileInView={{ opacity: [0, 1], y: [50, 0] }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="flex-shrink-0 bg-white border border-[#5C3D2E] text-[#5C3D2E] font-bold w-10 h-10 flex items-center justify-center rounded-full mr-4">
                2
              </div>
              <div className="flex flex-col">
                <strong className="mb-2">Unique Designs</strong>
                <p className="text-base text-[#5C3D2E]">
                  Each piece is one of a kind, reflecting the heritage of Ethiopian artisans.
                </p>
              </div>
            </motion.li>

            {/* Item 3 */}
            <motion.li
              className="flex items-start"
              whileInView={{ opacity: [0, 1], y: [50, 0] }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="flex-shrink-0 bg-white border border-[#5C3D2E] text-[#5C3D2E] font-bold w-10 h-10 flex items-center justify-center rounded-full mr-4">
                3
              </div>
              <div className="flex flex-col">
                <strong className="mb-2">Sustainable Materials</strong>
                <p className="text-base text-[#5C3D2E]">
                  Eco-friendly products made from locally sourced materials.
                </p>
              </div>
            </motion.li>

            {/* Item 4 */}
            <motion.li
              className="flex items-start"
              whileInView={{ opacity: [0, 1], y: [50, 0] }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <div className="flex-shrink-0 bg-white border border-[#5C3D2E] text-[#5C3D2E] font-bold w-10 h-10 flex items-center justify-center rounded-full mr-4">
                4
              </div>
              <div className="flex flex-col">
                <strong className="mb-2">Support Local Artisans</strong>
                <p className="text-base text-[#5C3D2E]">
                  Every purchase directly supports skilled craftsmen and women in Ethiopia.
                </p>
              </div>
            </motion.li>
          </ol>
        </motion.div>
      </div>



      <div className="py-10">
        {/* Common Heading */}
        <h2 className="text-4xl py-4 md:text-5xl text-center font-bold mb-6">
          Handmade Treasures: Unique Artisanal Products
        </h2>

        {/* Flex Container for Cards */}
        <div className="flex flex-wrap justify-around space-y-4 sm:space-y-0">
          {/* Card 1 */}
          <motion.div
            className="rounded-lg shadow-lg md:max-w-xs w-full p-4 flex flex-col"
            whileInView={{ opacity: [0, 1], y: [50, 0] }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <strong>Textiles</strong>
            <p className="text-base text-[#5C3D2E] pb-3">
              Intricate weavings, bold patterns, and soft cotton fabrics.
            </p>
            <img
              src="https://cdn.gamma.app/m3rdunp6aj4a2ph/generated-images/ukBdpjyMRidArq0arvhLI.jpg"
              alt="Card 1"
              className="w-full h-40 object-cover rounded-md"
            />
          </motion.div>

          {/* Card 2 */}
          <motion.div
            className="rounded-lg shadow-lg md:max-w-xs w-full p-4 flex flex-col"
            whileInView={{ opacity: [0, 1], y: [50, 0] }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <strong>Pottery</strong>
            <p className="text-base text-[#5C3D2E] pb-3">
              Beautifully glazed ceramics, from delicate vases to rustic tableware.
            </p>
            <img
              src="https://cdn.gamma.app/m3rdunp6aj4a2ph/generated-images/wGZH4ULoQZthoq3ANZ_b-.jpg"
              alt="Card 2"
              className="w-full h-40 object-cover rounded-md"
            />
          </motion.div>

          {/* Card 3 */}
          <motion.div
            className="rounded-lg shadow-lg md:max-w-xs w-full p-4 flex flex-col"
            whileInView={{ opacity: [0, 1], y: [50, 0] }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <strong>Jewelry</strong>
            <p className="text-base pb-3 text-[#5C3D2E]">
              Unique metal and beaded designs, crafted with ancient techniques.
            </p>
            <img
              src="https://cdn.gamma.app/m3rdunp6aj4a2ph/generated-images/-pnWGG6HoRihzcI_ywwk-.jpg"
              alt="Card 3"
              className="w-full h-40 object-cover rounded-md"
            />
          </motion.div>
        </div>
      </div>




      <div className="py-20 text-[#5C3D2E]">
        {/* Common Heading */}
        <h2 className="text-4xl py-4 md:text-5xl text-center font-bold mb-6">
          Meet the Talented Ethiopian Artisans
        </h2>

        {/* Flex Container for Cards */}
        <div className="flex flex-wrap justify-around space-y-4 sm:space-y-0">
          {/* Card 1: Master Weavers */}
          <motion.div
            className="rounded-lg shadow-lg md:max-w-xs w-full p-4 flex flex-col items-center"
            whileInView={{ opacity: [0, 1], y: [50, 0] }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <FontAwesomeIcon icon={faScissors} size="3x" className="mb-4 text-[#5C3D2E]" />
            <strong className="text-xl mb-2">Master Weavers</strong>
            <p className="text-base text-center text-[#5C3D2E] pb-3">
              Keeping vibrant textile traditions alive.
            </p>
          </motion.div>

          {/* Card 2: Skilled Potters */}
          <motion.div
            className="rounded-lg shadow-lg md:max-w-xs w-full p-4 flex flex-col items-center"
            whileInView={{ opacity: [0, 1], y: [50, 0] }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <FontAwesomeIcon icon={faCoffee} size="3x" className="mb-4 text-[#5C3D2E]" />
            <strong className="text-xl mb-2">Skilled Potters</strong>
            <p className="text-base text-center text-[#5C3D2E] pb-3">
              Creating functional and artistic ceramics.
            </p>
          </motion.div>

          {/* Card 3: Jewelry Artisans */}
          <motion.div
            className="rounded-lg shadow-lg md:max-w-xs w-full p-4 flex flex-col items-center"
            whileInView={{ opacity: [0, 1], y: [50, 0] }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <FontAwesomeIcon icon={faRing} size="3x" className="mb-4 text-[#5C3D2E]" />
            <strong className="text-xl mb-2">Jewelry Artisans</strong>
            <p className="text-base text-center text-[#5C3D2E] pb-3">
              Crafting unique, handmade adornments.
            </p>
          </motion.div>

          {/* Card 4: Basket Weavers */}
          <motion.div
            className="rounded-lg shadow-lg md:max-w-xs w-full p-4 flex flex-col items-center"
            whileInView={{ opacity: [0, 1], y: [50, 0] }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <FontAwesomeIcon icon={faBasketShopping} size="3x" className="mb-4 text-[#5C3D2E]" />
            <strong className="text-xl mb-2">Basket Weavers</strong>
            <p className="text-base text-center text-[#5C3D2E] pb-3">
              Preserving ancient basketry techniques.
            </p>
          </motion.div>
        </div>
      </div>




      <div className="flex flex-col md:flex-row items-center justify-center py-16"> {/* Adjusted padding */}

        {/* Left Side - Image */}


        {/* Right Side - Content */}
        <motion.div
          className="w-full md:w-1/2 md:pl-12 pl-10 text-[#5C3D2E] pt-24"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Secure and Seamless E-commerce Experience
          </h2>

          {/* Numbered list */}
          <ol className="space-y-10 py-8">
            {/* Item 1 */}
            <motion.li
              className="flex items-start"
              whileInView={{ opacity: [0, 1], y: [50, 0] }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Number with border */}
              <div className="flex-shrink-0 bg-white border border-[#5C3D2E] text-[#5C3D2E] font-bold w-10 h-10 flex items-center justify-center rounded-md mr-4">
                1
              </div>
              {/* Content */}
              <div className="flex flex-col">
                <strong className="mb-2">Safe Payments
                </strong>
                <p className="text-base text-[#5C3D2E]">
                  Enjoy worry-free transactions with our secure payment gateway.
                </p>
              </div>
            </motion.li>

            {/* Item 2 */}
            <motion.li
              className="flex items-start"
              whileInView={{ opacity: [0, 1], y: [50, 0] }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="flex-shrink-0 bg-white border border-[#5C3D2E] text-[#5C3D2E] font-bold w-10 h-10 flex items-center justify-center rounded-md mr-4">
                2
              </div>
              <div className="flex flex-col">
                <strong className="mb-2">Reliable Shipping
                </strong>
                <p className="text-base text-[#5C3D2E]">
                  We deliver your purchases safely and efficiently worldwide.
                </p>
              </div>
            </motion.li>

            {/* Item 3 */}
            <motion.li
              className="flex items-start"
              whileInView={{ opacity: [0, 1], y: [50, 0] }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="flex-shrink-0 bg-white border border-[#5C3D2E] text-[#5C3D2E] font-bold w-10 h-10 flex items-center justify-center rounded-md mr-4">
                3
              </div>
              <div className="flex flex-col">
                <strong className="mb-2">User-friendly Platform
                </strong>
                <p className="text-base text-[#5C3D2E]">
                  Browse and shop with ease on our intuitive, visually appealing interface.
                </p>
              </div>
            </motion.li>

          </ol>
        </motion.div>

        <div
          className="w-full md:w-1/2 mb-8  md:mb-0"
        >
          <img
            src="https://cdn.gamma.app/m3rdunp6aj4a2ph/generated-images/7NqdB8vojwt2nzi684dKU.jpg"
            alt="Ethiopian Art"
            className="rounded-lg shadow-lg  w-full md:w-[500px] md:h-[700px] h-1/2 object-cover"
          />
        </div>
      </div>


      <div className="max-w-4xl md:my-20 mx-auto bg-[#fff5dbfe] my-8 text-[#5C3D2E] shadow-lg rounded-lg overflow-hidden">
        {/* Card Container */}
        <div className="flex flex-col md:flex-row items-center">
          {/* Left Image */}
          <div className="md:w-1/3 w-full">
            <img
              src="https://cdn.gamma.app/m3rdunp6aj4a2ph/generated-images/1S-ZmgumCk6WP_0DjVqEw.jpg" // Replace with your image
              alt="FAQ Image"
              className="object-cover w-full h-64 md:h-full"
            />
          </div>

          {/* Right Content - FAQ */}
          <div className="md:w-2/3 w-full p-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Immerse Yourself in the Culture of Ethiopia
            </h2>

            {/* Question 1 */}
            <div className="mb-6">
              <h4
                className="flex items-center font-semibold text-xl mb-2 text-[#5C3D2E] cursor-pointer"
                onClick={() => setIsOpen1(!isOpen1)}
              >
                <span className="mr-2">
                  {isOpen1 ? '▼' : '►'} {/* Right arrow for closed state */}
                </span>
                Discover the Unique Stories Behind the Crafts
              </h4>
              {isOpen1 && (
                <motion.div
                  className="flex"
                  initial={{ opacity: 0, y: 10 }} // Initial state
                  animate={{ opacity: 1, y: 0 }} // Animation to appear
                  exit={{ opacity: 0, y: 10 }} // Animation to disappear
                  transition={{ duration: 0.3 }} // Duration of the animation
                >
                  <div className="border-l-2 border-[#654c3fa7] ml-6 pl-4">
                    <p className="text-base text-[#5C3D2E]">
                      Each handmade piece reflects the rich cultural heritage and traditions of Ethiopia. Dive deeper into the history and symbolism of these artisanal creations.
                    </p>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Question 2 */}
            <div>
              <h4
                className="flex items-center font-semibold text-xl mb-2 text-[#5C3D2E] cursor-pointer"
                onClick={() => setIsOpen2(!isOpen2)}
              >
                <span className="mr-2">
                  {isOpen2 ? '▼' : '►'} {/* Right arrow for closed state */}
                </span>
                Explore the Diverse Regions of Ethiopia
              </h4>
              {isOpen2 && (
                <motion.div
                  className="flex"
                  initial={{ opacity: 0, y: 10 }} // Initial state
                  animate={{ opacity: 1, y: 0 }} // Animation to appear
                  exit={{ opacity: 0, y: 10 }} // Animation to disappear
                  transition={{ duration: 0.3 }} // Duration of the animation
                >
                  <div className="border-l-2  ml-6 border-[#654c3fa7] pl-4">
                    <ul className="list-disc pl-5 text-[#654c3f]">
                      <li>Beautiful landscapes and unique terrains.</li>
                      <li>Rich cultural heritage across various regions.</li>
                      <li>Diverse artisanal crafts and skills.</li>
                    </ul>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>



      <div className="flex flex-col md:flex-row bg-[#fff5dbfe] text-[#5C3D2E] p-4">
        {/* Text and Table Section */}
        <div className="w-full py-20 md:w-2/3">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Connect with a Global Community of Craft Enthusiasts
          </h2>
          <table className="min-w-full table-auto border-collapse">
            <tbody>
              <tr>
                <td className="border border-[#5C3D2E] px-4 py-6">Share Your Passion
                </td>
                <td className="border border-[#5C3D2E] px-4 py-6">Discover New Favorites
                </td>
                <td className="border border-[#5C3D2E] px-4 py-6">Engage with Artisans
                </td>
              </tr>
              <tr>
                <td className="border border-[#5C3D2E] px-4 py-6">Showcase your collection
                </td>
                <td className="border border-[#5C3D2E] px-4 py-6">Explore unique creations
                </td>
                <td className="border border-[#5C3D2E] px-4 py-6">Connect directly with makers
                </td>
              </tr>
              <tr>
                <td className="border border-[#5C3D2E] px-4 py-6">Connect with like-minded fans
                </td>
                <td className="border border-[#5C3D2E] px-4 py-6">Learn about different techniques
                </td>
                <td className="border border-[#5C3D2E] px-4 py-6">Support ethical, sustainable practices
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Image Section */}
        <div className="ml-0 mt-6 md:ml-6 md:mt-0 w-full md:w-1/3 flex justify-center">
          <img
            src="https://cdn.gamma.app/m3rdunp6aj4a2ph/generated-images/1LRi0tYFfMTo6UffkBnnm.jpg"
            alt="Craft Image"
            className="border-4 rounded-lg shadow-lg w-full md:w-auto max-w-xs"
          />
        </div>
      </div>











    </div>
  );
};

export default Home;
