import React from 'react'
import AppHeader from '../components/AppHeader'
import AppMenu from '../components/AppMenu'

function IndividualSelf() {
  return (
    <>
<div className="">
      <AppHeader />
      <div className="flex">
        <AppMenu />
        <div className="grid grid-cols-12 grid-rows-12 gap-2">
        <div className="col-span-12 row-span-4 row-start-1 rounded-lg bg-base-300 ">
        <div className="relative flex justify-center items-center ">
               <div className="w-20 h-24 bg-gray-400 text-center font-bold rounded-lg text-blue-950 flex-1  m-4 p-5 shadow-xl">
               <p />25 РАСТЕНИЙ
                </div>
                <div className=" h-24 rounded-lg flex-none w-4/5 justify-start items-start text-start m-2 ml-4 p-2">
              ПОЛКА 1
               <br/><br/>
               <p>РОЗЫ</p>
                </div> 
              </div>
       </div>

        <div className="col-span-12 row-span-2 col-start-1 row-start-5 bg-base-300 rounded-lg">
        <div className="relative flex justify-center items-center text-center ">
                <div className=" h-30 rounded-lg flex-1 w-80 justify-start items-start text-start m-2 p-2">
                 <p>ОБЩАЯ РАСТИТЕЛЬНОСТЬ</p>
               <br/>
               <p>ТЕМПЕРАТУРА</p>
               <br/>
               <p>ВЛАЖНОСТЬ ПОЧВЫ</p>
                </div> 
                <div className=" rounded-lg flex-none w-80 justify-start items-start text-start m-2 p-2">
                 <p> 25</p>
               <br/>
               <p>20°</p>
               <br/>
               <p>15%</p>
                </div> 
                <div className="rounded-lg flex-none w-80 justify-start items-start text-start m-2 p-2">
                  <p>УВЛАЖНЯТЬ</p>
               <br/>
               <p>ВЕНТИЛЯЦИЯ</p>
                </div> 
                <div className="rounded-lg flex-none w-80 justify-start items-start text-start m-2 p-2">
                  <p>62%</p>
               <br/>
               <p>ВКЛ</p>
                </div> 
              </div>

        </div>
        <div className="col-span-12 row-span-4 col-start-1 row-start-7 bg-base-300 rounded-lg">
        <div className="flex  rounded-lg h-96 mx-4 mt-4 space-x-4 justify-center">
              <div className="relative flex  rounded-lg justify-start items-center text-center w-1/4 m-4 p-5 shadow-xl bg-gray-200">
                <p />
                ГРАФИК 1
              </div>
              <div className="relative flex rounded-lg justify-start items-center text-center w-1/4 m-4 p-5 shadow-xl bg-gray-200">
                <p />
                ГРАФИК 2
              </div>
            </div>

        </div>
        </div>
      </div>
  </div>
    

        </>
  )
}

export default IndividualSelf