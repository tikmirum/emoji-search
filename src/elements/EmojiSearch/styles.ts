import styled from 'styled-components';

export const All = styled('div')`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  z-index: 1;
`;

export const Column = styled('div')`
  border-radius: 10px;
  border: #2e2e2e 1px solid;
  overflow: auto;
  background: transparent;
  backdrop-filter: blur(150px);
`;

