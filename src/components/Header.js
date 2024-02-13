import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import styled from 'styled-components';

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
        <StyledHeader className={!visible ? 'hide' : ''}>
            <StyledSection>
                <h2>CHO JEONG A</h2>
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
    );
};

const StyledHeader = styled.article`
    position: fixed;
    width: 100%;
    top: 0;
    height: 100px;
    z-index: 100;
    background-color: rgba(255, 255, 255, 0.5);
    transition: top 0.3s;

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
    font-size: 20px;
    font-weight: 500;
    text-decoration: none;
    color: #333;
    padding: 10px;
    border-radius: 20px;
    cursor: pointer;
    &:hover {
        color: white;
        background-color: #93A9D1;
    }
`;

export default Header;
