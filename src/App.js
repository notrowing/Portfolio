import React from "react";
import styled from "styled-components";
import Content from "./components/Content";
import { FaRegArrowAltCircleUp } from "react-icons/fa";
import Header from "./components/Header";
import MainHeader from "./components/MainHeader";
import Footer from "./components/Footer";

function App() {

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
      <div>
        <Container>
          <Header/>
          <MainHeader/>
          <Button size="36px" color="#767676" onClick={handleScrollToTop} />
	        <Content />
          <Footer/>
        </Container>

      </div>
  );
}

export default App;

const Container = styled.div`
  position: relative;
`;

const Button = styled(FaRegArrowAltCircleUp)`
  position: fixed;
  bottom: 2.5vh;
  right: 2.5vw;
  z-index: 1000;
  outline: none;
  cursor: pointer;
`;