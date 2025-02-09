import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FileUpload from './components/FileUpload';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Easy Media Vault</h1>
        <Routes>
          <Route path="/" element={<FileUpload />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;