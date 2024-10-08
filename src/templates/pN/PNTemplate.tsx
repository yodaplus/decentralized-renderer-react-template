import React, { FunctionComponent } from "react";
import { TemplateProps } from "@govtechsg/decentralized-renderer-react-components";
import { css } from "@emotion/core";
import { PNTemplateCertificate } from "../samples/pNTemplateSample";
import { watermarkStyle } from "../../css/main";

const pageStyle = css`
  @page {
    size: A4; /* Set the paper size to A4 */
    margin: 0; /* Remove default margins */
    @top-left {
      content: "";
    }
  }

  @media print {
    .watermarkprint {
      position: block !important; /* Make sure container is positioned relative for watermark */
    }
  }
`;

export const containerStyle = css`
  padding: 25pt 10pt 10pt 10pt;
  margin: auto;
  width: 90%;
  font-family: "Open Sans", sans-serif;
  position: relative;
  background: linear-gradient(to bottom, #eaf7ea, #fdf5e6, #eaf7ea);
`;

const rowStyle = css`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;
const oneRowStyle = css`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
`;

const innerContainer = css`
  border: none;
`;

const cellStyle = css`
  border: none;
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

const titleCellStyle = css`
  p {
    font-size: 12pt;
  }
`;

const titleDescStyle = css`
  text-align: start;
  display: flex;
  p {
    margin: 0;
    font-weight: bold;
    margin-right: 2pt;
  }
  font-size: 8pt;
`;

const headerStyle = css`
  font-size: 15pt;
  text-align: start;
  font-weight: bold;
`;

const subHeaderStyle = css`
  font-size: 10pt;
  text-align: start;
  max-width: 350pt;
  margin-bottom: 20pt;
`;

const titleStyle = css`
  font-size: 12pt;
  text-align: start;
  font-weight: bold;
`;

const descStyle = css`
  text-align: start;
  font-weight: bold;
`;

const footerStyle = css`
  text-align: left;
  padding: 8pt;
  display: flex;
  flex-direction: column;
`;

const signatureHeaderStyle = css`
  font-weight: bold;
  font-size: 10pt;
  margin-bottom: 4pt;
  width: 100%;
  text-align: left;
  color: black;
`;

const signatureInfoStyle = css`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const signatureTitleStyle = css`
  font-size: 10pt;
  font-weight: bold;
  color: red;
`;

const signatureValueStyle = css`
  font-size: 10pt;
  font-weight: bold;
  color: black;
`;

const paragraphStyle = css`
  text-align: left;
  font-size: 8pt;
  margin: 10pt 0;
  p {
    margin: 0;
    padding: 0;
  }
`;

const lawHeaderStyle = css`
  font-weight: bold;
  font-size: 9pt;
  margin: 12pt 0 6pt;
`;

const titleDescStyleIndented = css`
  text-align: start;
  font-size: 8pt;
  font-weight: 600;
  display: flex;
  flex-direction: column;
  margin-left: 12pt;
`;

const wordBold = css`
  font-weight: bold;
`;

export const PNTemplate: FunctionComponent<TemplateProps<PNTemplateCertificate> & {
  className?: string;
}> = ({ document, className = "" }) => {
  return (
    <div css={pageStyle}>
      <div css={containerStyle} className={className} id="custom-template">
        <div css={watermarkStyle}>
          {/* You can replace this text with an image by using an <img> tag */}
          {document?.watermarkText}
        </div>
        <div css={headerStyle}>Electronic Promissory Note</div>
        <div css={subHeaderStyle}>
          This electronic payment undertaking (ePU) with reference <span css={wordBold}>{document?.referenceNo}</span>
          &nbsp;is timestamped at&nbsp;
          <span css={wordBold}>{document?.signatureTimeStamp}</span>
        </div>
        <div css={innerContainer}>
          <div css={titleStyle}>Party Details</div>
          <div css={rowStyle}>
            <div css={cellStyle}>
              <p css={descStyle}>(Drawer Name)</p>
              <div css={titleDescStyle}>
                <p>Company Name:</p>
                <div>{document?.drawerName}</div>
              </div>
              <div css={titleDescStyle}>
                <p>Company Number/LEI:</p>
                <div>{document?.leiOfDrawer}</div>
              </div>
              {document?.countryOfDrawer && (
                <div css={titleDescStyle}>
                  <p>Jurisdiction of Incorporation:</p>
                  <div>{document?.countryOfDrawer}</div>
                </div>
              )}
              <div css={titleDescStyle}>
                <p>Place of issue:</p>
                <div>{document?.placeOfIssue}</div>
              </div>
            </div>
            <div css={cellStyle}>
              <p css={descStyle}>(Drawee Name)</p>
              <div css={titleDescStyle}>
                <p>Company Name:</p>
                <div>{document?.draweeName}</div>
              </div>
              <div css={titleDescStyle}>
                <p>Company Number/LEI:</p>
                <div>{document?.leiOfDrawee}</div>
              </div>
              {document?.countryOfDrawee && (
                <div css={titleDescStyle}>
                  <p>Jurisdiction of Incorporation:</p>
                  <div>{document?.countryOfDrawee}</div>
                </div>
              )}
            </div>
          </div>
          <div css={oneRowStyle}>
            <div css={titleCellStyle}>
              <p
                style={{
                  fontSize: "10pt"
                }}
              >
                We promise to pay <span css={wordBold}>{document?.drawerName}</span> on&nbsp;
                <span css={wordBold}>{document?.dueDate}</span>, the sum of&nbsp;
                <span css={wordBold}>
                  {document?.currencyCode}
                  &nbsp;
                  {document?.amountInFigures} ({document?.currencyCode} {document?.amountInWords})&nbsp;
                </span>
                &nbsp; for value received. Payment shall be made to the designated bank account of the&nbsp;
                <span css={wordBold}>{document?.drawerName}</span>.
              </p>
            </div>
          </div>
          <div css={paragraphStyle}>
            <p css={lawHeaderStyle}>Law and Arbitration</p>
            <p
              style={{
                fontWeight: 600
              }}
            >
              The maker, payee and each indorsee and/or holder of this promissory note agree that:
            </p>
            <div css={titleDescStyleIndented}>
              <p>
                (1) This promissory note shall be subject to Singapore law, without reference to any conflict of law
                rules thereunder (but not limited to any conflict of law rules under the Bills of Exchange Act 1949) or
                under any other system of law.
              </p>
              <p>
                (2) Any and all disputes arising out of or in connection with this contract, including any question
                regarding its existence, validity or termination, shall be referred to and finally resolved by
                arbitration seated in Singapore in accordance with the Arbitration Rules of the Singapore Chamber of
                Maritime Arbitration (&ldquo;SCMA Rules&rdquo;) current at the commencement of the arbitration, which
                rules are deemed to be incorporated by reference in this clause.
              </p>
            </div>
            <p css={lawHeaderStyle}>No presentation / Notice / Protest Required</p>
            <div css={titleDescStyleIndented}>
              <p>
                The maker, payee and each indorsee and/or holder of this promissory note agree that any and all
                requirements for presentation, notice and/or protest under any law (whether as a precondition to
                liability or otherwise) are fully and irrevocably waived and all parties to this promissory note shall
                be estopped from raising the non-fulfillment of any such alleged requirements for presentation and/or
                notification to avoid liability for payment hereunder.
              </p>
            </div>
          </div>
          <div css={oneRowStyle}>
            <div css={cellStyle}>
              <p
                style={{
                  fontSize: "10pt",
                  marginBottom: "10pt",
                  marginTop: "10pt"
                }}
              >
                Executed by the Issuer and signed by the person who under the laws of its jurisdiction are acting under
                the authority of the Issuer.
              </p>
            </div>
          </div>
        </div>
        <footer css={footerStyle}>
          <div css={signatureHeaderStyle}>Digitally Signed By:</div>
          <div css={signatureInfoStyle}>
            <div>
              <span css={signatureTitleStyle}>Name: </span>
              <span css={signatureValueStyle}>{document?.signatureName}</span>
            </div>
            <div>
              <span css={signatureTitleStyle}>Time Stamp: </span>
              <span css={signatureValueStyle}>{document?.signatureTimeStamp}</span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};
