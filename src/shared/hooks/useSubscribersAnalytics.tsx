"use client";

import { useEffect, useState } from "react";

import { subscribersAnalytics } from "@/actions/subscribers.analytics";

const useSubscribersAnalytics = () => {
  const [subscribersData, setSubscribersData] = useState<any>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    SubscribersAnalytics();
  }, []);

  const SubscribersAnalytics = async () => {
    await subscribersAnalytics().then((res: any) => {
      setSubscribersData(res);
      setLoading(false);
    });
  };

  return { subscribersData, loading };
};

export default useSubscribersAnalytics;
