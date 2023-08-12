import { forwardRef } from 'react';
import { EmojiProps } from 'interfaces/emoji';

import * as Styled from './styles';

type EmojiItemProps = {
  emoj: EmojiProps;
};

export const EmojiItem = forwardRef<HTMLDivElement | null, EmojiItemProps>(
  ({ emoj }: EmojiItemProps, ref) => {
    return (
      <Styled.Emojis ref={ref}>
        <Styled.EmojisImage>{emoj.character}</Styled.EmojisImage>
        <Styled.EmojisName>{emoj.unicodeName}</Styled.EmojisName>
      </Styled.Emojis>
    );
  }
);
