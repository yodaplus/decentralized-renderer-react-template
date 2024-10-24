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
  font-family: "Open Sans", sans-serif;
`;

const remattedTextStyle = css`
  @media print {
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
  }
  display: none !important;
  font-weight: bold;
  font-family: "Open Sans", sans-serif;
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

// Styles converted to CSS-in-JS
const tableStyle2 = css`
  width: 100%;
  border-collapse: collapse;

  @media print {
    display: table; /* Display the table only in print */
  }

  @media screen {
    display: none; /* Hide the table on the screen */
  }
`;

const tableHeaderStyle = css`
  font-weight: bold;
  text-align: left;
  padding: 15px;
  font-size: 8pt;
`;

const actionInfoStyle = css`
  display: flex;
  align-items: center;

  h4 {
    margin: 0 10px;
    color: #212529;
    font-size: 9pt;
  }
`;

const timestampStyle = css`
  margin-top: 5px;
  color: #7f8c8d;
  font-size: 7pt;
`;

const statusDotStyle = css`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 10px;
  width: 12px;
  height: 12px;
  background-color: #007854;
  border-radius: 50%;
`;

const historyColumnStyle = css`
  padding: 0 15px;
  font-size: 7pt;
`;

const threeColumnsRowStyle = css`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

const pageNumberStyle = css`
  display: none;
  position: absolute;
  top: 10pt;
  right: 10pt;
  font-size: 8pt;
  font-weight: bold;
  @media print {
    display: block; /* Display the table only in print */
  }
`;
// const endorsementChain = css`
//   font-family: Arial, sans-serif;
//   padding: 20px;
//   background-color: #f8f9fa;
//   border-radius: 8px;
// `;

const backButton = css`
  padding: 8px 16px;
  margin-bottom: 20px;
  background-color: #343a40;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const title = css`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const chainGrid = css`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
`;

const gridHeader = css`
  font-weight: bold;
  padding: 10px;
  background-color: #e9ecef;
  border-radius: 4px;
`;

const actionDate = css`
  position: relative;
  padding-right: 20px;
`;

const actionInfo = css`
  display: flex;
  flex-direction: column;
  padding-left: 20px; /* Add space for the dot and line */
`;

const action = css`
  font-weight: 500;
  font-size: 14px;
`;

const timestamp = css`
  font-size: 12px;
  color: #6c757d;
`;

const statusDot = css`
  position: absolute;
  top: 50%;
  right: 2px;
  transform: translateY(-50%);
  width: 12px;
  height: 12px;
  background-color: #28a745;
  border-radius: 50%;

  z-index: 2;
`;

const verticalLine = css`
  position: absolute;
  top: 50%;
  right: 5px;
  width: 2px;
  height: calc(100% + 10px);
  border-left: 2px dotted #28a745;
  z-index: 1;
`;

const gridCell = css`
  padding: 10px;
  border-radius: 4px;
  font-size: 14px;
`;

const endorsementChainContainer = css`
  display: none; // Hide by default
  page-break-before: always; // Ensure it starts on a new page

  @media print {
    display: block; // Show only when printing
  }
`;

const endorsementChain = css`
  font-family: Arial, sans-serif;
  padding: 20px;
  border-radius: 8px;
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

function formatTimestamp(timestamp: string | number | Date) {
  const date = new Date(timestamp);

  const day = date.getDate();
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const month = monthNames[date.getMonth()];
  const year = date.getFullYear();

  let hours = date.getHours();
  const minutes = date
    .getMinutes()
    .toString()
    .padStart(2, "0");
  const ampm = hours >= 12 ? "PM" : "AM";

  hours = hours % 12;
  hours = hours ? hours : 12; // Adjust for 12 AM and 12 PM

  const ordinalSuffix = (n: number) => {
    const s = ["th", "st", "nd", "rd"];
    const v = n % 100;
    return s[(v - 20) % 10] || s[v] || s[0];
  };

  const formattedDate = `${day}${ordinalSuffix(day)} ${month} ${year}, ${hours}:${minutes} ${ampm}`;
  return formattedDate;
}

export const BLTemplate: FunctionComponent<TemplateProps<BLTTemplateCertificate> & { className?: string }> = ({
  document,
  className = ""
}) => {
  const termsPages = useMemo(() => {
    return document?.termsAndConditions ? splitIntoPages(document?.termsAndConditions) : [];
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [document?.termsAndConditions]);
  const totalPages = termsPages.length + (document.historyChain?.length > 0 ? 2 : 1);
  const isWatermarkVisible = document?.mode === "preview" || document?.mode === "print";
  return (
    <>
      <div css={print} className="watermarkprint">
        <div css={containerStyle} className={className} id="custom-template">
          <div css={pageNumberStyle}>Page 1 of {totalPages}</div>
          <div className={`watermark ${isWatermarkVisible ? "show-watermark" : ""}`} css={watermarkStyle}>
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
            <div css={threeColumnsRowStyle}>
              <div css={cellStyle}>
                <div css={subContainerStyle}>
                  <p css={boldTextStyle}>IMO Number</p>
                  <p>{document.imoNumber}</p>
                </div>
              </div>

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
          {/* Vertical Stepper */}
        </div>
      </div>
      {termsPages.map((pageContent, index) => (
        <div key={index} css={termsPageContainer}>
          <div css={[print, termsPageStyle]} className="watermarkprint page-break">
            <div css={pageNumberStyle}>
              Page {index + 2} of {totalPages}
            </div>

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
      {document.historyChain && (
        <div css={endorsementChainContainer}>
          <div css={[print, containerStyle]} className="watermarkprint">
            <div css={pageNumberStyle}>
              Page {totalPages} of {totalPages}
            </div>
            <div css={endorsementChain}>
              <h2 css={title}>Endorsement Chain</h2>
              <div css={chainGrid}>
                <div css={gridHeader}>Action/Date</div>
                <div css={gridHeader}>Owner</div>
                <div css={gridHeader}>Holder</div>

                {document.historyChain?.map((item, index) => (
                  <React.Fragment key={index}>
                    <div css={actionDate}>
                      <div css={actionInfo}>
                        <span css={action}>
                          {item.action === "Document surrendered to issuer"
                            ? "Request to convert to paper"
                            : item.action === "Surrender of document accepted"
                            ? "Converted To Paper"
                            : item.action}
                        </span>
                        <span css={timestamp}>{formatTimestamp(item.timestamp)}</span>
                      </div>
                      <div css={statusDot}></div>
                      {index < document.historyChain.length - 1 && <div css={verticalLine}></div>}
                    </div>
                    <div css={gridCell}>{document?.fetchNameByAddress?.[item?.beneficiary] ?? item.beneficiary}</div>
                    <div css={gridCell}>{document?.fetchNameByAddress?.[item?.holder] ?? item.holder}</div>
                  </React.Fragment>
                ))}
              </div>
              <div css={watermarkStyle}>
                {/* You can replace this text with an image by using an <img> tag */}
                {document?.watermarkText}
              </div>
            </div>
            {document?.historyChain?.[document?.historyChain?.length - 1]?.action ===
              "Surrender of document accepted" && (
              <>
                {document?.remattedText && (
                  <div css={remattedTextStyle}>
                    {document?.remattedText}{" "}
                    {formatTimestamp(document?.historyChain?.[document?.historyChain?.length - 1]?.timestamp)}
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};
