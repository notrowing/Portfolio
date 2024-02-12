import React from 'react';
import '../static/css/Project.css'
import Pageable from './Pageable';
import ProjectPage1 from './ProjectPage1';
import ProjectPage2 from './ProjectPage2';
import ProjectPage3 from './ProjectPage3';
const Project = () => {

    return (
        <article id="project">
            프로젝트 페이지 임시 문장
            <Pageable>
                <ProjectPage1/>
                <ProjectPage2/>
                <ProjectPage3/>
            </Pageable>
        </article>
    );
};

export default Project;