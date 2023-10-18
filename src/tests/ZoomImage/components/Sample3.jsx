import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import MouseEventDetector from '../hooks/MouseEventDetector';

const parentContainerWidth = 500;
const parentContainerHeight = 500;

const stickyDivWidth = 600;
const stickyDivHeight = 600;

const safety = 5;

const Sample3 = () => {
  // const {isDragging} = MouseEventDetector();

  const [positionX, setPositionX] = useState(0);
  const [positionY, setPositionY] = useState(0);

  const [isDragging, setIsDragging] = useState(false);

  const handleMouseDown = e => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = e => {
    e.preventDefault();

    if (isDragging) {
      const newX = positionX + e.movementX;
      const newY = positionY + e.movementY;

      const overRightLimit =
        parentContainerWidth - (positionX + e.movementX) > stickyDivWidth;

      const overLeftLimit = newX > 0;

      const overTopLimit = newY > 0;

      const overBottomLimit =
        parentContainerHeight - (positionY + e.movementY) > stickyDivHeight;

      if (overTopLimit) {
        if (overRightLimit || overLeftLimit) {
        } else {
          setPositionX(newX);
        }
      } else if (overRightLimit) {
        if (overTopLimit || overBottomLimit) {
        } else {
          setPositionY(newY);
        }
      } else if (overBottomLimit) {
        if (overLeftLimit || overRightLimit) {
        } else {
          setPositionX(newX);
        }
      } else if (overLeftLimit) {
        if (overTopLimit || overBottomLimit) {
        } else {
          setPositionY(newY);
        }
      } else {
        setPositionX(newX);
        setPositionY(newY);
      }
    }
  };

  return (
    <ParentContainer>
      <StickyDiv
        isdragging={isDragging}
        style={{left: `${positionX}px`, top: `${positionY}px`}}
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
