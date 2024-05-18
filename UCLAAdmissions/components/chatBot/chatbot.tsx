// ChatbotComponent.tsx
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

interface ChatMessage extends MessageModel {
  message: string;
  sentTime: string;
  sender: string;
  role?: string;
  content?: string;
}

const ChatbotComponent: FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      message: "Hello, I'm your medical assistant! Ask me anything!",
      sentTime: "just now",
      sender: "ChatGPT",
      direction: 'incoming',
      position: 'single',
      role: 'system',
      content: 'Introduction',
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
      role: 'user',
      content: message,
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
            // ... (your existing parameters)
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
      // ... (your existing payload)
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    await fetch('https://hoyatest1ruadmit.openai.azure.com/openai/deployments/openairuadmit/extensions/chat/completions?api-version=2023-07-01-preview', {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    })
    .then(response => response.json()) 
    .then((data) => {
        setMessages([
          ...chatMessages,
          {
            message: data.choices[0].messages[1].content,
            sender: 'ChatGPT',
            sentTime: 'now',
            direction: 'incoming',
            position: 'single',
            role: 'assistant',
            content: data.choices[0].messages[1].content,
          },
        ]);
        setIsTyping(false);
      });
  }

  return (
    <div className="ChatbotComponent">
      <div
        style={{
          display: 'block',
          position: 'absolute',
          margin: 'auto',
          height: '500px',
          width: '500px',
          top: "0px",
          left: "355px",
          bottom: "250px"
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
              {messages.map((message, i) => (
                <Message style={{ fontFamily: 'bold' }} key={i} model={message} />
              ))}
            </MessageList>
            <MessageInput placeholder="Type message here" onSend={handleSend} />
          </ChatContainer>
        </MainContainer>
      </div>
    </div>
  );
};

export default ChatbotComponent;
