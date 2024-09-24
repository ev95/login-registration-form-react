import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';

function App() {
  const [isLogin, setiIsLogin] = useState(true);

  function showRegistration() {
    setiIsLogin(false);
  }

  return (
    <div className="container">
      {
        isLogin
          ?
          <Login showRegistration={showRegistration} />
          :
          <Registration showRegistration={showRegistration} />}
    </div>
  )
}

export default App
