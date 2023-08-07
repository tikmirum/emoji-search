import styled from 'styled-components';

export const Emojis = styled('div')`
  display: flex;
  width: 450px;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  position: relative;
  border: 1px solid mediumslateblue;
  margin: 4px;
  padding: 8px;
`;

export const EmojisImage = styled('div')`
  width: auto;
  height: auto;
  padding-right: 8px;
  font-size: 32px;
`;

export const EmojisName = styled('div')`
  font-size: 24px;
`;
