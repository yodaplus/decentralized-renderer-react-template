import React, { FunctionComponent } from "react";
import { TemplateProps } from "@govtechsg/decentralized-renderer-react-components";
import { css } from "@emotion/core";
import { CertOfOriginTemplateCertificate } from "../samples/customTemplate";

const containerStyle = css`
  padding: 10pt;
  margin: auto;
  width: 90%;
  font-family: "Open Sans", sans-serif;
`;

const rowStyle = css`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

const innerContainer = css`
  border: 0.5pt solid #000;
`;

const singleRowStyle = css`
  display: grid;
  grid-template-columns: 1fr;
`;

const fourColumnsRowStyle = css`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;

const cellStyle = css`
  border: 0.5pt solid #000;
  padding: 3.5pt;
  p {
    margin: 0;
    font-weight: bold;
    font-size: 8pt;
  }
  h4 {
    margin: 0;
    font-weight: normal;
    font-size: 8pt;
  }
`;

const titleStyle = css`
  text-align: center;
`;

const signatureStyle = css`
  width: 75pt;
  height: auto;
  display: block;
  margin: 2pt 0;
`;

export const CocTemplate: FunctionComponent<TemplateProps<CertOfOriginTemplateCertificate> & {
  className?: string;
}> = ({ document, className = "" }) => {
  return (
    <div css={containerStyle} className={className} id="custom-template">
      <h5 css={titleStyle}>Bill of Exchange</h5>
      <div css={innerContainer}>
        <div css={rowStyle}>
          <div css={cellStyle}>
            <h4>Reference No.</h4>
            <p>{document.referenceNo}</p>
          </div>
          <div css={cellStyle}>
            <h4>Amount in Figures</h4>
            <p>{document.amountInFigures}</p>
          </div>
        </div>
        <div css={fourColumnsRowStyle}>
          <div css={cellStyle}>
            <h4>Bl date (if applicable)</h4>
            <p>{document.blDate}</p>
          </div>
          <div css={cellStyle}>
            <h4>Invoice date (if applicable)</h4>
            <p>{document.invoiceDate}</p>
          </div>
          <div css={cellStyle}>
            <h4>Place of Issue</h4>
            <p>{document.placeOfIssue}</p>
          </div>
          <div css={cellStyle}>
            <h4>Due date</h4>
            <p>{document.dueDate}</p>
          </div>
        </div>
        <div css={singleRowStyle}>
          <div css={cellStyle}>
            <h4>Payee</h4>
            <p>{document.payee}</p>
          </div>
        </div>
        <div css={singleRowStyle}>
          <div css={cellStyle}>
            <h4>Amount In Words</h4>
            <p>{document.amountInWords}</p>
          </div>
        </div>
        <div css={rowStyle}>
          <div css={cellStyle}>
            <h4>Tenor</h4>
            <p>{document.tenor}</p>
          </div>
          <div css={cellStyle}>
            <h4>Tenor Conditions</h4>
            <p>{document.tenorConditions}</p>
          </div>
        </div>
        <div css={rowStyle}>
          <div css={cellStyle}>
            <h4>LC Reference</h4>
            <p>{document.referenceNo}</p>
          </div>
          <div css={cellStyle}>
            <h4>LC Date</h4>
            <p>{document.amountInFigures}</p>
          </div>
        </div>
        <div css={rowStyle}>
          <div css={cellStyle}>
            <h4>Name of Drawer</h4>
            <p>{document.drawerName}</p>
          </div>
          <div css={cellStyle}>
            <h4>Name of Drawee</h4>
            <p>{document.draweeName}</p>
          </div>
        </div>
        <div css={rowStyle}>
          <div css={cellStyle}>
            <h4>Signature of Drawer</h4>
            <img css={signatureStyle} src={document?.drawerSign} alt="drawerSignature" />
          </div>
          <div css={cellStyle}>
            <h4>Signature of Drawee</h4>
            <img css={signatureStyle} src={document?.draweeSign} alt="draweeSignature" />
          </div>
        </div>
      </div>
    </div>
  );
};
