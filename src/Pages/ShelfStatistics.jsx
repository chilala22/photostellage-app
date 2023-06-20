import React from "react";
import AppHeader from "../components/AppHeader";
import AppMenu from "../components/AppMenu";

function ShelfStatistics() {
  return (
    <div>
      <div className="App">
        <AppHeader />
        <div className="flex">
          <AppMenu />
          <div className="grid grid-cols-12 grid-rows-12 gap-2 grow">
            <div className="col-span-3 row-span-9 bg-base-300 rounded-box  w-full">
              <div className="rounded-lg w-11/12 h-1/5 m-4 shadow-xl bg-gray-200 text-blue-950">
                <div className="flex flex-col w-full">
                  <div className="grid h-14 place-items-center shadow-xl  font-bold ">
                    Основная Информация
                  </div>
                  <div className="grid place-items-start">
                    <div className="relative flex ">
                      <div className="w-60">
                        <p>Всего Комнат </p>
                        <p>Всего Стеллажей</p>
                        <p>Всего Полок </p>
                      </div>
                      <div className="">
                        <p> 25</p>
                        <p>20°</p>
                        <p>15%</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded-lg w-11/12 h-3/4 m-4 shadow-xl bg-gray-200 text-blue-950">
                <div className="flex flex-col w-full h-14 p-3 shadow-xl text-start">
                  <div className="relative flex ">
                    <div className="flex-1  font-bold ">
                      <p>Фильтры</p>
                      <br />
                    </div>
                    <div className="flex-none text-blue-500  font-semibold">
                      <p>очистить</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col w-full  shadow-xl text-start">
                  <ul className="menu md">
                    <li>
                      <details>
                        <summary>Комната 1</summary>
                        <ul className="z-50 ">
                          <li>
                            <a> item 1..........</a>
                          </li>
                          <li>
                            <a> item 2...........</a>
                          </li>
                        </ul>
                      </details>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col w-full  shadow-xl text-start">
                  <ul className="menu md">
                    <li>
                      <details>
                        <summary>Стеллаж</summary>
                        <ul className="z-50 ">
                          <li>
                            <a> item 1..........</a>
                          </li>
                          <li>
                            <a> item 2...........</a>
                          </li>
                        </ul>
                      </details>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col w-full  shadow-xl text-start">
                  <ul className="menu md">
                    <li>
                      <details>
                        <summary>Полка</summary>
                        <ul className="z-50 ">
                          <li>
                            <a> item 1..........</a>
                          </li>
                          <li>
                            <a> item 2...........</a>
                          </li>
                        </ul>
                      </details>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col w-full  shadow-xl text-start">
                  <ul className="menu md">
                    <li>
                      <details>
                        <summary>Параметр</summary>
                        <ul className="z-50 ">
                          <li>
                            <a> item 1..........</a>
                          </li>
                          <li>
                            <a> item 2...........</a>
                          </li>
                        </ul>
                      </details>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col w-full text-start">
                  <ul className="menu md">
                    <li>
                      <details>
                        <summary>Наименнование</summary>
                        <ul className="z-50 ">
                          <li>
                            <a> item 1..........</a>
                          </li>
                          <li>
                            <a> item 2...........</a>
                          </li>
                        </ul>
                      </details>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-span-9 row-span-9 col-start-4 bg-base-300 rounded-box place-items-center w-full">
              <div className="w-4/5 h-10 bg-gray-400 text-start font-bold rounded-lg text-blue-950 flex-1  m-2 p-2 shadow-xl">
                <p />
                Текущий: Комната 1 / Стеллаж 1 / Полка 1
              </div>

              <div className="flex  rounded-lg h-60 mx-4 mt-5 space-x-4 justify-center">
                <div className="relative flex  rounded-lg justify-start items-center text-center w-1/4  p-2  shadow-xl bg-gray-200">
                  <p />
                  ГРАФИК 1
                </div>
                <div className="relative flex rounded-lg justify-start items-center text-center w-1/4  p-2  shadow-xl bg-gray-200">
                  <p />
                  ГРАФИК 2
                </div>
                <div className="relative flex rounded-lg justify-start items-center text-center w-1/4  p-2  shadow-xl bg-gray-200">
                  <p />
                  ГРАФИК 3
                </div>
                <div className="relative flex rounded-lg justify-start items-center text-center w-1/4  p-2  shadow-xl bg-gray-200">
                  <p />
                  ГРАФИК 4
                </div>
              </div>

              <div className="flex  rounded-lg h-60 mx-4 mt-5 space-x-4 justify-center">
                <div className="relative flex  rounded-lg justify-start items-center text-center w-1/4  p-2  shadow-xl bg-gray-200">
                  <p />
                  ГРАФИК 1
                </div>
                <div className="relative flex rounded-lg justify-start items-center text-center w-1/4  p-2  shadow-xl bg-gray-200">
                  <p />
                  ГРАФИК 2
                </div>
                <div className="relative flex rounded-lg justify-start items-center text-center w-1/4  p-2  shadow-xl bg-gray-200">
                  <p />
                  ГРАФИК 3
                </div>
                <div className="relative flex rounded-lg justify-start items-center text-center w-1/4  p-2  shadow-xl bg-gray-200">
                  <p />
                  ГРАФИК 4
                </div>
              </div>

              <div className="flex  rounded-lg h-60 mx-4 mt-5 space-x-4 justify-center">
                <div className="relative flex  rounded-lg justify-start items-center text-center w-1/4  p-2  shadow-xl bg-gray-200">
                  <p />
                  ГРАФИК 1
                </div>
                <div className="relative flex rounded-lg justify-start items-center text-center w-1/4  p-2  shadow-xl bg-gray-200">
                  <p />
                  ГРАФИК 2
                </div>
                <div className="relative flex rounded-lg justify-start items-center text-center w-1/4  p-2  shadow-xl bg-gray-200">
                  <p />
                  ГРАФИК 3
                </div>
                <div className="relative flex rounded-lg justify-start items-center text-center w-1/4  p-2  shadow-xl bg-gray-200">
                  <p />
                  ГРАФИК 4
                </div>
              </div>
              <div className="join m-4 ">
  <button className="join-item btn hover:bg-violet-600 active:bg-violet-700 focus:ring focus:ring-violet-400">1</button>
  <button className="join-item btn hover:bg-violet-600 active:bg-violet-700 focus:ring focus:ring-violet-400">2</button>
  <button className="join-item btn hover:bg-violet-600 active:bg-violet-700 focus:ring focus:ring-violet-400">3</button>
  <button className="join-item btn btn-disabled ">...</button>
  <button className="join-item btn hover:bg-violet-600 active:bg-violet-700 focus:ring focus:ring-violet-400">10</button>
  <button className="join-item btn hover:bg-violet-600 active:bg-violet-700 focus:ring focus:ring-violet-400"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 256 512"><path d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z"/></svg></button>
</div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShelfStatistics;
