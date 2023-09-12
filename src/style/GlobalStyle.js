import {createGlobalStyle} from 'styled-components';
import NotoSansKRRegular from '../assets/fonts/NotoSansKR.ttf';
import NotoSansJPRegular from '../assets/fonts/NotoSansJP.ttf';
import RobotoRegular from '../assets/fonts/Roboto.ttf';
import LatoBlack from '../assets/fonts/LatoBlack.ttf';
import LatoBlackItalic from '../assets/fonts/LatoBlackItalic.ttf';
import LatoBold from '../assets/fonts/LatoBold.ttf';
import LatoBoldItalic from '../assets/fonts/LatoBoldItalic.ttf';
import LatoItalic from '../assets/fonts/LatoItalic.ttf';
import LatoLight from '../assets/fonts/LatoLight.ttf';
import LatoLightItalic from '../assets/fonts/LatoLightItalic.ttf';
import LatoRegular from '../assets/fonts/LatoRegular.ttf';
import LatoThin from '../assets/fonts/LatoThin.ttf';
import LatoThinItalic from '../assets/fonts/LatoThinItalic.ttf';

export const GlobalStyles = createGlobalStyle`


  body{
    font-family: ${({language, theme}) => {
      switch (language) {
        case 'ko':
          console.log('한국어');
          console.log();
          return theme.fonts.NotoSansKr.regular;

        case 'en-US':
          console.log('영어');
          return theme.fonts.Roboto.regular;

        case 'jp':
          console.log('일본어');
          return theme.fonts.NotoSansJP.regular;

        default:
          console.log('영어');
          return theme.fonts.Roboto.regular;
      }
    }};
  }


  @font-face {
    font-family: 'NotoSansKR';    
    src: url(${NotoSansKRRegular}) format('truetype');   

  }
  @font-face {
    font-family: 'NotoSansJP';    
    src: url(${NotoSansJPRegular}) format('truetype');   

  }
  @font-face {
    font-family: 'Roboto';    
    src: url(${RobotoRegular}) format('truetype');   

  }

  @font-face {
    font-family: 'LatoBlack';
    src: url(${LatoBlack}) format('truetype');
  }

  @font-face {
    font-family: 'LatoBlackItalic';
    src: url(${LatoBlackItalic}) format('truetype');
    
  }

  @font-face {
    font-family: 'LatoBold';
    src: url(${LatoBold}) format('truetype');
    
  }

  @font-face {
    font-family: 'LatoBoldItalic';
    src: url(${LatoBoldItalic}) format('truetype');
    
  }

  @font-face {
    font-family: 'LatoItalic';
    src: url(${LatoItalic}) format('truetype');
    
  }

  @font-face {
    font-family: 'LatoLight';
    src: url(${LatoLight}) format('truetype');
    
  }

  @font-face {
    font-family: 'LatoLightItalic';
    src: url(${LatoLightItalic}) format('truetype');
    
  }

  @font-face {
    font-family: 'LatoRegular';
    src: url(${LatoRegular}) format('truetype');
    
  }

  @font-face {
    font-family: 'LatoThin';
    src: url(${LatoThin}) format('truetype');
    
  }
  @font-face {
    font-family: 'LatoThinItalic';
    src: url(${LatoThinItalic}) format('truetype');
    
  }

`;
