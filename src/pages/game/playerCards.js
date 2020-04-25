import React from 'react';
import { Player } from './player';

export const PlayerCards = (props) => {
  return (
    <section className="game__player-cards">
      {props.players.map((player, index) => {
        return (
          <Player
            key={player[0].name}
            player={player[0]}
            newRound={props.newRound}
            moving={props.moving}
          />
        );
      })}
    </section>
  );
};
