import React, { useState } from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import coverImg from './assets/cover.jpeg'
function App() {
  // 状态管理遮盖层的目标
  const [activeCover, setActiveCover] = useState("login"); 

  // 回调函数：接收子组件传递的值
  const handleCoverClick = (value) => {
    setActiveCover(value);
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-800 to-blue-200">
      {/* 并排的注册和登录组件 */}
      <div className="relative flex items-start ">
        {/* 注册组件 */}
        <div className="relative">
          <Register onLoginClick={handleCoverClick} />
          {activeCover === "login" && (
            <div className="absolute inset-0 bg-pink-300 flex items-center justify-center text-white text-xl font-bold">
              <img
                src={coverImg}
                alt="Covered Image"
                className="w-full h-full object-cover"
              />
            </div>
          )}
        </div>
        
        {/* 登录组件 */}
        <div className="relative">
          <Login onRegisterClick={handleCoverClick} />
          {activeCover === "register" && (
            <div className="absolute inset-0 bg-blue-400 flex items-center justify-center text-white text-xl font-bold">
              <img
                src={coverImg}
                alt="Covered Image"
                className="w-full h-full object-cover"
              />
            </div>
          )}
        </div>

        
      </div>
    </div>
  );
}

export default App;
