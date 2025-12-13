import { useId, useState, useMemo, useEffect } from 'react'
import Title from './components/styled/title.styled.jsx'
import Banner from './components/styled/header.styled.jsx'
import Section from './components/styled/section.styled.jsx'
import Board from './components/styled/board.styled.jsx'
import List from './components/styled/list.styled.jsx'
import Card from './components/styled/card.styled.jsx'
import MatchedCard from './components/styled/matchedCard.styled.jsx'
import Item from './components/styled/item.styled.jsx'
import Modal from './components/styled/modal.styled.jsx'
import ModalContent from './components/styled/modalContent.styled.jsx'
import Button from './components/styled/button.styled.jsx'
import Emojis from './components/data/emojis.json'

function App() {
  const [emojis, setEmojis] = useState([...Emojis]);
  const [isClicked, setIsClicked] = useState([]);
  const [gameover, setgameover] = useState(false)
  const [isDisabled, setIsDisabled] = useState(false)

  function toggleIsClicked(id) {
    if(!id.isClicked) {
      setEmojis((prevEmoji) =>
        prevEmoji.map((emoji) =>
          emoji === id ? { ...emoji, isClicked: true } : emoji)
      );
    } else {
      console.log('this has been clicked')
    };  
  };

  function restartGame() {
    window.location.reload(true);
  }

  if (isClicked.length === 2) {
    const first = isClicked[0];
    const second = isClicked[1];

    if (first.emoji === second.emoji) {
      emojis.map((emoji) => 
        emoji.isClicked === true ? emoji.isMatched = true : emoji);

      emojis.map((emoji) => 
        emoji.isMatched === true ? emoji.isClicked = false : emoji);

      const matches = emojis.filter(emoji => emoji.isMatched === true)
      if (matches.length === 12) {
        setTimeout(() => {
          setgameover(!gameover);
        },500);
      }
      clearClickedCards();
      
    } else {
      emojis.map((emoji) => 
        emoji.isClicked === true ? emoji.isClicked = false : emoji);
      
      clearClickedCards();
    } 
  };

  function clearClickedCards() {
    setTimeout(() => {
      setIsClicked([]);
    }, 500);
  };

  function sortCards(arr) {
    arr.sort(() => Math.random() - 0.5);
  };

  useMemo(() => {
    return sortCards(emojis);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setIsClicked(emojis.filter((emoji) => emoji.isClicked));
    }, 500)
  }, [emojis]);

  useEffect(() => {
    if (isClicked.length === 2) {
      setIsDisabled(!isDisabled);
    };

    setTimeout(() => {
      if (isDisabled === true) {
        setIsDisabled(!isDisabled);
      };
    }, 10)
  }, [isClicked]);

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
                  disabled={!emoji.isMatched ? isDisabled : null}
                >
                  {!emoji.isMatched ?
                  <Card 
                    id={useId()}
                    variant={emoji.isClicked ? 'open' : undefined}
                  >
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
                  :
                  <MatchedCard 
                    id={useId()}
                  >
                    <text 
                      style={{fontSize: '4em'}} 
                    >{emoji.emoji}</text>
                  </MatchedCard>}
                </Item>
              ))
            }
          </List>
        </Board>
        { gameover && 
        <Modal>
          <ModalContent>
            <h2>
              Congradulations!! You have won the game!
            </h2>
            <Button onClick={restartGame}>
              Restart
            </Button>
          </ModalContent>
        </Modal> 
        }
      </Section>
    </>
  );
};

export default App
