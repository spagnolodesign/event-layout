import styled from 'styled-components'

export const Text = styled.p`
  text-decoration: none;
  font-weight: 100;
  color: ${props => props.soft? "#999999" : "#333333"};
  line-height: 1.5; 
  margin: ${props => props.nomargin ? "0" : ""};
  font-weight: ${props => props.bold? "bold" : "100" };
`

export const TopTitle = styled.h3`
  font-family: 'Oswald', sans-serif;
  color: #019EE1;
  font-size: 0.88em;
  font-weight: normal;
  margin-top: 0;
  letter-spacing: 0.5px;
  margin-bottom: 0.3em;
  text-transform: ${props => props.uppercase ? "uppercase" : "none"};
  @media (min-width: 768px) {
    font-size: 1.25em;
  }
`
export const Title = styled.h1`
  font-family: 'Oswald', sans-serif;
  color: #333333;
  text-transform: ${props => props.uppercase ? "uppercase" : "none"};
  font-weight: normal;
  margin:0;
  @media (min-width: 768px) {
    font-size: 4em;
  }
`

export const SmallTitle = styled(Title)`
  @media (min-width: 768px) {
    font-size: 2em;
  }
`