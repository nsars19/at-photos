import React from "react";
import styled from "styled-components";

const StlyedImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  transition: filter 300ms ease-in, opacity 300ms ease-in;
`;

export default function Image({ src, alt, style, className }) {
  return (
    <StlyedImage
      src={src}
      alt={alt || "desc"}
      style={style ? style : {}}
      className={className ? className + " image" : "image"}
      loading="lazy"
    />
  );
}
