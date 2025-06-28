"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { COLORS } from "../../constants/colors";
import { FONT_SIZES } from "../../constants/dimensions";
import { HERO_STEPS, HERO_STRINGS } from "../../constants/strings";
import { Button } from "../common/button";
import TimelineStep from "./TimelineStep";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const word = {
  hidden: { opacity: 0, y: 0 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Hero() {
  return (
    <section
      className="relative min-h-[200vh] w-full flex flex-col justify-start items-center pt-32 text-center overflow-hidden tracking-tighter font-manrope"
      style={{ backgroundColor: COLORS.black }}
    >
      {/* Background */}
      <Image
        src={HERO_STRINGS.bgImage}
        alt={HERO_STRINGS.bgAlt}
        fill
        className="object-cover blur-sm z-0"
        style={{
          filter: `blur(8px) brightness(0.4)`,
        }}
      />
      <div
        className="absolute inset-0 z-10"
        style={{ background: COLORS.heroBgOverlay }}
      />

      {/* Header */}
      <div className="relative z-20 flex flex-col items-center">
        <Button
          className="rounded-full px-6 py-3 border transition mb-3"
          style={{
            backgroundColor: COLORS.buttonBg,
            borderColor: COLORS.buttonBorder,
            color: COLORS.secondary,
          }}
        >
          {HERO_STRINGS.processButton}
        </Button>
        <motion.h1
          variants={container}
          initial="hidden"
          animate="visible"
          className={`
          ${FONT_SIZES.headings.h1}
          font-manrope
          text-center
          justify-center
          w-full
          max-w-4xl
          mx-auto
          leading-tight
          flex flex-wrap gap-2
  `}
          style={{ color: COLORS.textPrimary }}
        >
          {HERO_STRINGS.headingWords.map((w: any, i: number) => (
            <motion.span
              key={i}
              variants={word}
              style={w.color ? { color: w.color } : {}}
            >
              {w.text}
            </motion.span>
          ))}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className={`mt-4 text-base sm:text-xl max-w-xl text-center mx-auto`}
          style={{ color: COLORS.textMuted, opacity: 0.3 }}
        >
          {HERO_STRINGS.subheading}
        </motion.p>
      </div>

      {/* Timeline */}
      <div className="relative z-30 flex flex-col items-center mt-10 sm:mt-16 w-full max-w-6xl lg:ml-56 space-y-8 px-2">
        {HERO_STEPS.map((step) => (
          <TimelineStep
            key={step.id}
            step={step}
            isLast={step.id === HERO_STEPS.length}
          />
        ))}
      </div>
    </section>
  );
}
