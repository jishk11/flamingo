import * as React from "react";
/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/core";
import * as globals from "../globals";

export default class WelcomePopUp extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        id="welcomepopup"
        css={css`
          width: 100%;
          height: 100%;
        `}
      >
        {/* surroundings */}
        <div
          css={css`
            position: fixed;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.3);
            opacity: 90%;
            top: 0%;
            left: 0%;
            z-index: 3000;
          `}
          onClick={this.props.close}
        ></div>
        <div
          css={css`
            position: fixed;
            width: 490px;
            margin: auto;
            padding: 20px;
            @media (max-width: 450px) {
              width: 260px;
            }
            top: 29%;
            left: 0;
            right: 0;
            background-color: #ffffff;
            box-shadow: ${globals.cardShadow};
            z-index: 3001;
          `}
        >
          <button
            css={css`
              position: absolute;
              width: 25px;
              height: 20px;
              top: 30px;
              left: 25px;
              border: none;
              font-family: Source Sans Pro;
              font-weight: bold;
              color: #000;
              font-size: 18px;
              z-index: 3002;
              cursor: pointer;
              background-color: transparent;
            `}
            type="button"
            onClick={this.props.close}
          >
            X
          </button>
          <div
            css={css`
              position: relative;
              width: 450px;
              @media (max-width: 450px) {
                width: 220px;
              }
              padding: 20px 4px 4px;
              border: 5px solid #c4c4c4;
              z-index: 3001;
            `}
          >
            <p
              css={css`
                @media (max-width: 450px) {
                  font-size: 35px;
                  top: 15%;
                }
                position: relative;
                width: 100%;
                font-family: ${globals.headlineFont};
                font-style: normal;
                font-weight: bold;
                color: ${globals.DBblue};
                font-size: 50px;
                z-index: 3001;
                text-align: center;
                margin: 10px 10px 10px 3px;
              `}
            >
              Welcome!
            </p>
            <p
              css={css`
                @media (max-width: 450px) {
                  font-size: 12px;
                  top: 10%;
                }
                position: relative;
                width: 90%;
                margin: auto;
                font-size: 16px;
                font-family: "PT Serif";
                font-weight: bold;
                color: #474747;
                z-index: 3001;
                text-align: left;
                margin: 20px;
              `}
            >
              {this.props.bodytext}
            </p>
          </div>
        </div>
      </div>
    );
  }
}
