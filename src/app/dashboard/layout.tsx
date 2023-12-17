import DashboardLink from "@/components/utility/DashboardLink";
import { ChildrenProps } from "@/types/types";

const layout = ({ children }: ChildrenProps) => {
  return (
    <div className="md:flex">
      <div className="flex-[2] bg-theme-color-100 min-h-[calc(100vh-64px)] p-5">
        <ul className="flex flex-col gap-2 sticky top-24">
          <DashboardLink path="/dashboard" text="Summary" />
          <DashboardLink path="/dashboard/products" text="Products" />
          <DashboardLink path="/dashboard/category" text="Category" />
          <DashboardLink path="/dashboard/allUsers" text="All Users" />
          <DashboardLink path="/dashboard/operator" text="Operator" />
          <DashboardLink path="/dashboard/manager" text="Manager" />
          <DashboardLink path="/dashboard/admin" text="Admin" />
          <DashboardLink path="/dashboard/orderHistory" text="Order History" />
        </ul>
      </div>
      <div className="flex-[9] p-5">{children}</div>
    </div>
  );
};

export default layout;
