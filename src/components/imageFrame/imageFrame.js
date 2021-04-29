import styled from "styled-components";
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

export default function ImageFrame(props) {
  const { imgKey, setKey, setModalVis, children, setID, imgID } = props;
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const handleClick = () => {
    setKey(imgKey);
    setID(imgID);
    setModalVis(true);
  };

  return (
    <StyledFrame ref={ref} inView={inView} onClick={handleClick}>
      {children}
    </StyledFrame>
  );
}
