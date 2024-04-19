import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { FiSearch } from "react-icons/fi";

const Searchbar = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate(`/search/${searchTerm}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      autoComplete="off"
      className="w-full relative"
    >
      {/* p-2 text-gray-400 focus-within:text-gray-600 */}
      <div className="relative">
        <label htmlFor="search-field" className="sr-only">
          Search all files
        </label>
        <div className="flex flex-row justify-start items-center">
          <button className="absolute right-1 top-1/2 -translate-y-1/2 bg-slate-400 p-3 rounded-full">
            <FiSearch aria-hidden="true" />
          </button>
          <input
            name="search-field"
            autoComplete="off"
            autoFocus
            id="search-field"
            className="w-full rounded-full bg-slate-200 p-3 outline-none"
            // flex-1 bg-transparent border-none placeholder-gray-500 outline-none text-base text-white p-4
            placeholder="Search"
            type="search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
    </form>
  );
};

export default Searchbar;
