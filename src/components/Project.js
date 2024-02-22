import React, { useState } from 'react';
import '../static/css/Project.css';
import Instagram from './Instagram';
import BlogPage from './BlogPage';
import SkyToSolar from './SkyToSolar';

import SlSlslide from './SlSlslide';
import SilverMotion from './SilverMotion';
const Project = () => {

    const [currentPage, setCurrentPage] = useState('instagram');
    
    return (

        <article id="project">
            
            <section id="projectPage">
                
                <div id = "projectTitle">Project</div>
             
                <nav id = "projectHeader">
                    <ul>
                      
                         <li onClick={() => setCurrentPage('instagram')} className={currentPage === 'instagram' ? 'pHeaderBtn active' : 'pHeaderBtn'}>Instagram</li>
                        <li onClick={() => setCurrentPage('blogpage')} className={currentPage === 'blogpage' ? 'pHeaderBtn active' : 'pHeaderBtn'}>BlogPage</li>
                        <li onClick={() => setCurrentPage('silvermotion')} className={currentPage === 'silvermotion' ? 'pHeaderBtn active' : 'pHeaderBtn'}>SILVERMOTION</li>
                        <li onClick={() => setCurrentPage('skytosolar')} className={currentPage === 'skytosolar' ? 'pHeaderBtn active' : 'pHeaderBtn'}>SKY To Solar</li>
                        <li onClick={() => setCurrentPage('slslconsulting')} className={currentPage === 'slslconsulting' ? 'pHeaderBtn active' : 'pHeaderBtn'}>SlSl-consulting</li>
                    </ul>
                      
                   
                    <div id="flagBox">
                            <div id="flag">Click<br/>Project!</div>
                    </div>
                </nav>  
                <div id='projectItem'>
                    {currentPage === 'instagram' && <Instagram/>}
                    {currentPage === 'blogpage' && <BlogPage/>}
                    {currentPage === 'silvermotion' && <SilverMotion/>}
                    {currentPage === 'skytosolar' && <SkyToSolar/>}
                    {currentPage === 'slslconsulting' && <SlSlslide/>}
                </div>
            </section>
        </article>
    );
};

export default Project;
