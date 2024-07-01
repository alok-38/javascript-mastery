import Templates from "@/app/(data)/Templates";
import React, { useState, useEffect } from "react";
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

interface TemplateListSectionProps {
  userSearchInput: string;
}

const TemplateListSection: React.FC<TemplateListSectionProps> = ({
  userSearchInput,
}) => {
  const [filteredTemplates, setFilteredTemplates] = useState<TEMPLATE[]>([]);

  useEffect(() => {
    if (userSearchInput.trim() === "") {
      // If search input is empty, show all templates
      setFilteredTemplates(Templates);
    } else {
      // Filter templates based on search input
      const filtered = Templates.filter((template) =>
        template.name.toLowerCase().includes(userSearchInput.toLowerCase())
      );
      setFilteredTemplates(filtered);
    }
  }, [userSearchInput]);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-5">
      {filteredTemplates.map((item: TEMPLATE, index: number) => (
        <div key={index}>
          <TemplateCard item={item} /> {/* Pass 'item' as prop */}
        </div>
      ))}
    </div>
  );
};

export default TemplateListSection;
