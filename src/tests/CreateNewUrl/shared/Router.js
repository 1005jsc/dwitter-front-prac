import {useEffect, useState} from 'react';
import {Route, Routes, BrowserRouter} from 'react-router-dom';
import Template1 from '../Pages/Template1';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Template1 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
