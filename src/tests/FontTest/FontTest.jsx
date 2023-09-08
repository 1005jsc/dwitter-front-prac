import {styled} from 'styled-components';

const FontTest = () => {
  return (
    <section>
      <Regular>Regular</Regular>
      <Black>Black</Black>
      <BlackItalic>BlackItalic</BlackItalic>
      <Bold>Bold</Bold>
      <BoldItalic>BoldItalic</BoldItalic>
      <Italic>Italic</Italic>
      <Light>Light</Light>
      <LightItalic>LightItalic</LightItalic>
      <Thin>Thin</Thin>
      <ThinItalic>ThinItalic</ThinItalic>
      <NormalSpan>한국말이야</NormalSpan>
      <NotoSansKr>한국말이야</NotoSansKr>
    </section>
  );
};

export default FontTest;
const NormalSpan = styled.span`
  display: block;

  font-size: 30px;
`;
const NotoSansKr = styled.span`
  display: block;
  font-size: 30px;
  font-family: ${({theme}) => theme.fonts.NotoSansKr.regular};
`;

const Black = styled.span`
  display: block;
  font-family: ${({theme}) => theme.fonts.Lato.black};
`;
const BlackItalic = styled.span`
  display: block;
  font-family: ${({theme}) => theme.fonts.Lato.blackItalic};
`;
const Bold = styled.span`
  display: block;
  font-family: ${({theme}) => theme.fonts.Lato.bold};
`;
const BoldItalic = styled.span`
  display: block;
  font-family: ${({theme}) => theme.fonts.Lato.boldItalic};
`;
const Italic = styled.span`
  display: block;
  font-family: ${({theme}) => theme.fonts.Lato.italic};
`;
const Light = styled.span`
  display: block;
  font-family: ${({theme}) => theme.fonts.Lato.light};
`;
const LightItalic = styled.span`
  display: block;
  font-family: ${({theme}) => theme.fonts.Lato.lightItalic};
`;

const Regular = styled.span`
  display: block;
  font-family: ${({theme}) => theme.fonts.Lato.regular};
`;

const Thin = styled.span`
  display: block;
  font-family: ${({theme}) => theme.fonts.Lato.thin};
`;
const ThinItalic = styled.span`
  display: block;
  font-family: ${({theme}) => theme.fonts.Lato.thinItalic};
`;
