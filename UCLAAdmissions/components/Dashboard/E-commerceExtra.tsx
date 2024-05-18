"use client"
import React from "react";
import { AreaChart, SimpleBar } from "@/components/Charts";
import ChatCard from "../Chat/ChatCard";
import TableOne from "../Tables/TableOne";
import dynamic from "next/dynamic";
import DataCard from "../Cards/DataCard";
import SimpleBar2 from "../Charts/bar/SimpleBar2";
import SimpleBar3 from "../Charts/bar/SimpleBar3";
import MapOne from "../Maps/MapOne";
import TableTwo from "../Tables/TableTwo";
import TableThree from "../Tables/TableThree";
import TableFour from "../Tables/TableFour";
import Link from "next/link";

const ECommerce: React.FC = () => {
  return (
    <>
      <div className="bg-red-500 text font-bold p-4 inline-block">
        My Rutgers Admissions Dashboard
      </div>

      <div className="space-y-5 py-5">
        <AreaChart />
        <SimpleBar/>
        <div className="flex space-x-4">
          <div className="flex-1">
            <SimpleBar2 />
          </div>
          <div className="flex-1">
            <SimpleBar3 />
          </div>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        {/*<MapOne />*/}
        <div className="col-span-12 xl:col-span-8">
          <TableOne />
        </div>
        <TableFour/>
        {/*<ChatCard />*/}
      </div>

      <div className="col-span-12 xl:col-span-8 relative mt-4">
        {/* Place the button outside the grid but still under TableOne */}
        <Link
          href="#"
          className="absolute top-0 left-35 inline-flex items-center justify-center rounded-full border border-black px-10 py-4 text-center font-medium text-black hover:bg-opacity-90 lg:px-8 xl:px-10">
          Have An Admissions Officer Rate Your Application
        </Link>
      </div>

      <div className = "mt-25">
        {/* Add some additional space at the bottom */}
      </div>
    </>
  );
};

export default ECommerce;
