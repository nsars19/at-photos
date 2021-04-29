import ProgressiveImage from "react-progressive-image";
import Image from "./../image/image";

export default function ProgImage({ imgKey }) {
  return (
    <ProgressiveImage
      delay={1000}
      src={`http://localhost:3000/images/${imgKey}`}
      placeholder={`http://localhost:3000/images/tiny-${imgKey}`}
    >
      {(src, loading) => (
        <Image
          src={src}
          style={{ filter: loading ? "blur(20px)" : "blur(0px)" }}
        />
      )}
    </ProgressiveImage>
  );
}
