import React from 'react';
import Card from './Card';

export default function Card(props){
	const cardList = props.cards.map(card =>
        <Person title={card.title} content={card.content} />
    );

	return (
		<section class="List">
        <header class="List-header">
          <h2>{props.header}</h2>
        </header>
        <div class="List-cards">
        	{cardList}
            <button type="button" class="List-add-button">
              + Add Random Card
            </button>
        </div>
      </section>
		);
}