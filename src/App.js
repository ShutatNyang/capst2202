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
          <div className='introduce_box'>
            <div className='introduce_main'>
                <h2>사람과 사람을 연결시키다, 프공</h2>
                다양한 사람들과 프로젝트를 직접 경험하고 성장해 나아가세요.<br/><br/><br/>
            </div>
            <div className='introduce_sub'>
              프공은 포트폴리오를 위해 프로젝트를 하고자 하는 사람들을 연결시켜주는 플랫폼입니다.<br/><br/>
              괜찮은 아이디어가 있어 만들고 싶지만 사람을 찾지못할때,<br/><br/>
              프공을 통해 아이디어를 세상에 보여주세요.<br/><br/><br/>
              지금 시작하기 →
            </div>
          </div>
        </div>
      )
  } else if(Disp ==="Board"){//검색 화면
      return (
        <div className='BoardDisp'>
          <h2>📌자유게시판</h2>
          <div className='BoardSearch'>
            <form className='BoardSearch_Form'>
              <select className='BoardSearch_sel'>
                <option value={"BoardContent_Title"}>제목</option>
                <option value={"BoardContent_Writer"}>작성자</option>
                <option value={"BoardContent_Title"}>#해시태그</option>
              </select>
              <input type={"text"} className={"BoardSearch_text"} placeholder={"검색어를 입력하세요"} ></input>
              <input type={"button"} className={"BoardSearch_btn"} value={"검색"}></input>
            </form>
          </div>
          <div className='BoardSearch_HashTag'>#Python #공모전 #인공지능</div>
          <div className='SearchResult'>
            <table className='SearchResult_Table'>
              <caption>자유게시판입니다.</caption> {/* 캡션에서 검색 전에는 게시판이름, 검색후에는 검색어에 대한 글 목록입니다. */}
              <thead>
                <tr>
                  <th id='t1'>글번호</th>
                  <th id='t2'>글제목 / #해시태그</th>
                  <th id='t3'>작성자</th>
                  <th id='t4'>작성일자</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>테스트1<br/>#Python #인공지능 #공모전</td>
                  <td>테스트1</td>
                  <td>2022.11.27</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>테스트2<br/>#해시태그1 #해시태그2 #해시태그3</td>
                  <td>테스트2</td>
                  <td>2022.11.27</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>테스트3<br/>#해시태그1 #해시태그2 #해시태그3</td>
                  <td>테스트3</td>
                  <td>2022.11.27</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>테스트3<br/>#해시태그1 #해시태그2 #해시태그3</td>
                  <td>테스트3</td>
                  <td>2022.11.27</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div>
            <input type={'button'} value={'글쓰기'} className={'Write'}></input>
            </div>
          <div className='BoardSearch_page'> 1페이지 ▶</div> 
        </div>
      )
  }else if(Disp === "Login_test"){//로그인 테스트
      return(
        <div className='Login_testDisp'>
          <div className='Login_testDisp_Form'>
          <h2>로그인</h2>
            <form action={"./#"} method='POST'>
              <input type={'text'} placeholder={'아이디'} className={'in'} /><br />
              <input type={'password'} placeholder={'비밀번호'} className={'in'} /><br />
              <input type={'button'} value={'로그인'} id={'btn'}/>
            </form>
            <a href="#" className={'ForgotPW'} id={'forgot'}>비밀번호를 잊어버리셨나요?</a><br />
            <a href="#" className={'NotUser'}>아직 회원이 아니신가요?</a>
          </div>
        </div>
      )
  }else if(Disp === "QnA"){
    return (
      <div className='BoardDisp'>
        <h2>💡질문게시판</h2>
        <div className='BoardSearch'>
          <form className='BoardSearch_Form'>
            <select className='BoardSearch_sel'>
              <option value={"BoardContent_Title"}>제목</option>
              <option value={"BoardContent_Writer"}>작성자</option>
              <option value={"BoardContent_Title"}>#해시태그</option>
            </select>
            <input type={"text"} className={"BoardSearch_text"} placeholder={"검색어를 입력하세요"} ></input>
            <input type={"button"} className={"BoardSearch_btn"} value={"검색"}></input>
          </form>
        </div>
        <div className='BoardSearch_HashTag'>#Python #공모전 #인공지능</div>
        <div className='SearchResult'>
          <table className='SearchResult_Table'>
            <caption>질문게시판입니다.</caption> {/* 캡션에서 검색 전에는 게시판이름, 검색후에는 검색어에 대한 글 목록입니다. */}
            <thead>
              <tr>
                <th id='t1'>글번호</th>
                <th id='t2'>글제목 / #해시태그</th>
                <th id='t3'>작성자</th>
                <th id='t4'>작성일자</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>질문게시판 테스트1<br/>#Python #인공지능 #공모전</td>
                <td>테스트1</td>
                <td>2022.11.29</td>
              </tr>
              <tr>
                <td>2</td>
                <td>테스트2<br/>#해시태그1 #해시태그2 #해시태그3</td>
                <td>테스트2</td>
                <td>2022.11.27</td>
              </tr>
              <tr>
                <td>3</td>
                <td>테스트3<br/>#해시태그1 #해시태그2 #해시태그3</td>
                <td>테스트3</td>
                <td>2022.11.27</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <input type={'button'} value={'글쓰기'} className={'Write'}></input>
          </div>
        <div className='BoardSearch_page'> 1페이지 ▶</div> 
      </div>
    )
}else if(Disp === "Login_test"){//로그인 테스트
    return(
      <div className='Login_testDisp'>
        <div className='Login_testDisp_Form'>
        <h2>로그인</h2>
          <form action={"./#"} method='POST'>
            <input type={'text'} placeholder={'아이디'} className={'in'} /><br />
            <input type={'password'} placeholder={'비밀번호'} className={'in'} /><br />
            <input type={'button'} value={'로그인'} id={'btn'}/>
          </form>
          <a href="#" className={'ForgotPW'} id={'forgot'}>비밀번호를 잊어버리셨나요?</a><br />
          <a href="#" className={'NotUser'}>아직 회원이 아니신가요?</a>
        </div>
      </div>
    )
  }else if(Disp ==="Contest"){
    return (
      <div className='BoardDisp'>
        <h2>🏆공모전 알림 게시판</h2>
        <div className='BoardSearch'>
          <form className='BoardSearch_Form'>
            <select className='BoardSearch_sel'>
              <option value={"BoardContent_Title"}>제목</option>
              <option value={"BoardContent_Writer"}>작성자</option>
              <option value={"BoardContent_Title"}>#해시태그</option>
            </select>
            <input type={"text"} className={"BoardSearch_text"} placeholder={"검색어를 입력하세요"} ></input>
            <input type={"button"} className={"BoardSearch_btn"} value={"검색"}></input>
          </form>
        </div>
        {/* <div className='BoardSearch_HashTag'>#Python #공모전 #인공지능</div> */}
        <div className='SearchResult'>
          <table className='SearchResult_Table'>
            <caption>공모전 소식 및 알림게시판입니다.</caption> {/* 캡션에서 검색 전에는 게시판이름, 검색후에는 검색어에 대한 글 목록입니다. */}
          </table>
        </div>
        <table>
          <tr>
            <td>
              <div className='ContestContent_thumbnail' id='con_thum1'></div>
            </td>
            <td>
              <div className='ContestContent_wrap'>
                <div className='ContestContent_name'>기업성장응답센터 명칭 공모전</div>
                <div className='ContestContent_period'>22.12.5 ~ 22.12.12</div>
                <div className='ContestContent_detail'>
                  ㅇ 공모전명: 기업성장응답센터의 “새로운” 이름을 공모합니다!<br/>
                  ㅇ 공모내용: 기업성장응답센터 명칭*<br/>
                  ㅇ 참여대상: 국민 누구나 참여 가능<br/>
                  ㅇ 문의 사항: 한국청소년활동진흥원 전략기획부
                </div>
              </div>
            </td>
            <td>
              <div className='ContestContent_thumbnail' id='con_thum2'></div>
            </td>
            <td>
              <div className='ContestContent_wrap'>
                <div className='ContestContent_name'>문화재 재단안전 콘텐츠공모전</div>
                <div className='ContestContent_period'>22.12.01 ~ 22.12.30</div>
                <div className='ContestContent_detail'>
                  [공모주제 / 공모부문]<br/>
                  주제: 문화재 안전사랑 및 재난안전<br/>
                  부문: 카드뉴스 , 숏폼영상<br/>
                  [참가대상]<br/>
                  대한민국 국민 누구나 (개인 / 단체 5인 이내)<br/>
                  [문의 사항] 공모전 운영사무국</div>
              </div>
            </td>
          </tr>
          <br></br>
          <tr>
            <td>
              <div className='ContestContent_thumbnail' id='con_thum3'></div>
            </td>
            <td>
              <div className='ContestContent_wrap'>
                <div className='ContestContent_name'>포항시 도시브랜드(BI) 아이디어 공모전</div>
                <div className='ContestContent_period'>22.11.28 ~ 22.12.21</div>
                <div className='ContestContent_detail'>
                  [공모 내용]<br/>
                  - 포항시 민선 8기 비전 및 전책방향과 부합하는 도시브랜드 공모<br/>
                  [지원 자격]<br/>
                  - 포항시 도시브랜드에 관심 있는 포항시민(외국인 포함)<br/>
                  [문의 사항] 포항시청 정책기획관 기획팀</div>
              </div>
            </td>
            <td>
              <div className='ContestContent_thumbnail' id='con_thum4'></div>
            </td>
            <td>
              <div className='ContestContent_wrap'>
                <div className='ContestContent_name'>서울주택도시공사 ‘유튜브 콘텐츠’ 공모전</div>
                <div className='ContestContent_period'>22.11.16 ~ 22.12.14</div>
                <div className='ContestContent_detail'>
                  [공모주제]<br/>SH공사 임대주택 경험담<br/>
                  [응모대상]<br/> SH공사 임대주택 입주민 혹은 관련 경험이 있는 시민 누구나<br/>
                  [응모형식]<br/>1분 이내 쇼츠 또는 최대 3분 이내 동영상
                </div>
              </div>
            </td>
          </tr>
        </table>
        <div>
          <input type={'button'} value={'글쓰기'} className={'Write'}></input>
          <div className='BoardSearch_page'> 1페이지 ▶</div> 
        </div>
      </div>
    )
  }else if(Disp === 'Employment'){
    return(
      <div className='BoardDisp'>
      <h2>취업 취직 소식</h2>
      <div className='BoardSearch'>
        <form className='BoardSearch_Form'>
          <select className='BoardSearch_sel'>
            <option value={"BoardContent_Title"}>제목</option>
            <option value={"BoardContent_Writer"}>작성자</option>
            <option value={"BoardContent_Title"}>#해시태그</option>
          </select>
          <input type={"text"} className={"BoardSearch_text"} placeholder={"검색어를 입력하세요"} ></input>
          <input type={"button"} className={"BoardSearch_btn"} value={"검색"}></input>
        </form>
      </div>
      <div className='BoardSearch_HashTag'>#Python #JAVA #백엔드</div>
      <div className='SearchResult'>
        <table className='SearchResult_Table'>
          <caption>취업 취식 소식입니다.</caption> {/* 캡션에서 검색 전에는 게시판이름, 검색후에는 검색어에 대한 글 목록입니다. */}
          <tr>
            <td>
              <div className='Empl_thumbnail'>취업 취직<br/>썸네일 <br/>테스트</div>
            </td>
            <td>
              <div className='ContestContent_wrap'>
                <div className='ContestContent_name'>취업 취직 테스트1</div>
                <div className='ContestContent_period'>22.11.28 ~ 22.12.21</div>
                <div className='ContestContent_detail'>
                  [모집 분야]<br/>
                  - 모집 분야 테스트<br/>
                  [지원 자격]<br/>
                  - 신입, 경력직<br/>
                  [문의 사항] <br/>010-0000-0000 <br />
                  </div>
              </div>
            </td>
            <td>
              <div className='Empl_thumbnail'>취업 취직<br/>썸네일 <br/>테스트</div>
            </td>
            <td>
              <div className='ContestContent_wrap'>
                <div className='ContestContent_name'>취업 취직 테스트2</div>
                <div className='ContestContent_period'>22.11.28 ~ 22.12.21</div>
                <div className='ContestContent_detail'>
                  [모집 분야]<br/>
                  - 모집 분야 테스트<br/>
                  [지원 자격]<br/>
                  - 신입, 경력직<br/>
                  [문의 사항] <br/>010-0000-0000 <br />
                  </div>
              </div>
            </td>
            <td>
              <div className='Empl_thumbnail'>취업 취직<br/>썸네일 <br/>테스트</div>
            </td>
            <td>
              <div className='ContestContent_wrap'>
                <div className='ContestContent_name'>취업 취직 테스트3</div>
                <div className='ContestContent_period'>22.11.28 ~ 22.12.21</div>
                <div className='ContestContent_detail'>
                  [모집 분야]<br/>
                  - 모집 분야 테스트<br/>
                  [지원 자격]<br/>
                  - 신입, 경력직<br/>
                  [문의 사항] <br/>010-0000-0000 <br />
                  </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className='Empl_thumbnail'>취업 취직<br/>썸네일 <br/>테스트</div>
            </td>
            <td>
              <div className='ContestContent_wrap'>
                <div className='ContestContent_name'>취업 취직 테스트1</div>
                <div className='ContestContent_period'>22.11.28 ~ 22.12.21</div>
                <div className='ContestContent_detail'>
                  [모집 분야]<br/>
                  - 모집 분야 테스트<br/>
                  [지원 자격]<br/>
                  - 신입, 경력직<br/>
                  [문의 사항] <br/>010-0000-0000 <br />
                  </div>
              </div>
            </td>
            <td>
              <div className='Empl_thumbnail'>취업 취직<br/>썸네일 <br/>테스트</div>
            </td>
            <td>
              <div className='ContestContent_wrap'>
                <div className='ContestContent_name'>취업 취직 테스트2</div>
                <div className='ContestContent_period'>22.11.28 ~ 22.12.21</div>
                <div className='ContestContent_detail'>
                  [모집 분야]<br/>
                  - 모집 분야 테스트<br/>
                  [지원 자격]<br/>
                  - 신입, 경력직<br/>
                  [문의 사항] <br/>010-0000-0000 <br />
                  </div>
              </div>
            </td>
            <td>
              <div className='Empl_thumbnail'>취업 취직<br/>썸네일 <br/>테스트</div>
            </td>
            <td>
              <div className='Empl_wrap'>
                <div className='Empl_name'>취업 취직 테스트3</div>
                <div className='Empl_period'>22.11.28 ~ 22.12.21</div>
                <div className='Empl_detail'>
                  [모집 분야]<br/>
                  - 모집 분야 테스트<br/>
                  [지원 자격]<br/>
                  - 신입, 경력직<br/>
                  [문의 사항] <br/>010-0000-0000 <br />
                  </div>
              </div>
            </td>
          </tr>
        </table>
      </div>
      <div>
        <input type={'button'} value={'글쓰기'} className={'Write'}></input>
        </div>
      <div className='BoardSearch_page'> 1페이지 ▶</div> 
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
          </div>
          <div className='NavBottom' onClick={()=>setDispSelector("Login_test")}></div>
        </div>
        <div className='Main'><Disp testp={dispSelector}/></div>
    </div>
  );
}

export default App;