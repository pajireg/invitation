"use client";

import { useState } from "react";
import BodyLayout from "./ui/body-layout";
import Title from "./ui/title";

interface Account {
  bank: string;
  number: string;
  name: string;
}

const bAccounts: Account[] = [
  {
    bank: "신한은행",
    number: "110-035-130325",
    name: "최행찬",
  },
  {
    bank: "NH농협",
    number: "312-0033-1120-11",
    name: "김복숙",
  },
  {
    bank: "신한은행",
    number: "110-246-252606",
    name: "최수민",
  },
];

const mAccounts: Account[] = [
  {
    bank: "신한",
    number: "123456789",
    name: "정현희",
  },
  {
    bank: "신한",
    number: "123456789",
    name: "정현희",
  },
  {
    bank: "신한",
    number: "123456789",
    name: "정현희",
  },
];

export default function Account() {
  return (
    <BodyLayout>
      <div className="max-w-2xl mx-auto px-4">
        <Title title="ACCOUNT" />
            <p className="text-gray-600 text-center text-sm mt-8 mb-6">
              축하의 마음을 담아 축의금을 전달해 보세요.
            </p>
        <Block accounts={bAccounts} who="신랑" />
        <Block accounts={mAccounts} who="신부" />
      </div>
    </BodyLayout>
  );
}

function Block({ accounts, who }: { accounts: Account[]; who: string }) {
  const [open, setOpen] = useState(false);

  const onClickOpen = () => {
    setOpen(!open);
  };

  const onClickAccount = ({ number }: Account) => {
    if (navigator?.clipboard) {
      number.replace(/-/g, "");
      navigator.clipboard.writeText(number).then(() => {
        alert("계좌번호가 복사되었습니다.");
      });
    } else {
      window.prompt("계좌번호를 복사해 주세요.", number);
    }
  };

  return (
    <div className="border border-gray-200 rounded-lg p-4 mb-4">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={onClickOpen}
      >
        <span className="text-gray-600">{who}측 계좌번호</span>
        {open ? <ArrowUpIcon /> : <ArrowDownIcon />}
      </div>
      {open && (
        <div className="mt-4">
          {accounts.map((account) => (
            <div
              key={account.number}
              className="flex justify-between items-center border-t py-2"
            >
              <div className="flex flex-col md:flex-row md:items-center md:space-x-4">
                <span className="text-gray-800">{account.bank}</span>
                <span className="text-gray-500">{account.number}</span>
                <span className="text-gray-800 font-semibold">{account.name}</span>
              </div>
              <button
                className="bg-pink-600 text-white px-3 py-1 rounded hover:bg-pink-700"
                onClick={() => onClickAccount(account)}
              >
                복사
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function ArrowDownIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 text-gray-400">
      <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
    </svg>
  );
}

function ArrowUpIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 text-gray-400">
      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
    </svg>
  )
}