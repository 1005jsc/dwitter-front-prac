import React, {useState} from 'react';
import styled from 'styled-components';

import sampleImage2 from '../../../assets/image/resignation.png';

const Container = styled.div`
  position: relative;
  width: 400px;
  height: 300px;
  overflow: hidden;
  cursor: pointer;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  transition: transform 0.3s;
  transform-origin: 0 0;
`;

const ZoomedArea = styled.div`
  position: absolute;
  width: 200px; /* 원하는 확대 영역의 크기 설정 */
  height: 150px; /* 원하는 확대 영역의 크기 설정 */
  border: 2px solid #000;
  background: rgba(255, 255, 255, 0.8);
  pointer-events: none;
  display: none;
`;

const Sample6 = () => {
  const [zoomed, setZoomed] = useState(false);
  const [position, setPosition] = useState({x: 0, y: 0});

  const toggleZoom = () => {
    setZoomed(!zoomed);
  };

  const handleMouseMove = e => {
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setPosition({x, y});
  };

  return (
    <Container
      className={zoomed ? 'zoomed' : ''}
      onMouseMove={handleMouseMove}
      onClick={toggleZoom}>
      <Image src={sampleImage2} alt="Your Image" />
      {zoomed && (
        <ZoomedArea
          style={{
            transform: `scale(2) translate(${-position.x}px, ${-position.y}px)`,
            display: 'block',
          }}
        />
      )}
    </Container>
  );
};

export default Sample6;
