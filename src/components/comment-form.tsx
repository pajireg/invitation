
"use client";
import { createComment } from '@/lib/actions';

export default function CommentForm() {

  return (
          <form className="mb-6" action={createComment}>
            <div className="grid grid-cols-2 gap-x-4">
                <div className="relative mb-6">
                    <label className="flex  items-center mb-2 text-gray-600 text-sm font-medium"> 이름 <svg width="7"
                            height="7" className="ml-1" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M3.11222 6.04545L3.20668 3.94744L1.43679 5.08594L0.894886 4.14134L2.77415 3.18182L0.894886 2.2223L1.43679 1.2777L3.20668 2.41619L3.11222 0.318182H4.19105L4.09659 2.41619L5.86648 1.2777L6.40838 2.2223L4.52912 3.18182L6.40838 4.14134L5.86648 5.08594L4.09659 3.94744L4.19105 6.04545H3.11222Z"
                                fill="#EF4444" />
                        </svg>
                    </label>
                    <input type="text" id="name" name="name"
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
                    <input type="text" id="password" name="password"
                        className="block w-full h-11 px-5 py-2.5 leading-7 text-base font-normal border border-gray-300 rounded-lg rounded-t-lg placeholder-gray-400 focus:outline-none "
                        placeholder="비밀번호" required />
                </div>
            </div>

            <label className="flex items-center mb-2 text-gray-600 text-sm font-medium"> 메시지 </label>
              <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-300">
                  <textarea id="message" rows={6} name="message"
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
  )
}