import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import styled from 'styled-components';
import '../static/css/Header.css';

const Header = () => {
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollPos, visible]);

    return (
        <article className='Header'>
            <StyledHeader className={!visible ? 'hide' : ''}>
                <StyledSection>
                    <div className='headTitle'>CHO JEONG A</div>
                    <Menu className='headMenu'>
                        <MenuItem>
                            <StyledLink to="aboutme" smooth={true} duration={500} className="menu-item">ABOUT ME</StyledLink>
                        </MenuItem>
                        <MenuItem>
                            <StyledLink to="skill" smooth={true} duration={500} className="menu-item">SKILL</StyledLink>
                        </MenuItem>
                        <MenuItem>
                            <StyledLink to="project" smooth={true} duration={500} className="menu-item">PROJECT</StyledLink>
                        </MenuItem>
                        <MenuItem>
                            <StyledLink to="channel" smooth={true} duration={500} className="menu-item">CHANNEL</StyledLink>
                        </MenuItem>
                        <MenuItem>
                            <StyledLink to="contact" smooth={true} duration={500} className="menu-item">CONTACT</StyledLink>
                        </MenuItem>
                    </Menu>
                </StyledSection>
            </StyledHeader>
        </article>

    );
};

const StyledHeader = styled.article`
    position: fixed;
    width: 100vw;
    top: 0;
    height: 10vh;
    z-index: 100;
    background-color: rgba(255, 255, 255, 0.5);
    transition: top 0.3s;
    box-shadow: 0 0 20px lightgray;
    &.hide {
        top: -100px;
    }
`;

const StyledSection = styled.section`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100%;
`;

const Menu = styled.menu`
    display: flex;
    flex-direction: row;
    gap: 32px;
`;

const MenuItem = styled.div`
    list-style: none;
`;

const StyledLink = styled(Link)`
    font-size: 1.5vw;
    font-weight: 500;
    text-decoration: none;
    color: #333;
    padding: 5px;
    border-radius: 10px;
    cursor: pointer;
    &:hover {
        color: navy;
    }
`;

export default Header;
