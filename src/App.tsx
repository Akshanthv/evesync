import React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import Login from './screens/login/login.screen';
import Profile from './screens/profile/profile.screen';
import Event from './screens/events/event.screen'
import AppTopBar from './components/header.component';
import Chat from './chat/chat.screen';
import Logon from './screens/login/logon.screen';
import Settings from './screens/settings/setting.screen';


function App() {

  const navigator = useNavigate()
  const navigateToProfile = () => {
    navigator("/profile")
  }
  const navigateTochat = () => {
    navigator("/chat")
  }
  const navigateToEvent = () => {
    navigator("/event")
  }
  const navigateToLogon = () => {
    navigator("/logon")
  }
  const navigateToSettings = () => {
    navigator("/setting")
  }

  return (
    <div id="App" className="App">
      <AppTopBar title="EveSync"
      onChatClick={navigateTochat}
      onEventClick={navigateToEvent}
      onProfileClick={navigateToProfile} 
      onSettingClick={navigateToSettings} />

      <Routes>
        <Route path='/logon' element={<Logon />} />
        <Route path='/login' element={<Login />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/event' element={<Event />} />
        <Route path='/chat' element={<Chat />} />
        <Route path='setting' element={<Settings />} />
        <Route path='/' element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
