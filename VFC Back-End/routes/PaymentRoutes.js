// /backend/routes/paymentRoutes.js

const express = require('express');
const stripe = require('stripe')('your-secret-key'); // Replace with your actual Stripe secret key
const router = express.Router();

router.post('/payment/credit-debit', async (req, res) => {
  try {
    const { paymentMethodId, amount } = req.body;

    // Process the payment with Stripe
    const paymentIntent = await stripe.paymentIntents.create({
      amount, // amount in cents
      currency: 'usd', // Replace with the desired currency
      payment_method: paymentMethodId,
      confirm: true,
    });

    // Send success response
    res.status(200).json({ message: 'Payment successful', paymentIntent });
  } catch (error) {
    // Send error response if the payment fails
    console.error('Payment Error:', error);
    res.status(500).json({ message: 'Payment failed', error: error.message });
  }
});

module.exports = router;
