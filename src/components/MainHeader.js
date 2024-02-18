
import React from 'react';
import '../static/css/MainHeader.css'
import { Link as ScrollLink } from 'react-scroll';

const MainHeader = () => {

    return (
        <article className='mainHeader'>
            

                <div className='mainTitleBox'>
                    <div className='mainImgBox'>
                       
                    </div>

                    <ul className="mainTitle">
                        <li>Full-Stack</li>
                        <li>Portfolio</li>
                    </ul>
                    <div id = "mainName">CHO Jeong A</div>

                    <div className="scroll-downs">
                        <ScrollLink  to="aboutme" smooth={true} duration={500}><span></span></ScrollLink >
                    </div>
                </div>

        </article>
    );
};

export default MainHeader;