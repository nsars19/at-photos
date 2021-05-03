import styled from "styled-components";
import React, { useEffect, useState } from "react";
import ProgressiveImage from "./components/progressiveImage/ProgressiveImage";
import ImageFrame from "./components/imageFrame/imageFrame";
import colors from "./utils/colors";
import ImageDisplay from "./components/imageDisplay/imageDisplay";
import at from "./assets/at.png";
import { BsChevronDown } from "react-icons/bs";
import { Element, scroller } from "react-scroll";

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

  section {
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    color: ${colors.blue};

    img {
      margin-top: 50px;
    }

    h1 {
      margin: 0 30px;
      margin-top: 70px;
      max-width: 500px;
      text-align: center;
      font-size: 1.5em;
    }

    .icon-wrap {
      height: 100%;
      width: 100%;
      padding-bottom: 30px;
      display: flex;
      align-items: flex-end;
      justify-content: center;
    }

    .icon-down {
      font-size: 40px;
      cursor: pointer;
    }
  }

  @media (min-width: 1080px) {
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

  const mapKeys =
    keys &&
    keys.slice(0, 55).map(({ _id, key }) => (
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
    ));

  return (
    <StyledApp>
      <section>
        <img src={at} alt={"AT"} />
        <h1>
          A collection of some of the photos I took during my 2019 thru-hike
          attempt
        </h1>
        <div className="icon-wrap">
          <BsChevronDown className="icon-down" onClick={scrollToTarget} />
        </div>
      </section>
      <Element name="scroll-target">
        <div className="img-wrap">{mapKeys || <div>Loading...</div>}</div>
      </Element>
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
