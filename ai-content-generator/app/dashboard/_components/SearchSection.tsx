import { Search } from "lucide-react";
import React from "react";

const SearchSection = ({onSearchInput}:any) => {
  return (
    <div
      className="p-10 bg-gradient-to-br from-purple-500 via-purple-700
	to-blue-600 flex justify-center items-center flex-col text-white gap-2"
    >
      <h2 className="text-3xl font-bold">Browse All Templates</h2>
      <p>What would you like to create today?</p>
      <div className="w-full">
        <div
          className="flex gap-2 items-center p-2 border rounded-md bg-white
			my-5 w-[50%] mx-auto"
        >
          <Search className="text-primary" />
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent w-full outline-none text-slate-600"
            onChange={(event) => onSearchInput(event.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchSection;
