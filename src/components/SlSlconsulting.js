import '../static/css/SlSlconsulting.css'

const SlSlconsulting = () => {

  function slslBtn(){
    window.open("https://github.com/yyoonjju/slsl-consulting");
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
                    <img src="images/slslImg.png" id='slslImg' />
                </div>

                <div id = "slslTable">
                    <table>
                        <tr>
                            <td>개발기간</td>
                            <td colSpan="2">2024.01.26~2024.02.21</td>
                        </tr>
                        <tr>
                            <td>플랫폼</td>
                            <td>Web</td>
                        </tr>
                        <tr>
                            <td>개발인원</td>
                            <td>6명</td>
                        </tr>
                        <tr>
                            <td>담당역할</td>
                            <td>발전수익 입력 : </td>
                            <td>발전수익입력, 입력방법 설명</td>
                           
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>css <span className='smallspan'>(기여도 80%)</span></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>발전수익 결과 :</td>
                            <td>설치 비용 및 예상 수익 결과 계산</td>
                        </tr>
                     
                        <tr>
                            <td></td>
                            <td>문의하기 페이지:</td>
                            <td>EmailJS를 사용하여</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>관리자 주소로 문의하기폼 결과 받기</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>css <span className='smallspan'>(기여도 80%)</span></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>상세 페이지 헤더 :</td>
                            <td>scroll을 감지하여 내릴때 숨김,</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>올릴때 나타나도록 작성</td>
                        </tr>
                   

                    
                        <tr>
                            <td>개발 환경</td>
                        </tr>
                        <tr>
                            <td>언어</td>
                            <td colSpan="2">Python, Javam HTML,CSS, JavaScript</td>
                        </tr>
                        <tr>
                            <td>프레임워크</td>
                            <td colSpan="2">Spring Boot, React</td>
                        </tr>
                        <tr>
                            <td>DB</td>
                            <td colSpan="2">MariaDB</td>
                        </tr>
                        <tr>
                            <td>IDE</td>
                            <td>HeidiSQL</td>
                        </tr>
                    </table>

                    <button onClick={slslBtn} className='ProjectGitBtn'>Github</button>
                </div>

               
            </div>
          </section>
        </article>
    );
};

export default SlSlconsulting;