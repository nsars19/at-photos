import styled from "styled-components";

const StyledExit = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background: #aaa4;
  height: 40px;
  width: 40px;

  span {
    display: block;
    width: 15px;
    height: 2px;
    background: #777;

    &:first-child {
      transform: rotate(45deg);
      position: absolute;
    }
    &:last-child {
      transform: rotate(-45deg);
      position: absolute;
    }
  }

  &:hover,
  &:active {
    cursor: pointer;
    background: #aaa7;

    span {
      background: #333;
    }
  }
`;

export default function ExitButton({ toggleVis }) {
  return (
    <StyledExit onClick={toggleVis}>
      <span />
      <span />
    </StyledExit>
  );
}
