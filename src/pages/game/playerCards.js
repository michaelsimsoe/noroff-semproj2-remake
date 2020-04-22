import React from 'react';
import { Player } from './player';

export const PlayerCards = (props) => {
  return (
    <section className="game__player-cards">
      {props.players.map((player) => {
        return (
          <Player
            key={player[0].name}
            player={player[0]}
            rollDice={props.roundAction}
          />
        );
      })}
    </section>
  );
};
