// Styled-componets
import { Title, TopTitle, Text } from '../styles/texts';
import SwiperCarousel from './carousel/SwiperCarousel'

const Carousel = () => (
  <div>
    <TopTitle uppercase>Prodotti in promo</TopTitle>
    <Text soft>Vieni a scoprire Yesly, Bliss e Lumos. Approfitta delle condizioni speciali a te riservate. </Text>
    <SwiperCarousel />
  </div>
);

export default Carousel;