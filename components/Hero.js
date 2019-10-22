// Styled-componets
import { FlexContainer } from '../styles/layouts';

import { Title, TopTitle, Text } from '../styles/texts';

const Hero = () => (
  <FlexContainer>
    <div>
      <TopTitle uppercase>Area Europa</TopTitle>
      <Title uppercase>Elektrotechnická<br/>výstava</Title>
      <Text>La partecipazione all'evento è gratuita, ma è necessario effettuare l'iscrizione online.</Text>
    </div>
    <div>
      <img src="/assets/images/logo.png" alt="logo" />
    </div>
  </FlexContainer>
);

export default Hero;