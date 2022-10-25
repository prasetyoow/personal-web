/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import Image from "next/image";
import Logo from "./Logo";
import Nav from "./Nav";
import Button from "./Button";
import menu from "../public/menu.svg";
import x from "../public/x.svg";
import classnames from "classnames";

export default function Navbar() {
  const [offcanvas, setOffcanvas] = useState(false);
  return (
    <>
      <div className="flex items-center py-10">
        <div className="w-3/12">
          <Logo />
        </div>
        <div className="w-6/12 hidden md:block">
          <Nav scheme="light" dir="horizontal" />
        </div>
        <div className="w-3/12 text-right hidden md:block">
          <Button href="#contact" pill variant="outline-yellow">
            Contact
          </Button>
        </div>
        <div className="w-9/12 md:hidden text-right">
          <Image
            src={menu}
            alt="menu-navbar"
            className="inline-block"
            onClick={() => setOffcanvas(true)}
          />
        </div>
      </div>

      <div
        className={classnames(
          "fixed bg-white z-10 top-0 h-full w-full p-10 md:hidden transition-all",
          offcanvas ? "right-0" : "-right-full"
        )}
      >
        <img
          className="absolute top-8 right-8 w-8"
          src="/x.svg"
          alt="close-navbar"
          onClick={() => setOffcanvas(false)}
        />
        <Nav scheme="dark" dir="vertical" />
      </div>
    </>
  );
}
