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
            <div className="col-span-3 row-span-9 bg-green-300 rounded-box  w-full">
              <div className="rounded-lg w-11/12 h-40 m-2 shadow-xl bg-gray-200 text-blue-950">
                <div className="flex flex-col w-full">
                  <div className="grid h-14 place-items-center shadow-xl">
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
            </div>
            <div className="col-span-9 row-span-9 col-start-4 bg-green-300 rounded-box place-items-center w-full">
              <div className="w-4/5 h-10 bg-gray-400 text-start font-bold rounded-lg text-blue-950 flex-1  m-2 p-2 shadow-xl">
                <p />
                Текущий: Комната 1 / Стеллаж 1 / Полка 1
              </div>

              <div className="flex  rounded-lg h-72 mx-4 mt-5 space-x-4 justify-center">
                <div className="relative flex  rounded-lg justify-start items-center text-center w-1/3  p-2  shadow-xl bg-gray-200">
                  <p />
                  ГРАФИК 1
                </div>
                <div className="relative flex rounded-lg justify-start items-center text-center w-1/3  p-2  shadow-xl bg-gray-200">
                  <p />
                  ГРАФИК 2
                </div>
                <div className="relative flex rounded-lg justify-start items-center text-center w-1/3  p-2  shadow-xl bg-gray-200">
                  <p />
                  ГРАФИК 3
                </div>
              </div>

              <div className="flex  rounded-lg h-72 mx-4 mt-5 space-x-4 justify-center">
                <div className="relative flex  rounded-lg justify-start items-center text-center w-1/3  p-2  shadow-xl bg-gray-200">
                  <p />
                  ГРАФИК 1
                </div>
                <div className="relative flex rounded-lg justify-start items-center text-center w-1/3  p-2  shadow-xl bg-gray-200">
                  <p />
                  ГРАФИК 2
                </div>
                <div className="relative flex rounded-lg justify-start items-center text-center w-1/3  p-2  shadow-xl bg-gray-200">
                  <p />
                  ГРАФИК 3
                </div>
              </div>

              <div className="flex  rounded-lg h-72 mx-4 mt-5 space-x-4 justify-center">
                <div className="relative flex  rounded-lg justify-start items-center text-center w-1/3  p-2  shadow-xl bg-gray-200">
                  <p />
                  ГРАФИК 1
                </div>
                <div className="relative flex rounded-lg justify-start items-center text-center w-1/3  p-2  shadow-xl bg-gray-200">
                  <p />
                  ГРАФИК 2
                </div>
                <div className="relative flex rounded-lg justify-start items-center text-center w-1/3  p-2  shadow-xl bg-gray-200">
                  <p />
                  ГРАФИК 3
                </div>
              </div>

              <div className="flex  rounded-lg h-72 mx-4 mt-5 space-x-4 justify-center">
                <div className="relative flex  rounded-lg justify-start items-center text-center w-1/3  p-2  shadow-xl bg-gray-200">
                  <p />
                  ГРАФИК 1
                </div>
                <div className="relative flex rounded-lg justify-start items-center text-center w-1/3  p-2  shadow-xl bg-gray-200">
                  <p />
                  ГРАФИК 2
                </div>
                <div className="relative flex rounded-lg justify-start items-center text-center w-1/3  p-2  shadow-xl bg-gray-200">
                  <p />
                  ГРАФИК 3
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShelfStatistics;
