import styled from "styled-components";
import Comment from "./comment";
import { useInView } from "react-intersection-observer";

const StyledComments = styled.ul`
  padding: 10px;
  height: max-content;

  li {
    list-style: none;
    width: fit-content;
    animation: ${({ inView }) => (inView ? "appear 400ms ease;" : "none")};
    transition: animation 400ms ease;

    &:last-child {
      margin-bottom: 10px;
    }
  }

  @keyframes appear {
    from {
      opacity: 0;
    }
  }
`;

function reverseArray(arr) {
  const reversed = [];
  const workArr = [...arr];

  for (let i = 0; i < arr.length; i++) {
    reversed.push(workArr.pop());
  }

  return reversed;
}

export default function Comments({ comments, setComments }) {
  const reversedComments = reverseArray(comments);
  const { ref, inView } = useInView({
    triggerOnce: true,
    // rootMargin: "-30px 0px",
    // threshold: 0.2,
  });

  const deleteComment = async (id) => {
    const res = await fetch(
      "https://stormy-shore-10716.herokuapp.com/comments/" + id,
      {
        method: "delete",
      }
    );
    const data = await res.json();
    setComments(reverseArray(data[0].comments));
  };

  return (
    <StyledComments inView={inView}>
      {reversedComments.map((comment) => (
        <li
          key={comment._id}
          ref={ref}
          onClick={() => deleteComment(comment._id)}
        >
          <Comment text={comment.text} />
        </li>
      ))}
    </StyledComments>
  );
}
