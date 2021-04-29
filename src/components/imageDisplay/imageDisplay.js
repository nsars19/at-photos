import styled from "styled-components";
import Image from "./../image/image";
import { useEffect } from "react";
import colors from "./../../utils/colors";
import ExitButton from "./../exitButton/exitButton";

const StyledDisplay = styled.div`
  display: ${({ vis }) => (vis ? "grid" : "none")};
  place-items: center;
  position: fixed;
  top: 0;
  z-index: 3;
  height: 100vh;
  width: 100vw;
  background: #000a;

  img {
    height: fit-content;
    max-height: 600px;
    object-fit: cover;
  }

  img[src=""] {
    display: none;
  }

  .display-wrap {
    height: 95%;
    width: 95%;
    position: relative;
    display: flex;
    align-items: start;
    background: ${colors.black};
    border-radius: 8px;
    overflow: hidden;
  }

  @media (min-width: 1080px) {
    .display-wrap {
      height: 90%;
      width: 50%;
    }
  }
`;

export default function ImageDisplay({ vis, setVis, imgKey, imgID }) {
  const baseUrl = "http://localhost:3000/images/";

  const toggleModalOff = (e) => {
    if (e.target.className.includes("img-frame")) setVis(false);
  };

  useEffect(() => {
    if (vis) {
      window.addEventListener("click", toggleModalOff);
    } else {
      return;
    }

    return () => {
      window.removeEventListener("click", toggleModalOff);
    };
  });

  return (
    <StyledDisplay vis={vis} className="img-frame">
      <div className="display-wrap">
        <Image src={imgKey ? baseUrl + imgKey : ""} />
        <ExitButton toggleVis={() => setVis(false)} />
      </div>
    </StyledDisplay>
  );
}
