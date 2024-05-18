// Import necessary modules from React and Next.js
"use client";
import React, { useState, FC } from 'react';
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';

import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  TypingIndicator,
  MessageModel,
} from '@chatscope/chat-ui-kit-react';
const sdk = require("microsoft-cognitiveservices-speech-sdk");

const API_KEY = "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";

interface ChatMessage extends MessageModel {
  message: string;
  sentTime: string;
  sender: string;
  role?: string; // Update: Make 'role' optional
  content?: string; // Update: Make 'content' optional
}

const App: FC = () => {
  const [hh, setHH] = useState<string>();
  const [hhh, setHHH] = useState<string>();
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      message: "Hey there! I am your virtual Rutgers admissions bot, here for all your needs. What brings you here today?",
      sentTime: "just now",
      sender: "ChatGPT",
      direction: 'incoming',
      position: 'single',
      role: 'system', // Update: Set 'role' explicitly
      content: 'Introduction', // Update: Set 'content' explicitly
    },
  ]);

  const [isTyping, setIsTyping] = useState(false);

  const handleSend = async (message: string) => {
    const newMessage: ChatMessage = {
      message,
      sentTime: 'outgoing',
      sender: 'user',
      direction: 'outgoing',
      position: 'single',
      role: 'user', // Update: Set 'role' explicitly
      content: message, // Update: Set 'content' explicitly
    };

    const newMessages = [...messages, newMessage];
    setMessages(newMessages);

    setIsTyping(true);
    await processMessageToChatGPT(newMessages, newMessage.content);
  };

  async function processMessageToChatGPT(chatMessages: ChatMessage[], lol: any) {


    const subscriptionKey = "5197a1cd8be84db6a3b28779e64a0327";
    const serviceRegion = "eastus";
    const speech_config = sdk.SpeechConfig.fromSubscription(subscriptionKey, serviceRegion);
    const audio_config = sdk.AudioConfig.fromDefaultSpeakerOutput();
    const s_synth = new sdk.SpeechSynthesizer(speech_config, audio_config);


    let apiMessages = chatMessages.map((messageObject) => {
      return { role: messageObject.role, content: messageObject.content };
    });

    const apiRequestBody = {
      model: 'gpt-3.5-turbo',
      messages: [
        { role: 'system', content: 'Introduction' },
        ...apiMessages,
      ],
    };

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
          "content": "You are an AI assistant that helps people find information from the files provided to you and you will give a short answer around 2 sentences."
        },
        {
          "role": "user",
          "content": lol
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


    const prom = lol + "MAKE SURE YOU CHECK THE ANSWER TO THIS QUESTION IS FROM 2023 to 2024 AND RELEVANT TO RUTGERS! MOST IMPORTANTLY, MAKE SURE YOU START YOU RESPONSE WITH 'As of the 2023-2024 academic year'"
    var raw2 ={
      "req": prom,
    }
    var responseClone: Response;
    fetch('http://127.0.0.1:3000/predict', {
      method: "POST",
      // mode: 'no-cors',
      headers: { 
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(raw2),
      credentials: "include",

    }).then(function (response) {
      responseClone = response.clone(); // 2
      return response.json();
    }).then(function (data) {
      // setHHH(data.result);
      console.log(data.result);
    }, function (rejectionReason) { // 3
        console.log('Error parsing JSON from response:', rejectionReason, responseClone); // 4
        responseClone.text() // 5
        .then(function (bodyText: any) {
            console.log('Received the following instead of valid JSON:', bodyText);
            setHH(bodyText);
            const resp = s_synth.speakTextAsync(bodyText.toString());
            return resp;
        });
    });

    
  }

  return (
    <div className="App">
      <div
        style={{
          position: 'absolute',
          height: '600px',
          width: '500px',
          padding: 0,
          justifyContent: "center",
          alignSelf: 'center'
        }}
      >
        <MainContainer style={{ borderRadius: 23, borderWidth: 5 }}>
          <ChatContainer>
            <MessageList
              scrollBehavior="smooth"
              typingIndicator={
                isTyping ? <TypingIndicator content="Assistant is typing" /> : null
              }
            >
              {                messages.map((message, i) => (
                  <Message style={{ fontFamily: 'bold' }} key={i} model={message} />
                ))
              }
            </MessageList>
            <MessageInput placeholder="Type message here" onSend={handleSend} />
          </ChatContainer>
        </MainContainer>
      </div>
    </div>
  );
};

// Add more FAQ items as needed
const FAQPage: React.FC = () => {
  // Define the list of FAQ items with questions and answers
  const faqItems = [
    {
      question: 'When will I register for courses?',
      answer:
        'In your first semester, advisors will register you for your courses based on your course requests...',
    },
    {
      question: 'Can you double major across two different RU schools?',
      answer:
        'Students can double major across different schools within Rutgers-New Brunswick, depending on the program...',
    },
    {
      question: 'What kind of research do undergraduate students do?',
      answer:
        'The Aresty Research Center provides support for undergraduate research. The Center assists students in finding opportunities...',
    },
    {
      question:
        'I was admitted to SAS but would like to transfer to another school within Rutgers. What would be the process?',
      answer:
        'For students to apply for a school-to-school transfer, students need to complete prerequisite courses and meet the admissions criteria...',
    },
    // Add more FAQ items as needed
  ];

  // Create state variables to manage the active FAQ item
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // Function to handle the click on a FAQ item
  const handleItemClick = (index: number) => {
    // Toggle the activeIndex to show/hide the answer dropdown
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  // Function to render the FAQ items
  const renderFAQItems = () => {
    return faqItems.map((item, index) => (
      <div key={index} className="mb-4">
        {/* FAQ Question Button */}
        <button
          className="w-full bg-gray-300 py-2 px-4 text-left font-semibold"
          onClick={() => handleItemClick(index)}
        >
          {item.question}
        </button>

        {/* FAQ Answer Dropdown */}
        {activeIndex === index && (
          <div className="bg-gray-200 p-4">
            <p>{item.answer}</p>
          </div>
        )}
      </div>
    ));
  };

  return (
    <div className="flex">
      {/* Left half (Chatbot) */}
      <div className="w-1/2">
        <App />
      </div>

      {/* Right half (FAQ section) */}
      <div className="w-1/2 p-8">
        <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>

        {/* Render FAQ items */}
        {renderFAQItems()}
      </div>
    </div>
  );
};

export default FAQPage;

