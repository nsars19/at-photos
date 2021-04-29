import styled from "styled-components";
import colors from "./../../utils/colors";
import { useInView } from "react-intersection-observer";

const StyledFrame = styled.div`
  overflow: hidden;
  height: 200px;
  transition: opacity 300ms ease-in;
  opacity: ${({ inView }) => (inView ? 100 : 0)};
  cursor: pointer;

  &:hover,
  &:active {
    z-index: 2;
    filter: brightness(0.7);
  }

  @media (max-width: 540px) {
    height: 100px;
  }
`;

export default function ImageFrame({ children }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <StyledFrame ref={ref} inView={inView}>
      {children}
    </StyledFrame>
  );
}
