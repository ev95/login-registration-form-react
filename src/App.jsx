import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';
import Profile from './components/Profile/Profile';

function App() {
  const [isLogin, setiIsLogin] = useState(true);
  const [showProfile, setShowProfile] = useState(false);
  const [userInfo, setUserInfo] = useState({});

  return (
    <div className="container">
      {
        isLogin && !showProfile
          ?
          <Login showRegistration={() => setiIsLogin(false)} />
          :
          !showProfile && <Registration showLogin={(e) => setiIsLogin(e)}
            setShowProfile={(e) => setShowProfile(e)}
            setUserInfo={(data) => setUserInfo(data)}
          />}
      {showProfile && !isLogin && < Profile userInfo={userInfo} />}
    </div>
  )
}

export default App
