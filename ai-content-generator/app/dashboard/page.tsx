"use client";
import React, { useState } from "react";
import SearchSection from "./_components/SearchSection";
import TemplateListSection from "./_components/TemplateListSection";

const Dashboard = () => {
  const [userSearchInput, setUserSearchInput] = useState<string>("");

  const handleSearchInputChange = (value: string) => {
    setUserSearchInput(value);
  };

  return (
    <div>
      <SearchSection onSearchInput={handleSearchInputChange} />
      <TemplateListSection userSearchInput={userSearchInput} />
    </div>
  );
};

export default Dashboard;
