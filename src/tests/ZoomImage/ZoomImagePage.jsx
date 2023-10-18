import styled from 'styled-components';
import Image from './components/Image';

import Sample3 from './components/Sample3';

const ZoomImagePage = () => {
  return (
    <Container>
      {/* <Square /> */}
      {/* <ImageContainer>
        <GreyBackground>
          <Image />
        </GreyBackground>
      </ImageContainer> */}

      <Sample3 />
    </Container>
  );
};
export default ZoomImagePage;

const Container = styled.section`
  /* width: 700px; */
  /* height: 500px; */
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
`;

const ImageContainer = styled.div`
  width: 900px;
  height: 600px;
  align-items: center;
  justify-content: center;
`;

const GreyBackground = styled.div`
  position: relative;

  background-color: #f5f5f5;

  width: 100%;
  height: 100%;
`;

const Square = styled.div`
  border: 1px solid black;
  width: 40px;
  height: 40px;
  background-color: blue;
`;
