"use client";

import { useState } from "react";
import SearchBar from "@/components/Searchbar";

export default function StudentsHealthFilterUI() {
  const [section, setSection] = useState("");
  const [sex, setSex] = useState("");
  const [search, setSearch] = useState("");

  const clearFilters = () => {
    setSection("");
    setSex("");
    setSearch("");
  };

  return (
    <div className="w-full px-10 py-8 text-black text-sm">

      <div className="mb-6 max-w-md">
        <SearchBar
          value={search}
          onChange={setSearch}
          placeholder="Search student..."
        />
      </div>

      <div className="flex items-center gap-4 flex-wrap">

        <select
          value={section}
          onChange={(e) => setSection(e.target.value)}
          className="border border-gray-300 px-4 py-2 rounded-lg bg-white"
        >
          <option value="">Section</option>
          <option value="Gumamela">Gumamela</option>
          <option value="Santan">Santan</option>
          <option value="Rosal">Rosal</option>
          <option value="Jasmine">Jasmine</option>
        </select>

        <select
          value={sex}
          onChange={(e) => setSex(e.target.value)}
          className="border border-gray-300 px-4 py-2 rounded-lg bg-white"
        >
          <option value="">Sex</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>

        <button className="border border-gray-300 px-4 py-2 rounded-lg">
          Age
        </button>

        <button className="border border-gray-300 px-4 py-2 rounded-lg">
          A - Z
        </button>

        <button className="border border-gray-300 px-4 py-2 rounded-lg">
          Z - A
        </button>

        <button
          onClick={clearFilters}
          className="border border-gray-300 px-4 py-2 rounded-lg"
        >
          Clear Filter
        </button>
      </div>
    </div>
  );
}
