// YourComponent.tsx
"use client";
import Link from 'next/link';

const YourComponent: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="relative">
        {/* Corner buttons */}
        <div className="absolute top-0 left-0">
          <Link
            href="#"
            className="inline-flex items-center justify-center rounded-full border border-black px-10 py-4 text-center font-medium text-black hover:bg-opacity-90 lg:px-8 xl:px-10 absolute top-0 left-0">
            Accounting
          </Link>
        </div>
        <div className="absolute top-0 right-0">
          <Link
            href="#"
            className="inline-flex items-center justify-center rounded-full border border-black px-10 py-4 text-center font-medium text-black hover:bg-opacity-90 lg:px-8 xl:px-10 absolute top-0 right-0">
            Aerospace Eng.
          </Link>
        </div>
        <div className="absolute bottom-0 left-0">
          <Link
            href="#"
            className="inline-flex items-center justify-center rounded-full border border-black px-10 py-4 text-center font-medium text-black hover:bg-opacity-90 lg:px-8 xl:px-10 absolute bottom-0 left-0">
            BAIT
          </Link>
        </div>
        <div className="absolute bottom-0 right-0">
          <Link
            href="#"
            className="inline-flex items-center justify-center rounded-full border border-black px-10 py-4 text-center font-medium text-black hover:bg-opacity-90 lg:px-8 xl:px-10 absolute bottom-0 right-0">
            Biochemistry
          </Link>
        </div>
        <div>
          <Link
            href="#"
            className="inline-flex items-center justify-center rounded-full border border-black px-10 py-4 text-center font-medium text-black hover:bg-opacity-90 lg:px-8 xL;px-10 absolute top-21 right-0">
            Biology
          </Link>
        </div>
        <div>
          <Link
            href="#"
            className="inline-flex items-center justify-center rounded-full border border-black px-10 py-4 text-center font-medium text-black hover:bg-opacity-90 lg:px-8 xL;px-10 absolute top-5 right-50">
            Biomathematics
          </Link>
        </div>
        <div>
          <Link
            href="#"
            className="inline-flex items-center justify-center rounded-full border border-black px-10 py-4 text-center font-medium text-black hover:bg-opacity-90 lg:px-8 xL;px-10 absolute top-36 right-0">
            Biomedical Eng.
          </Link>
        </div>
        <div>
          <Link
            href="#"
            className="inline-flex items-center justify-center rounded-full border border-black px-10 py-4 text-center font-medium text-black hover:bg-opacity-90 lg:px-8 xL;px-10 absolute bottom-30 right-10">
            Chemistry
          </Link>
        </div>
        <div>
          <Link
            href="#"
            className="inline-flex items-center justify-center rounded-full border border-black px-10 py-4 text-center font-medium text-black hover:bg-opacity-90 lg:px-8 xL;px-10 absolute bottom-30 left-20">
            Civil Eng.
          </Link>
        </div>
        <div>
          <Link
            href="#"
            className="inline-flex items-center justify-center rounded-full border border-black px-10 py-4 text-center font-medium text-black hover:bg-opacity-90 lg:px-8 xL;px-10 absolute bottom-32 right-50">
            Cognitive Science
          </Link>
        </div>
        <div>
          <Link
            href="#"
            className="inline-flex items-center justify-center rounded-full border border-black px-10 py-4 text-center font-medium text-black hover:bg-opacity-90 lg:px-8 xL;px-10 absolute bottom-10 right-40">
            Computer Eng.
          </Link>
        </div>
        <div>
          <Link
            href="#"
            className="inline-flex items-center justify-center rounded-full border border-black px-10 py-4 text-center font-medium text-black hover:bg-opacity-90 lg:px-8 xL;px-10 absolute top-20 right-31">
            Computer Science
          </Link>
        </div>
        <div>
          <Link
            href="#"
            className="inline-flex items-center justify-center rounded-full border border-black px-10 py-4 text-center font-medium text-black hover:bg-opacity-90 lg:px-8 xL;px-10 absolute top-20 left-40">
            Electrical Eng.
          </Link>
        </div>
        <div>
          <Link
            href="#"
            className="inline-flex items-center justify-center rounded-full border border-black px-10 py-4 text-center font-medium text-black hover:bg-opacity-90 lg:px-8 xL;px-10 absolute top-20 left-5">
            Finance
          </Link>
        </div>
        <div>
          <Link
            href="#"
            className="inline-flex items-center justify-center rounded-full border border-black px-10 py-4 text-center font-medium text-black hover:bg-opacity-90 lg:px-8 xL;px-10 absolute top-40 left-5">
            History
          </Link>
        </div>
        <div>
          <Link
            href="#"
            className="inline-flex items-center justify-center rounded-full border border-black px-10 py-4 text-center font-medium text-black hover:bg-opacity-90 lg:px-8 xL;px-10 absolute bottom-10 left-35">
            Marketing
          </Link>
        </div>
        <div>
          <Link
            href="#"
            className="inline-flex items-center justify-center rounded-full border border-black px-10 py-4 text-center font-medium text-black hover:bg-opacity-90 lg:px-8 xL;px-10 absolute top-0 left-44">
            Mathematics
          </Link>
        </div>
        <div>
          <Link
            href="#"
            className="inline-flex items-center justify-center rounded-full border border-black px-10 py-4 text-center font-medium text-black hover:bg-opacity-90 lg:px-8 xL;px-10 absolute bottom-25 left-46">
            Mechanical Eng.
          </Link>
        </div>
        <div>
          <Link
            href="#"
            className="inline-flex items-center justify-center rounded-full border border-black px-10 py-4 text-center font-medium text-black hover:bg-opacity-90 lg:px-8 xL;px-10 absolute bottom-15 left-0">
            Physics
          </Link>
        </div>
        <div>
          <Link
            href="#"
            className="inline-flex items-center justify-center rounded-full border border-black px-10 py-4 text-center font-medium text-black hover:bg-opacity-90 lg:px-8 xL;px-10 absolute top-20 right-70">
            Supply Chain
          </Link>
        </div>

        {/* Repeat the above div block for each additional button, adjusting the class and content accordingly */}
        {/* ... */}

      </div>
    </div>
  );
};

export default YourComponent;
