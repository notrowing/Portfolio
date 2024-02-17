import '../static/css/SilverMotion.css'

const SilverMotion = () => {

    return (
        <article id = "SilverMotion">
          <section id="SilverMotionPage">
            <div id = "SilverMotionHead">
                <img src="images/SilverMotionLogo.png" className='projectLogo'/>
                <div className='HeadTitle'>| 노약자 대상 전동차 커뮤니티 사이트</div>
            </div>
            <div>
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
                </table>
            </div>
          </section>
        </article>
    );
};

export default SilverMotion;