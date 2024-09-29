export default function Calendar() {
  return (
    <div className="flex items-center justify-center py-8 px-4 bg-gray-100">
      <div className="max-w-sm w-full shadow-xl">
        <div className="md:p-8 p-5 bg-white rounded-t-lg ">
          <div className="px-4 flex items-center justify-between">
            <span tabIndex={0} className="focus:outline-none text-xl font-bold text-gray-800">12월</span>
            <div className="flex items-center">
            </div>
          </div>
          <div className="flex items-center justify-between pt-6 overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr>
                  <th>
                    <div className="w-full flex justify-center">
                      <p className="text-base font-medium text-center text-red-600">일</p>
                    </div>
                  </th>
                  <th>
                    <div className="w-full flex justify-center">
                      <p className="text-base font-medium text-center text-gray-800">월</p>
                    </div>
                  </th>
                  <th>
                    <div className="w-full flex justify-center">
                      <p className="text-base font-medium text-center text-gray-800">화</p>
                    </div>
                  </th>
                  <th>
                    <div className="w-full flex justify-center">
                      <p className="text-base font-medium text-center text-gray-800">수</p>
                    </div>
                  </th>
                  <th>
                    <div className="w-full flex justify-center">
                      <p className="text-base font-medium text-center text-gray-800">목</p>
                    </div>
                  </th>
                  <th>
                    <div className="w-full flex justify-center">
                      <p className="text-base font-medium text-center text-gray-800">금</p>
                    </div>
                  </th>
                  <th>
                    <div className="w-full flex justify-center">
                      <p className="text-base font-medium text-center text-gray-800">토</p>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="pt-2">
                    <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                      <p className="text-base text-red-600 font-medium">1</p>
                    </div>
                  </td>
                  <td className="pt-2">
                    <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                      <p className="text-base text-gray-500 font-medium">2</p>
                    </div>
                  </td>
                  <td className="pt-2">
                    <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                      <p className="text-base text-gray-500 font-medium">3</p>
                    </div>
                  </td>
                  <td className="pt-2">
                    <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                      <p className="text-base text-gray-500 font-medium">4</p>
                    </div>
                  </td>
                  <td className="pt-2">
                    <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                      <p className="text-base text-gray-500 font-medium">5</p>
                    </div>
                  </td>
                  <td className="pt-2">
                    <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                      <p className="text-base text-gray-500 font-medium">6</p>
                    </div>
                  </td>
                  <td className="pt-2">
                    <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                      <p className="text-base text-gray-500 font-medium">7</p>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                      <p className="text-base text-red-600 font-medium">8</p>
                    </div>
                  </td>
                  <td>
                    <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                      <p className="text-base text-gray-500 font-medium">9</p>
                    </div>
                  </td>
                  <td>
                    <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                      <p className="text-base text-gray-500 font-medium">10</p>
                    </div>
                  </td>
                  <td>
                    <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                      <p className="text-base text-gray-500 font-medium">11</p>
                    </div>
                  </td>
                  <td>
                    <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                      <p className="text-base text-gray-500 font-medium">12</p>
                    </div>
                  </td>
                  <td>
                    <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                      <p className="text-base text-gray-500 font-medium">13</p>
                    </div>
                  </td>
                  <td>
                    <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                      <p className="text-base text-gray-500 font-medium">14</p>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                      <p className="text-base text-red-600 font-medium">15</p>
                    </div>
                  </td>
                  <td>
                    <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                      <p className="text-base text-gray-500 font-medium">16</p>
                    </div>
                  </td>
                  <td>
                    <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                      <p className="text-base text-gray-500">17</p>
                    </div>
                  </td>
                  <td>
                    <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                      <p className="text-base text-gray-500">18</p>
                    </div>
                  </td>
                  <td>
                    <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                      <p className="text-base text-gray-500">19</p>
                    </div>
                  </td>
                  <td>
                    <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                      <p className="text-base text-gray-500">20</p>
                    </div>
                  </td>
                  <td>
                    <div className="w-full h-full">
                      <div className="flex items-center justify-center w-full rounded-full cursor-pointer">
                        <a role="link" tabIndex={0} className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-700 focus:bg-pink-500 hover:bg-pink-500 text-base w-8 h-8 flex items-center justify-center font-medium text-white bg-pink-500 rounded-full">21</a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                      <p className="text-base text-red-600 font-medium">22</p>
                    </div>
                  </td>
                  <td>
                    <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                      <p className="text-base text-gray-500 font-medium">23</p>
                    </div>
                  </td>
                  <td>
                    <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                      <p className="text-base text-gray-500 font-medium">24</p>
                    </div>
                  </td>
                  <td>
                    <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                      <p className="text-base text-red-600 font-medium">25</p>
                    </div>
                  </td>
                  <td>
                    <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                      <p className="text-base text-gray-500 font-medium">26</p>
                    </div>
                  </td>
                  <td>
                    <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                      <p className="text-base text-gray-500 font-medium">27</p>
                    </div>
                  </td>
                  <td>
                    <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                      <p className="text-base text-gray-500 font-medium">28</p>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                      <p className="text-base text-red-600 font-medium">29</p>
                    </div>
                  </td>
                  <td>
                    <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                      <p className="text-base text-gray-500 font-medium">30</p>
                    </div>
                  </td>
                  <td>
                    <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                      <p className="text-base text-gray-500 font-medium">31</p>
                    </div>
                  </td>
                  <td>
                    <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                      <p className="text-base text-red-200 font-medium">1</p>
                    </div>
                  </td>
                  <td>
                    <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                      <p className="text-base text-gray-200 font-medium">26</p>
                    </div>
                  </td>
                  <td>
                    <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                      <p className="text-base text-gray-200 font-medium">27</p>
                    </div>
                  </td>
                  <td>
                    <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                      <p className="text-base text-gray-200 font-medium">28</p>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="md:py-8 py-5 md:px-16 px-5 bg-gray-50 rounded-b">
          <div className="px-4">
            <div className="border-b border-t pb-4 pt-4 border-gray-400 border-dashed">
              <p className="text-s font-light leading-3 text-gray-500 pb-2">2:00 PM</p>
              <a tabIndex={0} className="focus:outline-none text-lg font-medium leading-5 text-gray-800 mt-2">더휴웨딩홀 2층 단독홀</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}