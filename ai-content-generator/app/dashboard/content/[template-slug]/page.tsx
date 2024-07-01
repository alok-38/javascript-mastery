import React from "react";
import FormSection from "../_components/FormSection";
import OutputSection from "../_components/OutputSection";
import { TEMPLATE } from "../../_components/TemplateCard";
import Templates from "@/app/(data)/Templates";

interface PROPS {
  params: {
    "template-slug": string;
  };
}

function CreateNewContent(props: PROPS) {
  const selectedTemplate: TEMPLATE|undefined = Templates?.find(
    (item) => item.slug === props.params["template-slug"]
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 p-5">
      {/* form section */}
      <FormSection selectedTemplate={selectedTemplate}
      />
      {/* output section */}
      <div className="col-span-2">
        <OutputSection />
      </div>
    </div>
  );
}

export default CreateNewContent;
