import '../static/css/SilverMotion.css'

const SilverMotion = () => {

    function SilverMotionBtn(){
        window.open("https://github.com/20153306Kimgunwoo/silver-car-community");
    }
    function SilverMotionBtn2(){
        window.open("https://notrowing.tistory.com/43");
    }

    return (
        <article id = "SilverMotion">
          <section id="SilverMotionPage">
            <div id = "SilverMotionHead">
                <img src="images/SilverMotionLogo.png" className='projectLogo'/>
                <div className='HeadTitle'>| 노약자 대상 전동차 커뮤니티 사이트</div>
            </div>

            <div id = "SilverMotionDetail">
                <div className="ProjectImgBox">
                    <img src="images/silvermotion.gif" id='SilverMotionImg' />
                </div>

                <div id = "SilverMotionTable">
                    <table>
                        <tr>
                            <td>개발기간</td>
                            <td>2023.12.05~2023.12.09</td>
                        </tr>
                        <tr>
                            <td>플랫폼</td>
                            <td>Web</td>
                        </tr>
                        <tr>
                            <td>개발인원</td>
                            <td>4명</td>
                        </tr>
                        <tr>
                            <td>담당역할</td>
                            <td>지역별 보조금 정보 크롤링</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>메인페이지 : 차량 검색</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>모델페이지: 차량 제원, 차량구매링크, css</td>
                        </tr>
                    
                        <tr>
                            <td>개발 환경</td>
                        </tr>
                        <tr>
                            <td>언어</td>
                            <td>Python, Javam HTML,CSS, JavaScript</td>
                        </tr>
                        <tr>
                            <td>프레임워크</td>
                            <td>Spring Boot, React</td>
                        </tr>
                        <tr>
                            <td>DB</td>
                            <td>MariaDB</td>
                        </tr>
                        <tr>
                            <td>IDE</td>
                            <td>HeidiSQL</td>
                        </tr>
                    </table>

                    <div>
                        <button onClick={SilverMotionBtn} className='ProjectGitBtn'>Github</button>
                        <button onClick={SilverMotionBtn2} className='ProjectGitBtn'>Tistory</button>
                    </div>
                </div>

               
            </div>
          </section>
        </article>
    );
};

export default SilverMotion;