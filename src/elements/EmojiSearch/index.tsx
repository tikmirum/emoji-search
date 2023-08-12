import React, { useEffect, useMemo, useState } from 'react';
import { EmojiProps } from 'interfaces/emoji';

import * as Styled from './styles';
import { SearchInput } from 'components/SearchInput';
import { EmojiItem } from 'components/EmojiItem';
import { useSearchParams } from 'hooks/useSearchParams';
import { useDebounce } from 'hooks/useDebounce';

export const EmojiSearch = () => {
  const { searchParams } = useSearchParams();
  const [emojis, setEmojis] = useState<EmojiProps[]>([]);
  const searchValue = useMemo(() => {
    return searchParams.get('filter') || '';
  }, [searchParams]);

  const debouncedFilter = useDebounce({ value: searchValue, delay: 500 });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://emoji-api.com/emojis?search=${debouncedFilter}&access_key=ad720d2cb02c0c882a87d9abb4cfaf1588bb5413`
        );

        if (response) {
          const data = await response.json();

          // TODO: DOM freezes on html large size. Infinite Scroll should be implemented
          setEmojis(data.slice(0, 100));
        }
      } catch (err) {
        console.error(err);
      }
    };

    if (![null, undefined, ''].includes(debouncedFilter)) {
      void fetchData();
    } else {
      setEmojis([]);
    }
  }, [debouncedFilter]);

  return (
    <Styled.All>
      <SearchInput />
      <Styled.Column>
        {emojis.map(emoj => (
          <EmojiItem key={emoj.slug} emoj={emoj} />
        ))}
      </Styled.Column>
    </Styled.All>
  );
};
