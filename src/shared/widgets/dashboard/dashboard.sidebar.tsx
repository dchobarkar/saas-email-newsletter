"use client";
import { useUser } from "@clerk/nextjs";

import { ICONS } from "@/shared/utils/icons";
import DashboardItems from "@/shared/widgets/dashboard/dashboard.items";
import UserPlan from "@/shared/widgets/dashboard/userPlan";

const DashboardSidebar = () => {
  const { user } = useUser();

  return (
    <div className="p-2">
      <div className="p-2 flex items-center bg-[#f5f5f5f5] rounded">
        <span className="text-2xl">{ICONS.home}</span>

        <h5 className="pl-2 pt-1 capitalize">{user?.username} Newsletter</h5>
      </div>

      <div>
        <DashboardItems />

        <UserPlan />

        <DashboardItems bottomContent={true} />
      </div>
    </div>
  );
};

export default DashboardSidebar;
