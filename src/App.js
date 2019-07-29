import React from 'react';
import List from './List';
import STORE from './store';

function App() {
  const cardList = STORE.lists.map(card =>
    <List key={card.id} header={card.header} cards={card.cardIds.map(card => STORE.allCards[card])} />
);

  return (
    <main className='App'>
      <header>
        <h1>Trelloyes</h1>
        <div className='App-list'>
          {cardList}
        </div>
      </header>
    </main>
  );
}

export default App;