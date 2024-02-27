"use client";
import { ChildrenProps } from "@/types/types";
import { RxHamburgerMenu } from "react-icons/rx";
import NavItems from "../utility/NavItems";
import Image from "next/image";
import unknownUserImage from "../../../public/assets/unknown_user.jpg";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store/store";
import { signOut } from "firebase/auth";
import { auth } from "@/firebase/firebase.config";
import { logoutUser } from "@/redux/features/userSlice";

const Navbar = ({ children }: ChildrenProps) => {
  const { email, name, photo } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    signOut(auth);
    dispatch(logoutUser());
  };

  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="w-full navbar h-12 sticky top-0 shadow-sm z-40 bg-cream">
          <div className="flex-none lg:hidden">
            <label
              htmlFor="my-drawer-3"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <RxHamburgerMenu size={20} className="text-theme-color-200" />
            </label>
          </div>
          <div className="flex-1 px-2 mx-2 text-lg text-theme-color-200 font-extralight">
            City Computer
          </div>
          <div className="flex-none hidden lg:block">
            <ul className="menu menu-horizontal gap-4 items-center">
              {/* Navbar menu content here */}
              <NavItems />
            </ul>
          </div>
          {email && (
            <>
              <h3 className="mx-3">{name}</h3>
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 rounded-full bg-red">
                    <Image
                      src={photo ? photo : unknownUserImage}
                      alt="avatar"
                      width={40}
                      height={40}
                    />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <a>Settings</a>
                  </li>
                  <li onClick={() => handleLogout()}>
                    <a>Logout</a>
                  </li>
                </ul>
              </div>
            </>
          )}
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
        <ul className="menu p-4 w-80 min-h-full bg-cream space-y-2 mt-16">
          {/* Sidebar content here */}
          <NavItems />
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
