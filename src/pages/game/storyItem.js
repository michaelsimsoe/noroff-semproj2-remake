import React from 'react';

export const StoryItem = (props) => {
  const storyClass = `story-board__item interaction${'-' + props.type}`;
  return <li className={storyClass}>{props.story}</li>;
};
