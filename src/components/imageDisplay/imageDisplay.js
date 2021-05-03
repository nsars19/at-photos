import styled from "styled-components";
import Image from "./../image/image";
import { useEffect, useState } from "react";
import colors from "./../../utils/colors";
import ExitButton from "./../exitButton/exitButton";
import ImageMetrics from "./../imgMetrics/imgMetrics";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";

const StyledDisplay = styled.div`
  display: ${({ vis }) => (vis ? "flex" : "none")};
  justify-content: center;
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
    margin: auto 5px;
    position: relative;
    display: flex;
    flex-direction: column;
    background: ${colors.black};
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 0 1.4px #0008, 0 0 2.5px #0008, 0 0 7px #0008, 0 0 14px #0002;
  }

  @media (max-width: 768px) {
    .display-wrap {
      margin: auto 15px;
    }
  }

  .content-wrap {
    height: 100%;
    overflow-y: scroll;
    scrollbar-width: none;
    position: relative;
    z-index: 2;
  }

  .direct-btn {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 60px;
    background: transparent;
    cursor: pointer;
    position: absolute;
    top: 0;
    outline: none;

    &:hover .icon-left,
    &:hover .icon-right,
    &:active .icon-left,
    &:active .icon-right {
      color: ${colors.blue};
      transition: color 50ms ease;
    }

    &:focus .icon-left,
    &:focus .icon-right {
      color: ${colors.blue};
      transition: color 50ms ease;
    }
  }

  .prev {
    left: 0;
  }

  .next {
    right: 0;
  }

  .icon-left,
  .icon-right {
    font-size: 40px;
    color: ${colors.black}aa;
  }
`;

export default function ImageDisplay(props) {
  const { vis, setVis, imgKey, imgID, clearActive, prevImg, nextImg } = props;

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
        <button onClick={prevImg} className="direct-btn prev">
          <BsChevronLeft className="icon-left" />
        </button>
        <Image src={imgKey ? baseUrl + imgKey : ""} />
        <button onClick={nextImg} className="direct-btn next">
          <BsChevronRight className="icon-right" />
        </button>
        <ExitButton toggleVis={clearModal} />
        <div className="content-wrap">
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
