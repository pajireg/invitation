import Image from "next/image";

export default function Main() {
  return (
    <div className="flex flex-col h-screen">
      <div className="relative w-full h-2/4 bg-cover bg-center">
        <Image src="/image/main.jpeg" alt="Main" width={500} height={500} className="w-full h-full object-cover" />
      </div>
      <div className="flex flex-col justify-center items-center h-1/2 bg-white">
        <br />
        <p className="text-gray-800 text-2xl mb-4">
          <span>수 민</span> <span className="font-light text-gray-200 text-xl"> | </span> <span>현 희</span>
        </p>
        <br />
        <p className="text-gray-600">2024년 12월 21일 토요일 오후 2시</p>
        <p className="text-gray-600">더휴웨딩홀 2층 단독홀</p>
      </div>
    </div>
  );
}