import { Input } from 'antd';
import { useMemo } from 'react';

import * as Styled from './styles';
import { useSearchParams } from 'hooks/useSearchParams';

const { Search } = Input;

export const SearchInput = () => {
  const { updateSearch, searchParams } = useSearchParams();
  const searchValue = useMemo(() => {
    return searchParams.get('filter') || '';
  }, [searchParams]);

  return (
    <Styled.Content>
      <Styled.Header>Emoji Search</Styled.Header>
      <Search
        value={searchValue}
        onChange={e =>
          updateSearch({
            filter: e.target.value
          })
        }
        placeholder="Emojis name"
        style={{ width: 400 }}
      />
    </Styled.Content>
  );
};
