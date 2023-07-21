"use client";
import Link from "next/link";

import { useState } from "react";
import FlowController from "./FlowController";
import { FormUser } from "~/lib/types";

export function SignUpForm() {
  const [user, setUser] = useState<FormUser>({
    username: "",
    email: "",
    password: "",
    avatar: "",
  });
  const [step, setStep] = useState(0);

  return (
    <div className=" h-screen max-w-xs md:max-w-sm grid place-items-center mx-auto">
      <div className="border-2 shadow-2xl flex flex-col p-8 md:p-14 border-secondary rounded-3xl w-full">
        <h1 className="text-2xl mb-4 font-bold">Create new account</h1>
        <FlowController step={step} user={user} />
        <div className="flex gap-1 mt-4">
          <span>{"Already have an account? "}</span>
          <Link href={"sign-in"} className="text-accent-secondary underline">
            Log in
          </Link>
        </div>
      </div>
    </div>
  );
}
