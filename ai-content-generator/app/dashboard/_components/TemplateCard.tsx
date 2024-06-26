// TemplateCard.tsx

import Image from "next/image";
import Link from "next/link";
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
    <Link href={"/dashboard/content/"+item?.slug}>
      <div
        className="p-5 shadow-md rounded-md border bg-white flex flex-col gap-3
    cursor-pointer hover:scale-105 transition-all"
      >
        <Image src={item.icon} alt="icon" width={50} height={50} />
        <h2 className="font-medium text-lg">{item.name}</h2>
        <p className="text-slate-500 line-clamp-3">{item.description}</p>
      </div>
    </Link>
  );
};

export default TemplateCard;
