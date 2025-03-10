import React, { FunctionComponent } from "react";
import { TemplateProps, TemplateWithComponent } from "@govtechsg/decentralized-renderer-react-components";
import { css } from "@emotion/core";
import { ShipperLetterOfInstructionCertificate } from "../samples/shipperLetterOfInstructionSample";
import { watermarkStyle } from "../../css/main";

const print = css`
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

const pageStyleTwo = css`
  padding: 3.5pt;
  font-family: "Open Sans", sans-serif;
  white-space: break-spaces;
  overflow-wrap: break-word;
  border: 2pt solid #000;
  p {
    margin: 8pt;
    font-weight: bold;
    font-size: 8pt;
  }
  @page {
    size: A4;
    margin-bottom: 20pt;
  }
  .termsAndConditions {
    padding: 15pt;
  }

  @media print {
    padding-bottom: 20px;
    border: none !important;
    
  }
  
  }
`;

const containerStyle = css`
  padding: 10pt;
  margin: auto;
  width: 90%;
  position: relative; /* Make container relative for watermark positioning */
  font-family: "Open Sans", sans-serif;
  overflow-wrap: anywhere;
  white-space: break-spaces;
  page-break-after: always;
  td {
    font-size: 8pt;
  }
`;

const cellStyleFlex = css`
  display: flex;
  justify-content: space-between;
`;

const rowStyle = css`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

const innerContainer = css`
  border: 0.5pt solid #000;
`;

const fourColumnsRowStyle = css`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;
const threeColumnsRowStyle = css`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

const singleRowStyle = css`
  display: grid;
  grid-template-columns: 1fr;
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

const tableCellStyle = css`
  border-left: 0.5pt solid #000;
  border-right: 0.5pt solid #000;
  border-bottom: 0.5pt solid #000;
  padding: 4pt;
  text-align: left;
`;

const tableHeaderCellStyle = css`
  border: 0.5pt solid #000;
  padding: 4pt;
  text-align: left;
  font-weight: 400;
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

export const ShipperLetterOfInstructionTemplate: FunctionComponent<TemplateProps<
  ShipperLetterOfInstructionCertificate
> & {
  className?: string;
}> = ({ document, className = "" }) => {
  return (
    <>
      <div css={print}>
        <div css={containerStyle} className={className} id="custom-template">
          <div css={watermarkStyle}>
            {/* You can replace this text with an image by using an <img> tag */}
            {document?.watermarkText}
          </div>
          <h5 css={titleStyle}>Shipper Letter of Instruction</h5>
          <div css={innerContainer}>
            <div css={rowStyle}>
              <div css={cellStyle}>
                <h4>Issue Date</h4>
                <p>{document?.issueDate}</p>
              </div>
              <div css={cellStyle}>
                <h4>Dispatch Date</h4>
                <p>{document?.dispatchDate}</p>
              </div>
            </div>
            {document?.documentaryCreditIdentifier && (
              <div css={rowStyle}>
                <div css={cellStyle}>
                  <h4>Documentary Credit Idenitifier</h4>
                  <p>{document?.documentaryCreditIdentifier}</p>
                </div>
              </div>
            )}
            <div css={rowStyle}>
              <div css={cellStyle}>
                <h4>Consignee</h4>
                <p>{document.consignee.name}</p>
                <p>{document.consignee.address}</p>
                <p>{document.consignee.phoneNumber}</p>
                <p>{document.consignee.email}</p>
              </div>
              <div css={cellStyle}>
                <h4>Buyer</h4>
                <p>{document.buyer.name}</p>
                <p>{document.buyer.address}</p>
                <p>{document.buyer.phoneNumber}</p>
                <p>{document.buyer.email}</p>
              </div>
              <div css={cellStyle}>
                <h4>Consignor</h4>
                <p>{document.consignor.name}</p>
                <p>{document.consignor.address}</p>
                <p>{document.consignor.phoneNumber}</p>
                <p>{document.consignor.email}</p>
              </div>
              <div css={cellStyle}>
                <h4>Notifying Party</h4>
                <p>{document.notifyingParty.name}</p>
                <p>{document.notifyingParty.address}</p>
                <p>{document.notifyingParty.phoneNumber}</p>
                <p>{document.notifyingParty.email}</p>
              </div>
            </div>
            <div css={rowStyle}>
              <div css={cellStyle}>
                <h4>Freight Forwarder</h4>
                <p>{document.freightForwarder}</p>
              </div>
              <div css={cellStyle}>
                <h4>Origin Country</h4>
                <p>{document.originCountry}</p>
              </div>
              <div css={cellStyle}>
                <h4>Place of Issue</h4>
                <p>{document.placeOfIssue}</p>
              </div>
              <div css={cellStyle}>
                <h4>Place of Dispatch</h4>
                <p>{document.placeOfDispatch}</p>
              </div>
            </div>
            <div css={singleRowStyle}>
              <table css={[cellStyle, tableStyle]}>
                <tr>
                  <td css={tableHeaderCellStyle}>HS Code</td>
                  <td css={tableHeaderCellStyle}>Commodity Name</td>
                  <td css={tableHeaderCellStyle}>Commodity Description</td>
                  <td css={tableHeaderCellStyle}>No. of Package</td>
                  <td css={tableHeaderCellStyle}>Package Width</td>
                  <td css={tableHeaderCellStyle}>Package Length</td>
                  <td css={tableHeaderCellStyle}>Volume (Cube)</td>
                  <td css={tableHeaderCellStyle}>Type Of Packaging & Shipping Marks</td>
                  <td css={tableHeaderCellStyle}>Shipping Marks</td>
                </tr>
                {document.package.map((commodity, index) => (
                  <tr key={index}>
                    <td css={tableCellStyle}>{commodity.hsCode}</td>
                    <td css={tableCellStyle}>{commodity.name}</td>
                    <td css={tableCellStyle}>{commodity.description}</td>
                    <td css={tableCellStyle}>{commodity.noOfPackage}</td>
                    <td css={tableCellStyle}>{commodity?.packageLength || ""}</td>
                    <td css={tableCellStyle}>{commodity?.packageWidth || ""}</td>
                    <td css={tableCellStyle}>{commodity.volumeCube}</td>
                    <td css={tableCellStyle}>{commodity.typeOfPackagingAndShippingMarks}</td>
                    <td css={tableCellStyle}>{commodity.shippingMarks}</td>
                  </tr>
                ))}
              </table>
            </div>
            <div css={rowStyle}>
              <div css={cellStyle}>
                <h4>Goods Value</h4>
                <p>{document.goodsValue}</p>
              </div>
              <div css={cellStyle}>
                <h4>Gross Weight</h4>
                <p>{document.grossWeight}</p>
              </div>
              <div css={cellStyle}>
                <h4>Net Weight</h4>
                <p>{document.netWeight}</p>
              </div>
              <div css={cellStyle}>
                <h4>Vessel Name</h4>
                <p>{document.vesselName}</p>
              </div>
              <div css={cellStyle}>
                <h4>IMO Number</h4>
                <p>{document.imoNumber}</p>
              </div>
            </div>
            <div css={rowStyle}>
              <div css={cellStyle}>
                <h4>Trade Terms And Conditions Description</h4>
                <p>{document.tradeTermsConditionsDescription}</p>
              </div>
              <div css={cellStyle}>
                <h4>Handling Instructions</h4>
                <p>{document.handlingInstructions}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
