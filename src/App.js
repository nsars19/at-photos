import styled from "styled-components";
import React, { useEffect, useState } from "react";
import ProgressiveImage from "./components/progressiveImage/ProgressiveImage";
import ImageFrame from "./components/imageFrame/imageFrame";

const StyledApp = styled.div`
  display: grid;
  gap: 5px;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-auto-flow: row dense;
  justify-content: center;
  width: 99%;
  margin: 0 auto;
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

  return <StyledApp>{mapKeys || <div>Loading...</div>}</StyledApp>;
}

export default App;
