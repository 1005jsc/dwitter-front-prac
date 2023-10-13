import {useEffect, useRef, useState} from 'react';
import sampleImage from '../../../assets/image/1.jpg';
import styled from 'styled-components';

const Image = () => {
  const [ratio, setRatio] = useState(0.3);

  const frameRef = useRef(null);
  const imageContainerRef = useRef(null);

  const [mouseStartX, setMouseStartX] = useState(0);
  const [mouseStartY, setMouseStartY] = useState(0);

  const [originalPositionX, setOriginalPositionX] = useState(0);
  const [originalPositionY, setOriginalPositionY] = useState(0);
  const [movedPositionX, setMovedPositionX] = useState(0);
  const [movedPositionY, setMovedPositionY] = useState(0);

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

  const onDragStart = e => {
    // e.preventDefault();
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
    // e.preventDefault();
    console.log('onDragEnter');
    // console.log(e);
  };
  const onDragOver = e => {
    e.preventDefault();
    // console.log('onDragOver');
    // // console.log(e);

    // // 옮기기 전 좌표
    // let imageContainer;
    // let offsetX = 0;

    // if (imageContainerRef.current) {
    //   imageContainer = imageContainerRef.current;
    //   offsetX = e.clientX - imageContainer.getBoundingClientRect().left;
    //   //   console.log(`e.client: ${e.clientX} ${e.clientY}`);
    //   //   console.log(
    //   //     `${imageContainer.getBoundingClientRect().left} ${
    //   //       imageContainer.getBoundingClientRect().top
    //   //     }`,
    //   //   );
    // }

    // let offsetY = 0;

    // if (imageContainerRef.current) {
    //   imageContainer = imageContainerRef.current;
    //   offsetY = e.clientY - imageContainer.getBoundingClientRect().top;
    // }
  };

  //   useEffect(() => {
  //     console.log('movedPositionX ' + movedPositionX);
  //     console.log('movedPositionY ' + movedPositionY);
  //   }, [movedPositionX, movedPositionY]);

  //   useEffect(() => {
  //     console.log('originalPositionX ' + originalPositionX);
  //     console.log('originalPositionY ' + originalPositionY);
  //   }, [originalPositionX, originalPositionY]);

  const onDragEnd = e => {
    console.log('드레그엔드 ');
    e.preventDefault();

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
    setMovedPositionX(offsetX - originalPositionX);
    setMovedPositionY(offsetY - originalPositionY);
    setOriginalPositionX(offsetX - originalPositionX);
    setOriginalPositionY(offsetY - originalPositionY);
  };

  const handleDrop = e => {
    console.log(e);
    console.log('onDrop');
  };

  const handleClick = () => {
    console.log('치ㅑ차');

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

          onDragStart={onDragStart}
          onDragEnter={onDragEnter}
          onDragOver={onDragOver}
          //   onDrop={handleDrop}
          //   onDrop={onDragEnd}
          onDragEnd={onDragEnd}
          dragmovecontentx={movedPositionX}
          dragmovecontenty={movedPositionY}
          // draggable={false}
          //   draggable
        >
          <WorkLargeImage src={sampleImage} alt="" />

          {/* <DivImage /> */}
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
      ${({dragmovecontentx, dragmovecontenty}) => {
        console.log('여기확인');
        console.log(`${dragmovecontentx}px , ${dragmovecontenty}px`);

        return `${dragmovecontentx}px , ${dragmovecontenty}px`;
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

const DivImage = styled.div`
  /* width: 100%; */
  width: 150px;
  height: 150px;
  background-color: blue;
`;
