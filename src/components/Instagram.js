import '../static/css/Instagram.css'

const Instagram = () => {

    function InstagramBtn(){
        window.open("https://github.com/notrowing/instagram");
    }
    function InstagramBtn2(){
        window.open("https://notrowing.tistory.com/16");
    }


    return (
        <article id = "Instagram">
          <section id="InstagramPage">
            <div id = "InstagramHead">
                <img src="images/InstagramLogo.png" className='projectLogo'/>
                <div className='HeadTitle'>&nbsp;&nbsp;|&nbsp;&nbsp; 인스타그램 클론코딩</div>
            </div>

            <div id = "InstagramDetail">
                <div className="ProjectImgBox">
                    <img src="images/InstagramImg.png" id='InstagramImg' />
                </div>

                <div id = "InstagramTable">
                    <table>
                        <tr>
                            <td>개발기간</td>
                            <td>2023.10.24~2023.10.30</td>
                        </tr>
                        <tr>
                            <td>플랫폼</td>
                            <td>Web</td>
                        </tr>
                        <tr>
                            <td>개발인원</td>
                            <td>1명</td>
                        </tr>
                        <tr>
                            <td>담당역할</td>
                            <td>로그인 페이지</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>메인 페이지</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>사용자 프로필 페이지</td>
                        </tr>
                    
                        <tr>
                            <td>개발 환경</td>
                        </tr>
                        <tr>
                            <td>언어</td>
                            <td>HTML, CSS, JavaScript</td>
                        </tr>
                        <tr>
                            <td>개발 도구</td>
                            <td>Visualstudiocode</td>
                        </tr>
                    </table>

                   <div>
                        <button onClick={InstagramBtn} className='ProjectGitBtn'>Github</button>
                        <button onClick={InstagramBtn2} className='ProjectGitBtn'>Tistory</button>
                   </div>
                </div>

               
            </div>
          </section>
        </article>
    );
};

export default Instagram;