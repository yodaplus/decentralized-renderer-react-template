import React, { FunctionComponent } from "react";
import { TemplateProps, RedactableValue } from "@govtechsg/decentralized-renderer-react-components";
import { css } from "@emotion/core";
import { CertOfOriginTemplateCertificate } from "../samples/certificateOfOriginTemplateSample";
import { PrivacyFilter, IconRedact } from "../../core/PrivacyFilter";

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
`;

const rowStyle = css`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

const rowSignatureStyle = css`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
`;

const oneColumnRowStyle = css`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
`;

const tableRowStyle = css`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
`;

const cellStyleFlex = css`
  display: flex;
  justify-content: space-between;
`;

const innerContainer = css`
  border: 0.5pt solid #000;
`;

const fiveColumnsRowStyle = css`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
`;

// const singleRowStyle = css`
//   display: grid;
//   grid-template-columns: 1fr;
// `;

// const oneCell = css`
//   display: flex;
//   justify-content: space-between;
// `;

const cellForMidColStyle = css`
  border: 0.5pt solid #000;
  padding: 3.5pt;
  height: 350px;
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

// const tableCellStyle = css`
//   border-left: 1px solid #000;
//   border-right: 1px solid #000;
//   padding: 8px;
//   text-align: left;
// `;

// const tableHeaderCellStyle = css`
//   border: 1px solid #000;
//   padding: 8px;
//   text-align: left;
//   font-weight: 600;
// `;

// const tableStyle = css`
//   width: 100%;
//   border-collapse: collapse;
//   & tr:first-child td {
//     border-top: 1px solid #000;
//   }
//   & tr:last-child td {
//     border-bottom: 2px solid #000;
//   }
// `;

const hideOnPrint = css`
  @media print {
    display: none !important;
  }
`;

export const CertificateOfOriginTemplate: FunctionComponent<TemplateProps<CertOfOriginTemplateCertificate> & {
  className?: string;
}> = ({ document, handleObfuscation, className = "" }) => {
  const [editable, setEditable] = React.useState(false);
  return (
    <>
      <div css={hideOnPrint}>
        <PrivacyFilter editable={editable} onToggleEditable={() => setEditable(!editable)} />
      </div>
      <div css={pageStyle}>
        <div css={containerStyle} className={className} id="custom-template">
          <h5 css={titleStyle}>CERTIFICATE OF ORIGIN</h5>
          <div css={innerContainer}>
            <div css={rowStyle}>
              <div css={oneColumnRowStyle}>
                <div css={cellStyle}>
                  <h4>Exporter</h4>
                  <br />
                  <p>{document.exporter.name}</p>
                  <p>{document.exporter.address}</p>
                </div>
                <div css={cellStyle}>
                  <h4>Importer</h4>
                  <br />
                  <p>
                    <RedactableValue
                      editable={editable}
                      value={document.importer.name}
                      onRedactionRequested={() => handleObfuscation(`importer.name`)}
                      iconRedact={<IconRedact />}
                    />
                  </p>
                  <p>{document.importer.address}</p>
                </div>
              </div>
              <div css={cellStyle}>
                <h4>Certificate No.</h4>
                <div
                  style={{
                    textAlign: "center"
                  }}
                >
                  <p>{document.cooCertificateNumber}</p>
                  <br />
                  <p>CERTIFICATE OF ORIGIN</p>
                  <p>OF</p>
                  <p>THE PEOPLE&apos;S REPUBLIC OF {document.countryOfOrigin}</p>
                </div>
              </div>
            </div>
            <div css={rowStyle}>
              <div css={oneColumnRowStyle}>
                <div css={cellStyle}>
                  <h4>Means Of transport and route</h4>
                  <br />
                  <p>{document.particularsOfTransportDetails}</p>
                </div>
                <div css={cellStyle}>
                  <h4>Country / region of destination</h4>
                  <br />
                  <p>{document.countryOfDestination}</p>
                </div>
              </div>
              <div css={cellStyle}>
                <h4>For certifying authority use only</h4>
                <p
                  style={{
                    textAlign: "center"
                  }}
                >
                  {document.certifyingBody}
                </p>
              </div>
            </div>
            {/* <div css={rowStyle}>
            <div css={rowStyle}>
              <div css={cellStyle}>
                <h4>Method of Dispatch</h4>
                <p>{document.additionalNumbers}</p>
              </div>
              <div css={cellStyle}>
                <h4>Vessel Name & Voyage Number</h4>
                <div css={cellStyleFlex}>
                  <p>{document.additionalNumbers}</p>
                  <p>{document.additionalNumbers}</p>
                </div>
              </div>
              <div css={cellStyle}>
                <h4>Port of Loading</h4>
                <p>{document.additionalNumbers}</p>
              </div>
              <div css={cellStyle}>
                <h4>Port of Discharge</h4>
                <p>{document.additionalNumbers}</p>
              </div>
            </div>
            <div css={cellStyle}>
              <h4>Terms / Method of Payment</h4>
              <p>{document.additionalNumbers}</p>
              <p>{document.additionalNumbers}</p>
            </div>
          </div> */}

            <div css={fiveColumnsRowStyle}>
              <div css={cellForMidColStyle}>
                <h4>Marks & Numbers</h4>
                <br />
                <p>{document.identificationMarks}</p>
              </div>
              <div css={cellForMidColStyle}>
                <h4>Numbers and kinds of packages: description of goods</h4>
                <br />
                <p>{document.noOfPackages}</p>
                <br />
                <p>{document.descOfGoods}</p>
                <br />
                ******************************
                <br />
                <p>{document.additionalNumbers}</p>
              </div>
              <div css={cellForMidColStyle}>
                <h4>H.S.Code</h4>
                <br />
                <p>{document.hsCode}</p>
                <br />
                <p>{document.packageName}</p>
              </div>
              <div css={cellForMidColStyle}>
                <h4>Quantity</h4>
                <br />
                <p>{document.quantity}</p>
              </div>
              <div css={cellForMidColStyle}>
                <h4>Number and date of invoices</h4>
                <br />
                <p>{document.invoiceNumber}</p>
                <p>{document.invoiceCreationDate}</p>
              </div>
            </div>
            {/* <div css={singleRowStyle}>
            <table css={[cellStyle, tableStyle]}>
              <tr>
                <td css={tableHeaderCellStyle}>HS Code</td>
                <td css={tableHeaderCellStyle}>Commodity Name</td>
                <td css={tableHeaderCellStyle}>Commodity Description</td>
                <td css={tableHeaderCellStyle}>Gross weight (KG)</td>
                <td css={tableHeaderCellStyle}>Moisture Content %</td>
                <td css={tableHeaderCellStyle}>Qty</td>
                <td css={tableHeaderCellStyle}>Unit Price</td>
                <td css={tableHeaderCellStyle} style={{ width: "150px" }}>
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
          </div> */}
            {/* <div css={tableRowStyle}>
            <div css={cellStyle}>
              <h4>Additional Information</h4>
              <p>{document.additionalNumbers}</p>
            </div>
            <table css={[cellStyle, tableStyle]}>
              <tr>
                <td css={tableHeaderCellStyle} style={{ textAlign: "right" }}>
                  Total Commercial Value
                </td>
                <td css={tableHeaderCellStyle}>{document.additionalNumbers}</td>
              </tr>
              <tr>
                <td css={tableHeaderCellStyle} style={{ textAlign: "right" }}>
                  Misc. Charges (packing, shipping, etc.) (+)
                </td>
                <td css={tableHeaderCellStyle} style={{ width: "150px" }}>
                  {document.additionalNumbers}
                </td>
              </tr>
              <tr>
                <td css={tableHeaderCellStyle} style={{ textAlign: "right" }}>
                  Credit Amount (-)
                </td>
                <td css={tableHeaderCellStyle} style={{ width: "150px" }}>
                  {document.additionalNumbers}
                </td>
              </tr>
              <tr>
                <td css={tableHeaderCellStyle} style={{ textAlign: "right" }}>
                  Total Invoice Value
                </td>
                <td css={tableHeaderCellStyle}>{document.additionalNumbers}</td>
              </tr>
              <tr>
                <td css={tableHeaderCellStyle} style={{ textAlign: "right" }}>
                  Payment Due Date
                </td>
                <td css={tableHeaderCellStyle}>{document.additionalNumbers}</td>
              </tr>
              <tr>
                <td css={tableHeaderCellStyle} style={{ textAlign: "right" }}>
                  Currency
                </td>
                <td css={tableHeaderCellStyle}>{document.additionalNumbers}</td>
              </tr>
              <tr>
                <td css={tableHeaderCellStyle} style={{ textAlign: "right" }}>
                  Incoterms
                </td>
                <td css={tableHeaderCellStyle}>{document.additionalNumbers}</td>
              </tr>
              <tr>
                <td css={tableHeaderCellStyle} style={{ textAlign: "right" }}>
                  Buyer Contract
                </td>
                <td css={tableHeaderCellStyle}>{document.additionalNumbers}</td>
              </tr>
            </table>
          </div> */}
            {document.exporterSignature && document.councilSignature ? (
              <div css={rowStyle}>
                <div css={cellStyle}>
                  <p>Declaration By Exporter</p>
                  <br />
                  <div
                    style={{
                      textAlign: "center",
                      justifyContent: "center",
                      alignItems: "center",
                      display: "flex",
                      flexDirection: "column"
                    }}
                  >
                    <p>{document.declarationByExporter}</p>
                    <img css={signatureStyle} src={document?.exporterSignature} alt="Signature" />
                    {/* <p>Name of Authorised Signatory: {document.exporter.name}</p> */}
                    <p>{document.countryOfOrigin}</p>
                    <p>{`Date: ${document.date}`}</p>
                  </div>
                </div>
                <div css={cellStyle}>
                  <p>Certification</p>
                  <br />

                  <div
                    style={{
                      textAlign: "center",
                      justifyContent: "center",
                      alignItems: "center",
                      display: "flex",
                      flexDirection: "column"
                    }}
                  >
                    <p>{document.declarationByCouncil}</p>
                    <img css={signatureStyle} src={document?.councilSignature} alt="Signature" />
                    {/* <p>Name of Authorised Signatory: {document.exporter.name}</p> */}
                    <p>{document.countryOfOrigin}</p>
                    <p>{`Date: ${document.date}`}</p>
                  </div>
                </div>
              </div>
            ) : document.exporterSignature ? (
              <div css={rowSignatureStyle}>
                <div css={cellStyle}>
                  <p>Declaration By Exporter</p>
                  <br />
                  <div
                    style={{
                      padding: "10px"
                      // textAlign: "center",
                      // justifyContent: "center",
                      // alignItems: "center",
                      // display: "flex",
                      // flexDirection: "column"
                    }}
                  >
                    <p>{document.declarationByExporter}</p>
                    <img css={signatureStyle} src={document?.exporterSignature} alt="Signature" />
                    {/* <p>Name of Authorised Signatory: {document.exporter.name}</p> */}
                    <p>{document.countryOfOrigin}</p>
                    <p>{`Date: ${document.date}`}</p>
                  </div>
                </div>
              </div>
            ) : document.councilSignature ? (
              <div css={rowSignatureStyle}>
                <div css={cellStyle}>
                  <p>Certification</p>
                  <br />
                  <div
                    style={{
                      padding: "10px"
                      // textAlign: "center",
                      // justifyContent: "center",
                      // alignItems: "center",
                      // display: "flex",
                      // flexDirection: "column"
                    }}
                  >
                    <p>{document.declarationByCouncil}</p>
                    <img css={signatureStyle} src={document?.councilSignature} alt="Signature" />
                    {/* <p>Name of Authorised Signatory: {document.exporter.name}</p> */}
                    <p>{document.countryOfOrigin}</p>
                    <p>{`Date: ${document.date}`}</p>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};
