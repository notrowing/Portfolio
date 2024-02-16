import React from 'react';
import '../static/css/ProjectPage.css'

const ProjectPage1 = () => {

    return (
        <article id="ProjectPage1">
        
           
            <section className='Page1'>
                <div>
                    <h1>블로그 만들기</h1>
                    <div className='ProjectImg'>
                        <img src="images/profile6.jpg" className='PageImg' alt="Profile" />
                    </div>
                </div>


                <table>
                    <tr>
                        <td>개발기간</td>
                        <td>2023.11.24~2023.11.30</td>
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
                        <td>지역별 보조금 정보 크롤링(기여도 100%)</td>
                   </tr>
                   <tr>
                        <td></td>
                        <td>메인페이지: 차량 검색 (기여도 100%)</td>
                      
                   </tr>
                   <tr>
                        <td></td>
                        <td>모델 페이지 : 차량제원(기여도 85%)<br/>
                        차량구매링크(기여도 100%)<br/>
                        프론트앤드(기여도 100%)</td>
                   </tr>
                </table>
            </section>
        </article>
    );
};

export default ProjectPage1;