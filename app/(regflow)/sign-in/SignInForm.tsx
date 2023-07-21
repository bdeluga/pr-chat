"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Link from "next/link";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Form,
} from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";

export function SignInForm() {
  const formSchema = z.object({
    email: z
      .string()
      .email({ message: "This field must be a valid email." })
      .nonempty({
        message: "This field is required.",
      }),
    password: z
      .string()
      .nonempty({
        message: "This field is required.",
      })
      .min(8, {
        message: "This field must be at least 8 characters.",
      }),
  });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div className=" h-screen max-w-sm grid place-items-center mx-auto">
      <div className="border-2 shadow-2xl flex flex-col p-14  border-secondary rounded-3xl w-full">
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
        <Form {...form}>
          <form
            className="flex flex-col space-y-6 "
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="john_doe@email.com"
                      className="bg-transparent focus-visible:ring-0"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="********"
                      className="bg-transparent focus-visible:ring-0"
                      {...field}
                    />
                  </FormControl>
                  {/* <Link
                    href={"account/forgot"}
                    className="text-xs inline-flex w-full justify-end text-gray-400 hover:underline"
                  >
                    {"Forgot password?"}
                  </Link> */}
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Log in</Button>
          </form>
        </Form>
        <div className="flex gap-1 mt-4">
          <span>{"Don't have an account? "}</span>
          <Link href={"sign-up"} className="text-accent-secondary underline">
            Create one
          </Link>
        </div>
      </div>
    </div>
  );
}
