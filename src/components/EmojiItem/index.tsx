import React from 'react';

import * as Styled from './styles';
import { EmojiProps } from '../../interfaces/emoji';

type EmojiItemProps = {
  emoj: EmojiProps;
};

export const EmojiItem = ({ emoj }: EmojiItemProps) => {
  return (
    <Styled.Emojis>
      <Styled.EmojisImage>{emoj.character}</Styled.EmojisImage>
      <Styled.EmojisName>{emoj.unicodeName}</Styled.EmojisName>
    </Styled.Emojis>
  );
};
