"use client";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import SignInButton from "../Button/SignInButton";
import SignUpButton from "../Button/SignUpButton";
import UserAvatar from "../Avatar/Avatar";

const Navbar = () => {
  const userData = authClient.useSession();

  const user = userData.data?.user;

  return (
    <div className="border-b px-2">
      {" "}
      <nav className=" flex justify-between items-center py-3 max-w-7xl mx-auto w-full">
        {" "}
        <Link href={"/"}>
          {" "}
          <div className="flex gap-2 items-center">
            {" "}
            <Image
              src={"/logo.png"}
              alt="logo"
              loading="eager"
              width={30}
              height={30}
              className="object-cover h-auto w-auto"
            />{" "}
            <h3 className="font-black text-lg">pixgen.</h3>{" "}
          </div>{" "}
        </Link>{" "}
        <ul className="flex items-center gap-5 text-sm">
          {" "}
          <li>
            {" "}
            <Link href={"/"}>Home</Link>{" "}
          </li>{" "}
          <li>
            {" "}
            <Link href={"/all-photos"}>All Photos</Link>{" "}
          </li>{" "}
          <li>
            {" "}
            <Link href={"/pricing"}>Pricing</Link>{" "}
          </li>{" "}
          <li>
            {" "}
            <Link href={"/profile"}>Profile</Link>{" "}
          </li>{" "}
        </ul>{" "}
        <div className="flex items-center gap-3">
          {" "}
          {!user && (
            <>
              {" "}
              <SignInButton></SignInButton> <SignUpButton></SignUpButton>{" "}
            </>
          )}{" "}
          {user && <UserAvatar user={user}></UserAvatar>}{" "}
        </div>{" "}
      </nav>{" "}
    </div>
  );
};
export default Navbar;
