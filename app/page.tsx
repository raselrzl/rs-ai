"use client";

import { useState, useRef, useEffect } from "react";
import { askQuestion } from "./actions";
import { CornerRightUp } from "lucide-react";
import { AutoResizeTextarea } from "./component/AutoResizeTextarea";
import getRoomSuggestions from "./component/UtilityFunction/RoomSuggestions";

export default function Home() {
  const [input, setInput] = useState("");
  const [chatHistory, setChatHistory] = useState<
    { question: string; answer: string }[]
  >([]);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [pendingQuestion, setPendingQuestion] = useState<string | null>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const handleAsk = async () => {
    if (!input.trim()) return;
    setLoading(true);
    setPendingQuestion(input);
    setInput("");

    const res = await askQuestion(input);

    setPendingQuestion(null);
    setChatHistory((prev) => [
      ...prev,
      { question: res.question, answer: res.answer },
    ]);
    setSuggestions(res.suggestions || []);
    setLoading(false);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setInput(suggestion);
    setTimeout(handleAsk, 0);
  };

  useEffect(() => {
    const roomSuggestions = getRoomSuggestions();
    setSuggestions(roomSuggestions);
  }, []);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [chatHistory, pendingQuestion]);

  return (
    <main className="p-4 sm:p-6 max-w-7xl w-full mx-auto flex justify-center flex-col items-center">
      <div className="flex flex-row min-w-full justify-between">
        <p className="text-2xl font-extrabold">Flyg-Chat</p>
        <p className="bg-gray-50 px-4 py-1 rounded-lg">Login</p>
      </div>

      <div className="mt-20 sm:mt-20 p-4 rounded-[10px] relative bg-white shadow-xl w-full max-w-5xl border border-gray-200">
        <div className="text-center">
          <h1 className="text-xl font-bold my-5">Ask whatever you want?</h1>
        </div>

        <div
          ref={chatContainerRef}
          className="max-h-[600px] overflow-y-auto pt-10 pb-4 pr-4 pl-4 sm:pr-12 sm:pl-2 relative"
        >
          {chatHistory.map((chat, index) => (
            <div key={index} className="mb-4 flex flex-col gap-2">
              <div className="flex justify-end">
                <div className="bg-blue-50 text-right text-black font-medium px-4 py-2 rounded-2xl max-w-[80%] sm:max-w-[75%]">
                  {chat.question}
                </div>
              </div>

              <div className="flex justify-start">
                <div className="bg-gray-100 text-black px-4 py-2 rounded-2xl max-w-[80%] sm:max-w-[75%]">
                  {chat.answer}
                </div>
              </div>
            </div>
          ))}

          {pendingQuestion && (
            <div className="mb-4 flex flex-col gap-2 opacity-70 italic select-none">
              <div className="flex justify-end">
                <div className="bg-blue-100 text-right text-black font-medium px-4 py-2 rounded-2xl max-w-[80%] sm:max-w-[75%]">
                  {pendingQuestion}
                </div>
              </div>
              <div className="flex justify-start">
                <div className="bg-gray-100 text-black px-4 py-2 rounded-2xl max-w-[80%] sm:max-w-[75%]">
                  <span>Loading answer...</span>
                </div>
              </div>
            </div>
          )}

          <div className="mt-6 flex flex-row items-end bg-gray-50 rounded-2xl">
            <AutoResizeTextarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onEnter={handleAsk}
              disabled={loading}
            />
            <button
              onClick={handleAsk}
              disabled={loading}
              className="bg-gray-200 text-black px-4 py-2 rounded-full disabled:opacity-50 hover:bg-gray-300 size-12"
            >
              {loading ? "Thinking..." : <CornerRightUp className="pr-1 mr-1" />}
            </button>
          </div>
        </div>
      </div>

      {/* Suggestions section */}
      <div className="mt-6 max-w-5xl w-full">
        <ul className="flex flex-wrap gap-2 min-h-[2.5rem]">
          {suggestions.map((q, i) => (
            <li key={i}>
              <button
                onClick={() => handleSuggestionClick(q)}
                className="bg-gray-200 hover:bg-gray-300 px-3 py-1 rounded"
                disabled={loading}
              >
                {q}
              </button>
            </li>
          ))}
        </ul>

        <div className="mt-4 text-center">
          <button
            onClick={() => setSuggestions(getRoomSuggestions())}
            className="bg-blue-100 text-black font-bold px-4 py-1 rounded hover:bg-blue-50"
            disabled={loading}
          >
            Refresh
          </button>
        </div>
      </div>
    </main>
  );
}
