import React, { FunctionComponent } from "react";
import { TemplateProps } from "@govtechsg/decentralized-renderer-react-components";
import { css } from "@emotion/core";
import { HouseBLTemplateCertificate } from "../samples/HouseBillOfLadingTemplateSample";
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

const containerStyle = css`
  padding: 10pt;
  margin: auto;
  width: 90%;
  position: relative; /* Make container relative for watermark positioning */
  font-family: "Open Sans", sans-serif;
  overflow-wrap: anywhere;
  white-space: break-spaces;
  td {
    font-size: 8pt;
  }
`;

const oneColumnRowStyle = css`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
`;

const cellStyleFlex = css`
  display: flex;
  justify-content: space-between;
`;

const rowStyle = css`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

const fiveColumnsRowStyle = css`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
`;

const cellForMidColStyle = css`
  border: 0.5pt solid #000;
  padding: 3.5pt;
  height: 250pt;
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

const innerContainer = css`
  border: 0.5pt solid #000;
`;

const threeColumnsRowStyle = css`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

const singleRowStyle = css`
  border: none;
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

const rowStyleFullWidth = css`
  display: grid;
  border: 0.5pt solid #000;
  padding: 3.5pt;
  grid-template-columns: repeat(1, 1fr);
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

const rowSignatureStyle = css`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
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

export const HouseBillOfLadingTemplate: FunctionComponent<TemplateProps<HouseBLTemplateCertificate> & {
  className?: string;
}> = ({ document, className = "" }) => {
  return (
    <div css={print}>
      <div css={containerStyle} className={className} id="custom-template">
        <div css={watermarkStyle}>
          {/* You can replace this text with an image by using an <img> tag */}
          {document?.watermarkText}
        </div>
        <h5 css={titleStyle}>HOUSE BILL OF LADING</h5>
        <div
          style={{
            backgroundColor: "#c2f0ff"
          }}
        >
          <div css={rowStyle}>
            <div css={cellStyle}>
              <h4>Exporter</h4>
              <p>{document?.exporter?.name}</p>
              <p>{document.exporter.address}</p>
              <p>{document.exporter.phoneNumber}</p>
              <p>{document.exporter.email}</p>
            </div>
            <div css={cellStyle}>
              <h4>FBL</h4>
              <br />
              <p>{document.blNumber}</p>
              {/* <p>{document.consignee.address}</p>
              <p>{document.consignee.phoneNumber}</p>
              <p>{document.consignee.email}</p> */}
            </div>
          </div>
          <div css={rowStyle}>
            <div css={oneColumnRowStyle}>
              <div css={cellStyle}>
                <h4>Consignee</h4>
                <p>{document.consignee.name}</p>
                <p>{document.consignee.address}</p>
                <p>{document.consignee.phoneNumber}</p>
                <p>{document.consignee.email}</p>
              </div>
              <div css={cellStyle}>
                <h4>Importer</h4>
                <p>{document.importer.name}</p>
                <p>{document.importer.address}</p>
                <p>{document.importer.phoneNumber}</p>
                <p>{document.importer.email}</p>
              </div>

              <div css={rowStyle}>
                <div css={cellStyle}>
                  <h4>Ocean Vessel</h4>
                  <p>{document?.vesselName}</p>
                </div>
                <div css={cellStyle}>
                  <h4>Port of loading</h4>
                  <p>{document?.portOfLoading}</p>
                </div>
                <div css={cellStyle}>
                  <h4>Port of discharge</h4>
                  <p>{document?.portOfDischarge}</p>
                </div>
                <div css={cellStyle}>
                  <h4>Place of delivery</h4>
                  <p>{document?.placeOfDelivery}</p>
                </div>
                {/* <div css={cellStyle}>
                  <h4>Exporter LEI</h4>
                  <p>{document.exporterLEI}</p>
                </div>
                <div css={cellStyle}>
                  <h4>LC Reference No.</h4>
                  <p>{document.lcRefNumber}</p>
                </div> */}
              </div>
            </div>
            <div css={cellStyle}>
              <h3>Freight Forwarder</h3>
              <div
              // style={{
              //   textAlign: "center"
              // }}
              >
                <p>{document.freightForwarder.name}</p>
                <br />
                <p>{document.freightForwarder.address}</p>
                <p>{document.freightForwarder.phoneNumber}</p>
                <p>{document.freightForwarder.email}</p>
              </div>
            </div>
          </div>

          <div css={singleRowStyle}>
            <table css={[cellStyle, tableStyle]}>
              <tr>
                <td css={tableHeaderCellStyle} style={{ width: "45pt" }}>
                  Marks & Numbers
                </td>
                <td css={tableHeaderCellStyle} style={{ width: "60pt" }}>
                  Numbers and kinds of packages
                </td>

                <td css={tableHeaderCellStyle} style={{ width: "60pt" }}>
                  Description of goods
                </td>
                <td css={tableHeaderCellStyle} style={{ width: "60pt" }}>
                  Gross weight (KG)
                </td>
                <td css={tableHeaderCellStyle} style={{ width: "60pt" }}>
                  Measurements (Volume)
                </td>
              </tr>

              {document.packages.map(item => (
                <tr>
                  <td css={tableCellStyle}>{item.marksAndNo}</td>
                  <td css={tableCellStyle}>
                    {item.noOfPackage} - {item.type}
                  </td>
                  <td css={tableCellStyle}>{item.description}</td>
                  <td css={tableCellStyle}>{item.grossWeight}</td>
                  <td css={tableCellStyle}>{item.volume}</td>
                </tr>
              ))}
            </table>
          </div>
          {/* two blocks */}

          <div css={rowStyle}>
            <div css={cellStyle}>
              <span style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                <h4>Incoterms : </h4>
                <p>{document.incoterms}</p>{" "}
              </span>
            </div>
            <div css={cellStyle}>
              <span style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                <h4>Dispatch Mode : </h4>
                <p>{document.modeOfDispatch}</p>
              </span>
            </div>
          </div>
          <div css={threeColumnsRowStyle}>
            <div css={cellStyle}>
              <h4>Freight amount</h4>
              <p>{document?.freight}</p>
            </div>
            <div css={cellStyle}>
              <h4>Freight Payable at</h4>
              <p>{document?.freightForwarder.address}</p>
            </div>
            <div css={cellStyle}>
              <h4>Place and date of issue</h4>
              <p>{document?.placeOfBlIssue}</p>
              <br />
              <p>{document?.blDateofIssue}</p>
            </div>
          </div>
          {document.signature ? (
            <div css={rowStyle}>
              <div css={oneColumnRowStyle}>
                <div css={rowStyle}>
                  <div css={cellStyle}>
                    <h4>Cargo Insurance through the undersigned</h4>
                    <p>{document?.blDateofIssue}</p>
                  </div>
                  <div css={cellStyle}>
                    <h4>Seal Number</h4>
                    <p>{document?.sealNumber}</p>
                  </div>
                </div>
                <div css={cellStyle}>
                  <h4>For delivery of goods please apply to:</h4>
                  <p>{document.termsAndCondition}</p>
                </div>
              </div>
              <div css={cellStyle}>
                <h4>Stamp and Signature</h4>
                <img css={signatureStyle} src={document?.signature} alt="Signature" />
              </div>
            </div>
          ) : (
            <div css={rowSignatureStyle}>
              <div css={oneColumnRowStyle}>
                <div css={rowStyle}>
                  <div css={cellStyle}>
                    <h4>Cargo Insurance through the undersigned</h4>
                    <p>{document?.blDateofIssue}</p>
                  </div>
                  <div css={cellStyle}>
                    <h4>Seal Number</h4>
                    <p>{document?.sealNumber}</p>
                  </div>
                </div>
                <div css={cellStyle}>
                  <h4>For delivery of goods please apply to:</h4>
                  <br />
                  <p>{document.termsAndCondition}</p>
                  {/* <p>{document.importer.address}</p> */}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

{
  /* <div css={rowStyle}>
            <div css={oneColumnRowStyle}>
              <div css={rowStyle}>
                <div css={cellStyle}>
                  <h4>Cargo Insurance through the undersigned</h4>
                  <p>{document?.blDateofIssue}</p>
                </div>
                <div css={cellStyle}>
                  <h4>Number of Original FBL's</h4>
                  <p>{document?.productNo}</p>
                </div>
              </div>
              <div css={cellStyle}>
                <h4>For delivery of goods please apply to:</h4>
                <br />
                <p>{document.sealNumber}</p>
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
                <p>{document.importer.name}</p>
                <br />
                <p>CERTIFICATE OF ORIGIN</p>
                <p>OF</p>
                <p>THE PEOPLE&apos;S REPUBLIC OF {document.blDateofIssue}</p>
              </div>
            </div>
          </div> */
}
