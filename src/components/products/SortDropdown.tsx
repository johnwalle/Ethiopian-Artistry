import React from 'react';

interface SortDropdownProps {
  sortOption: string;
  onSortChange: (sortOption: string) => void;
}

const SortDropdown: React.FC<SortDropdownProps> = ({ sortOption, onSortChange }) => {
  return (
    <div className="flex justify-end mb-4">
      <label htmlFor="sort" className="mr-2 text-lg font-semibold">
        Sort by:
      </label>
      <select
        id="sort"
        value={sortOption}
        onChange={(e) => onSortChange(e.target.value)}
        className="p-2 border rounded-md"
      >
        <option value="price-asc">Price (Low to High)</option>
        <option value="price-desc">Price (High to Low)</option>
      </select>
    </div>
  );
};

export default SortDropdown;
