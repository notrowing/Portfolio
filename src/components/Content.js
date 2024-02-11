import React from "react"
import '../static/css/Content.css';
import AboutMe from './AboutMe.js';
import Skill from './Skill.js';
import Project from './Project.js';
import Channel from './Channel.js';
import Contact from './Contact.js';
import styled from "styled-components";

const Content = () => {

    return (
        <container> 
            <ContentsWrapper id="ContentAbout">
                <AboutMe/>
            </ContentsWrapper>
            <ContentsWrapper id="ContentSkill">
                <Skill/>
            </ContentsWrapper>
            <ContentsWrapper id="ContentProject">
                <Project/>
            </ContentsWrapper>
            <ContentsWrapper id="ContentChannel">
                <Channel/>
            </ContentsWrapper>
            <ContentsWrapper id="ContentContact">
                <Contact/>
            </ContentsWrapper>
        </container> 
    );
};

export default Content;

const ContentsWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${(props) => (props.bgColor ? props.bgColor : "#fff")};
`;