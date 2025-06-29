"use client";

import {
  motion,
  useAnimation,
  useInView,
  useScroll,
  useTransform,
} from "framer-motion";
import { useEffect, useRef } from "react";
import { GlowingButton } from "../common/GlowingButton";

interface Step {
  id: number;
  title: string;
}

export default function TimelineStep({
  step,
  isLast,
}: {
  step: Step;
  isLast: boolean;
}) {
  const ref = useRef(null);
  const numberRef = useRef(null);
  const isInView = useInView(ref, {
    margin: "-40% 0px -40% 0px",
    once: false,
  });

  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start({ opacity: 1, y: 0 });
    } else {
      controls.start({ opacity: 0, y: 40 });
    }
  }, [isInView, controls]);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const height = useTransform(scrollYProgress, [0, 1], ["0%", "150%"]);
  const color = useTransform(scrollYProgress, [0, 1], ["#12131D", "#fff"]);

  return (
    <div className="relative w-full ">
      <div ref={ref} className="relative flex items-start w-full ">
        {/* Left side: Show content if step is even */}
        <div className="w-1/3 text-right pr-4 ">
          {step.id % 2 === 0 && (
            <motion.div
              animate={controls}
              initial={{ opacity: 0, y: 40 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-xl text-[#FFFFFF80]">Step {step.id}</p>
              <p className="text-2xl font-semibold text-white">{step.title}</p>
            </motion.div>
          )}
        </div>
        {/* Center: Step number and timeline */}
        <div className="w-1/7 flex flex-col items-center relative ">
          <div
            ref={numberRef}
            className="w-full flex flex-row items-center justify-center relative "
          >
            <motion.div
              style={{
                color: isInView ? "#fff" : "#12131D",
                fontWeight: "bold",
              }}
              className="w-full h-full text-4xl font-extrabold z-10 mt-2 mb-4"
            >
              {String(step.id).padStart(2, "0")}
            </motion.div>
          </div>
          <div className="relative h-64 mt-2 mb-2">
            {/* Gray static timeline */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[3px] h-full bg-[#151521] " />

            {/* Animated colored timeline */}
            <motion.div
              style={{
                height: isInView ? height : "0%",
                transition: "height 0.5s cubic-bezier(0.4,2,0.6,1)",
              }}
              className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[3px] bg-[#D5C5FA]"
            />
          </div>
        </div>
        {/* Right side: Show content if step is odd */}
        <div className="w-1/3 text-left pl-4">
          {step.id % 2 !== 0 && (
            <motion.div
              animate={controls}
              initial={{ opacity: 0, y: 40 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-xl text-white/70">Step {step.id}</p>
              <p className="text-2xl font-semibold text-white">{step.title}</p>
            </motion.div>
          )}
        </div>
      </div>

      {isLast && (
        <div className="mt-20 pb-32 flex lg:mr-50 justify-center">
          <GlowingButton>Open FREE Account </GlowingButton>
        </div>
      )}
    </div>
  );
}
