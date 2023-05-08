import React from "react";
import { FaSearch } from "react-icons/fa";

const MobileSearch = () => {
  return (
    <div className="py-6">
      {/* search bar */}
      <div className="relative flex justify-center lg:hidden text-gray-600">
        <input
          className="bg-white h-8 border px-5 pr-10 rounded-full text-sm focus:outline-none "
          type="search"
          name="search"
          placeholder="Search"
        />
        <button
          type="submit"
          className="absolute right-[100px] top-0 mt-3 mr-4"
        >
          <svg
            className="h-4 w-4 fill-current"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M11.656 10.562c-1.031.813-2.344 1.313-3.75 1.313-3.313 0-6-2.688-6-6s2.687-6 6-6 6 2.688 6 6c0 1.406-.5 2.719-1.313 3.75l3.563 3.563-1.406 1.407-3.563-3.563zM6 8c0 1.656 1.344 3 3 3s3-1.344 3-3-1.344-3-3-3-3 1.344-3 3z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default MobileSearch;
