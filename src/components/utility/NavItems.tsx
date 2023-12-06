import Link from "next/link";
import CustomLink from "./CustomLink";

const NavItems = () => {
  return (
    <>
      <CustomLink path="/" text="Home" />
      <CustomLink path="/about" text="About" />
    </>
  );
};

export default NavItems;
