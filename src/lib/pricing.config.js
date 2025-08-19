// /src/lib/pricing.config.js
const pricingConfig = {
  USD: {
    symbol: "$",
    plans: {
      basic: 15,
      pro: 20,
      premium: 30,
    },
  },
  GBP: {
    symbol: "£",
    plans: {
      basic: 12,
      pro: 18,
      premium: 28,
    },
  },
  INR: {
    symbol: "₹",
    plans: {
      basic: 999,
      pro: 1499,
      premium: 2499,
    },
  },
};

export default pricingConfig;
