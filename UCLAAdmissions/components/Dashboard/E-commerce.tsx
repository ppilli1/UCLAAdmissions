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
  const [lol, lolSetlol] = useState<string>()
  const handleTextBoxClick = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    setShowTextBox(!showTextBox);
    e.preventDefault()

    var myHeaders = new Headers();
    myHeaders.append("api-key", "8100599adae04020964e7c0025843ae4");
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      "dataSources": [
        {
          "type": "AzureCognitiveSearch",
          "parameters": {
            "endpoint": "https://cogsearchruadmit.search.windows.net",
            "indexName": "appkitruadmitindex",
            "semanticConfiguration": "default",
            "queryType": "vector",
            "fieldsMapping": {},
            "inScope": true,
            "roleInformation": "You are an AI assistant that helps people find information from the files provided to you and you will give a short answer around 2 sentences.",
            "filter": null,
            "strictness": 3,
            "topNDocuments": 5,
            "key": "vAwq7ZRtGSaJbScSog113iuKbDDKR6m7HRW5ggOjWIAzSeDxx0aD",
            "embeddingDeploymentName": "embedruadmit"
          }
        }
      ],
      "messages": [
        {
          "role": "system",
          "content": "You are an AI assistant that helps people find information from the files provided to you and you will give a short answer around 2 sentences. You need to give the student constructive criticism and tell him with to do better to make his/her application better!"
        },
        {
          "role": "user",
          "content": "A senior in Highschool who embodies excellence both in academics and extracurriculars. This individual is a distinguished Math Olympiad, showcasing remarkable mathematical abilities, and has earned prestigious recognition at the Future Business Leaders of America (FBLA) competition, demonstrating strong business acumen.In addition to academic achievements, this student is an integral part of the school's football team, contributing as a key player and embodying qualities of leadership, teamwork, and discipline on the field. Alongside sports, they actively participate in debate clubs, showcasing exceptional critical thinking skills and a passion for public speaking Facing the challenges of standardized testing, Ïhis senior took the SAT twice, achieving a superscore of 1400, reflecting determination and commitment to personal improvement."
        }
      ],
      "deployment": "openairuadmit",
      "temperature": 0,
      "top_p": 1,
      "max_tokens": 800,
      "stop": null,
      "stream": false
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    await fetch('https://hoyatest1ruadmit.openai.azure.com/openai/deployments/openairuadmit/extensions/chat/completions?api-version=2023-07-01-preview', {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    })
    .then(response => response.json()) 
    .then((data) => {
        lolSetlol(data.choices[0].messages[1].content)
        
      });
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
        <div className = "col-span-12 xl:col-span-4">
          <TableFour/>
        </div>
        {/*<ChatCard />*/}
      </div>

      <div className="col-span-12 xl:col-span-8 relative mt-4">
        {/* Place the button outside the grid but still under TableOne */}
        <Link
          href="#"
          onClick={handleTextBoxClick}
          className="absolute top-0 left-95 inline-flex items-center justify-center rounded-full border border-blue-400 px-10 py-4 text-center font-medium text-black-2 hover:bg-opacity-90 lg:px-8 xl:px-10">
          Have An Admissions Officer Rate Your Application
        </Link>

        {showTextBox && (
          <div
            className="absolute top-20 text-black-2 left-0 right-0 bg-white p-4 border-2 border-blue-400 rounded-lg px-10 py-10"
            style={{ maxHeight: "200px", overflowY: "auto" }}
          >
            {/* AI Prompt Response Textbox */}
            {/* You can replace this with the actual content from your AI prompt response */}
            <p>With your 3.55 GPA, you are indeed well above average at your school. However, UCLA typically expects incoming Computer Science students to have around a 3.75. Your stellar AP Exam Scores, all accepted at UCLA since they recognize scores of 3 and higher, are commendable. Although your SAT score is relatively low, your ACT score of 34 is highly impressive. Your extracurricular activities are robust, notably your role as President of FBLA, and your awards are significant, including your 1st Place finish at the American Math Olympiad and FBLA National Finalist achievement. Overall, I would rate your application an 8 out of 10, with 2 points deducted mainly due to your slightly lower GPA. If you have the opportunity to improve your GPA before submitting your application, I highly recommend doing so. Best of luck!</p>
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
