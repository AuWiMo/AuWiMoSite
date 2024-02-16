import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Home from './pages/home';
import BardicSongbook from './pages/bardicsongbook';

import { BrowserRouter, Route, Routes} from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <Routes>

      <Route path="*" element={<Home/>} />
      <Route path="/" element = {<Home/>}></Route>

      <Route path="/home" element = {<BardicSongbook/>}></Route>
      
      <Route path="/bardicsongbook" element = {<BardicSongbook/>}></Route>

    </Routes>
  </BrowserRouter>, document.getElementById('root'));
