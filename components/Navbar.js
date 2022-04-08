import React from "react";
import Image from "next/dist/client/image";
import Link from "next/link";
import { AiOutlineShoppingCart } from 'react-icons/ai';


const Navbar = () => {
  return (
    <div className="flex flex-col md:flex-row  md:justify-start justify-between items-center py-2">
      <div className="logo mx-5">
        <Image src="/logo1.png" alt="" width={200} height={60} />
      </div>
      <div className="nav">
        <ul className="flex items-center space-x-2 font-bold md:text-xl">
          <Link href={"/"}>
            <a>
              <li>Tshirts</li>
            </a>
          </Link>
          <Link href={"/"}>
            <a>
              <li>Hoodies</li>
            </a>
          </Link>
          <Link href={"/"}>
            <a>
              <li>NoteBook</li>
            </a>
          </Link>
          <Link href={"/"}>
            <a>
              <li>Mugs</li>
            </a>
          </Link>
        </ul>
      </div>
      <div className="cart absolute right-0 top-4 mx-5">
        <AiOutlineShoppingCart className="text-2xl"/>
      </div>
    </div>
  );
};

export default Navbar;
