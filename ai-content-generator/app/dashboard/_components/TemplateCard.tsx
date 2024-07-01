// TemplateCard.tsx

import Image from "next/image";
import React from "react";

// Define TEMPLATE interface (moved from TemplateListSection.tsx)
export interface TEMPLATE {
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

// Use 'item' as a prop with type 'TEMPLATE'
const TemplateCard = ({ item }: { item: TEMPLATE }) => {
  return (
    <div>
		<Image src={item.icon} alt="icon" width={50} height={50} />
    </div>
  );
};

export default TemplateCard;
