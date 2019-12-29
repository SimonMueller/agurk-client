import React from 'react';
import CardList from './CardList';

export default function Hand() {
  return (
    <div className="Hand">
      <p>
        Hand
      </p>

      <CardList cards={[]} />
    </div>
  );
}
