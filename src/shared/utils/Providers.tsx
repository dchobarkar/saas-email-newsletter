"use client";

import { Toaster } from "react-hot-toast";
import { usePathname } from "next/navigation";
import { NextUIProvider } from "@nextui-org/react";
import { useUser } from "@clerk/nextjs";

import DashboardSidebar from "@/shared/widgets/dashboard/dashboard.sidebar";
import { addStripe } from "@/actions/add.stripe";

interface ProviderProps {
  children: React.ReactNode;
}

export default function Providers({ children }: ProviderProps) {
  const pathName = usePathname();
  const { isLoaded, user } = useUser();

  const isPathAllowed = (pathName: string) => {
    if (
      pathName === "/dashboard/new-email" ||
      pathName === "/" ||
      pathName === "/sign-up" ||
      pathName === "/subscribe" ||
      pathName === "/success" ||
      pathName === "/sign-in"
    )
      return false;

    return true;
  };

  const isStripeCustomerIdHas = async () => {
    await addStripe();
  };

  if (!isLoaded) return null;
  if (user) isStripeCustomerIdHas();

  return (
    <NextUIProvider>
      {isPathAllowed(pathName) ? (
        <div className="w-full flex">
          <div className="w-[290px] h-screen overflow-y-scroll">
            <DashboardSidebar />
          </div>

          {children}
        </div>
      ) : (
        <>{children}</>
      )}
      <Toaster position="top-center" reverseOrder={false} />
    </NextUIProvider>
  );
}
