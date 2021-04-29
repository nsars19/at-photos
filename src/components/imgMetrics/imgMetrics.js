import styled from "styled-components";
import { AiFillHeart } from "react-icons/ai";
import colors from "./../../utils/colors";
import Skeleton from "react-loading-skeleton";

const StyledMetrics = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;

  .icon {
    cursor: pointer;
    font-size: 1.5rem;
    color: ${colors.blue};
  }

  p {
    font-size: 16px;
    margin-left: 4px;
    color: ${colors.lightBlue};
  }
`;

export default function ImageMetrics({ likeCount }) {
  const handleLike = () => {};

  return (
    <StyledMetrics>
      <button onClick={handleLike}>
        <AiFillHeart className="icon" />
      </button>
      {likeCount ? <p>{likeCount}</p> : <Skeleton />}
    </StyledMetrics>
  );
}
