import styled from "styled-components";

const StyledFrame = styled.div`
  overflow: hidden;
  height: 350px;
  width: 500px;
`;

export default function ImageFrame({ children }) {
  return <StyledFrame>{children}</StyledFrame>;
}
