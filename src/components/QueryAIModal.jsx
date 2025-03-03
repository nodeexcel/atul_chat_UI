"use client"; // Needed for Next.js App Router

import { useEffect, useState, useRef } from "react";
import { fetchResponse } from "@/apis/api";
import { Send, X, Maximize, Minimize } from "lucide-react";

const QueryModal = ({ isOpen, setIsOpen, generateResponse }) => {
  const [query, setQuery] = useState("");
  const [messages, setMessages] = useState([]);
  const [isFullScreen, setIsFullScreen] = useState(false);

  const messagesEndRef = useRef(null); // Ref for auto-scrolling

  // Auto-scroll to bottom when messages update
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // When modal opens, show the initial response
  useEffect(() => {
    if (isOpen && generateResponse) {
      setMessages([{ text: generateResponse, sender: "bot" }]);
    }
  }, [isOpen, generateResponse]);

  const handleSend = async () => {
    if (!query.trim()) return;

    // Add user message to chat
    const newMessages = [...messages, { text: query, sender: "user" }];
    setMessages(newMessages);
    setQuery("");

    // Fetch API response
    const result = await fetchResponse(query);
    setMessages([...newMessages, { text: result.response || result.error, sender: "bot" }]);
  };

  // Handle Enter key press
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
      style={{ zIndex: 10000 }}
    >
      {/* Header */}
      <div className="flex justify-between items-center p-4 border-b border-gray-600">
        <h2 className="text-lg font-semibold">Asking about Data Privacy</h2>
        <div className="flex space-x-3">
          {/* Full-Screen Toggle Button */}
          <button
            onClick={() => setIsFullScreen(!isFullScreen)}
            className="text-gray-400 hover:text-white"
          >
            {isFullScreen ? <Minimize size={20} /> : <Maximize size={20} />}
          </button>

          {/* Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-400 hover:text-white"
          >
            <X size={24} />
          </button>
        </div>
      </div>

      {/* Chat Window */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.length === 0 ? (
          <p className="text-gray-400 text-center">Start a conversation...</p>
        ) : (
          messages.map((msg, index) => (
            <div
              key={index}
              className={`p-3 rounded-lg max-w-lg ${isFullScreen ? "max-w-lg" : "max-w-xs"
                } ${msg.sender === "user" ? "bg-blue-600 ml-auto" : "bg-gray-700"
                }`}
            >
              {msg.text}
            </div>
          ))
        )}
        {/* Empty div for auto-scroll */}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Box */}
      <div className="border-t border-gray-600 p-4 flex">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown} // Added Enter key event
          className="flex-1 p-2 rounded-lg bg-gray-800 text-white focus:outline-none"
          placeholder="Type your question..."
        />
        <button
          onClick={handleSend}
          className="ml-2 p-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition"
        >
          <Send size={20} />
        </button>
      </div>
    </div>
  );
};

export default QueryModal;
