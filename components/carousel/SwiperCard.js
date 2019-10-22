// Styled-componets
import { ProductCard, ProductCardImage } from '../../styles/swiper';
import { TopTitle } from '../../styles/texts';

const SwiperCard = (props) => (
  <ProductCard className="swiper-slide">
    <ProductCardImage src={props.image} alt="product" />
    <TopTitle>{props.name}</TopTitle>
  </ProductCard>
);

export default SwiperCard;