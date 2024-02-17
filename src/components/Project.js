import React, { useState } from 'react';
import '../static/css/Project.css';

import BlogPage from './BlogPage';
import SkyToSolar from './SkyToSolar';
import SlSlconsulting from './SlSlconsulting';
import SilverMotion from './SilverMotion';
const Project = () => {

    const [currentPage, setCurrentPage] = useState('BlogPage');
    
    return (

        <article id="project">
            <section id="projectPage">
                <div id = "projectTitle">Project</div>
               
                    <nav id = "projectHeader">
                        <ul>
                            <li onClick={() => setCurrentPage('blogpage')} className='pHeaderBtn'>BlogPage</li>
                            <li onClick={() => setCurrentPage('silvermotion')} className='pHeaderBtn'>SILVERMOTION</li>
                            <li onClick={() => setCurrentPage('skytosolar')} className='pHeaderBtn'>SKY To Solar</li>
                            <li onClick={() => setCurrentPage('slslconsulting')} className='pHeaderBtn'>SlSl-consulting</li>
                        </ul>
                    </nav>
                    <div id='projectItem'>
                        {currentPage === 'blogpage' && <BlogPage/>}
                        {currentPage === 'silvermotion' && <SilverMotion/>}
                        {currentPage === 'skytosolar' && <SkyToSolar/>}
                        {currentPage === 'slslconsulting' && <SlSlconsulting/>}
                    </div>
                
            </section>
        </article>
    );
};

export default Project;
