import React from "react";
import styled from "@emotion/styled";
import FootItems from "./FootItems";

const TextBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
`;

function Footer() {
  return (
    <footer className="">
      <h1>Footer</h1>
      <TextBox>
        {FootItems.desktop?.columns?.map((column) => {
          return (
            <div className="content" key={column.title}>
              <p>{column.title}</p>
              {column.menu?.map((menu) => {
                return (
                  <div className="menu">
                    <p>{menu.label}</p>
                  </div>
                );
              })}
            </div>
          );
        })}
      </TextBox>
    </footer>
  );
}

export default Footer;
