import React, {useState, useEffect, useRef} from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const selecta=()=>{
    axios.get('/users')
  }

  return (
    <div id="App">
      <div className="v20_161">
        <div className="v20_160">
          <div className="v18_146"></div>
          <div className="v18_152">
            <button onClick={selecta}>조회</button>
          </div>
          <div className="v18_154"></div>
          <div className="v18_153"></div>
        </div>
      
        <div className="v18_158">
          <div className="v18_145">
            <div className="v18_151"></div>
            <div className="v18_150"></div>
            <div className="v18_157"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

function LoginForm(){
  return(
      <div>
          <form>

          </form>
      </div>
  );
}
export default App;