import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import IndividualSelf from './Pages/IndividualSelf';
import IndividualGraph from './Pages/IndividualGraph';
import ShelfStatistics from './Pages/ShelfStatistics';
//import Home from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}/>
          <Route path="individual-shelf" element={<IndividualSelf />} />
          <Route path="individual-graph" element={<IndividualGraph />} />
          <Route path="shelf-statistics" element={<ShelfStatistics />} />


      </Routes>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
