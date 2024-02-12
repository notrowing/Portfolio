import '../static/css/AboutMe.css';
import { Link } from 'react-scroll';

const AboutMe = () => {
    return (
        <article id="aboutme">
            <section className='aboutMe_box'>
                <div id="profileBox">
                    <h1>About me</h1>
                    <div className='profile'>
                        <img src="images/profile6.jpg" className='profileImg' alt="Profile" />
                    </div>
                </div>
                <div id="profileTable">
                    <table>
                        <tr>
                            <td>이름</td>
                            <td>조정아</td>
                        </tr>
                        <tr>
                            <td>나이</td>
                            <td>만 26세</td>
                        </tr>
                        <tr>
                            <td>학력</td>
                            <td>상명대학교 소프트웨어학과 졸업</td>
                        </tr>
                        <tr>
                            <td>경력</td>
                            <td>2021.03~2023.06 육군 정보통신병과 중위 전역</td>
                        </tr>
                        <tr>
                            <td>교육</td>
                            <td>2023.08~2023.02 한국전력공사 KEPCO Digital Boot Camp 수료 </td>
                        </tr>
                    </table>
                </div>
            </section>
     
        </article>
    );
};

export default AboutMe;
