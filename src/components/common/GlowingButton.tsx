// components/GlowingButton.tsx

import { ArrowRight } from "lucide-react";
import "../../styles/glow-button.css";
import { Button } from "./button";

export function GlowingButton({ children }: { children: React.ReactNode }) {
  return (
    <div className="glowing-button-wrapper">
      <Button className="glowing-button">
        {children}
        <ArrowRight size={18} />
      </Button>
    </div>
  );
}
