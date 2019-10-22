// Styled-componets
import { Title, SmallTitle, TopTitle, Text } from '../styles/texts';
import { FlexEvent, EventDetail } from '../styles/overlay';

const InfoLines = () => (
  <FlexEvent>
    <EventDetail>
      <TopTitle uppercase>When</TopTitle>
      <SmallTitle>28-29 JUN</SmallTitle>
      <Text nomargin>Dalle 18.00 alle 21.00</Text>
    </EventDetail>
    <EventDetail withborder>
      <TopTitle uppercase>Where</TopTitle>
      <Text nomargin>Moscow, Russia<br/>887 Reinger Square<br/>PAV. 5 - Stand 2</Text>
      </EventDetail>
    <EventDetail uppercase>
      <TopTitle uppercase>Info</TopTitle>
      <Text nomargin>P.   045 8270827</Text>
      <Text nomargin>M.  mario.rossi@finder.com</Text>
    </EventDetail>
  </FlexEvent>
);

export default InfoLines;