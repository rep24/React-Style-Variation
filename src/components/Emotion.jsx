/* @jsxRuntime classic */
/* @jsx jsx */
import { jsx, css } from "@emotion/react";
import style from "@emotion/styled";

export const Emotion = () => {
  const containerStyle = css`
    border: solid 2px #392eff;
    border-radius: 20px;
    padding: 8px;
    margin: 8px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  `;

  const title = css({
    margin: "0",
    color: "#3d84a8"
  });

  return (
    <div css={containerStyle}>
      <p css={title}>Emotion</p>
      <SButton>FIGHT!!</SButton>
    </div>
  );
};

const SButton = style.button`
background-color: #abedd8;
border: none;
padding: 8px;
border-radius: 8px;
&:hover{
  background-color: #46cdcf;
  color:#fff;
  cursor: pointer;
`;
