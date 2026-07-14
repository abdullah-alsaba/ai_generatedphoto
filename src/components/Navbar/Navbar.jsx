"use client";
import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="border-b px-2">
      <nav className=" flex justify-between items-center  py-3 max-w-7xl mx-auto w-full">
        <Link href={"/"}>
          <div className="flex gap-2 items-center">
            <Image
              src={"/logo.png"}
              alt="logo"
              loading="eager"
              width={30}
              height={30}
              className="object-cover h-auto w-auto"
            />
            <h3 className="font-black text-lg">pixgen.</h3>
          </div>
        </Link>

        <ul className="flex items-center gap-5 text-sm">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/all-photos"}>All Photos</Link>
          </li>
          <li>
            <Link href={"/pricing"}>Pricing</Link>
          </li>
          <li>
            <Link href={"/profile"}>Profile</Link>
          </li>
        </ul>

        <div className="flex items-center gap-3">
          <Link href="/signin">
            <Button
              variant="bordered"
              className="border-default-300 hover:bg-default-100 border"
            >
              Sign In
            </Button>
          </Link>

          <Link href="/signup">
            <Button className="bg-linear-to-r from-violet-600 via-purple-600 to-blue-600 text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 px-6">
              Sign Up
            </Button>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
