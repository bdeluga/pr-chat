import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <div className=" h-screen grid place-items-center">
      <div className="border-2 shadow-2xl flex flex-col p-14  border-secondary rounded-3xl">
        <h1 className="text-2xl mb-8 font-bold">Create an account</h1>
        <form className="flex flex-col ">
          <div className="space-y-6">
            <div className="flex flex-col">
              <label
                htmlFor="username"
                className="text-xs text-gray-400 font-bold mb-0.5 ml-1"
              >
                Username
              </label>
              <input
                id="username"
                className="text-lg bg-transparent border-2 p-1 border-gray-500/60 rounded-md"
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="email"
                className="text-xs text-gray-400 font-bold mb-0.5 ml-1"
              >
                Email
              </label>
              <input
                id="email"
                className="text-lg bg-transparent border-2 p-1 border-gray-500/60 rounded-md"
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="password"
                className="text-xs text-gray-400 font-bold mb-0.5 ml-1"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                className="text-lg bg-transparent border-2 p-1 border-gray-500/60 rounded-md"
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="re_password"
                className="text-xs text-gray-400 font-bold mb-0.5 ml-1"
              >
                Repeat password
              </label>
              <input
                id="re_password"
                type="password"
                className="text-lg bg-transparent border-2 p-1 border-gray-500/60 rounded-md"
              />
            </div>
          </div>
          <button className="bg-green-700 p-2 rounded-md mt-12">
            Create an account
          </button>
        </form>
        <div className="flex gap-1 mt-4">
          <span>{"Already have an account? "}</span>
          <Link href={"sign-in"} className="text-accent-secondary underline">
            Log in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page;
