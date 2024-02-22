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
                            <td>개발기간</td><td>2024.01.17~2024.01.25</td>
                        </tr>
                        <tr><td>플랫폼</td> <td>Web</td></tr>
                        <tr><td>개발인원</td> <td>6명</td></tr>
                        <tr>
                            <td>담당역할</td><td>메인페이지</td>
                        </tr>
                        <tr> 
                            <td></td> <td>&nbsp;- 풀페이지 스크롤기능(FullPageScroll)</td>
                        </tr>
                        <tr>
                            <td></td> <td>&nbsp;- 하늘 백그라운드 애니메이션 </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>업로드페이지 : CSS <span className='smallspan'>(기여도 100%)</span></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>&nbsp;- 사진 업로드 및 미리보기 기능 </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>&nbsp;- 결과보기 페이지로 사진 데이터 전송</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>결과페이지 : CSS <span className='smallspan'>(기여도 100%)</span></td>
                        </tr>

                        <tr><td>프레임워크</td><td>Django, React</td></tr>
                        <tr><td>언어</td> <td>Python, Java, HTML, CSS, JavaScript</td></tr>

                        <tr><td>DB</td> <td>MariaDB</td></tr>
                        <tr><td>IDE</td> <td>HeidiSQL</td></tr>
                    </table>

                    <div id = "gitBtnBox">
                        <button onClick={SkyToSolarBtn} className='skytosolarGitBtn'>Github</button>
                        <button onClick={SkyToSolarBtn2} className='skytosolarGitBtn'>Tistory</button>
                    </div>
                    
                </div>

               
            </div>
          </section>
        </article>
    );
};

export default SkyToSolar;