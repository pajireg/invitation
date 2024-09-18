import { greatVibes } from '@/app/ui/fonts';

export default function Main() {
  return (
    <div>
      <div className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: `url(/image/main.jpg)` }}>
        <div className="flex flex-col justify-end items-center h-screen w-screen pb-8">
          <p className={`${greatVibes.className} text-white text-6xl lg:text-8xl`} style={{textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'}}>Wedding</p>
          <br />
          <p className={`text-white text-2xl`} style={{textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'}}>수민 & 현희</p>
          <p className="text-white text-2xl pb-8" style={{textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'}}>2024년 12월 21일 토요일 오후 2시</p>
        </div>
      </div>
    </div>
  );
}