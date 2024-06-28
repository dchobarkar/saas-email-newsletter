"use server";

import { connectDb } from "@/shared/libs/db";
import Subscriber from "@/models/subscriber.model";

export const getSubscribers = async ({
  newsLetterOwnerId,
}: {
  newsLetterOwnerId: string;
}) => {
  try {
    await connectDb();

    const subscribers = await Subscriber.find({
      newsLetterOwnerId,
    });
    return subscribers;
  } catch (error) {
    console.log(error);
  }
};
