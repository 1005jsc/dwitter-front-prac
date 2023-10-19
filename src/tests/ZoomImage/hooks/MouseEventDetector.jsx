import {useEffect, useState} from 'react';

const MouseEventDetector = () => {
  const [isDragging, setIsDragging] = useState(false);

  const handleMouseDown = e => {
    setIsDragging(true);

    console.log('mousedown ', e.movementX);
  };
  const handleMouseUp = e => {
    setIsDragging(false);
    console.log('mouseup ', e.movementX);
  };
  const handleMouseMove = e => {
    if (isDragging) {
      console.log('mousemove ', e.movementX);
    }
  };

  // useEffect(() => {
  //   console.log('isDragging 확인');
  //   console.log(isDragging);
  // }, [isDragging]);

  useEffect(() => {
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      console.log('mouseEvent 없애기');
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return {
    isDragging,
  };
};
export default MouseEventDetector;
