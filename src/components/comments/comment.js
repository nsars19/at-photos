import styled from "styled-components";
import colors from "./../../utils/colors";

const StyledComment = styled.div`
  color: #000;
  padding: 10px;
  margin: 5px;
  border-radius: 12px;
  width: fit-content;
  background: #e0e0e0;
`;

export default function Comment({ text }) {
  return (
    <StyledComment>
      <p>{text}</p>
    </StyledComment>
  );
}