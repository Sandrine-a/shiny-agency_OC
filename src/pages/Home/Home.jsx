// import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../../utils/styles/colors'
import { StyledLink } from '../../utils/styles/Atoms'
import { useTheme } from '../../utils/hooks/Index'

import HomeLogo from '../../assets/home-logo.svg'

const HomeWrapper = styled.div`
  display: flex;
  justify-content: center;
`

const MainContainer = styled.div`
  background-color: ${({ theme }) =>
    theme === 'light' ? colors.backgroundLight : colors.backgroundDark};
  display: flex;
  flex-direction: row;
  max-width: 1200px;
  margin: 30px;
  padding: 60px 90px;
`

const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  ${StyledLink} {
    max-width: 250px;
  }
`

const StyledTitle = styled.h2`
  padding-bottom: 30px;
  max-width: 280px;
  line-height: 50px;
  color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
`

const MainImg = styled.img`
  flex: 1;
`

export function sum(a, b) {
  return a + b
}

function Home() {
  const { theme } = useTheme()

  return (
    <HomeWrapper className="App">
      <MainContainer theme={theme}>
        {sum(40, 2)}
        <LeftContainer>
          <StyledTitle theme={theme}>
            Repérez vos besoins, on s’occupe du reste, avec les meilleurs
            talents
          </StyledTitle>
          <StyledLink to="/survey/1" $isFullLink>
            Faire le test
          </StyledLink>
        </LeftContainer>
        <MainImg src={HomeLogo} />
      </MainContainer>
    </HomeWrapper>
  )
}

export default Home
