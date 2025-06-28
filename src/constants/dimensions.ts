export const FONT_SIZES = {
  headings: {
    h1: "text-2xl md:text-6xl", // Hero main heading
    h2: "text-[2.5rem] sm:text-[4rem] md:text-[6rem] lg:text-[8rem] xl:text-[8.75rem]", // CTA headline
    h3: "text-xl md:text-2xl", // Pricing card title
    h4: "text-lg", // Not directly used, for future
    h5: "text-base", // Not directly used, for future
    h6: "text-sm", // Not directly used, for future
  },
  text: {
    xl: "text-xl md:text-2xl", // Hero subheading
    lg: "text-lg", // Pricing subtitle, button text
    base: "text-base", // General text
    sm: "text-sm", // Pricing card features
    xs: "text-xs", // Not directly used, for future
  },
  special: {
    heroTitle: "text-[3.5rem]", // For custom hero title if needed
    sectionTitle: "text-4xl md:text-6xl", // Pricing section title
    statNumber:
      "text-[2.5rem] sm:text-[4rem] md:text-[6rem] lg:text-[8rem] xl:text-[12rem]", // CTA stat number
    buttonText: "text-lg", // CTA button
  },
  lineHeights: {
    tight: "leading-tight",
    normal: "leading-normal",
    relaxed: "leading-relaxed",
  },
} as const;
