"use server";

import { client } from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs";
import Stripe from "stripe";

// Define the required API version as a string literal type
const apiVersion: "2024-06-20" = "2024-06-20";

const stripe = new Stripe(process.env.STRIPE_SECRET!, {
  typescript: true,
  apiVersion: apiVersion,
});

export const getUserClients = async () => {
  try {
    const user = await currentUser();
    if (user) {
      const clients = await client.customer.count({
        where: {
          Domain: {
            User: {
              clerkId: user.id,
            },
          },
        },
      });
      if (clients) {
        return clients;
      }
    }
  } catch (error) {
    console.log(error);
  }
};

export const getUserBalance = async () => {
  try {
    const user = await currentUser();
    if (user) {
      const connectedStripe = await client.user.findUnique({
        where: {
          clerkId: user.id,
        },
        select: {
          stripeId: true,
        },
      });

      if (connectedStripe) {
        const transactions = await stripe.balance.retrieve({
          stripeAccount: connectedStripe.stripeId!,
        });

        if (transactions) {
          const sales = transactions.pending.reduce((total, next) => {
            return total + next.amount;
          }, 0);

          return sales / 100;
        }
      }
    }
  } catch (error) {
    console.log(error);
  }
};

// Other functions omitted for brevity, but ensure they align with the required API version

export const getUserTransactions = async () => {
  try {
    const user = await currentUser();
    if (user) {
      const connectedStripe = await client.user.findUnique({
        where: {
          clerkId: user.id,
        },
        select: {
          stripeId: true,
        },
      });

      if (connectedStripe) {
        const transactions = await stripe.charges.list({
          stripeAccount: connectedStripe.stripeId!,
        });
        if (transactions) {
          return transactions;
        }
      }
    }
  } catch (error) {
    console.log(error);
  }
};
