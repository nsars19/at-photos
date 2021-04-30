import { useState } from "react";
import styled from "styled-components";
import colors from "./../../utils/colors";

const StyledForm = styled.form`
  width: 94%;
  position: absolute;
  bottom: 15px;
  left: 15px;
  margin: 0 auto;
  display: flex;
  align-items: center;

  input[type="submit"] {
    height: 35px;
    width: 30%;
    padding: 5px 20px;
    border-radius: 6px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    cursor: pointer;
    color: #fff;

    &:hover,
    &:active {
      filter: brightness(0.8);
    }
  }

  input[type="text"] {
    color: #000;
    font-size: 17px;
    background: #e0e0e0;
    width: 70%;
    padding: 8px;
    border: 1px solid transparent;
    border-radius: 6px;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    height: 35px;
    outline: none;

    &:focus {
      border: 1px solid ${colors.darkBlue};
      box-shadow: 0 0 1px ${colors.lightBlue}, 0 0 2px ${colors.lightBlue};
    }
  }

  @media (min-width: 768px) {
    width: 96%;
  }
`;

export default function CommentForm({ imgID, setComments }) {
  const [text, setText] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const body = JSON.stringify({ text, id: imgID });

    const res = await fetch("http://localhost:3000/comments", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body,
    });

    const data = await res.json();

    setText("");
    setComments(data.comments);
  };

  const handleChange = (e) => setText(e.target.value);

  return (
    <StyledForm onSubmit={handleSubmit}>
      <input type="text" value={text} onChange={handleChange} />
      <input type="submit" value="Submit" />
    </StyledForm>
  );
}