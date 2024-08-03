import React, { FunctionComponent } from "react";
import { TemplateProps } from "@govtechsg/decentralized-renderer-react-components";
import { css } from "@emotion/core";
import { BLTTemplateCertificate } from "../samples/BLTemplateSample";
import { containerStyle, watermarkStyle } from "../../css/main";

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
    .watermarkprint {
      display: block !important; /* Ensure watermark is displayed when printing */
    }
  }
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

const singleRowStyle = css`
  display: grid;
  grid-template-columns: 1fr;
`;

const cellStyle = css`
  border: 0.5pt solid #000;
  p {
    margin: 0;
    font-size: 8pt;
    padding: 1pt;
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
  font-weight: bold;
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

const titleContainerStyle = css`
  background-color: black;
  color: white;
  text-align: center;
  padding: 4pt;
  font-weight: bold;
  margin: 0;
  font-size: 8pt;
`;

const subContainerStyle = css`
  margin: 0;
  padding: 3.5pt;
`;

const boldTextStyle = css`
  font-weight: bold;
`;

export const BLTemplate: FunctionComponent<TemplateProps<BLTTemplateCertificate> & { className?: string }> = ({
  document,
  className = ""
}) => {
  return (
    <>
      <div css={print} className="watermarkprint">
        <div css={containerStyle} className={className} id="custom-template">
          <div css={watermarkStyle}>
            {/* You can replace this text with an image by using an <img> tag */}
            {document?.watermarkText}
          </div>
          <h5 css={titleStyle}>BL</h5>
          <div css={innerContainer}>
            <div css={rowStyle}>
              <div css={cellStyle}>
                <p css={titleContainerStyle}>SHIP FROM</p>
                <div css={subContainerStyle}>
                  <p>{document?.exporter?.name}</p>
                  <p>{document?.exporter?.address}</p>
                  <p>{document?.exporter?.phoneNumber}</p>
                  <p>{document?.exporter?.email}</p>
                </div>
              </div>
              <div css={cellStyle}>
                <div css={subContainerStyle}>
                  <p css={boldTextStyle}>Bill Of Lading Number: {document?.blNumber}</p>
                </div>
              </div>
            </div>
            <div css={rowStyle}>
              <div css={cellStyle}>
                <p css={titleContainerStyle}>SHIP TO</p>
                <div css={subContainerStyle}>
                  <p>{document?.consignee?.name}</p>
                  <p>{document?.consignee?.address}</p>
                  <p>{document?.consignee?.phoneNumber}</p>
                  <p>{document?.consignee?.email}</p>
                </div>
              </div>
              <div css={cellStyle}>
                <p css={titleContainerStyle}>CARRIER NAME</p>
                <div css={subContainerStyle}>
                  <p>{document?.carrier?.name}</p>
                  <p>{document?.carrier?.address}</p>
                  <p>{document?.carrier?.phoneNumber}</p>
                  <p>{document?.carrier?.email}</p>
                </div>
              </div>
            </div>
            <div css={rowStyle}>
              <div css={cellStyle}>
                <p css={titleContainerStyle}>THIRD PARTY FREIGHT CHARGES BILL TO:</p>
                <div css={subContainerStyle}>
                  <p>{document?.freightDetails?.name}</p>
                  <p>{document?.freightDetails?.address}</p>
                  <p>{document?.freightDetails?.phoneNumber}</p>
                  <p>{document?.freightDetails?.email}</p>
                </div>
              </div>
              <div css={cellStyle}>
                <div css={subContainerStyle}>
                  <p css={boldTextStyle}>SCAC: {document?.standardCarrierAlphaCode}</p>
                </div>
              </div>
            </div>
            <div css={rowStyle}>
              <div css={cellStyle}>
                <p css={titleContainerStyle}>NOTIFYING PARTY</p>
                <div css={subContainerStyle}>
                  <p>{document?.notifyingParty?.name}</p>
                  <p>{document?.notifyingParty?.address}</p>
                  <p>{document?.notifyingParty?.phoneNumber}</p>
                  <p>{document?.notifyingParty?.email}</p>
                </div>
              </div>
              <div css={rowStyle}>
                <div css={cellStyle}>
                  <div css={subContainerStyle}>
                    <p css={boldTextStyle}>Vessel Name</p>
                    <p>{document.vesselName}</p>
                  </div>
                </div>
                <div css={cellStyle}>
                  <div css={subContainerStyle}>
                    <p css={boldTextStyle}>IMO Number</p>
                    <p>{document.imoNumber}</p>
                  </div>
                </div>
                <div css={cellStyle}>
                  <div css={subContainerStyle}>
                    <p css={boldTextStyle}>Voyage Number</p>
                    <p>{document.voyageNumber}</p>
                  </div>
                </div>
                <div css={cellStyle}>
                  <div css={subContainerStyle}>
                    <p css={boldTextStyle}>Buyer Contract</p>
                    <p>{document.buyerContract}</p>
                  </div>
                </div>
              </div>
            </div>
            <div css={singleRowStyle}>
              <p css={titleContainerStyle}>CUSTOM ORDER INFORMATION</p>
              <table css={[cellStyle, tableStyle]}>
                <tr>
                  <td css={tableHeaderCellStyle}>Kind & No of Packages</td>
                  <td css={tableHeaderCellStyle}>Commodity Description</td>
                  <td css={tableHeaderCellStyle} style={{ width: "60pt" }}>
                    Gross weight (KG)
                  </td>
                  <td css={tableHeaderCellStyle} style={{ width: "60pt" }}>
                    Measurements (Volume)
                  </td>
                </tr>
                {document.packages.map((singlePackage, index) => (
                  <tr key={index}>
                    <td css={tableCellStyle}>{singlePackage?.noOfPackage ? `${singlePackage?.noOfPackage}` : ""}</td>
                    <td css={tableCellStyle}>{singlePackage?.description}</td>
                    <td css={tableCellStyle}>{singlePackage?.grossWeight}</td>
                    <td css={tableCellStyle}>{singlePackage?.volume}</td>
                  </tr>
                ))}
              </table>
              <table css={[cellStyle, tableStyle]}>
                <tr>
                  <td css={tableHeaderCellStyle} style={{ textAlign: "right" }}>
                    Total Consignment Value
                  </td>
                  <td css={tableHeaderCellStyle} style={{ width: "60pt", fontWeight: "bold" }}>
                    {document.packages.reduce((acc, singlePackage) => acc + (singlePackage.grossWeight ?? 0), 0)}
                  </td>
                  <td css={tableHeaderCellStyle} style={{ width: "60pt", fontWeight: "bold" }}>
                    {document.packages.reduce((acc, singlePackage) => acc + (singlePackage.volume ?? 0), 0)}
                  </td>
                </tr>
              </table>
            </div>
            <div css={rowStyle}>
              <div css={cellStyle}>
                <div css={subContainerStyle}>
                  <p css={boldTextStyle}>Port Of Loading</p>
                  <p>{document.portOfLoading}</p>
                </div>
              </div>
              <div css={cellStyle}>
                <div css={subContainerStyle}>
                  <p css={boldTextStyle}>Port Of Discharge</p>
                  <p>{document.portOfDischarge}</p>
                </div>
              </div>
            </div>
            <div css={rowStyle}>
              <div css={cellStyle}>
                <div css={subContainerStyle}>
                  <p css={boldTextStyle}>Total No. Of Containers</p>
                  <p>{document.totalNoOfContainers}</p>
                </div>
              </div>
              <div css={cellStyle}>
                <div css={subContainerStyle}>
                  <p css={boldTextStyle}>Container Type</p>
                  <p>{document.containerType}</p>
                </div>
              </div>
            </div>
            {document.signature ? (
              <div css={rowStyle}>
                <div css={cellStyle}>
                  <h4>Remarks</h4>
                  <p>{document?.remarks}</p>
                </div>
                <div css={cellStyle}>
                  <img css={signatureStyle} src={document?.signature} alt="Signature" />
                  <p>Name of Authorised Signatory: {document.exporter.name}</p>
                  <p>{`Date: ${document.blDateofIssue}`}</p>
                </div>
              </div>
            ) : (
              <div css={rowStyle}>
                <div css={cellStyle}>
                  <h4>Remarks</h4>
                  <p>{document?.remarks}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      {document?.termsAndConditions && (
        <div css={pageStyleTwo}>
          <div>
            <h5 css={titleStyle}>Terms And Conditions</h5>

            <div className="termsAndContions">
              <p>{document?.termsAndConditions}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
