const stripe = require('stripe')(process.env.STRIPE_SECRITE_KEY);

export default async function checkout(req, res) {
  const { basket, email } = req.body;

  const transformedItems = basket.map((item) => ({
    discription: item.discription,
    quantity: 1,
    price_data: {
      currency: 'usd',
      unit_amount: item.price * 100,
      product_data: {
        name: item.title,
        images: [item.image],
      },
    },
  }));

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    shipping_rates: ['shr_1K7mDxGwbpYF8ZCZvHjc7CcQ'],
    shipping_address_collection: {
      allowed_countries: ['GB', 'US', 'CA', 'BD'],
    },
    line_items: transformedItems,
    mode: 'payment',
    success_url: `${process.env.HOST}/success`,
    cancel_url: `${process.env.HOST}/checkout`,
    metadata: {
      email,
      image: JSON.stringify(basket.map((items) => items.image)),
    },
  });
  res.status(200).json({ id: session.id });
};
