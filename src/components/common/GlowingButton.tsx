import { ArrowRight } from "lucide-react";
import "../../styles/glow-button.css";
import { Button } from "./button";

type GlowingButtonProps = {
  children: React.ReactNode;
  bgColor?: "default" | "black";
};

export function GlowingButton({
  children,
  bgColor = "default",
}: GlowingButtonProps) {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="glowing-button-wrapper">
      <Button
        className={`glowing-button ${
          bgColor === "black" ? "glowing-button-black" : ""
        } group flex items-center gap-2`}
        onClick={handleClick}
      >
        {children}
        <span className="arrow-animate">
          <ArrowRight size={18} />
        </span>
      </Button>
    </div>
  );
}
