const express = require('express');
const { processPayment, paytmResponse, getPaymentStatus } = require('../controllers/paymentController');
const {newOrder} = require('../controllers/orderController');
const { isAuthenticatedUser } = require('../middlewares/auth');

const router = express.Router();

router.route('/payment/process').post(newOrder);
// router.route('/stripeapikey').get(isAuthenticatedUser, sendStripeApiKey);

router.route('/callback').post(paytmResponse);

router.route('/payment/status/:id').get(isAuthenticatedUser, getPaymentStatus);

module.exports = router;