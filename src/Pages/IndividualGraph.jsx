import React from "react";
import AppHeader from "../components/AppHeader";
import AppMenu from "../components/AppMenu";
import GraphCalendar from "../components/GraphCalendar";

function IndividualGraph() {
  return (
    <>
      <div className="App">
        <AppHeader />
        <div className="flex">
          <AppMenu />
          <div className="grid grid-cols-12 grid-rows-12 gap-2 grow">
            <div className="col-span-3 row-span-9 bg-base-300 rounded-box place-items-center w-full">
              <div className="relative flex justify-center items-center ">
                <div className=" h-10 rounded-lg flex-1 w-1/2  justify-start items-end text-center ">
                  <ul className="menu md">
                    <li>
                      <details>
                        <summary>График 1</summary>
                        <ul className="z-50  text-blue-950">
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
                <div className=" h-10 rounded-lg flex-none w-1/2  justify-start items-end text-center ">
                  <ul className="menu md ">
                    <li>
                      <details>
                        <summary>Параметр 1</summary>
                        <ul className="z-50  text-blue-950">
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
              <div className="rounded-lg w-11/12 h-40 m-4 shadow-xl bg-gray-200 text-blue-950">
                <div className="flex flex-col w-full">
                  <div className="grid h-14 place-items-center shadow-xl">
                    Примененные фильтры:
                  </div>
                  <div className="grid place-items-center">
                    Комната 1 <br/>Температура: 35C
                  </div>
                </div>
              </div>
              <div className="rounded-lg w-11/12 h-40 m-4 shadow-xl bg-gray-200 text-blue-950">
                <div className="flex flex-col w-full">
                  <div className="grid h-14 place-items-center shadow-xl">
                    Примененные фильтры:
                  </div>
                  <div className="grid place-items-center">
                   ...
                  </div>
                </div>
              </div>

              <div className="rounded-lg w-11/12 h-80 m-4  shadow-xl bg-gray-200 text-blue-950">
                <GraphCalendar/>
              </div>
            </div>

            <div className="col-span-9 row-span-9 col-start-4 bg-base-300 rounded-box place-items-center w-full">
              <div className="col-span-12 row-span-4 row-start-1 rounded-lg bg-base-300 ">
                <div className="relative flex justify-center items-center ">
                  <div className="w-1/2 h-10 bg-gray-400 text-start font-bold rounded-lg text-blue-950 flex-1  m-2 p-2 shadow-xl">
                    <p />
                    Текущий: Комната 1 / Стеллаж 1 / Полка 1
                  </div>
                  <div className=" h-10 rounded-lg flex-none w-1/5  justify-start items-end text-end m-2 p-2">
                    <p>Статус: Активен</p>
                  </div>
                  <div className=" h-10 rounded-lg flex-none w-1/5  justify-start items-end text-end m-2 p-2">
                    <p>Сохранить в PNG</p>
                  </div>
                </div>
                <div className="relative flex  rounded-lg justify-center items-center text-center w-11/12 h-96 m-10 my-5  shadow-xl bg-gray-200">
                  <p />
                  ГРАФИК 1
                </div>
                <div className="relative flex  rounded-lg justify-center items-center text-center w-11/12 h-60 m-5 ml-10  shadow-xl bg-gray-200">
                  <p />
                  Доп. информация:
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default IndividualGraph;
