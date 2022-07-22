const functions = require("firebase-functions");

const express = require("express");
const cors = require("cors");
const { request } = require("firebase-tools/lib/api");
const { response } = require("express");

const stripe = require("stripe")(
  "sk_test_51K4ntxSIRMH73BuVKicDMkk4LAaFPyhDZGXOvPFQoa83VLvTyCprDndYWlJ0UdngIOT9jagWlyCeiVQIHIDGHqhK00rPECwLqy"
);

//API

// -APP CONFIG
const app = express();

//middlewares

app.use(cors({ origin: true }));
app.use(express.json());

// - API ROUTES
app.get("/", (request, response) => response.status(200).send("hello world"));

// app.get("/ayu", (request, response) => response.status(200).send("heyyoo"));
app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  console.log("Payment Request Received! for this amount>>>", total);
  const paymentIntent = await stripe.paymentIntent.create({
    amount: total,
    currency: "usd",
  });
});

response.status(201).send({
  clientSecret: paymentIntent.client_secret,
});

// - LISTEN COMMAND
exports.api = functions.https.onRequest(app);

//http://localhost:5001/web-40a2e/us-central1/api
