require("dotenv/config");
const Router = require("express");
const routes = Router();
const stripe = require("stripe")(process.env.STRIPE_KEY);

routes.post("/v1/pagarProduto", async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: req.body.items.map((item) => {
        return {
          price_data: {
            currency: "brl",
            product_data: {
              name: item.name,
            },
            unit_amount: item.priceInCents,
          },
          quantity: item.quantity,
        };
      }),
      success_url: process.env.AMBIENT,
      cancel_url: req.body.url,
    });
    res.json({ url: session.url });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

module.exports = routes;
