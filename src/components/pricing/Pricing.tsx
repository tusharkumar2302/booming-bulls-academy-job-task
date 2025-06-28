"use client";

import { useRef } from "react";
import { COLORS } from "../../constants/colors";
import { FONT_SIZES } from "../../constants/dimensions";
import { PLANS_COMPARISON } from "../../constants/strings";
import PricingCard from "./PricingCard";
import { Button } from "../common/button";

export default function Pricing() {
  const ref = useRef(null);

  return (
    <div
      className="py-20 px-4 font-manrope bg-cover bg-center relative"
      style={{ backgroundColor: COLORS.black, color: COLORS.textPrimary }}
    >
      <div className="flex justify-center items-center w-full mb-6">
        <Button
          className="rounded-full px-6 py-3 border transition"
          style={{
            backgroundColor: COLORS.buttonBg,
            borderColor: COLORS.buttonBorder,
            color: COLORS.secondary,
          }}
        >
          {PLANS_COMPARISON.processButton}
        </Button>
      </div>

      <div className="text-center">
        <h2
          className={FONT_SIZES.special.sectionTitle + " font-semibold"}
          style={{ color: COLORS.textPrimary }}
        >
          {PLANS_COMPARISON.title.split("Abcd").map((part, idx, arr) =>
            idx < arr.length - 1 ? (
              <span key={idx}>
                {part}
                <span style={{ color: COLORS.secondary }}>Abcd</span>
              </span>
            ) : (
              part
            )
          )}
        </h2>
        <p
          className={`mt-3 ${FONT_SIZES.text.lg}`}
          style={{ color: COLORS.gray400 }}
        >
          {PLANS_COMPARISON.subtitle}
        </p>
      </div>

      <div
        ref={ref}
        className="mt-12 flex flex-col md:flex-row gap-0 max-w-7xl mx-auto"
      >
        <div className="hidden md:flex flex-col self-center justify-center text-left text-sm px-6 py-10 w-1/4 space-y-6">
          {PLANS_COMPARISON.labels.map((label, idx) => (
            <div key={idx} style={{ color: COLORS.gray400 }}>
              <span
                className="font-semibold"
                style={{ color: COLORS.textPrimary }}
              >
                {label}
              </span>
              <div
                className="mt-1"
                style={{
                  background: `linear-gradient(270deg, ${COLORS.black}, ${COLORS.pricingLabelLine} 53%, ${COLORS.black})`,
                  flex: "none",
                  height: "1px",
                  opacity: 0.4,
                  overflow: "hidden",
                  position: "relative",
                  width: "100%",
                }}
              />
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row w-full items-center justify-center">
          {PLANS_COMPARISON.plans.map((plan, index) => (
            <PricingCard
              key={plan.name}
              title={plan.name}
              description={plan.description}
              price={plan.features.capitalRequirement}
              risk={plan.features.risk}
              features={[
                plan.features.spread,
                plan.features.commission,
                plan.features.leverage,
                plan.features.lotSize,
                plan.features.tradeLimit,
                plan.features.positions,
                plan.features.stopOut,
                plan.features.marginCall,
                plan.features.swap,
                plan.features.assets.join(", "),
              ]}
              isFeatured={index === 1}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
