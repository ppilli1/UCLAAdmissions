"use client"
import React, { useState, FC } from 'react';
import Link from 'next/link';
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

const YourComponent: React.FC = () => {
  const API_KEY = "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";

  interface ChatMessage extends MessageModel {
    message: string;
    sentTime: string;
    sender: string;
    role?: string; // Update: Make 'role' optional
    content?: string; // Update: Make 'content' optional
  }

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      //message: "Hello, I'm your medical assistant! Ask me anything!",
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

    await fetch('https://hoyatest1ruadmit.openai.azure.com/openai/deployments/openairuadmit/extensions/chat/completions?api-version=2023-07-01-preview', {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    })
      .then(response => response.json())
      .then((data) => {
        const responseContent = data.choices[0].messages[1].content;
        const truncatedResponse = responseContent.slice(0, -6); // Remove the last 6 characters

      setMessages([
        ...chatMessages,
        {
          message: truncatedResponse,
          sender: 'ChatGPT',
          sentTime: 'now',
          direction: 'incoming',
          position: 'single',
          role: 'assistant',
          content: truncatedResponse,
        },
      ]);
      setIsTyping(false);
    });
  }
  return (
    <div className="flex items-center justify-center h-screen" style={{ marginTop: '-100px', marginLeft: "-450px" }}>
      <div className="relative">
        {/* Corner buttons */}
        <div className="absolute top-0 left-0">
          <Link
            href="/majorScreens/Accounting"
            className="inline-flex items-center justify-center rounded-full border border-black px-10 py-4 text-center font-medium text-black hover:bg-opacity-90 lg:px-8 xl:px-10 absolute top-0 left-0">
            Accounting
          </Link>
        </div>
        <div className="absolute top-0 right-0">
          <Link
            href="/majorScreens/AerospaceEngineering"
            className="inline-flex items-center justify-center rounded-full border border-black px-10 py-4 text-center font-medium text-black hover:bg-opacity-90 lg:px-8 xl:px-10 absolute top-0 right-0">
            Aerospace Eng.
          </Link>
        </div>
        <div className="absolute bottom-0 left-0">
          <Link
            href="/majorScreens/BAIT"
            className="inline-flex items-center justify-center rounded-full border border-black px-10 py-4 text-center font-medium text-black hover:bg-opacity-90 lg:px-8 xl:px-10 absolute bottom-0 left-0">
            BAIT
          </Link>
        </div>
        <div className="absolute bottom-0 right-0">
          <Link
            href="/majorScreens/Biochemistry"
            className="inline-flex items-center justify-center rounded-full border border-black px-10 py-4 text-center font-medium text-black hover:bg-opacity-90 lg:px-8 xl:px-10 absolute bottom-0 right-0">
            Biochemistry
          </Link>
        </div>
        <div>
          <Link
            href="/majorScreens/Biology"
            className="inline-flex items-center justify-center rounded-full border border-black px-10 py-4 text-center font-medium text-black hover:bg-opacity-90 lg:px-8 xL;px-10 absolute top-21 right-0">
            Biology
          </Link>
        </div>
        <div>
          <Link
            href="/majorScreens/Biomathematics"
            className="inline-flex items-center justify-center rounded-full border border-black px-10 py-4 text-center font-medium text-black hover:bg-opacity-90 lg:px-8 xL;px-10 absolute top-5 right-50">
            Biomathematics
          </Link>
        </div>
        <div>
          <Link
            href="/majorScreens/BiomedicalEngineering"
            className="inline-flex items-center justify-center rounded-full border border-black px-10 py-4 text-center font-medium text-black hover:bg-opacity-90 lg:px-8 xL;px-10 absolute top-36 right-0">
            Biomedical Eng.
          </Link>
        </div>
        <div>
          <Link
            href="/majorScreens/Chemistry"
            className="inline-flex items-center justify-center rounded-full border border-black px-10 py-4 text-center font-medium text-black hover:bg-opacity-90 lg:px-8 xL;px-10 absolute bottom-30 right-10">
            Chemistry
          </Link>
        </div>
        <div>
          <Link
            href="/majorScreens/CivilEngineering"
            className="inline-flex items-center justify-center rounded-full border border-black px-10 py-4 text-center font-medium text-black hover:bg-opacity-90 lg:px-8 xL;px-10 absolute bottom-30 left-20">
            Civil Eng.
          </Link>
        </div>
        <div>
          <Link
            href="/majorScreens/CognitiveScience"
            className="inline-flex items-center justify-center rounded-full border border-black px-10 py-4 text-center font-medium text-black hover:bg-opacity-90 lg:px-8 xL;px-10 absolute bottom-32 right-50">
            Cognitive Science
          </Link>
        </div>
        <div>
          <Link
            href="/majorScreens/ComputerEngineering"
            className="inline-flex items-center justify-center rounded-full border border-black px-10 py-4 text-center font-medium text-black hover:bg-opacity-90 lg:px-8 xL;px-10 absolute bottom-10 right-40">
            Computer Eng.
          </Link>
        </div>
        <div>
          <Link
            href="/majorScreens/ComputerScience"
            className="inline-flex items-center justify-center rounded-full border border-black px-10 py-4 text-center font-medium text-black hover:bg-opacity-90 lg:px-8 xL;px-10 absolute top-20 right-31">
            Computer Science
          </Link>
        </div>
        <div>
          <Link
            href="/majorScreens/ElectricalEngineering"
            className="inline-flex items-center justify-center rounded-full border border-black px-10 py-4 text-center font-medium text-black hover:bg-opacity-90 lg:px-8 xL;px-10 absolute top-20 left-40">
            Electrical Eng.
          </Link>
        </div>
        <div>
          <Link
            href="/majorScreens/Finance"
            className="inline-flex items-center justify-center rounded-full border border-black px-10 py-4 text-center font-medium text-black hover:bg-opacity-90 lg:px-8 xL;px-10 absolute top-20 left-5">
            Finance
          </Link>
        </div>
        <div>
          <Link
            href="/majorScreens/History"
            className="inline-flex items-center justify-center rounded-full border border-black px-10 py-4 text-center font-medium text-black hover:bg-opacity-90 lg:px-8 xL;px-10 absolute top-40 left-5">
            History
          </Link>
        </div>
        <div>
          <Link
            href="/majorScreens/Marketing"
            className="inline-flex items-center justify-center rounded-full border border-black px-10 py-4 text-center font-medium text-black hover:bg-opacity-90 lg:px-8 xL;px-10 absolute bottom-10 left-35">
            Marketing
          </Link>
        </div>
        <div>
          <Link
            href="/majorScreens/Mathematics"
            className="inline-flex items-center justify-center rounded-full border border-black px-10 py-4 text-center font-medium text-black hover:bg-opacity-90 lg:px-8 xL;px-10 absolute top-0 left-44">
            Mathematics
          </Link>
        </div>
        <div>
          <Link
            href="/majorScreens/MechanicalEngineering"
            className="inline-flex items-center justify-center rounded-full border border-black px-10 py-4 text-center font-medium text-black hover:bg-opacity-90 lg:px-8 xL;px-10 absolute bottom-25 left-46">
            Mechanical Eng.
          </Link>
        </div>
        <div>
          <Link
            href="/majorScreens/Physics"
            className="inline-flex items-center justify-center rounded-full border border-black px-10 py-4 text-center font-medium text-black hover:bg-opacity-90 lg:px-8 xL;px-10 absolute bottom-15 left-0">
            Physics
          </Link>
        </div>
        <div>
          <Link
            href="/majorScreens/SupplyChainManagement"
            className="inline-flex items-center justify-center rounded-full border border-black px-10 py-4 text-center font-medium text-black hover:bg-opacity-90 lg:px-8 xL;px-10 absolute top-20 right-70">
            Supply Chain
          </Link>
        </div>

        {/* Repeat the above div block for each additional button, adjusting the class and content accordingly */}
        {/* ... */}

        {/* Chatbot Container */}
        <div className="absolute top-0 right-0" style={{ display: 'block',
          position: 'absolute',
          margin: 'auto',
          height: '500px',
          width: '500px',
          top: "0px",
          left: "355px",
          bottom: "250px"  }}>
          <MainContainer style={{ borderRadius: 23, borderWidth: 5 }}>
            <ChatContainer>
              <MessageList
                scrollBehavior="smooth"
                typingIndicator={
                  isTyping ? <TypingIndicator content="Assistant is typing" /> : null
                }
              >
                {messages.map((message, i) => (
                  <Message style={{ fontFamily: 'bold' }} key={i} model={message} />
                ))}
              </MessageList>
              <MessageInput placeholder="Type message here" onSend={handleSend} />
            </ChatContainer>
          </MainContainer>
        </div>

      </div>
    </div>
  );
};

export default YourComponent;
