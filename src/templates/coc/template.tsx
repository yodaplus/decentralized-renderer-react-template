import React, { FunctionComponent } from "react";
import { RedactableValue, TemplateProps } from "@govtechsg/decentralized-renderer-react-components";
import { css } from "@emotion/core";
import { InvoiceTemplateCertificate } from "../samples/customTemplate";
import { PrivacyFilter, IconRedact } from "../../core/PrivacyFilter";
import { saveAs } from "file-saver";

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

export const CocTemplate: FunctionComponent<TemplateProps<InvoiceTemplateCertificate> & { className?: string }> = ({
  document,
  handleObfuscation,
  className = ""
}) => {
  const [editable, setEditable] = React.useState(false);

  return (
    <>
      <PrivacyFilter editable={editable} onToggleEditable={() => setEditable(!editable)} />
      <div css={pageStyle}>
        <div css={containerStyle} className={className} id="custom-template">
          <h5 css={titleStyle}>COMMERCIAL INVOICE</h5>
          <div css={innerContainer}>
            <div css={rowStyle}>
              <div css={cellStyle}>
                <h4>Exporter</h4>
                <p>
                  <RedactableValue
                    editable={editable}
                    value={document.exporter.name}
                    onRedactionRequested={() => handleObfuscation(`exporter.name`)}
                    iconRedact={<IconRedact />}
                  />
                </p>
                {/* <p>{document.exporter.name}</p> */}
                <p>{document.exporter.address}</p>
                <p>{document.exporter.phoneNumber}</p>
                <p>{document.exporter.email}</p>
              </div>
              <div css={cellStyle}>
                <h4>Invoice Details</h4>
                <p>Title: {document.title}</p>
                <p>Number: {document.invoiceNumber}</p>
                <p>{`Date: ${document.invoiceCreationDate}`}</p>
                <p>Insurance Policy Number: {document.insurancePolicyNumber}</p>
              </div>
            </div>
            <div css={rowStyle}>
              <div css={cellStyle}>
                <h4>Importer</h4>
                <p>{document.importer.name}</p>
                <p>{document.importer.address}</p>
                <p>{document.importer.phoneNumber}</p>
                <p>{document.importer.email}</p>
              </div>
              <div css={rowStyle}>
                <div css={cellStyle}>
                  <h4>Bill of Lading Number</h4>
                  <p>{document.blNumber}</p>
                </div>
                <div css={cellStyle}>
                  <h4>Bill of Lading Date</h4>
                  <p>{document.blDate}</p>
                </div>
                <div css={cellStyle}>
                  <h4>Exporter LEI</h4>
                  <p>{document.exporterLEI}</p>
                </div>
                <div css={cellStyle}>
                  <h4>LC Reference No.</h4>
                  <p>{document.lcRefNumber}</p>
                </div>
              </div>
            </div>
            <div css={rowStyle}>
              <div css={rowStyle}>
                <div css={cellStyle}>
                  <h4>Method of Dispatch</h4>
                  <p>{document.modeOfDispatch}</p>
                </div>
                <div css={cellStyle}>
                  <h4>Vessel Name & Voyage Number</h4>
                  <div css={cellStyleFlex}>
                    <p>{document.vesselName}</p>
                    <p>{document.voyageNumber}</p>
                  </div>
                </div>
                <div css={cellStyle}>
                  <h4>Port of Loading</h4>
                  <p>{document.portOfLoading}</p>
                </div>
                <div css={cellStyle}>
                  <h4>Port of Discharge</h4>
                  <p>{document.portOfDischarge}</p>
                </div>
              </div>
              <div css={cellStyle}>
                <h4>Terms / Method of Payment</h4>
                <p>{document.paymentTerms}</p>
                <p>{document.paymentMethod}</p>
              </div>
            </div>

            <div css={fourColumnsRowStyle}>
              <div css={cellStyle}>
                <h4>City & Country of Origin</h4>
                <p>
                  {document.cityOfOrigin},{document.countryOfOrigin}
                </p>
              </div>
              <div css={cellStyle}>
                <h4>City & Country of Destination</h4>
                <p>
                  {document.cityOfDestination}, {document.countryOfDestination}
                </p>
              </div>
              <div css={cellStyle}>
                <h4>Place of Delivery</h4>
                <p>{document.placeOfDelivery}</p>
              </div>
              <div css={cellStyle}>
                <h4>Final Destination</h4>
                <p>{document.finalDestination}</p>
              </div>
            </div>
            <div css={singleRowStyle}>
              <table css={[cellStyle, tableStyle]}>
                <tr>
                  <td css={tableHeaderCellStyle}>HS Code</td>
                  <td css={tableHeaderCellStyle}>Commodity Name</td>
                  <td css={tableHeaderCellStyle}>Commodity Description</td>
                  <td css={tableHeaderCellStyle}>Gross weight (KG)</td>
                  <td css={tableHeaderCellStyle}>Moisture Content %</td>
                  <td css={tableHeaderCellStyle}>Qty</td>
                  <td css={tableHeaderCellStyle}>Unit Price</td>
                  <td css={tableHeaderCellStyle} style={{ width: "150pt" }}>
                    Total Price
                  </td>
                </tr>
                {document.commodity.map((commodity, index) => (
                  <tr key={index}>
                    <td css={tableCellStyle}>{commodity.hsCode}</td>
                    <td css={tableCellStyle}>{commodity.name}</td>
                    <td css={tableCellStyle}>{commodity.description}</td>
                    <td css={tableCellStyle}>{commodity.grossWeight}</td>
                    <td css={tableCellStyle}>{commodity.moistureContent}</td>
                    <td css={tableCellStyle}>{commodity.qty}</td>
                    <td css={tableCellStyle}>{commodity.unitPrice}</td>
                    <td css={tableCellStyle}>{commodity.unitPrice * commodity.qty}</td>
                  </tr>
                ))}
              </table>
            </div>

            <div css={rowStyle}>
              <div css={cellStyle}>
                <h4>Additional Information</h4>
                <p>{document.additionalInformation}</p>
              </div>

              <table css={[cellStyle, tableStyle]}>
                <tr>
                  <td css={tableHeaderCellStyle} style={{ textAlign: "right" }}>
                    Total Commercial Value
                  </td>
                  <td css={tableHeaderCellStyle}>
                    {document.commodity.reduce((acc, commodity) => acc + commodity.unitPrice * commodity.qty, 0)}
                  </td>
                </tr>
                <tr>
                  <td css={tableHeaderCellStyle} style={{ textAlign: "right" }}>
                    Misc. Charges (packing, shipping, etc.) (+)
                  </td>
                  <td css={tableHeaderCellStyle} style={{ width: "150pt" }}>
                    {document.miscCharges}
                  </td>
                </tr>
                <tr>
                  <td css={tableHeaderCellStyle} style={{ textAlign: "right" }}>
                    Credit Amount (-)
                  </td>
                  <td css={tableHeaderCellStyle} style={{ width: "150pt" }}>
                    {document.creditAmount}
                  </td>
                </tr>
                <tr>
                  <td css={tableHeaderCellStyle} style={{ textAlign: "right" }}>
                    Total Invoice Value
                  </td>
                  <td css={tableHeaderCellStyle}>
                    {document.commodity.reduce((acc, commodity) => acc + commodity.unitPrice * commodity.qty, 0) +
                      document?.miscCharges -
                      document?.creditAmount}
                  </td>
                </tr>
                <tr>
                  <td css={tableHeaderCellStyle} style={{ textAlign: "right" }}>
                    Payment Due Date
                  </td>
                  <td css={tableHeaderCellStyle}>{document.paymentDueDate}</td>
                </tr>
                <tr>
                  <td css={tableHeaderCellStyle} style={{ textAlign: "right" }}>
                    Currency
                  </td>
                  <td css={tableHeaderCellStyle}>{document.currency}</td>
                </tr>
                <tr>
                  <td css={tableHeaderCellStyle} style={{ textAlign: "right" }}>
                    Incoterms
                  </td>
                  <td css={tableHeaderCellStyle}>{document.incoterms}</td>
                </tr>
                <tr>
                  <td css={tableHeaderCellStyle} style={{ textAlign: "right" }}>
                    Buyer Contract
                  </td>
                  <td css={tableHeaderCellStyle}>{document.buyerContract}</td>
                </tr>
              </table>
            </div>
            <div css={rowStyle}>
              <div css={cellStyle}>
                <h4>Bank Details</h4>
                <p>{`Benefiaciary's Bank Name: ${document.bankName}`}</p>
                <p>{`Benefiaciary's Name: ${document.importer.name}`}</p>
                <p>Bank Account Number: {document.bankAccountNumber}</p>
                <p>Swift Code: {document.swiftCode}</p>
              </div>
              <div css={cellStyle}>
                <h4>I certify that state export prices and description of goods are true and correct</h4>
                <img css={signatureStyle} src={document?.signature} alt="Signature" />
                <p>Name of Authorised Signatory: {document.exporter.name}</p>
                <p>Place of Issue: {document.placeOfIssue}</p>
                <p>{`Date: ${document.invoiceCreationDate}`}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
