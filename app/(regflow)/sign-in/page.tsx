import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <div className=" h-screen grid place-items-center">
      <div className="border-2 shadow-2xl flex flex-col p-14  border-secondary rounded-3xl">
        <h1 className="text-2xl mb-8 font-bold">Login to your account</h1>
        <ul className="space-y-4">
          <li>
            <button className="border-2 hover:bg-accent-secondary/60 hover:text-black transition-colors duration-300 border-accent-secondary/60 w-full py-3 rounded-md">
              Sign in with Github
            </button>
          </li>
          <li>
            <button className="border-2 hover:bg-accent-secondary/60 hover:text-black transition-colors duration-300 border-accent-secondary/60 w-full py-3 rounded-md">
              Sign in with Google
            </button>
          </li>
        </ul>
        <div className="flex my-4 items-center">
          <div className="flex-grow border border-gray-500/60" />
          <span className="flex-shrink mx-2 text-gray-500">OR</span>
          <div className="flex-grow border border-gray-500/60" />
        </div>
        <form className="flex flex-col ">
          <div className="space-y-6">
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
              <Link
                href={"account/forgot"}
                className="text-xs mt-0.5 text-right text-gray-400 hover:underline"
              >
                {"Forgot password?"}
              </Link>
            </div>
          </div>
          <button className="bg-green-700 p-2 rounded-md mt-12">Log in</button>
        </form>
        <div className="flex gap-1 mt-4">
          <span>{"Don't have an account? "}</span>
          <Link href={"sign-up"} className="text-accent-secondary underline">
            Create one
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page;
