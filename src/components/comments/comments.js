import styled from "styled-components";
import Comment from "./comment";
const StyledComments = styled.ul`
  padding: 10px;
  padding-top: 0;
  padding-bottom: 25px;
  height: calc(93% - 60px);
  overflow: scroll;
  scrollbar-width: none;

  li {
    list-style: none;
  }
`;

export default function Comments({ comments }) {
  return (
    <StyledComments>
      {comments.map((comment) => (
        <li key={comment._id}>
          <Comment text={comment.text} />
        </li>
      ))}
    </StyledComments>
  );
}
