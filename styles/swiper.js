import styled from 'styled-components';

export const ProductCard = styled.div`
  text-align: center;
  font-size: 1.1em;
  background: #FFF;
  display: flex;
  flex-direction: column;
`
export const SwiperContainer = styled.div`
  margin-top:3em;
  width: 100%;
  height: 250px;
  @media (min-width: 768px) {
    height: 300px;
  }
`
export const ProductCardImage = styled.img`
  width: auto;
  align-self: center;
  @media (min-width: 768px) {
    margin-bottom: 2em;
  }
`
export const SwiperButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`
export const SwiperButton = styled.div`
  position:absolute;
  bottom: -10px;
  width: 1em;
  height: 2.8em;
  margin-top: 0;
  z-index: 10;
  cursor: pointer;
  color: #019EE1;
  transition: 0.3s;
  margin-left: ${props => props.direction === "prev" ? "-30px" : "30px"};
  ::after {
    content: '${props => props.direction}';
    font-family: swiper-icons;
    font-size: 1.6em;
    text-transform: none !important;

  }
  &:hover{
    opacity:0.7;
    transform: ${props => props.direction === "prev" ? "translateX(-0.2em)" : "translateX(0.2em)"};
  }
`
