module.exports = {
  images: {
    domains: ["menuhub-backend.herokuapp.com"],
    formats: ["image/avif", "image/webp"],
  },
  env: {
    stripe_public_key: process.env.STRIPE_PUBLIC_KEY,
  },
};
