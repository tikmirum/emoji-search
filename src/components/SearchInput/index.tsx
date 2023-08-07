import { Input, Space } from 'antd';
import { Dispatch, SetStateAction } from 'react';

import * as Styled from './styles';

const { Search } = Input;
type SearchInputProps = {
  setFilter: Dispatch<SetStateAction<string>>;
};

export const SearchInput = ({ setFilter }: SearchInputProps) => {
  return (
    <Styled.Content>
      <Styled.Header>Emoji Search</Styled.Header>
      <Search
        onSearch={value => setFilter(value)}
        placeholder="Emojis name"
        style={{ width: 400 }}
      />
    </Styled.Content>
  );
};
