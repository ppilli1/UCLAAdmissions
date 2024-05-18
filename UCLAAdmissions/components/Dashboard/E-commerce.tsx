// ECommerce.tsx
"use client"
import React, { useState } from "react";
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
  const [showTextBox, setShowTextBox] = useState(false);

  const handleTextBoxClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    setShowTextBox(!showTextBox);
  };

  return (
    <>
      <div className="bg-blue-400 rounded-lg text font-bold p-4 inline-block">
        My UCLA Admissions Dashboard
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
        <div className="col-span-12 xl:col-span-4">
          <TableFour/>
        </div>
        {/*<ChatCard />*/}
      </div>

      <div className="col-span-12 xl:col-span-8 relative mt-4">
        {/* Place the button outside the grid but still under TableOne */}
        <Link
          href="#"
          onClick={handleTextBoxClick}
          className="absolute top-0 left-0 inline-flex items-center justify-center rounded-full border border-blue-400 px-10 py-4 text-center font-medium text-black-2 hover:bg-opacity-90 lg:px-8 xl:px-10"
        >
          Have An Admissions Officer Rate Your Application
        </Link>

        {showTextBox && (
          <div
            className="absolute top-20 left-0 right-0 bg-white p-4 border-2 border-blue-400 rounded-lg px-10 py-10"
            style={{ maxHeight: "200px", overflowY: "auto" }}
          >
            {/* AI Prompt Response Textbox */}
            {/* You can replace this with the actual content from your AI prompt response */}
            <p>
              With your 3.55 GPA, you are indeed well above average at your school. However, UCLA typically expects incoming Computer Science students to have around a 3.75. Your stellar AP Exam Scores, all accepted at UCLA since they recognize scores of 3 and higher, are commendable. Although your SAT score is relatively low, your ACT score of 34 is highly impressive. Your extracurricular activities are robust, notably your role as President of FBLA, and your awards are significant, including your 1st Place finish at the American Math Olympiad and FBLA National Finalist achievement. Overall, I would rate your application an 8 out of 10, with 2 points deducted mainly due to your slightly lower GPA. If you have the opportunity to improve your GPA before submitting your application, I highly recommend doing so. Best of luck!
            </p>
          </div>
        )}
      </div>

      <div className="mt-10" style={{ minHeight: "20rem" }}>
        {/* Add some additional space at the bottom */}
      </div>
    </>
  );
};

export default ECommerce;
