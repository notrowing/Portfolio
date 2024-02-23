
import '../static/css/SlSlconsulting.css'

const SlSlconsulting = () => {

  function slslBtn(){
    window.open("https://github.com/yyoonjju/slsl-consulting");
  }

  function slslBtn2(){
    window.open("https://notrowing.tistory.com/49")
  }

    return (
        <article id = "SlSlconsulting">
         
          <section id="slslPage">
            <div id = "slslHead">
                <img src="images/slslLogo.png" className='projectLogo'/>
                <div className='HeadTitle'>| 태양광 발전량 예측 모델과 웹사이트 개발</div>
            </div>

            <div id = "slslDetail">
                <div className="ProjectImgBox">
                    <img src="images/slsldetail.gif" id='slslImg' />
                </div>

                <div id = "slslTable">
                  
                        <table>
                            <tr>
                                <td>개발기간</td> <td>2024.01.26 ~ 2024.02.21</td></tr>
                            <tr><td>플랫폼</td> <td>Web</td></tr>
                            <tr><td>개발인원</td> <td>6명</td></tr>
                         
                            <tr>
                                <td>담당역할</td>
                                <td>헤더 구성</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>&nbsp;- 메인 헤더 (햄버거 메뉴)</td> 
                            </tr>
                            <tr>
                                <td></td>
                                <td>&nbsp;- 상세페이지 기본헤더 </td>
                            </tr>
                           
                            <tr>
                                <td></td>
                                <td>발전수익 및 설치비용 예측조회 페이지 </td>
                            </tr>
                            <tr> 
                                <td></td>
                                <td>&nbsp;- 발전수익 입력페이지 / 입력 안내</td> 
                            </tr>
                            <tr>
                                <td></td>
                                <td>&nbsp;- 설치 비용 예측 결과 페이지</td>
                            </tr>
                            <tr><td></td><td>문의하기 페이지</td></tr>
                            <tr>
                                <td></td>
                                <td>&nbsp;- EmailJS를 사용하여 관리자에게 문의 전송</td>
                            </tr>
                            <tr><td>프레임워크</td> <td>Spring Boot, React</td></tr>
                            <tr><td>언어</td> <td>Python, Java, HTML, CSS, JavaScript</td></tr>
                            
                            <tr><td>DB</td> <td>MariaDB</td></tr>
                            <tr><td>IDE</td> <td>HeidiSQL</td></tr>
                        </table>
                 

                    <div id="gitBtnBox">
                        <button onClick={slslBtn} className='slslGitBtn'>Github</button>
                        <button onClick={slslBtn2} className='slslGitBtn'>Tistory</button>
                    </div>

                </div>

               
            </div>
          </section>
        </article>
    );
};

export default SlSlconsulting;