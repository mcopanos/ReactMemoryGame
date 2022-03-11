import { StyledHeader }  from './styles/Header.styled'
import { Container } from './styles/Container.styled'
import { StyledButton } from './styles/Button.styled'

export default function Header() {
    return(
        <>
        <StyledHeader>
            <Container>
                <h1>Memory Game</h1>
                <StyledButton>Let's Play</StyledButton>
            </Container>
       </StyledHeader>
        </>
    )
}