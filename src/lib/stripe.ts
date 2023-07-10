import Stripe from "stripe";

export const stripe = new Stripe(
  "sk_test_51NKlcbGTwBvdgyqG6bJsYCCBDfmu1TvoAmQ4pnqpZZZmYuGbNlPkG4w63QnYSKZXV7Kb5Cbj4mXzH2elPc1eRgAY00g0Tn1zTg",
  {
    apiVersion: "2022-11-15",
    appInfo: {
      name: "Supply Pro",
    },
  }
);
