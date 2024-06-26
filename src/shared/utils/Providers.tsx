"use client";

import { usePathname } from "next/navigation";
import { NextUIProvider } from "@nextui-org/react";

interface ProviderProps {
  children: React.ReactNode;
}

export default function Providers({ children }: ProviderProps) {
  const pathName = usePathname();

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

  return (
    <NextUIProvider>
      {isPathAllowed(pathName) ? (
        <div className="w-full flex">
          <div className="w-[290px] h-screen overflow-y-scroll"></div>
          {children}
        </div>
      ) : (
        <>{children}</>
      )}
    </NextUIProvider>
  );
}
