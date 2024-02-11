import '../static/css/Main.css'
import Content from './Content';
import Header from './Header';
import MainHeader from './MainHeader';
import styled from "styled-components";

const Main = () => {

    return (
        <article className='main'>
            
            <Container>
              
                <Content />
            </Container>

        </article>
    );
};

export default Main;

const Container = styled.div`
  display: flex;
  width: 100vw;
  flex-direction: column;
  align-items: center;
  position: relative;
`;
