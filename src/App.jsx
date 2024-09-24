import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';

function App() {
  const [isLogin, setiIsLogin] = useState(true);

  return (
    <div className="container">
      {
        isLogin
          ?
          <Login showRegistration={() => setiIsLogin(false)} />
          :
          <Registration showRegistration={() => setiIsLogin(true)} />}
    </div>
  )
}

export default App
