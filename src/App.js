import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [mode, setmode] = useState('light')
  const apikey = "b39872ea828243339d83fc378107e2b8"
  
  const toggleColor = ()=>{
        console.log('toggle clicked')
        if (mode==='light') {
          setmode('dark')
          document.body.style.backgroundColor = 'rgb(6 59 78)';
        } else {
          setmode('light')
          document.body.style.backgroundColor = 'white';
        }  
  }

  return (
    <Router> 
        <div className="App">
          <Navbar toggleColor={toggleColor}/>  
        </div>       
      <Routes>
        <Route path="/" element={<News pageSize="20" category="general" mode={mode} apikey={apikey}/>} />
        <Route path="/sports" element={<News key="sports" pageSize="20" category="sports" mode={mode} apikey={apikey}/>} />
        <Route path="/business" element={<News key="business" pageSize="20" category="business" mode={mode} apikey={apikey}/>} />
        <Route path="/entertainment" element={<News key="entertainment" pageSize="20" category="entertainment" mode={mode} apikey={apikey}/>} />
        <Route path="/science" element={<News key="scienc" pageSize="20" category="science" mode={mode} apikey={apikey}/>} />
        <Route path="/technology" element={<News key="technology" pageSize="20" category="technology" mode={mode} apikey={apikey}/>} />
        <Route path="/health" element={<News key="healt" pageSize="20" category="health" mode={mode} apikey={apikey}/>} />
      </Routes>
    </Router>
   
  );
}

export default App;
