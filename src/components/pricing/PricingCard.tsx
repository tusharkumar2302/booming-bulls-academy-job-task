"use client";

type PricingCardProps = {
  title: string;
  description: string;
  price: string;
  risk: string;
  features: string[];
  isFeatured?: boolean;
  className?: string;
};

export default function PricingCard({
  title,
  description,
  price,
  risk,
  features,
  className = "",
  isFeatured = false,
}: PricingCardProps) {
  const GradientLine = () => (
    <div className="mt-3 h-[1px] w-[200px] bg-gradient-to-r from-black via-[#736496] to-black" />
  );

  return (
    <div className={`relative w-[350px] ${className} `}>
      <div
        className={`relative z-10 rounded-[15px] w-[350px] p-[30px_25px] flex flex-col items-center justify-center gap-[30px] overflow-hidden ${
          isFeatured
            ? "bg-gradient-to-br from-[#3811387d] to-[#000000b5]"
            : "bg-gradient-to-tl from-[#000000b5] to-[#3811387d]"
        }`}
      >
        <h3 className=" text-xl md:text-2xl font-semibold mb-2 text-center bg-gradient-to-r from-white to-gray-400 text-transparent bg-clip-text">
          {title}
        </h3>
        <ul className="text-sm text-white space-y-5">
          <li className="flex flex-col items-center text-center font-semibold">
            <p className="text-white">{description}</p>
            <div className="mt-6 h-[1px] w-[200px] bg-gradient-to-r from-black via-[#736496] to-black" />
          </li>
          <li className="flex flex-col items-center text-center font-semibold">
            <p className="text-white">{price}</p>
            <GradientLine />
          </li>
          {features.map((feature, idx) => (
            <li
              key={idx}
              className="flex flex-col items-center text-center font-semibold"
            >
              <p className="text-white">{feature}</p>
              <GradientLine />
            </li>
          ))}
          <li className="flex flex-col items-center text-center font-semibold">
            <p className="text-white">{risk}</p>
            <GradientLine />
          </li>
        </ul>
        <button
          className="mt-8 px-6 text-white font-semibold py-3 rounded-xl hover:opacity-90 transition-all cursor-pointer"
          style={{
            background: "linear-gradient(90deg, #B084FB 92%)",
          }}
        >
          Start Trading
        </button>
      </div>
    </div>
  );
}
