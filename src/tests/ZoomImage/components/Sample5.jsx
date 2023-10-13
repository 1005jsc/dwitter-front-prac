import ReactImageMagnify from 'react-image-magnify';

import sampleImage from '../../../assets/image/1.jpg';
import sampleImage2 from '../../../assets/image/resignation.png';
import styled from 'styled-components';

const Sample5 = () => {
  return (
    <>
      <Yo
        {...{
          smallImage: {
            alt: 'Wristwatch by Ted Baker London',
            isFluidWidth: true,
            // src: watchImg300,

            src: sampleImage2,
          },
          largeImage: {
            src: sampleImage2,
            width: 1200,
            height: 1400,
          },
        }}
      />
    </>
  );
};
export default Sample5;

const Yo = styled(ReactImageMagnify)`
  width: 800;
  height: 600;
  border: 1px solid black;
`;
