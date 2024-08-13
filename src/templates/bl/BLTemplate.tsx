import React, { FunctionComponent, useMemo } from "react";
import { TemplateProps } from "@govtechsg/decentralized-renderer-react-components";
import { css } from "@emotion/core";
import { BLTTemplateCertificate } from "../samples/BLTemplateSample";
import { containerStyle, watermarkStyle } from "../../css/main";

const print = css`
  @page {
    size: A4; /* Set the paper size to A4 */
    margin: 0; /* Remove default margins */
    page-break-after: auto; /* Automatically add page breaks */
  }

  @media print {
    -webkit-print-color-adjust: exact !important;
    print-color-adjust: exact !important; /* Apply exact color printing to the entire document */
    height: 1123px; // A4 height in pixels at 96 DPI
    width: 794px; // A4 width in pixels at 96 DPI
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
  font-size: 8pt;
`;

const tableHeaderCellStyle = css`
  border: 0.5pt solid #000;
  padding: 4pt;
  text-align: left;
  font-weight: bold;
  font-size: 8pt;
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

const termsPageContainer = css`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  page-break-before: always;
  page-break-after: always;
  @media print {
    /* Remove flex styles during print */
    display: block;
  }
`;

const termsPageStyle = css`
  align-items: center;
  justify-content: center;
  padding: 3.5pt;
  font-family: "Open Sans", sans-serif;
  white-space: break-spaces;
  overflow-wrap: break-word;

  p {
    margin: 8pt;
    font-weight: bold;
    font-size: 8pt;
  }
  page-break-before: always;
  page-break-after: always;
  position: relative;
  overflow: hidden;
`;

const termsWatermarkStyle = css`
  ${watermarkStyle}
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(-45deg);
  z-index: -1;
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
  color: red;
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

const splitIntoPages = (text: string, charsPerPage = 5000): string[] => {
  const pages: string[] = [];
  let currentPage = "";
  const words = text.split(" ");

  for (const word of words) {
    if ((currentPage + word).length > charsPerPage) {
      pages.push(currentPage.trim());
      currentPage = "";
    }
    currentPage += word + " ";
  }

  if (currentPage) {
    pages.push(currentPage.trim());
  }

  return pages;
};

export const BLTemplate: FunctionComponent<TemplateProps<BLTTemplateCertificate> & { className?: string }> = ({
  document,
  className = ""
}) => {
  const termsPages = useMemo(() => {
    return document?.termsAndConditions ? splitIntoPages(document?.termsAndConditions) : [];
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [document?.termsAndConditions]);
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
                <p css={titleContainerStyle}>SHIPPER</p>
                <div css={subContainerStyle}>
                  <p>{document?.exporter?.name}</p>
                  <p>{document?.exporter?.address}</p>
                  <p>{document?.exporter?.phoneNumber}</p>
                  <p>{document?.exporter?.email}</p>
                </div>
              </div>
              <div css={cellStyle}>
                <div
                  css={subContainerStyle}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center"
                  }}
                >
                  <p>
                    Bill Of Lading Number: <span css={boldTextStyle}> {document?.blNumber}</span>
                  </p>
                  <p>
                    Date Of Issue: <span css={boldTextStyle}>{document?.blDateofIssue}</span>
                  </p>
                </div>
              </div>
            </div>
            <div css={rowStyle}>
              <div css={cellStyle}>
                <p css={titleContainerStyle}>CONSIGNEE</p>
                <div css={subContainerStyle}>
                  <p>{document?.consignee?.name}</p>
                  <p>{document?.consignee?.address}</p>
                  <p>{document?.consignee?.phoneNumber}</p>
                  <p>{document?.consignee?.email}</p>
                </div>
              </div>
              <div css={cellStyle}>
                <p css={titleContainerStyle}>CARRIER</p>
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
              <div css={singleRowStyle}>
                <div css={cellStyle}>
                  <div css={subContainerStyle}>
                    <p css={boldTextStyle}>
                      SCAC: {document?.standardCarrierAlphaCode} ({document?.carrier?.name})
                    </p>
                  </div>
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
              <div css={cellStyle}>
                <div css={subContainerStyle}>
                  <p css={boldTextStyle}>For Release of Shipment Please contact</p>
                  <p>{document?.forReleaseOfShipment}</p>
                </div>
              </div>
            </div>
            <div css={rowStyle}>
              <div css={singleRowStyle}>
                <div css={cellStyle}>
                  <div css={subContainerStyle}>
                    <p css={boldTextStyle}>IMO Number</p>
                    <p>{document.imoNumber}</p>
                  </div>
                </div>
                <div css={cellStyle}>
                  <div css={subContainerStyle}>
                    <p css={boldTextStyle}>Buyer Contract</p>
                    <p>{document.buyerContract}</p>
                  </div>
                </div>
              </div>
              <div css={singleRowStyle}>
                <div css={cellStyle}>
                  <div css={subContainerStyle}>
                    <p css={boldTextStyle}>Vessel Name</p>
                    <p>{document.vesselName}</p>
                  </div>
                </div>
                <div css={cellStyle}>
                  <div css={subContainerStyle}>
                    <p css={boldTextStyle}>Voyage Number</p>
                    <p>{document.voyageNumber}</p>
                  </div>
                </div>
              </div>
            </div>
            <div css={singleRowStyle}>
              <table css={[cellStyle, tableStyle]}>
                <tr>
                  <td css={tableHeaderCellStyle} style={{ width: "45pt" }}>
                    HS Code
                  </td>
                  <td css={tableHeaderCellStyle}>Commodity Name</td>
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
                    <td css={tableCellStyle}>{singlePackage?.hsCode}</td>
                    <td css={tableCellStyle}>{singlePackage.name}</td>
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
                    Total
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
                  <p>{document?.totalNoOfContainers}</p>
                </div>
              </div>
              <div css={rowStyle}>
                <div css={cellStyle}>
                  <div css={subContainerStyle}>
                    <p css={boldTextStyle}>Container Type</p>
                    <p>{document?.containerType}</p>
                  </div>
                </div>
                <div css={cellStyle}>
                  <div css={subContainerStyle}>
                    <p css={boldTextStyle}>Shipped on Board </p>
                    <p>{document?.shippedOnBoardDate}</p>
                  </div>
                </div>
              </div>
            </div>
            {document.signature ? (
              <div css={rowStyle}>
                <div css={cellStyle}>
                  <div css={subContainerStyle}>
                    <p css={boldTextStyle}>Carrier Remark</p>
                    <p>{document?.remarks}</p>
                  </div>
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
                  <div css={subContainerStyle}>
                    <p css={boldTextStyle}>Carrier Remarks</p>
                    <p>{document?.remarks}</p>
                  </div>
                </div>
              </div>
            )}
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
      {termsPages.map((pageContent, index) => (
        <div key={index} css={termsPageContainer}>
          <div css={[print, termsPageStyle]} className="watermarkprint page-break">
            <div css={termsWatermarkStyle}>{document?.watermarkText}</div>
            <div css={containerStyle}>
              <h5 css={titleStyle}>Terms And Conditions - Page {index + 1}</h5>
              <div className="termsAndConditions">
                {pageContent.split("\n").map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
