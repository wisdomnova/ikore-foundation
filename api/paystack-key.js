module.exports = (req, res) => {
  // Allow Vercel to serve the key from the environment variables safely
  res.status(200).json({
    publicKey: process.env.PAYSTACK_PUBLIC_KEY || ''
  });
};
