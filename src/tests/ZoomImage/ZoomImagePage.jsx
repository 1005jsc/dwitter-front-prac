import styled from 'styled-components';
import Image from './components/Image';
import Sample2 from './components/Sample2';
import Sample3 from './components/Sample3';
import Sample4 from './components/Sample4';
import Sample5 from './components/Sample5';
import Sample6 from './components/Sample6';

const ZoomImagePage = () => {
  return (
    <Container>
      {/* <Square /> */}
      {/* <ImageContainer>
        <GreyBackground>
          <Image />
        </GreyBackground>
      </ImageContainer> */}

      {/* <Sample2 /> */}
      <Sample3 />
      {/* <Sample4 /> */}
      {/* <Sample5 /> */}
      {/* <Sample6 /> */}
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
