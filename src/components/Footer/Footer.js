import React from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import FootItems from "./FootItems";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagramSquare,
  faYoutubeSquare,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer
      css={css`
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        padding: 30px 0 0 0;
        background-color: #212121;
        z-index: auto;
      `}
    >
      <div
        css={css`
          width: 888px;
        `}
      >
        <div
          css={css`
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            width: 100%;
            align-items: center;
          `}
        >
          <a
            css={css`
              width: 235px;
              height: auto;
            `}
            href="https://www.hacktiv8.com/"
          >
            <img
              css={css`
                object-fit: cover;
                width: 100%;
                height: 100%;
              `}
              src="https://www.hacktiv8.com/images/logo/hacktiv8-light.webp"
              alt="hacktivate-logo"
            />
          </a>
          <ul
            css={css`
              display: flex;
              justify-content: center;
              align-items: center;
            `}
          >
            <li
              css={css`
                margin: 0 15px 0 0;
              `}
            >
              {FootItems.desktop.icons?.map((icon) => {
                return (
                  <Router key={icon.name}>
                    <Link to={icon.url}></Link>
                  </Router>
                );
              })}
            </li>
          </ul>
        </div>
        <div
          css={css`
            margin: 50px 0 0 0;
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
          `}
        >
          {FootItems.desktop?.columns?.map((column) => {
            return (
              <div
                css={css`
                  color: #fff;
                  font-weight: 378;
                  text-transform: capitalize;
                `}
                key={column.title}
              >
                <h2
                  css={css`
                    color: #8d8d8d;
                    line-height: 1.2;
                    font-size: 16px;
                    font-weight: 475;
                  `}
                >
                  {column.title}
                </h2>
                <ul
                  css={css`
                    list-style-type: none;
                    padding-left: 0;
                  `}
                >
                  {column.menu?.map((menu) => {
                    return (
                      <li key={menu.label}>
                        <Router>
                          <Link
                            css={css`
                              text-decoration: none;
                            `}
                            to={menu.path}
                          >
                            <p
                              css={css`
                                color: #fff;
                                line-height: 1.4;
                                font-size: 14px;
                              `}
                            >
                              {menu.label}
                            </p>
                          </Link>
                        </Router>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>

        <div
          css={css`
            margin: 30px 0 0 0;
            padding: 15px 0;
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            border-top: 1px solid rgba(248, 248, 248, 0.2);
          `}
        >
          <div
            css={css`
              display: flex;
              justify-content: center;
              align-items: center;
              width: 100%;
            `}
          >
            <p
              css={css`
                text-transform: none;
                width: 100%;
                font-weight: 300;
                color: #fff;
              `}
            >
              ©&nbsp;2022 &nbsp;PT. Hacktivate Teknologi Indonesia
            </p>
          </div>
          <div
            css={css`
              display: flex;
              justify-content: flex-end;
              align-items: center;
              width: 100%;
            `}
          >
            <a
              css={css`
                display: flex;
                justify-content: center;
                align-items: center;
                text-decoration: none;
                outline: none;
                line-height: 1.3;
                font-weight: 300;
                text-transform: unset;
                font-size: 14px;
                color: #fff;
              `}
              href="/sitemap.xml"
            >
              Sitemap
            </a>
            <a
              css={css`
                text-decoration: none;
                margin: 0 0 0 35px;
                line-height: 1.3;
                font-weight: 300;
                font-size: 14px;
                color: #fff;
              `}
              href="/terms-and-conditions"
            >
              Syarat dan Ketentuan
            </a>
            <a
              css={css`
                text-decoration: none;
                margin: 0 0 0 35px;
                line-height: 1.3;
                font-weight: 300;
                font-size: 14px;
                color: #fff;
              `}
              href="/privacy-policy"
            >
              Kebijakan Privasi
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
