"use client";
import { useState } from "react";

export default function Main() {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <div className="flex flex-col h-screen">
      <div className="relative w-full h-3/5 bg-cover bg-center">
        {isLoading && (
          <div className="w-full h-full animate-pulse">
            <div className="flex items-center justify-center w-full h-full bg-slate-200 sm:w-96">
              <svg className="w-10 h-10 text-slate-100" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"/>
              </svg>
            </div>
          </div>
        )}
        <img
          src="/image/main.jpg"
          alt="Main"
          className={`w-full h-full object-cover ${isLoading ? 'hidden' : 'block'}`}
          onLoad={() => setIsLoading(false)}
        />
      </div>
      <div className="flex flex-col justify-center items-center h-2/5 bg-white">
        <br />
        <div className="flex items-center space-x-4">
          <div className="flex flex-col items-center space-y-1">
            <span className="text-pink-400 text-sm">GROOM</span>
            <span className="text-2xl">수&nbsp;&nbsp;민</span>
          </div>
          <div className="font-light text-pink-200 text-xl mx-8 px-4">
            |
          </div>
          <div className="flex flex-col items-center space-y-1">
            <span className="text-pink-400 text-sm">BRIDE</span>
            <span className="text-2xl">현&nbsp;&nbsp;희</span>
          </div>
        </div>
        <br />
        <p className="text-gray-600">2024년 12월 21일 토요일 오후 2시</p>
        <p className="text-gray-600">더휴웨딩홀 2층 단독홀</p>
      </div>
    </div>
  );
}