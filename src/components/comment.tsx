"use client";

import React, { useState } from 'react';
import BodyLayout from "./ui/body-layout";

export default function Comment() {
  const [openDropdownId, setOpenDropdownId] = useState<string | null>(null);

  const toggleDropdown = (id: string) => {
    setOpenDropdownId(openDropdownId === id ? null : id);
  };

  return (
    <BodyLayout>
      <h2 className="text-2xl font-bold text-center">축하 메시지</h2>

      <section className="py-8 lg:py-12 antialiased">
          
        <div className="max-w-2xl mx-auto px-4">

          <form className="mb-6">
        <div className="grid grid-cols-2 gap-x-4">
            <div className="relative mb-6">
                <label className="flex  items-center mb-2 text-gray-600 text-sm font-medium"> 이름 <svg width="7"
                        height="7" className="ml-1" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M3.11222 6.04545L3.20668 3.94744L1.43679 5.08594L0.894886 4.14134L2.77415 3.18182L0.894886 2.2223L1.43679 1.2777L3.20668 2.41619L3.11222 0.318182H4.19105L4.09659 2.41619L5.86648 1.2777L6.40838 2.2223L4.52912 3.18182L6.40838 4.14134L5.86648 5.08594L4.09659 3.94744L4.19105 6.04545H3.11222Z"
                            fill="#EF4444" />
                    </svg>
                </label>
                <input type="text" id="default-search"
                    className="block w-full h-11 px-5 py-2.5 leading-7 text-base font-normal border border-gray-300 rounded-lg rounded-t-lg placeholder-gray-400 focus:outline-none "
                    placeholder="이름" required />
            </div>
            <div className="relative mb-6">
                <label className="flex  items-center mb-2 text-gray-600 text-sm font-medium"> 비밀번호 <svg width="7"
                        height="7" className="ml-1" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M3.11222 6.04545L3.20668 3.94744L1.43679 5.08594L0.894886 4.14134L2.77415 3.18182L0.894886 2.2223L1.43679 1.2777L3.20668 2.41619L3.11222 0.318182H4.19105L4.09659 2.41619L5.86648 1.2777L6.40838 2.2223L4.52912 3.18182L6.40838 4.14134L5.86648 5.08594L4.09659 3.94744L4.19105 6.04545H3.11222Z"
                            fill="#EF4444" />
                    </svg>
                </label>
                <input type="text" id="default-search"
                    className="block w-full h-11 px-5 py-2.5 leading-7 text-base font-normal border border-gray-300 rounded-lg rounded-t-lg placeholder-gray-400 focus:outline-none "
                    placeholder="비밀번호" required />
            </div>
        </div>

            <label className="flex items-center mb-2 text-gray-600 text-sm font-medium"> 메시지 </label>
              <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-300">
                  <textarea id="comment" rows={6}
                      className="px-0 w-full border-0 focus:ring-0 focus:outline-none"
                      placeholder="신랑,신부에게 축하메시지를 남겨주세요." required></textarea>
              </div>
              <div className="flex justify-end">
                <button type="submit"
                  className="inline-flex items-center py-2.5 px-4 font-medium text-center text-white bg-pink-700 rounded-lg focus:ring-4 focus:ring-pink-200 hover:bg-pink-800">
                  글쓰기
                </button>
              </div>
          </form>

          {/* 댓글 */}
          <div className="p-6 text-base bg-white border-t border-gray-200">
              <footer className="flex justify-between items-center mb-2">
                  <div className="flex items-center">
                      <p className="inline-flex items-center mr-3 text-sm text-gray-900 font-semibold">
                        최수민
                      </p>
                      <p className="text-sm text-gray-600">Jun. 23, 2022</p>
                  </div>
                  <div className="relative">
                    <button id="dropdownComment4Button" onClick={() => toggleDropdown('dropdownComment4')}
                        className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50"
                        type="button">
                        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                            <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"/>
                        </svg>
                    </button>
                    <div id="dropdownComment4"
                        className={`${openDropdownId === 'dropdownComment4' ? 'block' : 'hidden'} absolute right-0 z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow`}>
                        <ul className="py-1 text-sm text-gray-700 "
                            aria-labelledby="dropdownMenuIconHorizontalButton">
                            <li>
                                <a href="#"
                                    className="block py-2 px-4 hover:bg-gray-100">수정</a>
                            </li>
                            <li>
                                <a href="#"
                                    className="block py-2 px-4 hover:bg-gray-100">삭제</a>
                            </li>
                        </ul>
                    </div>
                  </div>
              </footer>
              <p className="text-gray-600">
                동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세. 무궁화 삼천리 화려강산 대한사람 대한으로 길이 보전하세.
                남산위에 저 소나무 철갑을 두른 듯 바람서리 불변함은 우리 기상일세. 무궁화 삼천리 화려강산 대한사람 대한으로 길이 보전하세.
                </p>
          </div>

        </div>
      </section>
    </BodyLayout>
  )
}