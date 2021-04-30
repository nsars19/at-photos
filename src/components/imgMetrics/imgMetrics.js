import styled from "styled-components";
import { AiFillHeart } from "react-icons/ai";
import colors from "./../../utils/colors";
import Skeleton from "react-loading-skeleton";

const StyledMetrics = styled.div`
  padding: 10px;
  display: flex;
  align-items: flex-start;

  button {
    background: none;
  }

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

export default function ImageMetrics({ likeCount, setLikeCount, imgID }) {
  const handleUnlike = async () => {
    await fetch("http://localhost:3000/photos/unlike/" + imgID).then(
      async (res) => {
        const { likes } = await res.json();
        setLikeCount(likes);
        localStorage.setItem(imgID, false);
      }
    );
  };

  const handleLike = async () => {
    await fetch("http://localhost:3000/photos/like/" + imgID).then(
      async (res) => {
        const { likes } = await res.json();
        setLikeCount(likes);
        localStorage.setItem(imgID, true);
      }
    );
  };

  const handleClick = () => {
    if (localStorage.getItem(imgID) === "true") handleUnlike();
    else handleLike();
  };

  return (
    <StyledMetrics>
      <button onClick={handleClick}>
        <AiFillHeart className="icon" />
      </button>
      {likeCount || likeCount !== null ? <p>{likeCount}</p> : <Skeleton />}
    </StyledMetrics>
  );
}
