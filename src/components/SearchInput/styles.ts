import styled from 'styled-components';

export const Content = styled('div')`
  display: flex;
  align-items: center;
  width: 450px;
  flex-direction: column;
  margin: 32px;
`;

export const Header = styled('div')`
  display: flex;
  font-size: 36px;
  color: darkgray;
  text-transform: uppercase;
  padding-bottom: 16px;
`;

export const Search = styled('input')`
  width: 100%;
  height: 32px;
  border: 1px solid black;
  border-radius: 3px;
`;
