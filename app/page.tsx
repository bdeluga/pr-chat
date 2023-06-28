import { faAngleRight, faComments } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function Home() {
  return (
    <main className="text-white flex flex-col justify-center items-center h-screen bg-[url('/pattern.png')] bg-no-repeat bg-cover">
      <div className="max-w-md px-4 sm:max-w-2xl sm:px-6 md:max-w-3xl lg:max-w-4xl lg:px-0 xl:max-w-5xl 2xl:max-w-6xl">
        <h1 className="text-center text-4xl font-bold tracking-tight text-white sm:text-6xl sm:tracking-tight lg:text-[4rem] xl:text-[6rem] xl:tracking-tight 2xl:text-[6.5rem]">
          Ultimate hub for{" "}
          <span className="underline underline-offset-8 whitespace-nowrap text-[#5BC0BE]">
            live discussions
          </span>{" "}
          on GitHub pull requests.
        </h1>
      </div>
      <div className="mt-12 gap-8 flex font-bold antialiased">
        <Link
          href={"sign-in"}
          className="bg-[#0B132B] px-4 py-3 rounded-full group inline-flex gap-2 items-center"
        >
          <>
            Get started{" "}
            <FontAwesomeIcon
              className="group-hover:translate-x-0.5 duration-200 transition-transform"
              icon={faAngleRight}
            />
          </>
        </Link>
        <Link
          href={"learn"}
          className="px-4 py-3 transition-colors duration-300 rounded-full bg-white/20 hover:bg-white/30"
        >
          Learn more
        </Link>
      </div>
    </main>
  );
}
