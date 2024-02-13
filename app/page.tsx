"use client";

import { useEffect, useState } from "react";

function Digit({ d }: { d: string }) {
  let top = "";
  let bottom = "";

  switch (d) {
    case "0":
      top = "border-l-4 border-r-4 border-t-4";
      bottom = "border-l-4 border-r-4 border-b-4";
      break;
    case "1":
      top = "border-r-4";
      bottom = "border-r-4";
      break;
    case "2":
      top = "border-t-4 border-r-4 border-b-4";
      bottom = "border-l-4 border-b-4";
      break;
    case "3":
      top = "border-t-4 border-r-4 border-b-4";
      bottom = "border-r-4 border-b-4";
      break;
    case "4":
      top = "border-l-4 border-b-4 border-r-4";
      bottom = "border-r-4";
      break;
    case "5":
      top = "border-t-4 border-l-4 border-b-4";
      bottom = "border-r-4 border-b-4";
      break;
    case "6":
      top = "border-t-4 border-l-4";
      bottom = "border-t-4 border-l-4 border-b-4 border-r-4";
      break;
    case "7":
      top = "border-t-4 border-r-4";
      bottom = "border-r-4";
      break;
    case "8":
      top = "border-t-4 border-l-4 border-b-4 border-r-4";
      bottom = "border-l-4 border-b-4 border-r-4";
      break;
    case "9":
      top = "border-t-4 border-l-4 border-b-4 border-r-4";
      bottom = "border-r-4";
      break;
  }

  return (
    <div className="flex flex-col p-1">
      <div className={`border-sky-500 h-[40px] w-[40px] ${top}`}></div>
      <div className={`border-sky-500 h-[40px] w-[40px] ${bottom}`}></div>
    </div>
  );
}

export default function Home() {
  const [time, setTime] = useState({
    hour: "0",
    minutes: "0",
    seconds: "0",
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      setTime({
        hour: date.getHours().toString().padStart(2, "0"),
        minutes: date.getMinutes().toString().padStart(2, "0"),
        seconds: date.getSeconds().toString().padStart(2, "0"),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center text-3xl bg-zinc-700 w-full min-h-screen text-white">
      {time.hour.split("").map((digit, index) => (
        <Digit key={index} d={digit} />
      ))}{" "}
      :{" "}
      {time.minutes.split("").map((digit, index) => (
        <Digit key={index} d={digit} />
      ))}{" "}
      :{" "}
      {time.seconds.split("").map((digit, index) => (
        <Digit key={index} d={digit} />
      ))}{" "}
    </div>
  );
}
