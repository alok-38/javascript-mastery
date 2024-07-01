// TemplateListSection.tsx

import Templates from "@/app/(data)/Templates";
import React from "react";
import TemplateCard from "./TemplateCard";

// Define TEMPLATE interface
interface TEMPLATE {
  name: string;
  description: string;
  icon: string;
  category: string;
  slug: string;
  aiPrompt: string;
  form?: {
    label: string;
    field: string;
    name: string;
    required: boolean;
  }[];
}

const TemplateListSection = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-5">
      {Templates.map((item: TEMPLATE, index: number) => (
        <div key={index}>
          <TemplateCard item={item} /> {/* Pass 'item' as prop */}
        </div>
      ))}
    </div>
  );
};

export default TemplateListSection;
