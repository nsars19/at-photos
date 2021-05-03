import styled from "styled-components";
import Image from "./../image/image";
import { useEffect, useState } from "react";
import colors from "./../../utils/colors";
import ExitButton from "./../exitButton/exitButton";
import ImageMetrics from "./../imgMetrics/imgMetrics";

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
    max-height: 90vh;
    object-fit: cover;
  }

  img[src=""] {
    display: none;
  }

  .display-wrap {
    margin: auto 10px;
    position: relative;
    display: flex;
    flex-direction: column;
    background: ${colors.black};
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 0 1.4px #0008, 0 0 2.5px #0008, 0 0 7px #0008, 0 0 14px #0002;
  }

  .content-wrap {
    height: 100%;
    overflow-y: scroll;
    scrollbar-width: none;
  }
`;

export default function ImageDisplay(props) {
  const { vis, setVis, imgKey, imgID, clearActive } = props;

  const baseUrl = "http://localhost:3000/images/";
  const [likeCount, setLikeCount] = useState(null);

  const clearModal = () => {
    setVis(false);
    clearActive();
  };

  const toggleModalOff = (e) => {
    if (e.target.nodeName === "path") return;
    if (e.target.nodeName === "svg") return;
    if (e.target.className.includes("img-frame")) {
      clearModal();
    }
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

  useEffect(() => {
    async function getImageData() {
      const res = await fetch("http://localhost:3000/photos/" + imgID);
      const data = await res.json();

      setLikeCount(data.likes);
    }

    if (imgID) getImageData();
  }, [imgID]);

  return (
    <StyledDisplay vis={vis} className="img-frame">
      <div className="display-wrap">
        <Image src={imgKey ? baseUrl + imgKey : ""} />
        <div className="content-wrap">
          <ExitButton toggleVis={clearModal} />
          <ImageMetrics
            likeCount={likeCount}
            setLikeCount={setLikeCount}
            imgID={imgID}
          />
        </div>
      </div>
    </StyledDisplay>
  );
}
