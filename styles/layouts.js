import styled from 'styled-components'

export const  MainContainer = styled.main`
  padding: 0;
  margin: 0;
  min-height: 100vh;
  background-color: #019EE1;
`

export const Section = styled.section`
  margin: 3em 0;
`

export const FlexContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`

