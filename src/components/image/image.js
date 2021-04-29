import React from "react";

export default function Image({ src, alt, style, className }) {
  return (
    <img
      src={src}
      alt={alt || "desc"}
      style={style ? style : {}}
      className={className ? className + " image" : "image"}
      loading="lazy"
    />
  );
}
