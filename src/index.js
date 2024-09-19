import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Home from './pages/home';
import LMC3404 from './pages/lmc3403';
import ResumePage from './pages/resumePage';

import BardicSongbook from './pages/bardicsongbook';

import { BrowserRouter, Route, Routes} from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <Routes>

      <Route path="*" element={<Home/>} />
      <Route path="/" element = {<Home/>}></Route>

      <Route path="/lmc3403" element = {<LMC3404/>}></Route>
      <Route path="/resumePage" element = {<ResumePage/>}></Route>

      
      <Route path="/bardicsongbook" element = {<BardicSongbook/>}></Route>

    </Routes>
  </BrowserRouter>, document.getElementById('root'));
