import Title from './components/styled/title.styled.jsx'
import Banner from './components/styled/header.styled.jsx'
import Section from './components/styled/section.styled.jsx'
import Board from './components/styled/board.styled.jsx'
import List from './components/styled/list.styled.jsx'
import Card from './components/styled/card.styled.jsx'
import Item from './components/styled/item.styled.jsx'

function App() {
  const emojis = ['😍', '😍', '🥵', '🥵', '🥸', '🥸', '💩', '💩', '🥳','🥳', '🤑', '🤑'];

  return (
    <>
      <Banner>
        <Title>Emoji Memeory Game</Title>
      </Banner>
      <Section>
        <Board>
          <List>
            {
              emojis.map(emoji => (
                <Item>
                  <Card>
                    <text style={{fontSize: '4em'}}>{emoji}</text>
                  </Card>
                </Item>

              ))
            }
          </List>
        </Board>
      </Section>
    </>
  )
}

export default App
