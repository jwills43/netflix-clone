import Navbar from './components/Navbar';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import { AuthContextProvider } from './context/AuthContext';


function App() {
  return (
    <div>
      <AuthContextProvider>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
