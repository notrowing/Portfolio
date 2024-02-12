import React, { useRef } from "react";
import styled from "styled-components";

const PageableContainer = styled.div`
  display: flex;
  overflow-x: hidden;
  scroll-snap-type: x mandatory;
`;

const Page = styled.div`
  flex: 0 0 100%;
  scroll-snap-align: start;
`;

const LeftButton = styled.button`
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  z-index: 1;
`;

const RightButton = styled.button`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  z-index: 1;
`;

const Pageable = ({ children }) => {
  const containerRef = useRef(null);

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: -window.innerWidth,
        behavior: "smooth"
      });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: window.innerWidth,
        behavior: "smooth"
      });
    }
    console.log(containerRef.current);
  };

  return (
    <>
      <LeftButton onClick={scrollLeft}>Left</LeftButton>
      <RightButton onClick={scrollRight}>Right</RightButton>
      <PageableContainer ref={containerRef}>
        {React.Children.map(children, (child, index) => (
          <Page key={index}>{child}</Page>
        ))}
      </PageableContainer>
    </>
  );
};

export default Pageable;
