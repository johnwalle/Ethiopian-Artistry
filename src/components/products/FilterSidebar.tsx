import React, { useState } from 'react';

interface FilterSidebarProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const FilterSidebar: React.FC<FilterSidebarProps> = ({
  categories,
  selectedCategory,
  onCategoryChange,
}) => {
  // State to manage dropdown visibility for small screens
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <div className="p-4 border-r">
      {/* Dropdown for small screens */}
      <div className="block md:hidden">
        <button
          className="w-full text-left py-2 font-bold border rounded"
          onClick={toggleDropdown}
        >
          {selectedCategory} <span className="float-right">▼</span>
        </button>
        {isDropdownOpen && (
          <ul className="mt-2 border rounded bg-white shadow-lg">
            {categories.map((category) => (
              <li
                key={category}
                className={`cursor-pointer py-2 px-4 ${selectedCategory === category ? 'font-bold bg-gray-200' : ''}`}
                onClick={() => {
                  onCategoryChange(category);
                  setIsDropdownOpen(false); // Close the dropdown on category selection
                }}
              >
                {category}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Sidebar for larger screens */}
      <div className="hidden md:block w-1/4">
        <h2 className="text-3xl font-bold mb-4">Categories</h2>
        <ul>
          {categories.map((category) => (
            <li
              key={category}
              className={`cursor-pointer py-2 ${selectedCategory === category ? 'font-bold text-green-400' : ''}`}
              onClick={() => onCategoryChange(category)}
            >
              {category}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FilterSidebar;
