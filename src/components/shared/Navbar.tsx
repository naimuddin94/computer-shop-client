import { ChildrenProps } from "@/types/types";
import { RxHamburgerMenu } from "react-icons/rx";
import NavItems from "../utility/NavItems";

const Navbar = ({ children }: ChildrenProps) => {
  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="w-full navbar bg-theme-primary h-12 sticky top-0">
          <div className="flex-none lg:hidden">
            <label
              htmlFor="my-drawer-3"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <RxHamburgerMenu size={20} />
            </label>
          </div>
          <div className="flex-1 px-2 mx-2 text-lg text-theme-secondary">
            City Computer
          </div>
          <div className="flex-none hidden lg:block">
            <ul className="menu menu-horizontal gap-4">
              {/* Navbar menu content here */}
              <NavItems />
            </ul>
          </div>
        </div>
        {/* Page content here */}
        {children}
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-theme-primary space-y-2">
          {/* Sidebar content here */}
          <NavItems />
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
