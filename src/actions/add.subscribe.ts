"use server";

import { clerkClient } from "@clerk/nextjs/server";

import { connectDb } from "@/shared/libs/db";
import Subscriber from "@/models/subscriber.model";
import { validateEmail } from "@/shared/utils/ZeroBounceApi";

export const subscribe = async ({
  email,
  username,
}: {
  email: string;
  username: string;
}) => {
  try {
    await connectDb();

    // Fetch all users
    const allUsers = await clerkClient.users.getUserList();

    // Get newsletter owener
    const newsLetterOwner = allUsers.find(
      (user: any) => user.username === username
    );

    if (!newsLetterOwner) throw Error("Username is not vaild!");

    // Check if subscriber already exists
    const isSubscriberExist = await Subscriber.findOne({
      email,
      newsLetterOwnerId: newsLetterOwner?.id,
    });
    if (isSubscriberExist) return { error: "Email already exists!" };

    // Validate email
    const validationResponse = await validateEmail({ email });
    if (validationResponse.status === "invalid")
      return { error: "Email not valid!" };

    // Create new subscriber
    const subscriber = await Subscriber.create({
      email,
      newsLetterOwnerId: newsLetterOwner?.id,
      source: "By DarshanWebDev website",
      status: "Subscribed",
    });

    return subscriber;
  } catch (error) {
    console.error(error);
    return { error: "An error occurred while subscribing." };
  }
};
