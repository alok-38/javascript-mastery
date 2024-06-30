"use server";

import { client } from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs";
import Stripe from "stripe";

// Define the Stripe API version
const stripeApiVersion = "2024-06-30";

// Initialize Stripe with your secret key and API version
const stripe = new Stripe(process.env.STRIPE_SECRET!, {
  typescript: true,
  apiVersion: stripeApiVersion as any, // Casting as any if necessary
});

// Function to create a customer payment intent secret
export const onCreateCustomerPaymentIntentSecret = async (
  amount: number,
  stripeId: string
) => {
  try {
    const paymentIntent = await stripe.paymentIntents.create(
      {
        currency: "usd",
        amount: amount * 100,
        automatic_payment_methods: {
          enabled: true,
        },
      },
      { stripeAccount: stripeId }
    );

    if (paymentIntent) {
      return { secret: paymentIntent.client_secret };
    }
  } catch (error) {
    console.log(error);
  }
};

// Function to update user subscription plan
export const onUpdateSubscription = async (
  plan: "STANDARD" | "PRO" | "ULTIMATE"
) => {
  try {
    const user = await currentUser();
    if (!user) return;

    const update = await client.user.update({
      where: {
        clerkId: user.id,
      },
      data: {
        subscription: {
          update: {
            data: {
              plan,
              credits: plan === "PRO" ? 50 : plan === "ULTIMATE" ? 500 : 10,
            },
          },
        },
      },
      select: {
        subscription: {
          select: {
            plan: true,
          },
        },
      },
    });

    if (update) {
      return {
        status: 200,
        message: "Subscription updated",
        plan: update.subscription?.plan,
      };
    }
  } catch (error) {
    console.log(error);
  }
};

// Function to determine the amount for a subscription plan
const setPlanAmount = (item: "STANDARD" | "PRO" | "ULTIMATE") => {
  switch (item) {
    case "PRO":
      return 1500;
    case "ULTIMATE":
      return 3500;
    default:
      return 0;
  }
};

// Function to get a client secret for a payment intent
export const onGetStripeClientSecret = async (
  item: "STANDARD" | "PRO" | "ULTIMATE"
) => {
  try {
    const amount = setPlanAmount(item);
    const paymentIntent = await stripe.paymentIntents.create({
      currency: "usd",
      amount: amount,
      automatic_payment_methods: {
        enabled: true,
      },
    });

    if (paymentIntent) {
      return { secret: paymentIntent.client_secret };
    }
  } catch (error) {
    console.log(error);
  }
};
