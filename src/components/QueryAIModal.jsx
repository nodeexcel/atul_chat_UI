"use client"; // Needed for Next.js App Router

import { useEffect, useState, useRef } from "react";
import { Send, X, Maximize, Minimize } from "lucide-react";

const SOCKET_SERVER_URL = "wss://wavexai.io/api/suggest-business"; // Flask WebSocket server

let socket;

const QueryModal = ({ isOpen, setIsOpen, generateResponse }) => {
  const [query, setQuery] = useState("");
  const [messages, setMessages] = useState([]);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  useEffect(() => {
    // Connect to WebSocket server
    socket = new WebSocket(SOCKET_SERVER_URL);

    socket.onopen = () => {
      console.log("WebSocket connected");
    };

    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data.data) {
        setIsTyping(false);

        setMessages((prev) => {
          let newMessages = [...prev];

          if (
            newMessages.length > 0 &&
            newMessages[newMessages.length - 1].sender === "bot" &&
            newMessages[newMessages.length - 1].isStreaming
          ) {
            //  Only add new characters, avoiding duplicate words
            const lastMessage = newMessages[newMessages.length - 1];

            if (!lastMessage.text.endsWith(data.data)) {
              lastMessage.text += data.data;
            }
          } else {
            newMessages.push({ text: data.data, sender: "bot", isStreaming: true });
          }

          return [...newMessages];
        });
      }

      if (data.done) {
        setMessages((prev) => {
          let newMessages = [...prev];
          if (newMessages.length > 0) {
            newMessages[newMessages.length - 1].isStreaming = false;
          }
          return newMessages;
        });
      }
    };



    socket.onerror = (error) => {
      console.log("WebSocket Error:", error);
    };

    socket.onclose = () => {
      console.log("WebSocket disconnected");
    };

    return () => {
      socket.close();
    };
  }, []);

  // useEffect(() => {
  //   messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  // }, [messages, isTyping]);

  useEffect(() => {
    if (isOpen && generateResponse) {
      setMessages([{ text: generateResponse, sender: "bot", isStreaming: false }]);
    }
  }, [isOpen, generateResponse]);

  const handleSend = () => {
    if (!query.trim()) return;

    setMessages([...messages, { text: query, sender: "user" }]);
    setIsTyping(true);

    socket.send(JSON.stringify({ query }));

    setQuery("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSend();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className={`fixed top-0 right-5 ${isFullScreen ? "w-full h-full inset-0" : "w-[500px] h-[80vh]"
        } bg-[#1E1E2E] rounded-lg shadow-lg text-white flex flex-col transition-all duration-300`}
      style={{ zIndex: 10000000 }}
    >
      <div className="flex justify-between items-center p-4 border-b border-gray-600">
        <h2 className="text-lg font-semibold">Asking about Data Privacy</h2>
        <div className="flex space-x-3">
          <button onClick={() => setIsFullScreen(!isFullScreen)} className="text-gray-400 hover:text-white">
            {isFullScreen ? <Minimize size={20} /> : <Maximize size={20} />}
          </button>
          <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white">
            <X size={24} />
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.length === 0 ? (
          <p className="text-gray-400 text-center">Start a conversation...</p>
        ) : (
          messages.map((msg, index) => (
            <div
              key={index}
              className={`p-3 rounded-lg max-w-lg ${isFullScreen ? "max-w-lg" : "max-w-xs"} ${msg.sender === "user" ? "bg-blue-600 ml-auto" : "bg-[gray-700]"}`}
              style={{
                background: `${msg.sender === "user" ? "rgba(153, 153, 153, 0.2)" : "rgba(150, 46, 185, 0.2)"}`
              }}
            >
              {msg.text}
            </div>
          ))
        )}

        {isTyping && (
          <div className="flex items-center space-x-1 animate-bounce">
            <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
            <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
            <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      <div className="border-t border-gray-600 p-4 flex">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-1 p-2 rounded-lg bg-gray-800 text-white focus:outline-none"
          placeholder="Type your question..."
        />
        <button onClick={handleSend} className="ml-2 p-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition">
          <Send size={20} />
        </button>
      </div>
    </div>
  );
};

export default QueryModal;
