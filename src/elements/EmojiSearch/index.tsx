import { useEffect, useMemo, useRef, useState } from 'react';
import { EmojiProps } from 'interfaces/emoji';

import * as Styled from './styles';
import { SearchInput } from 'components/SearchInput';
import { EmojiItem } from 'components/EmojiItem';
import { useSearchParams } from 'hooks/useSearchParams';
import { useDebounce } from 'hooks/useDebounce';
import { useInView } from 'hooks/useInView';

const ITEMS_COUNT = 10;

export const EmojiSearch = () => {
  const { searchParams } = useSearchParams();
  const [emojis, setEmojis] = useState<EmojiProps[]>([]);
  const lastItemReference = useRef<HTMLInputElement | null>(null);
  const [drawableEmojis, setDrawableEmojis] = useState<EmojiProps[]>([]);
  const [page, setPage] = useState(0);
  const lastItemVisible = useInView(lastItemReference, { threshold: 0 });
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
          setPage(0);
          setEmojis(data);
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

  useEffect(() => {
    if (lastItemVisible) {
      setPage(prev => prev + 1);
    }
  }, [lastItemVisible]);

  useEffect(() => {
    if (!emojis) {
      return;
    }

    setDrawableEmojis(emojis.slice(0, page * ITEMS_COUNT + ITEMS_COUNT));
  }, [page, emojis]);

  return (
    <Styled.All>
      <SearchInput />
      <Styled.Column>
        {drawableEmojis.map((emoj, index) => (
          <EmojiItem
            key={emoj.slug}
            emoj={emoj}
            ref={
              index === drawableEmojis.length - 3
                ? lastItemReference
                : undefined
            }
          />
        ))}
      </Styled.Column>
    </Styled.All>
  );
};
