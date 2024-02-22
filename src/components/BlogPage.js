import '../static/css/BlogPage.css'

const BlogPage = () => {
  function BlogPageBtn(){
    window.open("https://github.com/notrowing/blogpage");
}
function BlogPageBtn2(){
    window.open("https://notrowing.tistory.com/41");
}
    return (
        <article id = "Blog">
            <section id="BlogPage">
            <div id = "BlogHead">
                <img src="images/BlogLogo.jpg" className='projectLogo'/>
                <div className='HeadTitle'>| 스프링부트를 사용하여 간단한 게시판 만들기</div>
            </div>

            <div id = "BlogDetail">
                <div className="ProjectImgBox">
                    <img src="images/BlogPage.gif" id='BlogImg' />
                </div>

                <div id = "BlogTable">
                    <table>
                        <tr>
                            <td>개발기간</td>
                            <td colSpan="2">2023.11.24~2023.11.28</td>
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
                            <td>로그인, 로그아웃</td>
                            
                           
                        </tr>
                       
                        <tr>
                            <td></td>
                            <td>게시판: 글 작성, 수정, 삭제</td>
                            <td></td>
                        </tr>    
                     
                        <tr>
                            <td></td>
                            <td>css <span className='smallspan'>(기여도 100%)</span></td>
                        </tr>
  
                        <tr>
                            <td>개발 환경</td>
                        </tr>

                        <tr>
                            <td>언어</td>
                            <td colSpan="2">Java, HTML, CSS</td>
                        </tr>

                        <tr>
                            <td>프레임워크</td>
                            <td colSpan="2">Spring Boot</td>
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

                    <div id = "gitBtnBox">
                        <button onClick={BlogPageBtn} className='blogGitBtn'>Github</button>
                        <button onClick={BlogPageBtn2} className='blogGitBtn'>Tistory</button>
                    </div>
                </div>

               
            </div>
          </section>
        </article>
    );
};

export default BlogPage;