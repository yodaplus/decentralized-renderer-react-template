import React, { FunctionComponent } from "react";
import { RedactableValue, TemplateProps } from "@govtechsg/decentralized-renderer-react-components";
import { css } from "@emotion/core";
import { PurchaseOrderCertificate } from "../samples/PurchaseOrderSample";
import { PrivacyFilter, IconRedact } from "../../core/PrivacyFilter";
import { watermarkStyle } from "../../css/main";
import numWords from "num-words";

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

const containerStyle = css`
  padding: 10pt;
  margin: auto;
  position: relative; /* Make container relative for watermark positioning */
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
  border: 0;
`;

const threeRowStyle = css`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  border: 0;
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
  h4 {
    margin: 0;
    font-weight: bold;
    font-size: 8pt;
  }
  p {
    margin: 0;
    font-weight: normal;
    font-size: 8pt;
  }
`;

const docNumHeaderStyle = css`
  padding: 3.5pt;
  margin-bottom: 4pt;
  h4 {
    margin: 0;
    font-weight: bold;
    font-size: 8pt;
  }
  p {
    margin: 0;
    font-weight: normal;
    font-size: 8pt;
  }
`;

// two columns align in middle
const cellStyleMiddle = css`
  margin: 0 10% 6pt 10%;
  text-align: center;
  border: 0.5pt solid #000;
`;

const titleStyle = css`
  text-align: right;
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
  border-bottom: 0.5pt solid #000;
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

export const PurchaseOrderTemplate: FunctionComponent<TemplateProps<PurchaseOrderCertificate> & {
  className?: string;
}> = ({ document, handleObfuscation, className = "" }) => {
  const [editable, setEditable] = React.useState(false);

  return (
    <>
      {/* <div css={hideOnPrint}>
        <PrivacyFilter editable={editable} onToggleEditable={() => setEditable(!editable)} />
      </div> */}

      <div css={pageStyle}>
        <div css={containerStyle} className={className} id="custom-template">
          <div css={watermarkStyle}>
            {/* You can replace this text with an image by using an <img> tag */}
            {document?.watermarkText}
          </div>
          <h3 css={titleStyle}>PURCHASE ORDER</h3>

          {/* P O NUMBER */}
          <div css={rowStyle}>
            <div css={docNumHeaderStyle}>
              <p>
                The following number must appear on all related correspondence, shipping papers, and Invoices.
                <br />
                <h4> P. O. NUMBER: {document.purchaseOrderNumber}</h4>
              </p>
            </div>
            <div css={docNumHeaderStyle}>
              <h4>CONTRACT NUMBER: {document.contractNumber}</h4>
              <h4>DELIVERY DATE: {document.deliveryDate}</h4>
            </div>
          </div>

          {/* SHIPPER ADDRESS */}
          <div css={threeRowStyle}>
            <div css={docNumHeaderStyle}>
              <h4>TO :</h4>
              <p>{document.importer.name}</p>
              <p>{document.importer.address}</p>
              <p>{document.importer.email}</p>
              <p>{document.importer.phoneNumber}</p>
            </div>
            <div css={docNumHeaderStyle}>
              <h4>SHIP TO :</h4>
              <p>{document.deliveryParty.name}</p>
              <p>{document.deliveryParty.address}</p>
              <p>{document.deliveryParty.email}</p>
              <p>{document.deliveryParty.phoneNumber}</p>
            </div>
            <div css={docNumHeaderStyle}>
              <h4>SUPPLIER :</h4>
              <p>{document.exporter.name}</p>
              <p>{document.exporter.address}</p>
              <p>{document.exporter.phoneNumber}</p>
              <p>{document.exporter.email}</p>
            </div>
          </div>

          {/* ORIGIN COUNTRY, PLACE OF DELIVERY  */}
          <div css={rowStyle}>
            <div css={docNumHeaderStyle}>
              <h4>ORIGIN COUNTRY :</h4>
              <p>{document.countryOfOrigin}</p>
            </div>
            <div css={docNumHeaderStyle}>
              <h4>PLACE OF DELIVERY</h4>
              <p>{document.placeOfDelivery}</p>
            </div>
          </div>

          {/* P. O. DATE, PAYMENT METHOD AND TERMS */}
          <div css={cellStyleMiddle}>
            <div css={threeRowStyle}>
              <div css={cellStyle}>
                <h4>P. O. DATE</h4>
              </div>
              <div css={cellStyle}>
                <h4>PAYMENT METHOD</h4>
              </div>
              <div css={cellStyle}>
                <h4>PAYMENT TERMS</h4>
              </div>
            </div>
            {/* P.O. DATE AND TERMS VALUES */}
            <div css={threeRowStyle}>
              <div css={cellStyle}>
                <p>{document.purchaseOrderDate}</p>
              </div>
              <div css={cellStyle}>
                <p>{document.paymentMethod}</p>
              </div>
              <div css={cellStyle}>
                <p>{document.paymentTerms}</p>
              </div>
            </div>
          </div>

          <div css={innerContainer} style={{ marginBottom: "6pt" }}>
            <div css={singleRowStyle}>
              <table css={[cellStyle, tableStyle]}>
                <tr>
                  <td css={tableHeaderCellStyle}>QTY</td>
                  <td css={tableHeaderCellStyle}>PRODUCT IDENTIFIER</td>
                  <td css={tableHeaderCellStyle}>DESCRIPTION</td>
                  <td css={tableHeaderCellStyle}>UNIT PRICE</td>
                  <td css={tableHeaderCellStyle} style={{ width: "150pt" }}>
                    TOTAL
                  </td>
                </tr>
                {document.commodity.map((commodity, index) => (
                  <tr key={index}>
                    <td css={tableCellStyle}>{commodity.qty}</td>
                    <td css={tableCellStyle}>{commodity.productIdentifier}</td>
                    <td css={tableCellStyle}>{commodity.description}</td>
                    <td css={tableCellStyle}>{commodity.unitPrice}</td>
                    <td css={tableCellStyle}>{commodity.unitPrice * commodity.qty}</td>
                  </tr>
                ))}
              </table>
            </div>

            <div css={rowStyle}>
              <div css={cellStyle}>
                <h4>AMOUNT IN WORDS</h4>
                <p>
                  {`${numWords(
                    Math.round(
                      document.commodity.reduce((acc, commodity) => acc + commodity.unitPrice * commodity.qty, 0) +
                        document?.miscCharges +
                        document?.taxAmount
                    )
                  ).toUpperCase()} ${document.currency} ONLY`}
                </p>
              </div>

              <table css={[cellStyle, tableStyle]}>
                <tr>
                  <td css={tableHeaderCellStyle} style={{ textAlign: "right" }}>
                    ORDER VALUE
                  </td>
                  <td css={tableHeaderCellStyle}>
                    {document.commodity.reduce((acc, commodity) => acc + commodity.unitPrice * commodity.qty, 0)}
                  </td>
                </tr>
                <tr>
                  <td css={tableHeaderCellStyle} style={{ textAlign: "right" }}>
                    SHIPPING CHARGES
                  </td>
                  <td css={tableHeaderCellStyle} style={{ width: "150pt" }}>
                    {document.miscCharges}
                  </td>
                </tr>
                <tr>
                  <td css={tableHeaderCellStyle} style={{ textAlign: "right" }}>
                    TAX VALUE
                  </td>
                  <td css={tableHeaderCellStyle} style={{ width: "150pt" }}>
                    {document.taxAmount}
                  </td>
                </tr>
                <tr>
                  <td css={tableHeaderCellStyle} style={{ textAlign: "right" }}>
                    TOTAL ORDER VALUE (Round off)
                  </td>
                  <td css={tableHeaderCellStyle}>
                    {Math.round(
                      document.commodity.reduce((acc, commodity) => acc + commodity.unitPrice * commodity.qty, 0) +
                        document?.miscCharges +
                        document?.taxAmount
                    )}
                  </td>
                </tr>
                <tr>
                  <td css={tableHeaderCellStyle} style={{ textAlign: "right" }}>
                    Currency
                  </td>
                  <td css={tableHeaderCellStyle}>{document.currency}</td>
                </tr>
              </table>
            </div>
          </div>

          <div css={rowStyle}>
            <div css={docNumHeaderStyle}>
              <h4>TERMS</h4>
              <p>{document.purchaseOrderTerms}</p>
              <p>{document.paymentTerms}</p>
            </div>

            <div css={docNumHeaderStyle}>
              <img css={signatureStyle} src={document?.signature} alt="Signature" />
              <p>Authorised Signatory</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
