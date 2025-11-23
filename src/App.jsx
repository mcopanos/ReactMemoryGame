import Title from './components/styled/title.styled.jsx'
import Banner from './components/styled/header.styled.jsx'
import Section from './components/styled/section.styled.jsx'
import Board from './components/styled/board.styled.jsx'
import List from './components/styled/list.styled.jsx'
import Card from './components/styled/card.styled.jsx'
import Item from './components/styled/item.styled.jsx'
import { useId, useState, useMemo, useEffect } from 'react'
import Emojis from './components/data/emojis.json'


function App() {
  const [emojis, setEmojis] = useState([...Emojis])
  const [isClicked, setIsClicked] = useState([])

  function sortCards(arr) {
    arr.sort(() => Math.random() - 0.5);
  };
  
  function toggleIsClicked(id) {
    setEmojis((prevEmoji) =>
      prevEmoji.map((emoji) =>
        emoji === id ? { ...emoji, isClicked: true } : emoji
      )
    );

  };
  
  if (isClicked.length === 2) {
    const first = isClicked[0];
    const second = isClicked[1];

    if (first.emoji === second.emoji) {
      // left off here. tyring to set is matched to tru
      emojis.map((emoji) => 
        emoji.isClicked === true ? emoji.isMatched = true : emoji);
      
      emojis.map((emoji) => 
        emoji.isMatched === true ? emoji.isClicked = false : emoji);
      
      setIsClicked([]);
    } else {
      alert("Not a Match. Try again")
      
      emojis.map((emoji) => 
        emoji.isClicked === true ? emoji.isClicked = false : emoji);

      setIsClicked([]);
    }
  } 

  useEffect(() => {
    setIsClicked(emojis.filter((emoji) => emoji.isClicked))

  }, [emojis])
  
  useMemo(() => {
    return sortCards(emojis) 
  }, []);

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
                <Item 
                  key={useId()}
                  onClick={() => toggleIsClicked(emoji)}
                >
                  <Card id={useId()}> 
                  {emoji.isMatched ? 
                  <text 
                      style={{fontSize: '4em'}}
                    >{emoji.emoji}</text>
                    :
                    <text 
                      className={!emoji.isClicked ? 'hidden' : null} 
                      style={{fontSize: '4em'}}
                    >{emoji.emoji}</text>}
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
