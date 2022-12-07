import React, {useState, useEffect, useRef} from 'react';
import axios from 'axios';
import {useNavigate} from "react-router-dom";
import './App.css';

const Disp=({testp})=>{ //디스플레이
  const [Disp, setDisp] = useState(testp);

  useEffect(() => {
    setDisp(testp)
  },[testp])

  if (Disp ==="Main") {//메인화면
      return(
        <div className='MainDisp'> 
          
        </div>
      )
  } else if(Disp ==="Search"){//검색 화면
      return (
        <div>
          
        </div>
      )
  }else if(Disp === "Login_test"){//로그인 테스트
      return(
        <div className='Login_testDisp'>
          <div className='Login_testDisp_Form'>
          <h2>로그인</h2>
            <form action='' >
              <input type={'text'} placeholder={'아이디'} className={'in'} /><br />
              <input type={'password'} placeholder={'비밀번호'} className={'in'} /><br />
              <input type={'button'} value={'로그인'} id={'btn'}/>
            </form>
            <a href="#" className={'ForgotPW'} id={'forgot'}>비밀번호를 잊어버리셨나요?</a><br />
            <a href="#" className={'NotUser'}>아직 회원이 아니신가요?</a>
          </div>
        </div>
      )
  }
}

function App() {
  let[dispSelector,setDispSelector] = useState("Main"); 

  const selecta=()=>{
    axios.get('/users')
  }

  return (
    <div className="App">
        <div className="Nav">
          <div className="NavLogo" onClick={()=>setDispSelector("Main")}>{dispSelector}</div>
          <div className='NavMenu'>
            <div className='Nav_Search' onClick={()=>setDispSelector("Search")}></div>
            <div className='Nav_Looking' onClick={()=>setDispSelector("Looking")}></div>
            <div className='Nav_Board' onClick={()=>setDispSelector("Board")}></div>
            <div className='Nav_QnA' onClick={()=>setDispSelector("QnA")}></div>
            <div className='Nav_Contest' onClick={()=>setDispSelector("Contest")}></div>
            <div className='Nav_Employment' onClick={()=>setDispSelector("Employment")}></div>
            <div className='Nav_Portfolio' onClick={()=>setDispSelector("Portfolio")}></div>
            <div className='Nav_Notice' onClick={()=>setDispSelector("Notice")}></div>
            <div className='Login_test' onClick={()=>setDispSelector("Login_test")} >LOGIN</div>
          </div>
          <div className='NavBottom'></div>
        </div>
        <div className='Main'><Disp testp={dispSelector}/></div>
    </div>
  );
}

export default App;