import styled from 'styled-components'

export const  Overlay = styled.div`
  padding: 3em 1em;
  max-width: 90vw;
  margin: 0 auto;
  background-color: white;
`

export const OverlayContainer = styled.div`
  max-width: 95%;
  margin: 0 auto;
  @media (min-width: 768px) {
    max-width: 80%;
  }
`

export const FlexEvent = styled.section`
  display: flex;
  flex-direction: column;
  margin: 2em 0;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`
export const EventDetail = styled.div`
  flex-grow: 1;
  padding: 1em 0em;
  border-top: 1px solid #D0D8DB;
  @media (min-width: 768px) {
    max-width: 33%;
    padding-left: 1em;
    border-left: ${props => props.withborder ? "1px solid #D0D8DB" : "0"}; 
    border-right: ${props => props.withborder ? "1px solid #D0D8DB" : "0"}; 
  }
`