import {useRef, useState} from 'react';
import sampleImage from '../../../assets/image/1.jpg';
import styled from 'styled-components';

const Image = () => {
  const [ratio, setRatio] = useState(0.3);

  const frameRef = useRef(null);
  const imageContainerRef = useRef(null);

  const [mouseStartX, setMouseStartX] = useState(0);
  const [mouseStartY, setMouseStartY] = useState(0);

  const wheelHandler = e => {
    let imageContainer;
    let offsetX = 0;

    if (imageContainerRef.current) {
      imageContainer = imageContainerRef.current;
      offsetX = e.clientX - imageContainer.getBoundingClientRect().left;
      console.log(`e.client: ${e.clientX} ${e.clientY}`);
      console.log(
        `${imageContainer.getBoundingClientRect().left} ${
          imageContainer.getBoundingClientRect().top
        }`,
      );
    }

    let offsetY = 0;

    if (imageContainerRef.current) {
      imageContainer = imageContainerRef.current;
      offsetY = e.clientY - imageContainer.getBoundingClientRect().top;
    }

    setMouseStartX(offsetX);
    setMouseStartY(offsetY);

    const ratioValue = ratio - 0.001 * e.deltaY;

    if (ratioValue >= 0.26 && ratioValue < 0.5) {
      const slowDownRatioValue = ratioValue * 0.9;

      setRatio(slowDownRatioValue);
    } else if (ratioValue >= 0.5 && ratioValue < 2.06) {
      setRatio(ratioValue);
    }
  };

  return (
    <>
      <Wrapper ref={imageContainerRef}>
        <Frame
          ratio={ratio}
          mouseStartX={mouseStartX}
          mouseStartY={mouseStartY}
          ref={frameRef}
          onWheel={wheelHandler}>
          <WorkLargeImage src={sampleImage} alt="" />
          {/* <Picture>
            
          </Picture> */}
        </Frame>
      </Wrapper>
    </>
  );
};
export default Image;

const Wrapper = styled.div`
  height: 100%;
  position: relative;
  overflow: hidden;
`;

const Frame = styled.div`
  position: relative;
  /* transition: all 2s ease-out; */

  border: 1px solid black;

  transform: scale(
    ${({ratio}) => {
      console.log(2.2 * ratio);
      return 2.2 * ratio;
    }}
  );

  transform-origin: ${({mouseStartX}) => mouseStartX}px
    ${({mouseStartY}) => mouseStartY}px;
`;

const Picture = styled.div`
  width: 100%;
`;

const WorkLargeImage = styled.img`
  width: 100%;
`;
