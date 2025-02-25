"use client";

import { useEffect, useState } from "react";
import { useClerk } from "@clerk/nextjs";

import { getSubscribers } from "@/actions/get.subscribers";

const useSubscribersData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const { user } = useClerk();

  useEffect(() => {
    GetSubscribers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  const GetSubscribers = async () => {
    await getSubscribers({ newsLetterOwnerId: user?.id! })
      .then((res: any) => {
        setData(res);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
      });
  };

  return { data, loading };
};

export default useSubscribersData;
