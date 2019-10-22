import styled from 'styled-components';

export const Button = styled.a`
  font-family: 'Oswald', sans-serif;
  display: block;
  padding: 1em 1em;
  margin-right: 1em;
  border: 2px solid #019EE1;
  width: auto;
  text-transform: ${props => props.uppercase ? "uppercase" : "none"};
  background: ${props => props.primary ? "#019EE1" : "white"};
  color: ${props => props.primary ? "white" : "#019EE1"};
  text-decoration: none;
  text-align:center;
  border-bottom-right-radius: 15px;
  border-top-left-radius: 15px;
  letter-spacing: 1.5px;
  margin-bottom: 1em;

  @media (min-width: 768px) {
    display: inline-block;
  }
`

export const CloseButton = styled.a`
  display:inline-block;
  background-image: url('/assets/icons/close.png');
  background-position:center center;
  width: 50px;
  height:50px;
  cursor:pointer;
  border-radius: 50%;
  border: 2px solid rgba(1, 158, 225, 0.79);
  float: ${props => props.floatright ? "right" : "left"};
  margin-top: -30px;
  @media (min-width: 768px) {
    margin-top: -10px;
  }

`