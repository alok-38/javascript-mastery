import { Button } from "@/components/ui/button";
import { subscribe } from "diagnostics_channel";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h2>Subscribe to this SaaS</h2>
      <Button>Subscribe</Button>
    </div>
  );
}
