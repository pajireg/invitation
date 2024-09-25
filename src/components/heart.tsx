"use client";

import { useState } from "react";
import BodyLayout from "./ui/body-layout";

interface Account {
  bank: string;
  number: string;
  name: string;
}

const bAccounts: Account[] = [
  {
    bank: "신한",
    number: "123456789",
    name: "최수민",
  },
  {
    bank: "신한",
    number: "123456789",
    name: "최수민",
  },
  {
    bank: "신한",
    number: "123456789",
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

export default function Heart() {
  return (
    <BodyLayout>
      <div className="max-w-2xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-6">마음 전하실 곳</h2>
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
                <span className="text-gray-700">{account.bank}</span>
                <span className="text-gray-500">{account.number}</span>
                <b className="text-gray-900">{account.name}</b>
              </div>
              <button
                className="bg-pink-500 text-white px-3 py-1 rounded hover:bg-pink-600"
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