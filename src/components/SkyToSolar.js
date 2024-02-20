import '../static/css/SkyToSolar.css'

const SkyToSolar = () => {
    function SkyToSolarBtn(){
      window.open("https://github.com/sosomm20141212/Sky_to_Solar");
    }
    function SkyToSolarBtn2(){
        window.open("https://notrowing.tistory.com/47");
      }
    return (
        <article id = "SkyToSolar">
           <section id="SkyToSolarPage">
            <div id = "SkyToSolarHead">
                <img src="images/skytosolarLogo.png" className='projectLogo'/>
                <div className='HeadTitle'>| 하늘 사진을 통한 태양광 발전량 예측 모델 웹 서비스</div>
            </div>

            <div id = "SkyToSolarDetail">
                <div className="ProjectImgBox">
                    <img src="images/SkyToSolarImg.gif" id='SkyToSolarImg' />
                </div>

                <div id = "SkyToSolarTable">
                    <table>
                        <tr>
                            <td>개발기간</td>
                            <td colSpan="2">2024.01.17~2024.01.25</td>
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
                            <td>메인페이지 : </td>
                            <td>풀페이지 스크롤기능(FullPageScroll) </td>
                           
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>하늘 백그라운드 애니메이션 </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>업로드페이지 :</td>
                            <td>사진 업로드 및 미리보기 기능 </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>사진 결과보기 페이지로 넘기기</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>css <span className='smallspan'>(기여도 100%)</span></td>
                        </tr>
                   
                        <tr>
                            <td></td>
                            <td colSpan="2">결과페이지 : css <span className='smallspan'>(기여도 100%)</span></td>
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
                            <td colSpan="2"> Django, React</td>
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

                    <div>
                        <button onClick={SkyToSolarBtn} className='ProjectGitBtn'>Github</button>
                        <button onClick={SkyToSolarBtn2} className='ProjectGitBtn'>Tistory</button>
                    </div>
                    
                </div>

               
            </div>
          </section>
        </article>
    );
};

export default SkyToSolar;