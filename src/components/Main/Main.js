import React from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import {
  faCalculator,
  faLightbulb,
  faPuzzlePiece,
  faFileUpload,
  faTree,
  faLayerGroup,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons";
// import { Sliders } from "./Slider";

const wrapper = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 45px 0;
`;

const diamondColumn = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 15px 0 0 0;
`;

const heading2 = css`
  line-height: 1.2;
  color: #383838;
  text-align: center;
  text-transform: capitalize;
  font-weight: 700;
  font-size: 26px;
`;

const variantHeading2 = css`
  color: #fff;
`;

const imageStyle = css`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const imageStyle2 = css`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const iconStyle = css`
  font-size: 24px;
  color: #f16634;
`;

const heading3 = css`
  line-height: 1.2;
  color: #383838;
  text-transform: capitalize;
  font-weight: 700;
  font-size: 18px;
`;

const paragraph = css`
  text-transform: none;
  color: #383838;
  margin: 5px 0 0 0;
  line-height: 1.2;
  font-weight: 300;
  font-size: 14px;
`;

const buttonJoin = css`
  height: 40px;
  padding: 5px 10px;
  border-radius: 100px;
  border: 1px solid #f16634;
  white-space: pre;
  font-size: 12px;
  color: #fff;
  outline: none;
  cursor: pointer;
  box-shadow: 0px 3px 30px #0000000d;
  width: 100%;
  margin: 40px 0 0 0;
  border-color: #f16634;
  background-color: #f16634;
  text-transform: uppercase;
  font-weight: 700;
`;

const yellowButtonJoin = css`
  border-color: #f5942e;
  background-color: #f5942e;
`;

const blueButtonJoin = css`
  border-color: #1d3d71;
  background-color: #1d3d71;
`;

function Main() {
  return (
    <div>
      {/* Section 2 */}
      <div css={wrapper}>
        <div
          css={css`
            width: 888px;
          `}
        >
          <h2 css={heading2}>1100+ lulusan hacktiv8 telah bekerja di</h2>

          <div
            css={css`
              display: flex;
              justify-content: center;
              align-items: center;
              margin: 50px 0 0 0;
            `}
          >
            <div
              css={css`
                width: 118px;
                height: auto;
                margin: 0 30px 0 0;
              `}
            >
              <img
                css={imageStyle}
                src="https://www.hacktiv8.com/images/brand/investree.webp"
                alt="investree"
              />
            </div>
            <div
              css={css`
                width: 118px;
                height: auto;
                margin: 0 30px 0 0;
              `}
            >
              <img
                css={imageStyle}
                src="https://www.hacktiv8.com/images/brand/sinarmas.webp"
                alt="sinarmas"
              />
            </div>
            <div
              css={css`
                width: 118px;
                height: auto;
                margin: 0 30px 0 0;
              `}
            >
              <img
                css={imageStyle}
                src="https://www.hacktiv8.com/images/brand/loket.webp"
                alt="loket"
              />
            </div>
            <div
              css={css`
                width: 118px;
                height: auto;
                margin: 0 30px 0 0;
              `}
            >
              <img
                css={imageStyle}
                src="https://www.hacktiv8.com/images/brand/mcpayment.webp"
                alt="mcpayment"
              />
            </div>
            <div
              css={css`
                width: 118px;
                height: auto;
                margin: 0 30px 0 0;
              `}
            >
              <img
                css={imageStyle}
                src="https://www.hacktiv8.com/images/brand/rebelworks.webp"
                alt="rebelworks"
              />
            </div>
            <div
              css={css`
                width: 118px;
                height: auto;
                margin: 0 30px 0 0;
              `}
            >
              <img
                css={imageStyle}
                src="https://www.hacktiv8.com/images/brand/sirclo.webp"
                alt="sirclo"
              />
            </div>
          </div>
          <div
            css={css`
              display: flex;
              justify-content: center;
              align-items: center;
              margin: 50px 0 0 0;
            `}
          >
            <div
              css={css`
                width: 118px;
                height: auto;
                margin: 0 30px 0 0;
              `}
            >
              <img
                css={imageStyle}
                src="https://www.hacktiv8.com/images/brand/wehelpyou.webp"
                alt="wehelpyou"
              />
            </div>
            <div
              css={css`
                width: 118px;
                height: auto;
                margin: 0 30px 0 0;
              `}
            >
              <img
                css={imageStyle}
                src="https://www.hacktiv8.com/images/brand/xendit.webp"
                alt="xendit"
              />
            </div>
            <div
              css={css`
                width: 118px;
                height: auto;
                margin: 0 30px 0 0;
              `}
            >
              <img
                css={imageStyle}
                src="https://www.hacktiv8.com/images/brand/asumsi.webp"
                alt="asumsi"
              />
            </div>
            <div
              css={css`
                width: 118px;
                height: auto;
                margin: 0 30px 0 0;
              `}
            >
              <img
                css={imageStyle}
                src="https://www.hacktiv8.com/images/brand/mekari.webp"
                alt="mekari"
              />
            </div>
            <div
              css={css`
                width: 118px;
                height: auto;
                margin: 0 30px 0 0;
              `}
            >
              <img
                css={imageStyle}
                src="https://www.hacktiv8.com/images/brand/hijub.webp"
                alt="hijub"
              />
            </div>
            <div
              css={css`
                width: 118px;
                height: auto;
                margin: 0 30px 0 0;
              `}
            >
              <img
                css={imageStyle}
                src="https://www.hacktiv8.com/images/brand/tanihub.webp"
                alt="tanihub"
              />
            </div>
          </div>
        </div>
      </div>
      {/* End of Section 2 */}

      {/* Section 3 */}
      <div css={wrapper}>
        <div
          css={css`
            width: 888px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          `}
        >
          <h2 css={heading2}>keunggulan belajar di hacktiv8</h2>
          <div
            css={css`
              display: flex;
              flex-wrap: wrap;
              justify-content: space-between;
              align-items: flex-start;
              margin: 30px 0 0 0;
            `}
          >
            <div
              css={css`
                display: flex;
                justify-content: flex-start;
                align-items: flex-start;
              `}
            >
              <div
                css={css`
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  width: 55px;
                  height: 55px;
                  border-radius: 12px;
                  background-color: #fff;
                `}
              >
                <Icon css={iconStyle} icon={faCalculator} />
              </div>
              <div
                css={css`
                  width: 285px;
                  margin: 0 0 0 15px;
                `}
              >
                <h3 css={heading3}>coding bootcamp</h3>
                <p css={paragraph}>
                  Siswa akan difokuskan untuk belajar menjadi Full Stack
                  Developer atau Data Scientist di program Full Time.
                </p>
              </div>
            </div>
            <div
              css={css`
                display: flex;
                justify-content: flex-start;
                align-items: flex-start;
              `}
            >
              <div
                css={css`
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  width: 55px;
                  height: 55px;
                  border-radius: 12px;
                  background-color: #fff;
                `}
              >
                <Icon css={iconStyle} icon={faLightbulb} />
              </div>
              <div
                css={css`
                  width: 285px;
                  margin: 0 0 0 15px;
                `}
              >
                <h3 css={heading3}>growth mindset</h3>
                <p css={paragraph}>
                  Siswa kami selalu dibimbing dan dituntut memiliki Growth
                  Mindset yang berguna untuk peningkatan karir di masa depan.
                </p>
              </div>
            </div>
            <div
              css={css`
                display: flex;
                justify-content: flex-start;
                align-items: flex-start;
              `}
            >
              <div
                css={css`
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  width: 55px;
                  height: 55px;
                  border-radius: 12px;
                  background-color: #fff;
                `}
              >
                <Icon css={iconStyle} icon={faPuzzlePiece} />
              </div>
              <div
                css={css`
                  width: 285px;
                  margin: 0 0 0 15px;
                `}
              >
                <h3 css={heading3}>hiring partner</h3>
                <p css={paragraph}>
                  Kami bekerjasama dengan lebih dari 350 Hiring Partner yang
                  siap merekrut lulusan Full Time Program kami.
                </p>
              </div>
            </div>
            <div
              css={css`
                display: flex;
                justify-content: flex-start;
                align-items: flex-start;
              `}
            >
              <Icon css={iconStyle} icon={faFileUpload} />
              <div
                css={css`
                  width: 285px;
                  margin: 0 0 0 15px;
                `}
              >
                <h3 css={heading3}>relevan skillset</h3>
                <p css={paragraph}>
                  Kurikulum kami dibuat dan selalu disesuaikan dengan kebutuhan
                  industri teknologi masa kini.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End of Section 3 */}

      {/* Section 4 */}
      <div
        css={css`
          width: 100%;
          padding: 45px 0;
          height: 580px;
          background-color: #132748;
        `}
      >
        <h2
          css={css`
            ${heading2}
            ${variantHeading2}
          `}
        >
          pilih jalur belajar kamu
        </h2>

        <div
          css={css`
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 30px 0 0 0;
          `}
        >
          <div
            css={css`
              width: 300px;
              height: 430px;
              margin: 0 25px 0 0;
              border-radius: 12px;
              background-color: #fffdfd;
              overflow: hidden;
            `}
          >
            <div
              css={css`
                width: 100%;
                height: 185px;
              `}
            >
              <img
                css={imageStyle}
                src="https://www.hacktiv8.com/images/pages/home/learning-path-section-1.webp"
                alt="learning-path-section-1"
              />
            </div>
            <div
              css={css`
                position: relative;
                padding: 25px 22px;
              `}
            >
              <div
                css={css`
                  position: absolute;
                  top: -27.5px;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  width: 55px;
                  height: 55px;
                  border-radius: 12px;
                  background-color: #fff;
                  box-shadow: 0px 1px 4px rgb(0 0 0 / 8%);
                `}
              >
                <Icon
                  css={css`
                    ${iconStyle}
                    font-size: 26px;
                  `}
                  icon={faTree}
                />
              </div>
              <h3 css={heading3}>bootcamp</h3>
              <p css={paragraph}>
                Program intensif untuk belajar menjadi Full Stack Developer atau
                Data Scientist.
              </p>
              <a
                css={css`
                  text-decoration: none;
                  text-transform: capitalize;
                  font-weight: 500;
                  color: #383838;
                `}
                href="/"
              >
                <button css={buttonJoin} type="button">
                  join bootcamp
                </button>
              </a>
            </div>
          </div>
          <div
            css={css`
              width: 300px;
              height: 430px;
              margin: 0 25px 0 0;
              border-radius: 12px;
              background-color: #fffdfd;
              overflow: hidden;
            `}
          >
            <div
              css={css`
                width: 100%;
                height: 185px;
              `}
            >
              <img
                css={imageStyle}
                src="https://www.hacktiv8.com/images/pages/home/learning-path-section-2.webp"
                alt="learning-path-section-2"
              />
            </div>
            <div
              css={css`
                position: relative;
                padding: 25px 22px;
              `}
            >
              <div
                css={css`
                  position: absolute;
                  top: -27.5px;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  width: 55px;
                  height: 55px;
                  border-radius: 12px;
                  background-color: #fff;
                  box-shadow: 0px 1px 4px rgb(0 0 0 / 8%);
                `}
              >
                <Icon
                  css={css`
                    ${iconStyle}
                    font-size: 26px;
                  `}
                  icon={faLayerGroup}
                />
              </div>
              <h3 css={heading3}>professional development</h3>
              <p css={paragraph}>
                Program paruh waktu untuk meningkatkan skill di bidang digital
                teknologi.
              </p>
              <a
                css={css`
                  text-decoration: none;
                  text-transform: capitalize;
                  font-weight: 500;
                  color: #383838;
                `}
                href="/"
              >
                <button
                  css={css`
                    ${buttonJoin}
                    ${yellowButtonJoin}
                  `}
                  type="button"
                >
                  join professional development
                </button>
              </a>
            </div>
          </div>
          <div
            css={css`
              width: 300px;
              height: 430px;
              margin: 0 25px 0 0;
              border-radius: 12px;
              background-color: #fffdfd;
              overflow: hidden;
            `}
          >
            <div
              css={css`
                width: 100%;
                height: 185px;
              `}
            >
              <img
                css={imageStyle}
                src="https://www.hacktiv8.com/images/pages/home/learning-path-section-3.webp"
                alt="learning-path-section-3"
              />
            </div>
            <div
              css={css`
                position: relative;
                padding: 25px 22px;
              `}
            >
              <div
                css={css`
                  position: absolute;
                  top: -27.5px;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  width: 55px;
                  height: 55px;
                  border-radius: 12px;
                  background-color: #fff;
                  box-shadow: 0px 1px 4px rgb(0 0 0 / 8%);
                `}
              >
                <Icon
                  css={css`
                    ${iconStyle}
                    font-size: 26px;
                  `}
                  icon={faUserTie}
                />
              </div>
              <h3 css={heading3}>corporate program</h3>
              <p css={paragraph}>
                Program pelatihan di bidang digital teknologi khusus untuk
                perusahaan.
              </p>
              <a
                css={css`
                  text-decoration: none;
                  text-transform: capitalize;
                  font-weight: 500;
                  color: #383838;
                `}
                href="/"
              >
                <button
                  css={css`
                    ${buttonJoin}
                    ${blueButtonJoin}
                  `}
                  type="button"
                >
                  join corporate program
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* End of Section 4 */}

      {/* Section 5 */}
      <div css={wrapper}>
        <div
          css={css`
            width: 888px;
            display: flex;
            justify-content: center;
            align-items: center;
          `}
        >
          <div
            css={css`
              width: 505px;
            `}
          >
            <h2
              css={css`
                line-height: 1.2;
                text-transform: none;
                color: #383838;
                font-weight: 700;
                font-size: 30px;
              `}
            >
              Coding Bootcamp Pertama di Asia yang Tergabung dalam CIRR
            </h2>
            <p
              css={css`
                text-transform: none;
                color: #383838;
                margin: 25px 0 0 0;
                line-height: 1.3;
                font-size: 14px;
              `}
            >
              Council on Integrity in Results Reporting (CIRR) adalah standar
              yang dikembangkan oleh sekelompok besar sekolah coding yang
              percaya bahwa transparansi dalam memberikan hasil belajar kepada
              calon siswa adalah hal yang sangat penting.
            </p>
            <a
              css={css`
                text-transform: capitalize;
                font-weight: 500;
                font-size: 14px;
                display: block;
                margin: 15px 0 0 0;
                text-decoration: underline;
                color: #f16634;
              `}
              href="/outcomes"
            >
              selengkapnya
            </a>
          </div>
          <div
            css={css`
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              margin: 0 0 0 40px;
            `}
          >
            <div
              css={css`
                ${diamondColumn}
                justify-content: flex-end;
                margin: 0;
              `}
            >
              <div
                css={css`
                  width: 105px;
                  height: 105px;
                  margin: 0 15px 0 0;
                  padding: 20px;
                  border-radius: 12px;
                  background-color: #fff;
                  box-shadow: 0px 3px 30px #0000000d;
                `}
              >
                <div
                  css={css`
                    width: 100%;
                    height: 100%;
                  `}
                >
                  <img
                    css={imageStyle2}
                    src="https://www.hacktiv8.com/images/pages/home/best-bootcamp.webp"
                    alt="best-bootcamp"
                  />
                </div>
              </div>
              <div
                css={css`
                  width: 105px;
                  height: 105px;
                  margin: 0 15px 0 0;
                  padding: 20px;
                  border-radius: 12px;
                  background-color: #fff;
                  box-shadow: 0px 3px 30px #0000000d;
                `}
              >
                <div
                  css={css`
                    width: 100%;
                    height: 100%;
                  `}
                >
                  <img
                    css={imageStyle2}
                    src="https://www.hacktiv8.com/images/pages/home/holon-iq.webp"
                    alt="holon-iq"
                  />
                </div>
              </div>
              <div></div>
            </div>

            <div css={diamondColumn}>
              <div
                css={css`
                  width: 105px;
                  height: 105px;
                  margin: 0 15px 0 0;
                  padding: 20px;
                  border-radius: 12px;
                  background-color: #fff;
                  box-shadow: 0px 3px 30px #0000000d;
                `}
              >
                <div
                  css={css`
                    width: 100%;
                    height: 100%;
                  `}
                >
                  <img
                    css={imageStyle2}
                    src="https://www.hacktiv8.com/images/pages/home/aws-edstart.webp"
                    alt="aws-edstart"
                  />
                </div>
              </div>
              <div
                css={css`
                  width: 105px;
                  height: 105px;
                  margin: 0 15px 0 0;
                  padding: 20px;
                  border-radius: 12px;
                  background-color: #fff;
                  box-shadow: 0px 3px 30px #0000000d;
                `}
              >
                <div
                  css={css`
                    width: 100%;
                    height: 100%;
                  `}
                >
                  <img
                    css={imageStyle2}
                    src="https://www.hacktiv8.com/images/pages/home/cirr.webp"
                    alt="cirr"
                  />
                </div>
              </div>
              <div
                css={css`
                  width: 105px;
                  height: 105px;
                  margin: 0 15px 0 0;
                  padding: 20px;
                  border-radius: 12px;
                  background-color: #fff;
                  box-shadow: 0px 3px 30px #0000000d;
                `}
              >
                <div
                  css={css`
                    width: 100%;
                    height: 100%;
                  `}
                >
                  <img
                    css={imageStyle2}
                    src="https://www.hacktiv8.com/images/pages/home/google.webp"
                    alt="google"
                  />
                </div>
              </div>
            </div>

            <div
              css={css`
                ${diamondColumn}
                justify-content: flex-start;
              `}
            >
              <div
                css={css`
                  width: 105px;
                  height: 105px;
                  margin: 0 15px 0 0;
                  padding: 20px;
                  border-radius: 12px;
                  background-color: #fff;
                  box-shadow: 0px 3px 30px #0000000d;
                `}
              >
                <div
                  css={css`
                    width: 100%;
                    height: 100%;
                  `}
                >
                  <img
                    css={imageStyle2}
                    src="https://www.hacktiv8.com/images/pages/home/prakerja.webp"
                    alt="prakerja"
                  />
                </div>
              </div>
              <div
                css={css`
                  width: 105px;
                  height: 105px;
                  margin: 0 15px 0 0;
                  padding: 20px;
                  border-radius: 12px;
                  background-color: #fff;
                  box-shadow: 0px 3px 30px #0000000d;
                `}
              >
                <div
                  css={css`
                    width: 100%;
                    height: 100%;
                  `}
                >
                  <img
                    css={imageStyle2}
                    src="https://www.hacktiv8.com/images/pages/home/kampus-merdeka.webp"
                    alt="kampus-merdeka"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End of Section 5 */}

      {/* Section 7 */}
      <div css={wrapper}>
        <div
          css={css`
            width: 888px;
          `}
        >
          <div
            css={css`
              display: flex;
              justify-content: space-between;
              align-items: center;
              width: 100%;
              height: 310px;
              padding: 0 0 0 25px;
              border-radius: 12px;
              background-color: #fff;
              box-shadow: 0px 1px 4px rgb(0 0 0 / 8%);
              overflow: hidden;
            `}
          >
            <div>
              <h2
                css={css`
                  line-height: 1.2;
                  color: #383838;
                  text-transform: none;
                  font-weight: 700;
                  font-size: 30px;
                `}
              >
                Konsultasi Dengan <br />
                Representif Hacktiv8
              </h2>
              <p
                css={css`
                  text-transform: none;
                  color: #383838;
                  margin: 15px 0 0 0;
                  font-weight: 300;
                  font-size: 16px;
                  line-height: 1.3;
                `}
              >
                Kami yang membantumu memilih, <br />
                kamu yang menentukan.
              </p>
              <a
                css={css`
                  justify-content: center;
                  align-items: center;
                  text-decoration: none;
                  text-transform: capitalize;
                  font-size: 12px;
                  color: #fff;
                  outline: none;
                  display: block;
                  margin: 30px 0 0 0;
                `}
                href="https://api.whatsapp.com/send?phone=622180675787&text=Halo,%20saya%20mau%20informasi%20lebih%20lanjut%20tentang%20Hacktiv8"
              >
                <button
                  css={css`
                    ${buttonJoin}
                    margin: 0 0 30px 0;
                    width: 155px;
                    background-color: #fff;
                    color: #f16634;
                  `}
                  type="button"
                >
                  hubungi kami
                </button>
              </a>
            </div>
            <div
              css={css`
                width: 305px;
                height: 310px;
              `}
            >
              <img
                css={imageStyle}
                src="https://www.hacktiv8.com/images/pages/home/business-woman.webp"
                alt="business-woman"
              />
            </div>
          </div>
        </div>
      </div>
      {/* End of Section 7 */}

      {/* Section 8 */}
      <div
        css={css`
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 335px;
          background: url(https://www.hacktiv8.com/images/pattern/blue-pattern.webp);
          background-repeat: no-repeat;
          background-size: cover;
        `}
      >
        <div
          css={css`
            width: 888px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          `}
        >
          <h3
            css={css`
              ${heading3}
              text-transform: none;
              color: #fff;
              text-align: center;
              font-size: 32px;
            `}
          >
            Mulai Karir di Bidang Teknologi
          </h3>
          <p
            css={css`
              text-transform: none;
              width: 610px;
              margin: 16px 0 0 0;
              text-align: center;
              line-height: 1.5;
              font-size: 16px;
              color: #fff;
            `}
          >
            Saatnya untuk membangun karirmu di bidang teknologi. Mulai langkah
            awalmu untuk menjadi seorang Full Stack Developer bersama Hacktiv8.
          </p>
          <a
            css={css`
              text-decoration: none;
              text-transform: capitalize;
              font-weight: 500;
              font-size: 14px;
              color: #383838;
            `}
            href="https://www.hacktiv8.com/register"
          >
            <button
              css={css`
                ${buttonJoin}
                width: 180px;
              `}
              type="button"
            >
              daftar sekarang
            </button>
          </a>
        </div>
      </div>
      {/* End of Section 8 */}
    </div>
  );
}

export default Main;
