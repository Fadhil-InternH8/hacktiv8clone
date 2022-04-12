import React from "react";
import styled from "@emotion/styled";
import { MenuItems } from "./MenuItems";

const Head = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("https://www.hacktiv8.com/images/pages/home/banner-section.webp");
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  max-width: 100%;
  height: auto;
  overflow: hidden;
  text-align: center;
  padding: 0 0 28em 0;
`;

const Menu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    max-width: 145px;
  }
`;

const ListMenu = styled.div`
  display: inline-block;
  padding-bottom: 0.4em;
  list-style-type: none;
  text-transform: capitalize;

  a {
    color: #fff;
    text-decoration: none;
    margin-left: 1.5em;
  }
`;

const HeadOverlay = styled.div`
  position: relative;
  top: 10em;

  h2 {
    font-size: 44px;
    color: #fff;
    line-height: 1.2;
    font-weight: 700;
  }

  p {
    color: #fff;
    margin: 16px 0 0 0;
    line-height: 1.2;
    font-weight: 300;
    font-size: 18px;
    margin: 0 13cm;
  }
`;

function Header() {
  return (
    <Head>
      <Menu>
        <a href="/">
          <img
            src="https://www.hacktiv8.com/images/logo/hacktiv8-light.webp"
            alt="hacktiv8-logo"
          />
        </a>
        <ul>
          {MenuItems.menu.map((menu, i) => {
            return (
              <ListMenu key={i}>
                <a href="null">{menu}</a>
              </ListMenu>
            );
          })}
        </ul>
      </Menu>

      <HeadOverlay>
        <h2>Bangun Karir Bersama Hacktiv8</h2>
        <p>
          Hacktiv8 mentransformasi para pemula untuk menjadi digital talent
          terbaik di Indonesia yang siap bekerja.
        </p>
      </HeadOverlay>
    </Head>
  );
}

export default Header;
