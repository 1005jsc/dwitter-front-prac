import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import MouseEventDetector from '../hooks/MouseEventDetector';

const parentContainerWidth = 500;
const parentContainerHeight = 500;

const stickyDivWidth = 600;
const stickyDivHeight = 600;

const safety = 5;

const Sample3 = () => {
  MouseEventDetector();

  const [position, setPosition] = useState({x: 0, y: 0});
  const [isDragging, setIsDragging] = useState(false);

  const handleMouseDown = e => {
    // console.log('Down');
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    // console.log('Up');

    setIsDragging(false);
  };

  const handleMouseMove = e => {
    e.preventDefault();

    if (isDragging) {
      //   console.log('Move');
      const newX = position.x + e.movementX;
      const newY = position.y + e.movementY;

      const rightLimit =
        parentContainerWidth - (position.x + e.movementX) > stickyDivWidth;

      const leftLimit = position.x + e.movementX > 0;

      const topLimit = position.y + e.movementY > 0 - safety;

      const bottomLimit =
        parentContainerHeight - (position.y + e.movementY) >
        stickyDivHeight - safety;

      if (rightLimit) {
        // 여기 안에서도 y축에 관한 조건을 줘야됨

        if (topLimit) {
          setPosition({
            x: -Math.abs(stickyDivWidth - parentContainerWidth),
            y: 0,
          });
        } else if (bottomLimit) {
          setPosition({
            x: -Math.abs(stickyDivWidth - parentContainerWidth),
            y: -Math.abs(stickyDivHeight - parentContainerHeight),
          });
        } else {
          setPosition({
            x: -Math.abs(stickyDivWidth - parentContainerWidth),
            y: newY,
          });
        }
      } else if (leftLimit) {
        // x:0

        if (topLimit) {
          setPosition({x: 0, y: 0});
        } else if (bottomLimit) {
          setPosition({
            x: 0,
            y: -Math.abs(stickyDivHeight - parentContainerHeight),
          });
        } else {
          setPosition({
            x: 0,
            y: newY,
          });
        }
      } else if (topLimit) {
        // y:0

        if (rightLimit) {
          setPosition({
            x: -Math.abs(stickyDivWidth - parentContainerWidth),
            y: 0,
          });
        } else if (leftLimit) {
          setPosition({
            x: 0,
            y: 0,
          });
        } else {
          setPosition({x: newX, y: 0});
        }
      } else if (bottomLimit) {
        // y: -Math.abs(stickyDivHeight - parentContainerHeight)

        if (rightLimit) {
          setPosition({
            x: -Math.abs(stickyDivWidth - parentContainerWidth),
            y: -Math.abs(stickyDivHeight - parentContainerHeight),
          });
        } else if (leftLimit) {
          setPosition({
            x: 0,
            y: -Math.abs(stickyDivHeight - parentContainerHeight),
          });
        } else {
          setPosition({
            x: newX,
            y: -Math.abs(stickyDivHeight - parentContainerHeight),
          });
        }
      } else {
        setPosition({x: newX, y: newY});
      }

      /////////

      // if (rightLimit) {
      //   setPosition({
      //     x: -Math.abs(stickyDivWidth - parentContainerWidth),
      //     y: newY,
      //   });
      // } else if (leftLimit) {
      //   setPosition({
      //     x: 0,
      //     y: newY,
      //   });
      // } else if (topLimit) {
      //   setPosition({x: newX, y: 0});
      // } else if (bottomLimit) {
      //   setPosition({
      //     x: newX,
      //     y: -Math.abs(stickyDivHeight - parentContainerHeight),
      //   });
      // } else {
      //   setPosition({x: newX, y: newY});
      // }
    }
  };

  //   useEffect(() => {
  //     if (isDragging) {
  //       console.log('isDragging 확인');
  //       console.log(isDragging);
  //     } else {
  //     }
  //   }, [isDragging]);

  return (
    <ParentContainer>
      <StickyDiv
        isdragging={isDragging}
        style={{left: `${position.x}px`, top: `${position.y}px`}}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}>
        Drag me!
      </StickyDiv>
    </ParentContainer>
  );
};

export default Sample3;

const ParentContainer = styled.div`
  position: relative;
  width: ${() => `${parentContainerWidth}px`};
  height: ${() => `${parentContainerHeight}px`};
  background-color: #eee;
  border: 1px solid #aaa;
  overflow: hidden;
`;

const StickyDiv = styled.div`
  position: absolute;
  width: ${() => `${stickyDivWidth}px`};
  height: ${() => `${stickyDivHeight}px`};
  background-color: #0074d9;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: ${props => (props.isDragging ? 'grab' : 'default')};
`;
