import {useEffect, useRef, useState} from 'react';
import sampleImage from '../../../assets/image/1.jpg';
import styled from 'styled-components';

const Image = () => {
  const [ratio, setRatio] = useState(0.3);

  const frameRef = useRef(null);
  const imageContainerRef = useRef(null);

  const [mouseStartX, setMouseStartX] = useState(0);
  const [mouseStartY, setMouseStartY] = useState(0);

  const [originalPositionX, setOriginalPositionX] = useState(null);
  const [originalPositionY, setOriginalPositionY] = useState(null);
  const [movedPositionX, setMovedPositionX] = useState(null);
  const [movedPositionY, setMovedPositionY] = useState(null);

  const wheelHandler = e => {
    let imageContainer;
    let offsetX = 0;

    if (imageContainerRef.current) {
      imageContainer = imageContainerRef.current;
      offsetX = e.clientX - imageContainer.getBoundingClientRect().left;
      //   console.log(`e.client: ${e.clientX} ${e.clientY}`);
      //   console.log(
      //     `${imageContainer.getBoundingClientRect().left} ${
      //       imageContainer.getBoundingClientRect().top
      //     }`,
      //   );
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

  const handleMouseDown = e => {
    console.log('handleMouseDown');
    console.log(e);
  };
  const handleMouseUp = e => {
    console.log('handleMouseUp');
    console.log(e);
  };
  const handleMouseMove = e => {
    console.log('handleMouseMove');
    console.log(e);
  };

  const onDragStart = e => {
    console.log('-------onDragStart-------');
    // console.log(e);
    // console.log(e.clientX);
    // console.log(e.clientY);
    // console.log('client : ' + '(' + e.clientX + ',' + e.clientY + ')');

    // console.log(e.pageX);
    // console.log(e.pageY);
    // console.log('page : ' + '(' + e.pageX + ',' + e.pageY + ')');
    // console.log(e.screenX);
    // console.log(e.screenY);
    // console.log('screen : ' + '(' + e.screenX + ',' + e.screenY + ')');

    let imageContainer;
    let offsetX = 0;

    if (imageContainerRef.current) {
      imageContainer = imageContainerRef.current;
      offsetX = e.clientX - imageContainer.getBoundingClientRect().left;
    }

    let offsetY = 0;

    if (imageContainerRef.current) {
      imageContainer = imageContainerRef.current;
      offsetY = e.clientY - imageContainer.getBoundingClientRect().top;
    }

    setOriginalPositionX(offsetX);
    setOriginalPositionY(offsetY);
  };
  const onDragEnter = e => {
    console.log('onDragEnter');
    // console.log(e);
  };
  const onDragOver = e => {
    console.log('onDragOver');
    // console.log(e);

    // 옮기기 전 좌표
    let imageContainer;
    let offsetX = 0;

    if (imageContainerRef.current) {
      imageContainer = imageContainerRef.current;
      offsetX = e.clientX - imageContainer.getBoundingClientRect().left;
      //   console.log(`e.client: ${e.clientX} ${e.clientY}`);
      //   console.log(
      //     `${imageContainer.getBoundingClientRect().left} ${
      //       imageContainer.getBoundingClientRect().top
      //     }`,
      //   );
    }

    let offsetY = 0;

    if (imageContainerRef.current) {
      imageContainer = imageContainerRef.current;
      offsetY = e.clientY - imageContainer.getBoundingClientRect().top;
    }

    setMovedPositionX(offsetX);
    setMovedPositionY(offsetY);
  };
  const onDragEnd = e => {
    // console.log('-------');
    console.log('onDragEnd');
    // // console.log(e);
    // console.log(e.clientX);
    // console.log(e.clientY);
    // console.log('client : ' + '(' + e.clientX + ',' + e.clientY + ')');

    // console.log(e.pageX);
    // console.log(e.pageY);
    // console.log('page : ' + '(' + e.pageX + ',' + e.pageY + ')');
    // console.log(e.screenX);
    // console.log(e.screenY);
    // console.log('screen : ' + '(' + e.screenX + ',' + e.screenY + ')');
    // console.log('-------');
  };

  const [moveX, setMoveX] = useState(0);
  const [moveY, setMoveY] = useState(0);
  useEffect(() => {
    console.log('골골곡ㄹ');
    console.log(movedPositionX - originalPositionX);
    console.log(movedPositionY - originalPositionY);

    // setMouseStartX()
    // setMouseStartY
  }, [movedPositionX, movedPositionY]);

  const handleClick = () => {
    console.log('치ㅑ차');

    setMoveX(prev => prev + 60);
    setMoveY(prev => prev + 60);

    // setMouseStartX();
    // setMouseStartY();
  };

  return (
    <>
      <Wrapper ref={imageContainerRef}>
        <Frame
          onClick={handleClick}
          id={'2'}
          ref={frameRef}
          ratio={ratio}
          mousestartx={mouseStartX}
          mousestarty={mouseStartY}
          onWheel={wheelHandler}
          //   onMouseDown={handleMouseDown}
          //   onMouseUp={handleMouseUp}
          //   onMouseMove={handleMouseMove}

          onDragStart={e => onDragStart(e)}
          onDragEnter={e => onDragEnter(e)}
          onDragOver={onDragOver}
          onDragEnd={onDragEnd}
          moveContentX={moveX}
          moveContentY={moveY}
          draggable={false}>
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
        /* console.log(2.2 * ratio); */
        return 2.2 * ratio;
      }}
    )
    translate(
      ${({moveContentX, moveContentY}) => {
        return `${moveContentX}px , ${moveContentY}px`;
      }}
    );

  /* transform: translate(120px); */

  transform-origin: ${({mouseStartX}) => mouseStartX}px
    ${({mouseStartY}) => mouseStartY}px;
`;

const Picture = styled.div`
  width: 100%;
`;

const WorkLargeImage = styled.img`
  width: 100%;
`;
