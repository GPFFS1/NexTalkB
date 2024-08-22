import Image from "next/image";
import Link from "next/link";
import React from "react";

const HomePage = () => {
  return (
    <main className="bg-[url('/images/nasa.png')] h-screen flex justify-center items-center">
      <div className="flex flex-row">
        <div className="h-[750px] w-[350px] flex items-center flex-col justify-around bg-white/5 rounded-tl-[15px] rounded-bl-[15px] border border-white/50 backdrop-blur-[15px]">
          <h1 className="text-[40px] font-bold tracking-widest flex">
            Sign In
          </h1>
          <Image
            alt=""
            src={"/images/illustration.png"}
            className="w-[308px] h-[260px]"
            width={308}
            height={260}
          />
          <div className="flex flex-col gap-8 items-center">
            <Link
              href="/signup"
              className="text-white text-xl font-normal tracking-wide "
            >
              Don't have an account?
            </Link>
            <button className="border rounded-3xl w-[122px] h-[50px]">
              Sign Up
            </button>
          </div>
        </div>
        <div className="h-[750px] w-[600px] flex flex-col items-center justify-around bg-white/5 rounded-tr-[15px] rounded-br-[15px] border border-white/50 backdrop-blur-[15px]">
          <h1 className="text-[40px] font-bold tracking-widest">Log in here</h1>
          <div className="flex flex-col">
            <label
              htmlFor="emailorusername"
              className="text-white/75 text-xs font-normal tracking-wide"
            >
              Username or Email Address*
            </label>
            <input
              type="emailorusername"
              name="emailorusername"
              id="emailorusername"
              className="w-[299px] h-[50px] border border-white/50 rounded-lg bg-transparent"
            />
            <label
              htmlFor="password"
              className="text-white/75 text-xs font-normal tracking-wide mt-5"
            >
              Password*
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="w-[299px] h-[50px] border border-white/50 rounded-lg bg-transparent"
            />
          </div>
          <button className="border rounded-3xl w-[299px] h-[50px] bg-white text-black text-xl font-normal tracking-wide">Log In</button>
          <button>

          </button>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
