import React from 'react';
import { Loader } from '../../components/loader';

export const Intro = (props) => {
  const displayStyle = {
    display: props.loading ? 'none' : 'block',
  };
  const handleClick = () => {
    props.showSelect();
  };
  const sectionClass = props.select ? 'intro hidden-content' : 'intro';
  return (
    <section className={sectionClass} id="intro-section">
      <h2>Welcome to The Board Game</h2>
      <h3>Of Thrones</h3>
      <p>
        <strong>Choose</strong> among five of the major houses and compete for
        the <strong>Iron Throne</strong>. This game takes two players. Take
        turns and roll the dice. All the houses have gathered in Riverrun and
        are moving towards The Wall to <em>fight of the Night King</em>. The
        alliance will break after that. Who will be the first to win the
        <strong> Iron Throne</strong> and rule the
        <strong> Seven Kingdoms</strong>?
      </p>
      <p>
        A board game for two players. Roll the dice and move. From the
        Riverlands, up to the wall in the North, down to Sunspear in the South
        and then push for Kings Landing. The road is long and hard, and winter
        is coming.
      </p>
      <button
        onClick={handleClick}
        style={displayStyle}
        className="show-character-button"
        id="show-character-button"
      >
        Play the Game
      </button>
      <Loader loading={props.loading} />
    </section>
  );
};
