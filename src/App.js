import styled from "styled-components";
import React, { useEffect, useState } from "react";
import ProgressiveImage from "./components/progressiveImage/ProgressiveImage";
import ImageFrame from "./components/imageFrame/imageFrame";
import colors from "./utils/colors";

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
    display: grid;
    place-items: center;
    color: ${colors.blue};
    h1 {
      font-size: 2em;
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

  useEffect(() => {
    async function getKeys() {
      const res = await fetch("http://localhost:3000/photos");
      const data = await res.json();
      setKeys(data);
    }

    getKeys();
  }, []);

  const mapKeys =
    keys &&
    keys.slice(0, 30).map(({ _id, key }) => (
      <React.Fragment key={_id}>
        <ImageFrame>
          <ProgressiveImage imgKey={key} />
        </ImageFrame>
      </React.Fragment>
    ));

  return (
    <StyledApp>
      <section>
        <h1>Welcome</h1>
      </section>
      <div className="img-wrap">{mapKeys || <div>Loading...</div>}</div>
    </StyledApp>
  );
}

export default App;
