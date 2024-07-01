"use client";
import React, { useState } from "react";
import { TEMPLATE } from "../../_components/TemplateCard";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

interface PROPS {
  selectedTemplate?: TEMPLATE;
}

function FormSection({ selectedTemplate }: PROPS) {
  const [formData, setFormData] = useState<any>();
  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Placeholder logic: Handle form submission here
    console.log("Form submitted!");

    // Example: Get form data
    const formData = new FormData(e.currentTarget);
    const formDataObject = Object.fromEntries(formData.entries());
    console.log("Form data:", formDataObject);

    // You can perform further actions like API calls or state updates here
  };

  return (
    <div className="p-5 shadow-md border rounded-lg bg-white">
      {/* Icon */}
      {selectedTemplate?.icon && (
        <div className="flex justify-center mb-4">
          <Image
            src={selectedTemplate.icon}
            alt="icon"
            width={70}
            height={70}
          />
        </div>
      )}

      {/* Template details */}
      <h2 className="font-bold text-2xl mb-2 text-primary">
        {selectedTemplate?.name}
      </h2>
      <p className="text-slate-500 text-sm mb-4">
        {selectedTemplate?.description}
      </p>

      {/* Form */}
      <form className="mt-6" onSubmit={onSubmit}>
        {selectedTemplate?.form?.map((item, index) => (
          <div key={index} className="my-2 flex flex-col gap-2 mb-7">
            <label className="font-bold">{item.label}</label>
            {item.field === "input" ? (
              <Input
                name={item.name}
                required={item?.required}
                onChange={handleInputChange}
              /> // Example: Pass item.name as prop
            ) : item.field === "textarea" ? (
              <Textarea
                name={item.name}
                required={item?.required}
                onChange={handleInputChange}
              /> // Example: Pass item.name as prop
            ) : null}
          </div>
        ))}
        <Button type="submit" className="w-full py-6">
          Generate Content
        </Button>
      </form>
    </div>
  );
}

export default FormSection;
