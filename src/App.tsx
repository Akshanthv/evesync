import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Feed from './screens/feed/feed.screen';
import Login from './screens/login/login.screen';
import Profile from './screens/profile/profile.screen';
import Event from './screens/events/event.screen'


function App() {

  return (
    <div id="App" className="App">
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/feed' element={<Feed />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/event' element={<Event />} />
        <Route path='/' element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
