import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  width: 100px;
  height: 100px;
  background-color: blue;
  cursor: grab;
`;

function Sample4() {
  const [isDragging, setDragging] = useState(false);
  const [offsetX, setOffsetX] = useState(0);
  const [offsetY, setOffsetY] = useState(0);

  const handleMouseDown = e => {
    console.log('로로로ㅗ로');

    setDragging(true);
    setOffsetX(e.clientX);
    setOffsetY(e.clientY);
  };

  const handleMouseMove = e => {
    if (isDragging) {
      console.log('리뢰뢰뢰뢰뢰뢰');

      const newOffsetX = e.clientX - offsetX;
      const newOffsetY = e.clientY - offsetY;

      // 드래그 중인 경우, offsetX와 offsetY를 업데이트하고 이동한 거리를 사용하여 원하는 작업 수행
      // 여기에서는 스타일을 변경하여 드래그된 요소를 이동시킵니다.
      setOffsetX(e.clientX);
      setOffsetY(e.clientY);

      console.log(e.clientX + ',' + e.clientY);

      // 이동 로직을 추가할 수 있습니다.
      // 예: 요소를 이동시키는 스타일을 적용
      document.querySelector(
        'your-selector',
      ).style.transform = `translate(${newOffsetX}px, ${newOffsetY}px)`;
    }
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return <StyledDiv onMouseDown={handleMouseDown}>Drag me</StyledDiv>;
}

export default Sample4;
