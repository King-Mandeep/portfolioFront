import styled from "styled-components";

export const MyButtu = styled.button`
  position: relative;
  height: 3em;
  width: 7em;
  background-color:  ${(props) => props.$bgColor || 'red'};
  color:  ${(props) => props.$textColor || 'white'};
  z-index: 1;
  cursor: url('/pointer.png'), auto;;
  font-size: 1em;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    transform: scaleX(0);
    transition: all 0.5s;
    transform-origin: left;
    background-color: black;
    z-index: -1;
  }

  &:hover::before {
    transform: scaleX(1);
  }
`;

