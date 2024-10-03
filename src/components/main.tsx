import Image from "next/image";

export default function Main() {
  return (
    <div className="flex flex-col h-screen">
      <div className="relative w-full h-3/5 bg-cover bg-center">
        <Image src="https://1drv.ms/i/s!Ai8p48X6HRWGozOLKQTFxQYlPzpM?embed=1&height=1024" alt="Main" width={500} height={500} className="w-full h-full object-cover" />
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