import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="border-b border-gray-600 h-16 flex pl-40 items-center justify-between">
      <Link
        href={"/dashboard"}
        className="from-accent-secondary bg-gradient-to-r to-gray-400 text-transparent bg-clip-text font-bold text-2xl"
      >
        <>
          PRCONNECT <FontAwesomeIcon icon={faUsers} />
        </>
      </Link>
      <div className="space-x-10 pr-8">
        <Link href={"dashboard/account"}>Account</Link>
        <button>Logout</button>
      </div>
    </header>
  );
};

export default Header;
