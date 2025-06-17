import React from "react";
import logo from "../../../public/logo.png";
import Image from "next/image";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { RiMenu4Line } from "react-icons/ri";

const Header = () => {
  return (
    <div className="bg-white sticky top-0 right-0 left-0">
      <div className="maxWidth flex justify-between items-center px-8 py-2">
        <Image src={logo} alt="logo" className="w-24" />
        <div className="flex gap-4 text-[#004B84] max-lg:hidden">
          <Link href="/" className="text-xl font-bold">
            HOME
          </Link>
          <Link href="/" className="text-xl font-bold">
            ABOUT
          </Link>
          <Link href="/" className="text-xl font-bold">
            BLOGS
          </Link>
          <Link href="/" className="text-xl font-bold">
            CONTACT US
          </Link>
        </div>
        <Sheet>
          <SheetTrigger asChild className="lg:hidden">
            <RiMenu4Line className="cursor-pointer" size={40} />
          </SheetTrigger>
          <SheetContent className="bg-secondary font-montserrat font-[600] text-primary z-200">
            <SheetHeader>
              <SheetTitle className="text-primary">9-TO-5</SheetTitle>
            </SheetHeader>
            <div className="flex flex-col gap-2 px-4 text-[18px]">
              <SheetClose
                asChild
                className="outline-none rounded-lg hover:bg-primaryDark py-4 text-left px-4"
              >
                <Link
                  // className={`${
                  //   pathname === "/" &&
                  //   "text-white underline underline-offset-6"
                  // } hover:text-white hover:underline underline-offset-6`}
                  href="/"
                >
                  HOME
                </Link>
              </SheetClose>
              <SheetClose
                asChild
                className="outline-none rounded-lg hover:bg-primaryDark py-4 text-left px-4"
              >
                <Link
                  // className={`${
                  //   pathname === "/services" &&
                  //   "text-white underline underline-offset-6"
                  // } hover:text-white hover:underline underline-offset-6`}
                  href="/about"
                >
                  ABOUT
                </Link>
              </SheetClose>
              <SheetClose
                asChild
                className="outline-none rounded-lg hover:bg-primaryDark py-4 text-left px-4"
              >
                <Link
                  // className={`${
                  //   pathname === "/rooms" &&
                  //   "text-white underline underline-offset-6"
                  // } hover:text-white hover:underline underline-offset-6`}
                  href="/blogs"
                >
                  BLOGS
                </Link>
              </SheetClose>
              <SheetClose
                asChild
                className="outline-none rounded-lg hover:bg-primaryDark py-4 text-left px-4"
              >
                <Link
                  // className={`${
                  //   pathname === "/gallery" &&
                  //   "text-white underline underline-offset-6"
                  // } hover:text-white hover:underline underline-offset-6`}
                  href="/contact"
                >
                  CONTACT US
                </Link>
              </SheetClose>
            </div>
            <SheetFooter></SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
      <hr />
    </div>
  );
};

export default Header;
