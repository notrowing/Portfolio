import '../static/css/SlSlpage1.css'


const  SlSlpage1 = () => {

    return (
        <article id="SlSlpage1">
           <section id="slslPage1-Section">
                <div id = "slslPage1-Head">
                    <img src="images/slslLogo.png" className='projectLogo'/>
                    <div className='HeadTitle'>| 태양광 발전량 예측 모델과 웹사이트 개발</div>
                </div>

                <div id = "slslPage1-Detail">
                <div className="ProjectImgBox">
                    <img src="images/slslValueinput.png" id='slslPage1-Img' />
                </div>
                <div id = "slslPage1-Table">
                    <table>
                        <tr><td colSpan="2">컴포넌트 구성</td></tr>
                        <tr><td colSpan="2">ValueInput.js</td></tr>
                        <tr>
                            <td></td><td>&nbsp;- 발전수익 입력 폼</td>
                        </tr>

                        <tr><td colSpan="2">ValueInfo.js</td></tr>
                        <tr>
                            <td></td><td>&nbsp;- 발전수익 입력 방법 설명</td>
                        </tr>

                        <tr><td colSpan="2">MapSvgPath.js</td></tr>
                        <tr>
                            <td></td><td>&nbsp;- 입력 폼의 지역선택 지도</td>
                        </tr>

                    </table>
                </div>
                </div>
           </section>
        </article>
    );
};

export default SlSlpage1;

