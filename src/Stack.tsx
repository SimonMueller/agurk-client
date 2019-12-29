import React from 'react';
import CardList from './CardList';

export default function Stack() {
  return (
    <div className="Stack">
      <p>
        Stack
      </p>

      <CardList cards={[]} />
    </div>
  );
}
