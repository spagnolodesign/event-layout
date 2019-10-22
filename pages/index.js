// Resest style
import '../styles/base.css';

// Functional Components
import Hero from '../components/Hero';
import Carousel from '../components/Carousel';
import InfoLines from '../components/InfoLines';

// Styled-componets
import { Title, TopTitle, Text } from '../styles/texts';
import { MainContainer, Section } from '../styles/layouts';
import { Button, CloseButton} from '../styles/buttons';
import { Overlay, OverlayContainer } from '../styles/overlay';

const Index = () => (
  <MainContainer>
    <Overlay>
      <OverlayContainer>
        <CloseButton floatright />
        <Hero />
        <InfoLines />
        <Carousel />
        <Section>
          <TopTitle uppercase>TEMATICHE</TopTitle>
          <Text soft>Un evento dedicato a YESLY, il nuovo sistema di comfort living di Finder pensato per controllare le funzionalità di ogni stanza in modo semplice ed intuitivo. Ecco il programma dell'evento:</Text>
          <Text bold>ore 18.00 - 18.15</Text>
          <Text soft>Benvenuto e registrazione dei partecipanti</Text>
          <Text bold>ore 18.15 - 19.15</Text>
          <Text soft>Tutto quello che dovete sapere su YESLY: funzionalità e novità del sistema.</Text>
          <Text bold>ore 19.15</Text>
          <Text soft>Termine dei lavori e spazio per le domande.</Text>
          <Text soft>A seguire street food offerto da Finder a tutti i partecipanti.</Text>
        </Section>

        <Section>
          <TopTitle uppercase>INFORMAZIONI AGGIUNTIVE</TopTitle>
          <Text soft>La partecipazione all'evento è gratuita ma è necessario effettuare l'iscrizione online cliccando su "ISCRIVITI ORA" entro l'1/06/2019. La locandina dell'evento è disponibile nella sezione "Materiale di approfondimento".</Text>
        </Section>

        <Section>
        <Button
            href=""
            target="_blank"
            rel="noopener"
            primary
            uppercase>
            Prenota un appuntamento
          </Button>
          <Button href="" uppercase>
            Visita il sito
          </Button>
        </Section>
      </OverlayContainer>
    </Overlay>
  </MainContainer>
);

export default Index;