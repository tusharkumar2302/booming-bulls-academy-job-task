export const HERO_STRINGS = {
  bgImage: "/bg-hero.webp",
  bgAlt: "Hero Background",
  processButton: "Our Process",
  headingWords: [
    { text: "Become" },
    { text: "a" },
    { text: "Abcd Pro", color: "#A35CA2" },
    { text: "in" },
    { text: "sec..." },
  ],
  subheading: "🚀 Sign up. Fund. Trade.",
};

export const HERO_STEPS = [
  { id: 1, title: "Register your account" },
  { id: 2, title: "Deposit your funds" },
  { id: 3, title: "Complete your KYC" },
  { id: 4, title: "Start Trading & Earn Profits" },
];

export const PLANS_COMPARISON = {
  processButton: "Our Process",
  title: "Compare your Abcd plan",
  subtitle: "Flexible Deposits for Every Trader",
  labels: [
    "Who It's For",
    "Initial Capital Requirement",
    "Spread Advantage",
    "Trading Fees",
    "Leverage Capacity",
    "Minimum Lot Size",
    "Trade Execution Limit",
    "Open Position Capacity",
    "Stop Out Threshold",
    "Margin Call Activation",
    "Swap Policy",
    "Risk Exposure",
    "Asset Options",
  ],
  plans: [
    {
      name: "Abcd Vintage",
      description:
        "Perfect for balanced, all-level traders looking for consistency and solid growth.",
      features: {
        capitalRequirement: "$10%",
        spread: "from 0.2 pips",
        commission: "No Commission",
        leverage: "1:Unlimited",
        lotSize: "0.01",
        tradeLimit: "200 trades during peak hours",
        positions: "Unlimited",
        stopOut: "0%",
        marginCall: "30%",
        swap: "0%",
        risk: "Moderate",
        assets: ["Forex", "Crypto", "Stocks", "Commodities", "Indices"],
      },
    },
    {
      name: "Abcd Cent",
      description:
        "Designed for beginners ready to step into the trading world with minimal risk.",
      features: {
        capitalRequirement: "$10",
        spread: "from 0.3 pips",
        commission: "Zero Commission",
        leverage: "1:Unlimited",
        lotSize: "Same",
        tradeLimit: "200 trades during peak hours",
        positions: "Unlimited",
        stopOut: "0%",
        marginCall: "30%",
        swap: "0%",
        risk: "Low",
        assets: ["Forex", "Crypto", "Stocks", "Commodities", "Indices"],
      },
    },
    {
      name: "Abcd Pro",
      description:
        "Ideal for experienced traders seeking precision, speed, and high-stakes performance.",
      features: {
        capitalRequirement: "$500",
        spread: "from 0.1 pips",
        commission: "No Commission",
        leverage: "1:Unlimited",
        lotSize: "Same",
        tradeLimit: "200 trades during peak hours",
        positions: "Unlimited",
        stopOut: "0%",
        marginCall: "30%",
        swap: "0%",
        risk: "High",
        assets: ["Forex", "Crypto", "Stocks", "Commodities", "Indices"],
      },
    },
  ] as const,
};

export const CTA_STRINGS = {
  payoutsButton: "Payouts",
  headline: "We’ve Paid Out Over",
  highlight: "$1M to Traders",
  subtitle: "Your Trust is Our Fuel—Power Up with Abcd",
  countPrefix: "$",
  countSuffix: "+",
  areYouNext: "Are you Next?",
  tradeHeadline: "Trade Anytime,",
  tradeHighlight: "Anywhere",
  playStoreAlt: "App Store",
  playStoreImg: "/playStore-appStore.webp",
  qrAlt: "QR Code",
  qrImg: "/qr-code.webp",
  videoSrc: "/blackhole-video.mp4",
};
