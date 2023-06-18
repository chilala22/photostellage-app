import React from 'react'

function AppHeader() {
  return (
    <>
    <div className="navbar bg-base-100">
  <div className="flex-1">
    <a className="btn btn-ghost normal-case text-xl pl-5">Интерфейс работы системы фитостелажа</a>
  </div>
  <div className="flex-none gap-2">
    <div> 
        <p>John Doe</p>
    </div>
    <div className="dropdown dropdown-end pr-5">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src='/Images/johnDoe2.jpeg'></img>
        </div>
      </label>
      <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52 z-50">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>


    </>
  )
}

export default AppHeader