import '../static/css/Skill.css'

const Skill = () => {

    return (
        <article id="skill">
           
            <section className='skill_Section'>
                <h1>저는 이런 스킬을 사용할 수 있습니다!</h1>

                <div className='skillInfo'>
                    <div className='skillBox'>
                        <h3>Back-End</h3>
                        <ul className='skillList'>
                            <li>C</li>
                            <li>python</li>
                            <li>Java</li>
                            <li>Spring Boot</li>
                            <li>Mybatis</li>
                            <li>RESTful API</li>
                        </ul>
                    </div>

                    <div className='skillBox'>
                        <h3>Front-End</h3>
                        <ul className='skillList'>
                            <li>HTML5</li>
                            <li>CSS3</li>
                            <li>REACT</li>
                            <li>JavaScript</li>
                        </ul>
                    </div>

                    <div className='skillBox'>
                        <h3>DB</h3>
                        <ul className='skillList'>
                            <li>Oracle</li>
                            <li>MySQL</li>
                            <li>MariaDB</li>
                            <li>REACT</li>
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
            </section>
        </article>
    );
};

export default Skill;