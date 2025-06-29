"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { COLORS } from "../../constants/colors";
import { FONT_SIZES } from "../../constants/dimensions";
import { CTA_STRINGS } from "../../constants/strings";
import { GlowingButton } from "../common/GlowingButton";

const Cta: React.FC = () => {
  const [count, setCount] = useState<number>(999150);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    let current = 999150;
    const target = 999716;
    const interval = 1000; // 1 second per increment

    const timer = setInterval(() => {
      current += 1;
      if (current > target) {
        clearInterval(timer);
        setCount(target);
      } else {
        setCount(current);
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  const textRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: textRef,
    offset: ["start end", "center center"],
  });

  const rawX = useTransform(scrollYProgress, [0, 1], ["100%", "0%"]);
  const smoothX = useSpring(rawX, {
    stiffness: 50,
    damping: 20,
    mass: 1,
  });

  return (
    <>
      {/* Video Section */}
      <div
        className="relative w-full overflow-hidden font-manrope"
        style={{ color: COLORS.textPrimary }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            background: `linear-gradient(to bottom, ${COLORS.ctaGradientFrom})`,
          }}
        >
          <source src={CTA_STRINGS.videoSrc} type="video/mp4" />
        </video>

        <div
          className="relative z-10 flex flex-col items-center justify-end min-h-screen text-center "
          style={{ background: `${COLORS.overlay}` }}
        >
          <motion.div
            className={`mt-8 mb-8 flex justify-center gap-0 ${FONT_SIZES.special.statNumber}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {isClient
              ? `${CTA_STRINGS.countPrefix}${count.toLocaleString("en-US")}${
                  CTA_STRINGS.countSuffix
                }`
                  .split("")
                  .map((char, idx) => (
                    <span
                      key={idx}
                      className="bg-gradient-to-r from-white to-gray-500 text-transparent bg-clip-text mb-20"
                      style={{ fontFamily: "Helvetica" }}
                    >
                      {char}
                    </span>
                  ))
              : null}
          </motion.div>

          <GlowingButton bgColor="black">
            {CTA_STRINGS.areYouNext}
          </GlowingButton>

          <div className="flex flex-col items-center justify-end w-full h-full relative  mt-56">
            {/* Text with QR overlay */}
            <div
              className="w-full h-full  mt-20 "
              style={{
                background: `linear-gradient(to bottom, ${COLORS.ctaGradientFrom})`,
              }}
            >
              {/* QR Code Overlay */}
              <motion.div
                transition={{ type: "spring", stiffness: 300 }}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-[230px] lg:h-[230px] bg-white p-2 rounded-xl flex items-center justify-center"
                style={{
                  boxShadow: COLORS.qrShadow,
                }}
              >
                <Image
                  src={CTA_STRINGS.qrImg}
                  alt={CTA_STRINGS.qrAlt}
                  width={230}
                  height={230}
                  className="rounded-md w-full h-full object-contain"
                />
              </motion.div>

              <motion.h2
                ref={textRef}
                style={{ x: smoothX, color: COLORS.textPrimary }}
                className={`${FONT_SIZES.headings.h2} text-center whitespace-nowrap w-full px-2 mt-60`}
              >
                {CTA_STRINGS.tradeHeadline}{" "}
                <span style={{ color: COLORS.primary }}>
                  {CTA_STRINGS.tradeHighlight}
                </span>
              </motion.h2>
            </div>
            {/* App Store/Play Store Images */}
            <div
              className=" w-full flex flex-col sm:flex-row items-center justify-center  bg-[#00010d] mt-40 mb-20"
            >
              <Image
                src={CTA_STRINGS.playStoreImg}
                alt={CTA_STRINGS.playStoreAlt}
                width={120}
                height={40}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cta;
