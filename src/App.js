import styled from "styled-components";
import { useEffect, useState } from "react";
import ProgressiveImage from "./components/progressiveImage/ProgressiveImage";

const StyledApp = styled.div`
  .img-load {
    height: 400px;
  }

  img {
    height: 100%;
    transition: filter 300ms ease-in;
  }

  .image {
    height: 400px;
    width: 400px;
    object-fit: fill;
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
    keys.slice(0, 9).map(({ _id, key }) => (
      <div key={_id}>
        <ProgressiveImage imgKey={key} />
      </div>
    ));

  return <StyledApp>{mapKeys || <div>Loading...</div>}</StyledApp>;
}

export default App;
