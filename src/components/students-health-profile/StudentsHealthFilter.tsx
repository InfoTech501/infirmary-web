"use client";

import { useState } from "react";
import Searchbar from "@/components/students-health-profile/Searchbar";

const sections = [
  { section: "Gumamela" },
  { section: "Santan" },
  { section: "Rosal" },
  { section: "Jasmine" },
];

export default function StudentsHealthFilter() {
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
        <Searchbar
          value={search}
          onChange={setSearch}
          placeholder="Search student..."
        />
      </div>

      <div className="flex items-center gap-4 flex-wrap">
        <select
          value={section}
          onChange={(e) => setSection(e.target.value)}
          className="border border-gray-300 px-4 py-2 rounded-lg bg-white hover:bg-gray-100 cursor-pointer"
        >
          <option value="">Section</option>

          {sections.map((item) => (
            <option key={item.section} value={item.section}>
              {item.section}
            </option>
          ))}
        </select>

        <select
          value={sex}
          onChange={(e) => setSex(e.target.value)}
          className="border border-gray-300 px-4 py-2 rounded-lg bg-white hover:bg-gray-100 cursor-pointer"
        >
          <option value="">Sex</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>

        <button className="border border-gray-300 px-4 py-2 rounded-lg bg-white hover:bg-gray-200 cursor-pointer">
          Age
        </button>

        <button className="border border-gray-300 px-4 py-2 rounded-lg bg-white hover:bg-gray-200 cursor-pointer">
          A - Z
        </button>

        <button className="border border-gray-300 px-4 py-2 rounded-lg bg-white hover:bg-gray-200 cursor-pointer">
          Z - A
        </button>

        <button
          onClick={clearFilters}
          className="border border-gray-300 px-4 py-2 rounded-lg bg-white hover:bg-gray-200 cursor-pointer"
        >
          Clear Filter
        </button>
      </div>
    </div>
  );
}
