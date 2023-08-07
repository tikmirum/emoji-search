import React, { useEffect, useState } from 'react';

import * as Styled from './styles';
import { SearchInput } from '../../components/SearchInput';
import { EmojiItem } from '../../components/EmojiItem';
import { EmojiProps } from '../../interfaces/emoji';

export const EmojiSearch = () => {
  const [filter, setFilter] = useState('');
  const [emojis, setEmojis] = useState<EmojiProps[]>([]);
  const [newEmojis, setNewEmojis] = useState(emojis);

  useEffect(() => {
    console.info('render', filter, emojis);

    if (filter === '') {
      setNewEmojis(emojis);

      return;
    }

    const filteredEmojis = emojis.filter(el => el.unicodeName.includes(filter));
    setNewEmojis(filteredEmojis);
  }, [filter, emojis]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://emoji-api.com/emojis?access_key=ad720d2cb02c0c882a87d9abb4cfaf1588bb5413`
        );

        if (response) {
          const data = await response.json();
          setEmojis(data);
        }
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []);

  return (
    <Styled.All>
      <SearchInput setFilter={setFilter} />
      <Styled.Column>
        {newEmojis.map(emoj => (
          <EmojiItem key={emoj.slug} emoj={emoj} />
        ))}
      </Styled.Column>
    </Styled.All>
  );
};
