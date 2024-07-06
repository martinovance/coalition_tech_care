import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./App.css";
import Patients from './pages/Patients';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Patients />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App