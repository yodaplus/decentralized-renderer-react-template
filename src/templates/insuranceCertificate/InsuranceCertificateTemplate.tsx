import React, { FunctionComponent } from "react";
import { TemplateProps } from "@govtechsg/decentralized-renderer-react-components";
import { css } from "@emotion/core";
import { InsuranceCetificateTemplate } from "../samples/insuranceCertificateTemplateSample";

const pageStyle = css`
  @page {
    size: A4; /* Set the paper size to A4 */
    margin: 0; /* Remove default margins */
  }
`;

const containerStyle = css`
  padding: 10pt;
  margin: auto;
  width: 90%;
  font-family: "Open Sans", sans-serif;
  overflow-wrap: anywhere;
  white-space: break-spaces;
  td {
    font-size: 8pt;
  }
`;

const rowStyle = css`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

const rowSignatureStyle = css`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
`;

const cellStyleFlex = css`
  display: flex;
  justify-content: space-between;
`;

const innerContainer = css`
  border: 0.5pt solid #000;
  margin: 20pt 0;
`;

const fourColumnsRowStyle = css`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;

const singleRowStyle = css`
  display: grid;
  grid-template-columns: 1fr;
`;

const oneCell = css`
  display: flex;
  justify-content: space-between;
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
  h3 {
    margin: 0 5pt 0 0;
    font-weight: normal;
    font-size: 8pt;
  }
`;

const titleStyle = css`
  margin: 0;
  text-align: center;
`;

const subtitleStyle = css`
  text-align: center;
  margin: 0;
`;

const signatureStyle = css`
  width: 80pt;
  height: auto;
  display: block;
  margin: 2pt 0;
`;

const tableCellStyle = css`
  border-left: 0.5pt solid #000;
  border-right: 0.5pt solid #000;
  padding: 4pt;
  text-align: left;
`;

const tableHeaderCellStyle = css`
  border: 0.5pt solid #000;
  padding: 4pt;
  text-align: left;
  font-weight: 600;
`;

const tableStyle = css`
  width: 100%;
  border-collapse: collapse;
  & tr:first-child td {
    border-top: 0.5pt solid #000;
  }
  & tr:last-child td {
    border-bottom: 1pt solid #000;
  }
`;

const hideOnPrint = css`
  @media print {
    display: none !important;
  }
`;

export const InsuranceCertificateTemplate: FunctionComponent<TemplateProps<InsuranceCetificateTemplate> & {
  className?: string;
}> = ({ document, className = "" }) => {
  return (
    <>
      <div css={pageStyle}>
        <div css={containerStyle} className={className} id="custom-template">
          <h5 css={titleStyle} className="m-0">
            Certificate of Insurance
          </h5>

          <div css={innerContainer}>
            <div css={cellStyle}>
              <h1 css={titleStyle} className="m-0">
                {document.insuranceCompanyName.toUpperCase()}
              </h1>
              <h5 css={subtitleStyle}>{document.insuranceCompanyAddress.toUpperCase()}</h5>
            </div>

            <div css={rowStyle}>
              <div css={cellStyle}>
                <h4>Insured Party Details</h4>
                <p>{document.insuredPartyName.toUpperCase()}</p>
                <p>{document.insuredPartyPhoneNumber}</p>
              </div>
              <div css={rowStyle}>
                <div css={cellStyle}>
                  <h4>Insurance Policy Number</h4>
                  <p>{document.insurancePolicyNumber}</p>
                </div>
                <div css={cellStyle}>
                  <h4>Additional Numbers</h4>
                  <p>{document.additionalNumbers}</p>
                </div>

                <div css={cellStyle}>
                  <h4>BL Number</h4>
                  <p>{document.blNumber}</p>
                </div>
                <div css={cellStyle}>
                  <h4>Invoice Number</h4>
                  <p>{document.invoiceNumber}</p>
                </div>
              </div>
            </div>
            <div css={rowStyle}>
              <div css={cellStyle}>
                <p>
                  Period of Issuance: From {document.periodOfIsuranceFromDate} To {document.periodOfIsuranceToDate}
                </p>
              </div>
              <div css={cellStyle}>
                <h4>Agent Details</h4>
                <p>{document.agentDetails}</p>
              </div>
            </div>
            <div css={fourColumnsRowStyle}>
              <div css={cellStyle}>
                <h4>Place of Departure</h4>
                <p>{document.placeOfDepature}</p>
              </div>
              <div css={cellStyle}>
                <h4>Estimated Departure Time</h4>
                <p>{document.estimatedDateTimeDeparture}</p>
              </div>
              <div css={cellStyle}>
                <h4>Vessel Number</h4>
                <p>{document.vesselNumber}</p>
              </div>
              <div css={cellStyle}>
                <h4>Voyage Number</h4>
                <p>{document.voyageNumber}</p>
              </div>
            </div>
            <div css={fourColumnsRowStyle}>
              <div css={cellStyle}>
                <h4>Port of Loading</h4>
                <p>{document.portOfLoading}</p>
              </div>
              <div css={cellStyle}>
                <h4>Original Loading Location</h4>
                <p>{document.originalLoadingLocation}</p>
              </div>

              <div css={cellStyle}>
                <h4>Place of Delivery</h4>
                <p>{document.placeOfDelivery}</p>
              </div>
              <div css={cellStyle}>
                <h4>Incoterms</h4>
                <p>{document.incoterms}</p>
              </div>
            </div>

            <div css={singleRowStyle}>
              <table css={[cellStyle, tableStyle]}>
                <tr>
                  <td css={tableHeaderCellStyle}>HS Code</td>
                  <td css={tableHeaderCellStyle}>Commodity Name</td>
                  <td css={tableHeaderCellStyle}>Commodity Description</td>
                  <td css={tableHeaderCellStyle}>No of Packages</td>
                </tr>
                <tr>
                  <td css={tableCellStyle}>{document.hsCode}</td>
                  <td css={tableCellStyle}>{document.name}</td>
                  <td css={tableCellStyle}>{document.description}</td>
                  <td css={tableCellStyle}>{document.noOfPackages}</td>
                </tr>
              </table>
            </div>

            <div css={singleRowStyle}>
              <table css={[cellStyle, tableStyle]}>
                <tr>
                  <td css={tableHeaderCellStyle} style={{ textAlign: "center" }}>
                    Premium Schedule
                  </td>
                </tr>
                <tr>
                  <td css={tableCellStyle}>{document.premiumSchedule}</td>
                </tr>
              </table>
            </div>
            <div css={singleRowStyle}>
              <table css={[cellStyle, tableStyle]}>
                <tr>
                  <td css={tableHeaderCellStyle} style={{ textAlign: "center" }}>
                    Policy Cover
                  </td>
                  <td css={tableHeaderCellStyle} style={{ textAlign: "center" }}>
                    Scope Cover
                  </td>
                </tr>
                <tr>
                  <td css={tableCellStyle}>{document.policyCover}</td>
                  <td css={tableCellStyle}>{document.scopeCover}</td>
                </tr>
              </table>
            </div>

            <div css={singleRowStyle}>
              <div css={cellStyle}>
                <div style={{ display: "flex" }}>
                  <h3>Insurance Claim Adjuster :</h3>
                  <p>{document?.insuranceClaimAdjuster}</p>
                </div>
                <div style={{ display: "flex" }}>
                  <h3>Insurance Value Amount :</h3>

                  <p>
                    {document?.insuredValueAmt} {document?.currencyCode}
                  </p>
                </div>
                <div style={{ display: "flex" }}>
                  <h3>Insured Amount Premium :</h3>
                  {document?.insuredPremiumAmt && (
                    <p>
                      {document?.insuredPremiumAmt} {document?.currencyCode}
                    </p>
                  )}
                </div>
                <div style={{ display: "flex" }}>
                  <h3>Insured Amount Premium in Words :</h3>
                  {document?.insuredPremiumAmtInWords && (
                    <p>
                      {document?.insuredPremiumAmtInWords} {document?.currency}
                    </p>
                  )}
                </div>
                <div style={{ display: "flex" }}>
                  <h3>Tax Amount :</h3>
                  {document?.taxAmt && (
                    <p>
                      {document?.taxAmt} {document?.currencyCode}
                    </p>
                  )}
                </div>
                <div style={{ display: "flex" }}>
                  <h3>Excess :</h3>
                  <p>{document.excess}</p>
                </div>
                <div style={{ display: "flex" }}>
                  <h3>Payment Location :</h3>
                  <p>{document.paymentLocation}</p>
                </div>
              </div>
            </div>

            <div css={rowStyle}>
              <div css={cellStyle}>
                <h4>Remarks</h4>
                <p>{document.remarks}</p>
              </div>
              <div css={cellStyle}>
                {document?.signature && <img css={signatureStyle} src={document?.signature} alt="Signature" />}
                <p>Issue Date: {document.issueDate}</p>
                <p>Place of Issue: {document.placeOfIssue}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
