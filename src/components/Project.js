import React, { useState } from 'react';
import '../static/css/Project.css';
import ProjectPage1 from './ProjectPage1';
import ProjectPage2 from './ProjectPage2';
import ProjectPage3 from './ProjectPage3';
import ProjectPage4 from './ProjectPage4';
import { Link } from 'react-scroll';

const Project = () => {
    const [currentPage, setCurrentPage] = useState(1);

    const goToNextPage = () => {
        setCurrentPage(current => current === 4 ? 1 : current + 1);
    };
    
    const goToPreviousPage = () => {
        setCurrentPage(current => current === 1 ? 4 : current - 1);
    };

    return (
        <article id="project">
          <section className='projectPage'>
            <div className='pageSection'>
                <div className="content">
                    {currentPage === 1 && <ProjectPage1 />}
                    {currentPage === 2 && <ProjectPage2 />}
                    {currentPage === 3 && <ProjectPage3 />}
                    {currentPage === 4 && <ProjectPage4 />}
                </div>
                
                <div className="buttons">
                    <button className="prev" onClick={goToPreviousPage}>이전</button>
                    <button className="next" onClick={goToNextPage}>다음</button>
                </div>
            </div>

            <div className="project-scroll-downs">
                    <Link to = "channel" smooth={true} duration={500}><span></span></Link>
            </div>
          </section>
        </article>
    );
};

export default Project;
