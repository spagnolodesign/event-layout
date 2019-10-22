import { useState, useEffect } from 'react';

// Swiper module ES6
import Swiper from 'swiper';
import 'swiper/css/swiper.css';
import options from './options'


// Styled-componets
import { SwiperContainer, SwiperButtonContainer, SwiperButton } from '../../styles/swiper';
import SwiperCard from './SwiperCard';

function SwiperCarousel() {
  const [count, setCount] = useState(0);
  const swiperContainer = React.createRef();
  
  useEffect(() => {
    const mySwiper = new Swiper(swiperContainer.current, options);
  });

  return (
    <SwiperContainer className="swiper-container" ref={swiperContainer}>
      <div className="swiper-wrapper">
        <SwiperCard name="Yesly" image="/assets/images/product-1.png" />
        <SwiperCard name="Bliss" image="/assets/images/product-2.png" />
        <SwiperCard name="Lumos" image="/assets/images/product-3.png" />
        <SwiperCard name="Yesly" image="/assets/images/product-1.png" />
        <SwiperCard name="Bliss" image="/assets/images/product-2.png" />
        <SwiperCard name="Lumos" image="/assets/images/product-3.png" />
      </div>
      <SwiperButtonContainer>
        <SwiperButton direction="prev" className="swiper-prev"></SwiperButton>
        <SwiperButton direction="next" className="swiper-next"></SwiperButton>
      </SwiperButtonContainer>
    </SwiperContainer>
  )
};

export default SwiperCarousel;
