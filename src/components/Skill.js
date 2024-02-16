import '../static/css/Skill.css'
import { Link } from 'react-scroll';

const Skill = () => {

    return (
        <article id="skill">
           
            <section className='skill_Section'>
                <h1>저는 이런 스킬을 사용할 수 있습니다!</h1>

                <div className='skillInfo'>
                    <div className='skillBox'>
                        <h3>Back-End</h3>
                        <ul className='skillList'>
                            <li><img src="https://img.shields.io/badge/python-3776AB?style=for-the-badge&logo=python&logoColor=white"/></li>
                            <li><img src="https://img.shields.io/badge/Java-007396?style=for-the-badge&logo=Java&logoColor=white"/></li>
                            <li><img src="https://img.shields.io/badge/springboot-6DB33F?style=for-the-badge&logo=springboot&logoColor=white"/></li>
                        </ul>
                    </div>

                    <div className='skillBox'>
                        <h3>Front-End</h3>
                        <ul className='skillList'>
                            <li><img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"/></li>
                            <li><img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white"/></li>
                            <li><img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"/></li>
                            <li><img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"/></li>
                        </ul>
                    </div>

                    <div className='skillBox'>
                        <h3>DB</h3>
                        <ul className='skillList'>
                            <li><img src="https://img.shields.io/badge/oracle-F80000?style=for-the-badge&logo=oracle&logoColor=white"/></li>
                            <li><img src="https://img.shields.io/badge/mysql-4479A1?style=for-the-badge&logo=mysql&logoColor=white"/></li>
                            <li><img src="https://img.shields.io/badge/mariaDB-003545?style=for-the-badge&logo=mariaDB&logoColor=white"/></li>
                            <li><img src="https://img.shields.io/badge/firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=white"/></li>
                        </ul>
                    </div>

                </div>

                <h1>또한 이러한 도구들도 사용 할 수 있습니다.</h1>
                <div className='skillInfo'>
                    <div className='skillBox'>
                        <h3>Tools</h3>
                        <ul className='skillList2'>
                            <li><img className='skillIcon' src='https://i.namu.wiki/i/9oRmigUE97GJmrGXu0PwIzbLTv1WeMXfllr6tsgJtarFa-YNq7o6UGlGyq5h1cCB4T1zFt8CQZWU_mJKHsCi1A.webp'/></li>
                            <li><img className='skillIcon' src='https://i.namu.wiki/i/7Jn6zeT9ynpDkoDGjL8McwYPqEN9A_PgC5b_T6HyHrIqeG-UvfSdbBNZwiP5vFkMRMulHNqLpBE-BBURXgUz85LDTGPcNVA4SN70JkHIl4T7hBJut3GZXpD8ymrvABMD2il5O6lbwFaBWV_fKBXvfQ.svg'/></li>
                            <li><img className='skillIcon' src='https://upload.wikimedia.org/wikipedia/commons/3/32/HeidiSQL_logo_image.png'/></li>
                            <li><img className='skillIcon' src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/PuTTY_Icon.svg/2048px-PuTTY_Icon.svg.png'/></li>
                            <li><img className='skillIcon' src='https://cdn.icon-icons.com/icons2/3027/PNG/512/eclipse_icon_188897.png'/></li>
                        </ul>
                    </div>

                    <div className='skillBox'>
                        <h3>Collaboration&Design&Document</h3>
                        <ul className='skillList2'>
                            <li><img className='skillIcon' src='https://cdn-icons-png.flaticon.com/512/25/25231.png'/></li>
                            <li><img className='skillIcon' src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Google_Drive_icon_%282020%29.svg/640px-Google_Drive_icon_%282020%29.svg.png'/></li>
                            <li><img className='skillIcon' src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Adobe_Illustrator_CC_icon.svg/1051px-Adobe_Illustrator_CC_icon.svg.png'/></li>
                            <li><img className='skillIcon' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/1051px-Adobe_Photoshop_CC_icon.svg.png'/></li>
                            <li><img className='skillIcon' src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Microsoft_Office_PowerPoint_%282019%E2%80%93present%29.svg/1101px-Microsoft_Office_PowerPoint_%282019%E2%80%93present%29.svg.png'/></li>
                            <li><img className='skillIcon' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVpMRy0V7LFc8Wj0iEdZI990U0abbLFlNvFb73owz3AA&s'/></li>
                        </ul>
                    </div>

                </div>
                <div className="Skill-scroll-downs">
                        <Link to = "project" smooth={true} duration={500}><span></span></Link>
                </div>
            </section>
        </article>
    );
};

export default Skill;