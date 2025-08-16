"use client";

import React, { useState } from "react";

export default function App() {
  const [input, setInput] = useState("");
  const [popup, setPopup] = useState<string | null>(null);
  const [fullscreen, setFullscreen] = useState(false);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() !== "") {
      setPopup(`command "${input}" not found. Access Denied.`);
      setInput("");
    }
  };

  return (
    <div className="w-screen h-screen bg-black text-green-400 font-mono flex flex-col border-8 border-green-600">
      {/* Top Info Bar */}
      <div className="p-4 border-b border-green-700">
        <h1 className="text-2xl font-bold tracking-wider animate-pulse">
          [ SRISTI TERMINAL v3.1 ]
        </h1>
        <p className="text-sm opacity-80">Secure Shell Environment - User: <span className="text-green-300">neo@matrix</span></p>
      </div>

      {/* Terminal Body */}
      <div className="flex-1 p-6 overflow-hidden">
        <p>Welcome to <span className="text-green-300">SRISITI OS</span>. All activity is monitored.</p>
        <p className="mt-2">Type your command below:</p>

        {/* Input form */}
        <form onSubmit={handleCommand} className="mt-4 flex items-center gap-2">
          <span className="text-green-300">neo@matrix:~$</span>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="bg-transparent outline-none text-green-400 flex-1"
            autoFocus
          />
        </form>
      </div>

      {/* Error Popup */}
      {popup && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-90">
          <div
            className={`${
              fullscreen
                ? "w-full h-full flex flex-col items-center justify-center"
                : "border border-green-500 px-8 py-6"
            } bg-black text-green-400 font-mono shadow-[0_0_25px_rgba(0,255,0,0.8)] animate-pulse`}
          >
            <h2 className="text-lg mb-2 tracking-widest">[ SYSTEM ERROR ]</h2>
            <p className="mb-4">{popup}</p>

            <div className="flex gap-4">
              <button
                onClick={() => setPopup(null)}
                className="px-6 py-1 border border-green-500 hover:bg-green-500 hover:text-black transition-all duration-300"
              >
                OK
              </button>
              <button
                onClick={() => setFullscreen(!fullscreen)}
                className="px-6 py-1 border border-green-500 hover:bg-green-500 hover:text-black transition-all duration-300"
              >
                {/* {fullscreen ? "EXIT FULLSCREEN" : "FULLSCREEN"} */}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
