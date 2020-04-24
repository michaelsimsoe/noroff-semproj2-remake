import React, { useEffect, useRef, useState } from 'react';

export const PlayerToken = (props) => {
  const tokenRef = useRef();
  const [tilePosition, setTilePosition] = useState({
    x: '170',
    y: '370',
  });

  useEffect(() => {
    if (props.move.player === props.player.name) {
      setTilePosition({
        x: props.move.x,
        y: props.move.y,
      });
    }
  }, [props]);

  const getSigilPath = (name) => {
    let spaceToUnderscore = name.replace(/ /g, '_');
    let removedApostrophes = spaceToUnderscore.replace(/'/g, '').toLowerCase();
    return `assets/sigils/${removedApostrophes.toLowerCase()}_small.svg`;
  };

  return (
    <image
      ref={tokenRef}
      className="player-token"
      x={tilePosition.x}
      y={tilePosition.y}
      aria-label={`player-${props.num}-token`}
      xlinkHref={getSigilPath(props.player.house)}
    ></image>
  );
};
