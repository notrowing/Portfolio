import React from "react";
import styled from "styled-components";
import Content from "./components/Content";
import { FaRegArrowAltCircleUp } from "react-icons/fa";
import Header from "./components/Header";
import MainHeader from "./components/MainHeader";

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
  bottom: 20px;
  right: 20px;
  z-index: 1000;
  outline: none;
`;