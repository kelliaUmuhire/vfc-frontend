// /backend/routes/paymentRoutes.js
const express = require('express');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);  // Get the secret key from the environment variable
const router = express.Router();

router.post('/payment/credit-debit', async (req, res) => {
  try {
    const { paymentMethodId, amount } = req.body;

    // Process the payment with Stripe
    const paymentIntent = await stripe.paymentIntents.create({
      amount, // amount in cents
      currency: 'usd', // Use your preferred currency
      payment_method: paymentMethodId,
      confirm: true,
    });

    // Send success response
    res.status(200).json({ message: 'Payment successful', paymentIntent });
  } catch (error) {
    // Handle payment errors
    console.error('Payment Error:', error);
    res.status(500).json({ message: 'Payment failed', error: error.message });
  }
});

module.exports = router;
