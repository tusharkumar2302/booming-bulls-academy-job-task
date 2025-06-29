"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { COLORS } from "../../constants/colors";
import { FONT_SIZES } from "../../constants/dimensions";
import { CTA_STRINGS, PLANS_COMPARISON } from "../../constants/strings";
import { Button } from "../common/button";
import PricingCard from "./PricingCard";

function useIsMobile(breakpoint = 640) {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < breakpoint);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, [breakpoint]);
  return isMobile;
}

export default function Pricing() {
  const ref = useRef(null);
  const ctaRef = useRef(null);
  const isInView = useInView(ctaRef, { once: true, margin: "-100px" });
  const isMobile = useIsMobile();

  // Animation variants for staggered fade-in-up
  const ctaVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.7, ease: "easeOut" },
    }),
  };

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
          className={
            FONT_SIZES.special.sectionTitle +
            " font-semibold bg-gradient-to-r from-white to-gray-400 text-transparent bg-clip-text text-center"
          }
        >
          {isMobile ? (
            <>
              {PLANS_COMPARISON.title2.split("Scale").map((part, idx, arr) =>
                idx < arr.length - 1 ? (
                  <span key={idx}>
                    {part}
                    <br />
                    <span
                      style={{
                        color: COLORS.primary,
                        background: "none",
                        WebkitBackgroundClip: "initial",
                        WebkitTextFillColor: "initial",
                      }}
                    >
                      Scale
                    </span>
                  </span>
                ) : (
                  part
                )
              )}{" "}
            </>
          ) : (
            PLANS_COMPARISON.title.split("Abcd").map((part, idx, arr) =>
              idx < arr.length - 1 ? (
                <span key={idx}>
                  {part}
                  <span
                    style={{
                      color: COLORS.primary,
                      background: "none",
                      WebkitBackgroundClip: "initial",
                      WebkitTextFillColor: "initial",
                    }}
                  >
                    Abcd
                  </span>
                </span>
              ) : (
                part
              )
            )
          )}
        </h2>
        <p
          className={`mt-3 ${FONT_SIZES.text.lg}`}
          style={{ color: COLORS.textMuted }}
        >
          {PLANS_COMPARISON.subtitle}
        </p>
      </div>

      <div
        ref={ref}
        className="mt-12 flex flex-col md:flex-row gap-0 max-w-7xl mx-auto"
      >
        <div className="hidden md:flex flex-col self-start justify-start text-left text-sm px-6 py-10 w-[350px] space-y-5 mt-[80px]">
          {PLANS_COMPARISON.labels.map((label, idx) => (
            <div key={idx}>
              <span
                className="font-semibold mb-3.5 block"
                style={{ color: COLORS.gray500 }}
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

      {/* CTA Section */}
      <div className="w-full flex flex-col items-center mt-40 text-center">
      <Button
        className="rounded-full px-6 py-3 border transition mb-6"
        style={{
          backgroundColor: COLORS.buttonBg,
          borderColor: COLORS.buttonBorder,
          color: COLORS.secondary,
        }}
      >
        {CTA_STRINGS.payoutsButton}
      </Button>
      <motion.div
        ref={ctaRef}
        initial={{ opacity: 0, y: 60, filter: "blur(12px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        exit={{ opacity: 0, y: 60, filter: "blur(12px)" }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.5 }}
      >
        <h1 className="font-semibold mb-2 text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[3.625rem] bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text text-center">
          {CTA_STRINGS.headline} <br />
          <span className="bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text">
            {CTA_STRINGS.highlight}
          </span>
        </h1>
      </motion.div>
      <p
        className={`mb-4 ${FONT_SIZES.text.lg} text-center`}
        style={{ color: COLORS.textMuted }}
      >
        {CTA_STRINGS.subtitle}
      </p>
    </div>
    </div>
  );
}
