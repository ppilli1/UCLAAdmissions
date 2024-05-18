"use client"
import React, { useEffect, useState } from "react";
import Image from "next/image";

export default function VideoCarousel() {
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    let int = setInterval(() => {
      setPage((prev) => (prev + 1) >= 6 ? 1 : prev + 1);
    }, 5000);

    return () => clearInterval(int);
  }, []);

  const handlePrevPage = () => {
    setPage((prev) => (prev - 1) <= 0 ? 5 : prev - 1);
  };

  const handleNextPage = () => {
    setPage((prev) => (prev + 1) >= 6 ? 1 : prev + 1);
  };

  return (
    <main className="relative flex h-[calc(100vh-70px)] flex-col justify-center items-center">
      <div className="relative w-150 h-150">
        <Image
          width={25} // Adjust width here
          height={25} // Adjust height here
          layout="responsive"
          alt={`Image ${page}`}
          src={`/images/testerImages/wm${page}.jpg`}
        />

        <div className="absolute bottom-8 left-10 py-3 px-6 bg-[#0000007c] rounded-lg">
          <h2 className="text-4xl">Beautiful landscape {page}</h2>
          <p className="text-2xl mt-4 text-purple-200">The magic of nature!</p>
        </div>
      </div>

      {/* Left arrow */}
      <div
        onClick={handlePrevPage}
        className="z-10 fixed bottom-1/2 left-4 text-2xl font-semibold cursor-pointer hover:text-violet-500"
      >
        <span className="inline-block transition-transform hover:-translate-x-1 motion-reduce:transform-none">
          &lt;-
        </span>
      </div>

      {/* Right arrow */}
      <div
        onClick={handleNextPage}
        className="z-10 fixed bottom-1/2 right-4 text-2xl font-semibold cursor-pointer hover:text-violet-500"
      >
        <span className="inline-block transition-transform hover:translate-x-1 motion-reduce:transform-none">
          -&gt;
        </span>
      </div>
    </main>
  );
}
