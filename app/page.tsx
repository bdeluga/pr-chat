import Link from "next/link";
import { Button } from "~/components/ui/button";
import { ChevronRight } from "lucide-react";
export default function Home() {
  return (
    <main className="text-white flex flex-col justify-center items-center h-screen bg-[url('/pattern.png')] bg-no-repeat bg-cover">
      <div className="max-w-md px-4 sm:max-w-2xl sm:px-6 md:max-w-3xl lg:max-w-4xl lg:px-0 xl:max-w-5xl 2xl:max-w-6xl">
        <h1 className="text-center text-4xl font-bold text-white sm:text-6xl lg:text-[4rem] xl:text-[6rem] 2xl:text-[6.5rem]">
          Ultimate hub for{" "}
          <span className="underline underline-offset-4 whitespace-nowrap text-accent-secondary">
            live discussions
          </span>{" "}
          on GitHub pull requests.
        </h1>
      </div>
      <div className="mt-12 gap-8 flex font-bold antialiased">
        <Button asChild className="group text-md">
          <Link href={"sign-in"}>
            <>
              Get started
              <ChevronRight className="ml-1 group-hover:translate-x-0.5 duration-200 transition-transform" />
            </>
          </Link>
        </Button>
        <Button asChild variant="ghost" className="text-md">
          <Link href={"documentation"}>Learn more</Link>
        </Button>
      </div>
    </main>
  );
}
