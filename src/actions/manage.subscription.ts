"use server";

import Stripe from "stripe";

import { connectDb } from "@/shared/libs/db";

export const manageSubscription = async ({
  customerId,
}: {
  customerId: string;
}) => {
  try {
    await connectDb();

    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
      apiVersion: "2024-06-20",
    });

    const portalSession = await stripe.billingPortal.sessions.create({
      customer: customerId,
      return_url: process.env.NEXT_PUBLIC_WEBSITE_URL + "/dashboard",
    });

    return portalSession.url;
  } catch (error) {
    console.log(error);
  }
};
