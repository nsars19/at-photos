import styled from "styled-components";
import React, { useEffect, useState } from "react";
import ProgressiveImage from "./components/progressiveImage/ProgressiveImage";
import ImageFrame from "./components/imageFrame/imageFrame";
import colors from "./utils/colors";
import ImageDisplay from "./components/imageDisplay/imageDisplay";
import cover from "./assets/cover.jpg";
import { BsChevronDown } from "react-icons/bs";
import { Element, scroller } from "react-scroll";
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from "./components/spinner/spinner";

const StyledApp = styled.div`
  .img-wrap {
    display: grid;
    gap: 2px;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-auto-flow: row;
    justify-content: center;
    width: 98%;
    margin: 0 auto;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    height: 100vh;
    width: 100%;
    background: linear-gradient(
      to bottom,
      ${colors.black}cc 1%,
      transparent 85%,
      ${colors.black}aa
    );
  }

  section {
    background-image: url(${cover});
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    color: ${colors.lightBlue};
    margin-bottom: 10px;

    img {
      margin-top: 50px;
    }

    h1 {
      margin: 0 30px;
      margin-top: 70px;
      max-width: 500px;
      text-align: center;
      font-size: 1.5rem;
      z-index: 2;
    }

    .icon-wrap {
      color: ${colors.lightBlue};
      height: 100%;
      width: 100%;
      padding-bottom: 80px;
      display: flex;
      align-items: flex-end;
      justify-content: center;
      z-index: 2;
    }

    .icon-down {
      font-size: 70px;
      cursor: pointer;

      &:hover,
      &:active {
        color: ${colors.blue};
        transition: color 300ms ease;
      }
    }
  }

  @media (min-width: 1080px) {
    section h1 {
      font-size: 2rem;
    }

    background: linear-gradient(
      to bottom,
      ${colors.black}cc 1%,
      transparent 65%,
      transparent 85%,
      ${colors.black}aa
    );

    .img-wrap {
      width: 80%;
    }
  }

  @media (max-width: 540px) {
    .img-wrap {
      width: 99%;
      grid-template-columns: repeat(auto-fill, minmax(90px, 1fr));
    }
  }
`;

function App() {
  const [keys, setKeys] = useState(null);
  const [visibleKeys, setVisibleKeys] = useState([]);
  const [activeKey, setActiveKey] = useState(null);
  const [activeID, setActiveID] = useState(null);
  const [activeIdx, setActiveIdx] = useState(getActiveIndex());
  const [imgModal, setModalVisibility] = useState(false);

  function getActiveIndex(key) {
    if (!keys || !key) return null;

    return keys.map((k) => k.key).indexOf(key);
  }

  const previousImage = () => {
    const prevIdx = activeIdx === 0 ? 0 : activeIdx - 1;
    const prevImg = keys[prevIdx];
    setActiveKey(prevImg.key);
    setActiveID(prevImg._id);
    setActiveIdx(prevIdx);
  };

  const nextImage = () => {
    const nextIdx = activeIdx === keys.length - 1 ? activeIdx : activeIdx + 1;
    const nextImg = keys[nextIdx];
    setActiveKey(nextImg.key);
    setActiveID(nextImg._id);
    setActiveIdx(nextIdx);
  };

  const clearActive = () => {
    setActiveID(null);
    setActiveKey(null);
    setActiveIdx(null);
  };

  const scrollToTarget = () => {
    scroller.scrollTo("scroll-target", {
      smooth: "easeOutCubic",
      offset: -20,
    });
  };

  useEffect(() => {
    async function getKeys() {
      const res = await fetch(
        "https://stormy-shore-10716.herokuapp.com/photos"
      );
      const data = await res.json();
      setKeys(data);
      setVisibleKeys(data.slice(0, 10));
    }

    getKeys();
  }, []);

  useEffect(() => {
    window.onkeydown = handleKeyPress;

    function handleKeyPress(e) {
      if (e.keyCode === 37) previousImage();
      if (e.keyCode === 39) nextImage();
    }

    return () => {
      window.keydown = null;
    };
  });

  const fetchNextKeySet = () => {
    setVisibleKeys(keys.slice(0, visibleKeys.length + 10));
  };

  const mapKeys = keys && (
    <InfiniteScroll
      dataLength={visibleKeys.length}
      next={fetchNextKeySet}
      hasMore={visibleKeys.length !== keys.length}
      loader={<Spinner size={30} />}
      className="img-wrap"
      name="scroll-target"
    >
      {visibleKeys.map(({ _id, key }) => (
        <React.Fragment key={_id}>
          <ImageFrame
            activeIdx={activeIdx}
            setActiveIdx={setActiveIdx}
            getActiveIndex={getActiveIndex}
            setKey={setActiveKey}
            setID={setActiveID}
            setModalVis={setModalVisibility}
            imgKey={key}
            imgID={_id}
          >
            <ProgressiveImage imgKey={key} />
          </ImageFrame>
        </React.Fragment>
      ))}
    </InfiniteScroll>
  );

  return (
    <StyledApp>
      <section>
        <div className="overlay" />
        <h1>
          A collection of photos taken during my 2019 Appalachian Trail
          thru-hike attempt
        </h1>
        <div className="icon-wrap">
          <BsChevronDown className="icon-down" onClick={scrollToTarget} />
        </div>
      </section>
      <Element name="scroll-target" />
      {mapKeys || <Spinner />}
      <ImageDisplay
        vis={imgModal}
        imgKey={activeKey}
        imgID={activeID}
        setVis={setModalVisibility}
        clearActive={clearActive}
        prevImg={previousImage}
        nextImg={nextImage}
      />
    </StyledApp>
  );
}

export default App;
