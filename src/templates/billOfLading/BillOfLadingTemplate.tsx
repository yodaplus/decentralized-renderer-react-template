import React, { FunctionComponent } from "react";
import { TemplateProps } from "@govtechsg/decentralized-renderer-react-components";
import { css } from "@emotion/core";
import { BLTemplateCertificate } from "../samples/BillOfLadingTemplateSample";
import { documentTemplates } from "@govtechsg/decentralized-renderer-react-components/build/types/utils";
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

const footerStyle = css`
  text-align: left;
  padding: 8pt;

  display: flex;
  flex-direction: column;
`;

const signatureHeaderStyle = css`
  font-weight: bold;
  font-size: 8pt;
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
  font-size: 8pt;
  font-weight: bold;
  color: red;
`;

const signatureValueStyle = css`
  font-size: 8pt;
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

const historyColumnStyle = css`
  padding: 0 15px;
  font-size: 7pt;
`;

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

export const BillOfLadingTemplate: FunctionComponent<TemplateProps<BLTemplateCertificate> & { className?: string }> = ({
  document,
  className = ""
}) => {
  const isWatermarkVisible = document?.mode === "preview" || document?.mode === "print";
  return (
    <>
      <div css={print}>
        <div className={`watermark ${isWatermarkVisible ? "show-watermark" : ""}`} css={watermarkStyle}>
          {/* You can replace this text with an image by using an <img> tag */}
          {document?.watermarkText}
        </div>
        <div css={containerStyle} className={className} id="custom-template">
          <h5 css={titleStyle}>BILL OF LADING</h5>
          <div css={innerContainer}>
            <div css={rowStyle}>
              <div css={cellStyle}>
                <h4>Exporter</h4>
                <p>{document.exporter.name}</p>
                <p>{document.exporter.address}</p>
                <p>{document.exporter.phoneNumber}</p>
                <p>{document.exporter.email}</p>
              </div>
              <div css={rowStyle}>
                <div css={cellStyle}>
                  <h4>Bill of Lading Number</h4>
                  <p>{document.blNumber}</p>
                </div>
                <div css={cellStyle}>
                  <h4>Bill of Lading Date</h4>
                  <p>{document.blDateofIssue}</p>
                </div>

                <div css={cellStyle}>
                  <h4>Seal Number</h4>
                  <p>{document.sealNumber}</p>
                </div>
                <div css={cellStyle}>
                  <h4>Product Number</h4>
                  <p>{document.productNo}</p>
                </div>
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
                  <h4>Carrier Booking Ref. No.</h4>
                  <p>{document.carrierBookingRefNo}</p>
                </div>
                <div css={cellStyle}>
                  <h4>Shipping Ref. No.</h4>
                  <p>{document.shippingRefNo}</p>
                </div>
                <div css={cellStyle}>
                  <h4>Carrier Identification No.</h4>
                  <p>{document.shippingRefNo}</p>
                </div>
                <div css={cellStyle}>
                  <h4>Standard Carrier Alpha Code (SCAC)</h4>
                  <p>{document.standardCarrierAlphaCode}</p>
                </div>
              </div>
            </div>
            <div css={rowStyle}>
              <div css={cellStyle}>
                <h4>Consignee</h4>
                <p>{document.consignee.name}</p>
                <p>{document.consignee.address}</p>
                <p>{document.consignee.phoneNumber}</p>
                <p>{document.consignee.email}</p>
              </div>
              <div css={cellStyle}>
                <h4>Carrier</h4>
                <p>{document.carrier.name}</p>
                <p>{document.carrier.address}</p>
                <p>{document.carrier.phoneNumber}</p>
                <p>{document.carrier.email}</p>
              </div>
            </div>
            <div css={rowStyle}>
              <div css={cellStyle}>
                <h4>Notifying Party</h4>
                <p>{document.notifyingParty.name}</p>
                <p>{document.notifyingParty.address}</p>
                <p>{document.notifyingParty.phoneNumber}</p>
                <p>{document.notifyingParty.email}</p>
              </div>
              <div css={rowStyle}>
                <div css={cellStyle}>
                  <h4>Exporter LEI</h4>
                  <p>{document.exporterLEI}</p>
                </div>
                <div css={cellStyle}>
                  <h4>LC Reference No.</h4>
                  <p>{document.lcRefNumber}</p>
                </div>
                <div css={cellStyle}>
                  <h4>Cargo Movement Type Origin Code</h4>
                  <p>{document.cargoMovTypeOriginCode}</p>
                </div>
                <div css={cellStyle}>
                  <h4>Cargo Movement Type Destination Code</h4>
                  <p>{document.cargoMovTypeDestinationCode}</p>
                </div>
              </div>
            </div>
            <div css={fourColumnsRowStyle}>
              <div css={cellStyle}>
                <h4>Proper Shipping Name</h4>
                <p>{document.properShippingName}</p>
              </div>
              <div css={cellStyle}>
                <h4>Method of Dispatch</h4>
                <p>{document.modeOfDispatch}</p>
              </div>
              <div css={cellStyle}>
                <h4>Freight</h4>
                <p>{document.freight}</p>
              </div>
              <div css={cellStyle}>
                <h4>Shipped on Board</h4>
                <p>{document.shippedOnBoardDate}</p>
              </div>
            </div>
            <div css={rowStyle}>
              <div css={rowStyle}>
                <div css={cellStyle}>
                  <h4>Vessel Name</h4>
                  <p>{document.vesselName}</p>
                </div>
                <div css={cellStyle}>
                  <h4>Voyage Number</h4>
                  <p>{document.voyageNumber}</p>
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
                <h4>Payment Terms / Method of Payment</h4>
                {document.paymentTerms && <p>{document.paymentTerms} Days</p>}
                <p>{document.paymentMethod}</p>
              </div>
            </div>

            <div css={fourColumnsRowStyle}>
              {/* <div css={cellStyle}>
              <h4>City & Country of Origin</h4>
              <p>
                {document.cityOfOrigin && `${document.cityOfOrigin}, `}
                {document.countryOfOrigin}
              </p>
            </div>
            <div css={cellStyle}>
              <h4>City & Country of Destination</h4>
              <p>
                {document.cityOfDestination && `${document.cityOfDestination}, `}
                {document.countryOfDestination}
              </p>
            </div> */}
              <div css={cellStyle}>
                <h4>City & Country of Origin</h4>
                <p>
                  {document.cityOfOrigin ? `${document.cityOfOrigin}, ` : ""}
                  {document.countryOfOrigin}
                </p>
              </div>
              <div css={cellStyle}>
                <h4>City & Country of Destination</h4>
                <p>
                  {document.cityOfDestination ? `${document.cityOfDestination}, ` : ""}
                  {document.countryOfDestination}
                </p>
              </div>

              <div css={cellStyle}>
                <h4>Incoterms</h4>
                <p>{document.incoterms}</p>
              </div>
              <div css={cellStyle}>
                <h4>Buyer Contract</h4>
                <p>{document.buyerContract}</p>
              </div>
            </div>
            <div css={fourColumnsRowStyle}>
              <div css={cellStyle}>
                <h4>Place of Delivery</h4>
                <p>{document.placeOfDelivery}</p>
              </div>
              <div css={cellStyle}>
                <h4>Final Destination</h4>
                <p>{document.finalDestination}</p>
              </div>

              <div css={cellStyle}>
                <h4>Danger Level</h4>
                <p>{document.dangerLevel}</p>
              </div>
              <div css={cellStyle}>
                <h4>UNDG Code</h4>
                <p>{document.UNDGCode}</p>
              </div>
            </div>

            <div css={singleRowStyle}>
              <table css={[cellStyle, tableStyle]}>
                <tr>
                  <td css={tableHeaderCellStyle} style={{ width: "45pt" }}>
                    HS Code
                  </td>
                  <td css={tableHeaderCellStyle} style={{ width: "60pt" }}>
                    Commodity Name
                  </td>
                  <td css={tableHeaderCellStyle}>Marks & Numbers</td>
                  <td css={tableHeaderCellStyle}>Kind & No of Packages</td>
                  <td css={tableHeaderCellStyle}>Commodity Description</td>

                  <td css={tableHeaderCellStyle} style={{ width: "60pt" }}>
                    Temperature{" "}
                  </td>
                  <td css={tableHeaderCellStyle} style={{ width: "60pt" }}>
                    Gross weight (KG)
                  </td>
                  <td css={tableHeaderCellStyle} style={{ width: "60pt" }}>
                    Measurements (Volume)
                  </td>
                </tr>
                {document.packages.map((singlePackage, index) => (
                  <tr key={index}>
                    <td css={tableCellStyle}>{singlePackage.hsCode}</td>
                    <td css={tableCellStyle}>{singlePackage.name}</td>
                    <td css={tableCellStyle}>{singlePackage.marksAndNo}</td>
                    <td css={tableCellStyle}>
                      {singlePackage.type || singlePackage.noOfPackage
                        ? `${singlePackage.type} X ${singlePackage.noOfPackage}`
                        : ""}
                    </td>
                    <td css={tableCellStyle}>{singlePackage.description}</td>
                    <td css={tableCellStyle}>
                      {singlePackage.temp} {singlePackage.tempUnit}
                    </td>
                    <td css={tableCellStyle}>{singlePackage.grossWeight}</td>
                    <td css={tableCellStyle}>{singlePackage.volume}</td>
                  </tr>
                ))}
              </table>
            </div>

            <div css={rowStyle}>
              <div css={rowStyle}>
                <div css={cellStyle}>
                  <h4>Container Number</h4>
                  <p>{document.containerNo}</p>
                </div>
                <div css={cellStyle}>
                  <h4>Container Type</h4>
                  <p>{document.containerType}</p>
                </div>
              </div>
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

            <div css={fourColumnsRowStyle}>
              <div css={cellStyle}>
                <h4>Total Number of Containers</h4>
                <p>{document.totalNoOfConatiners}</p>
              </div>
              <div css={cellStyle}>
                <h4>Temperature setting for Reefer Containers</h4>
                <p>{document.tempSettingForReferContainer}</p>
              </div>
              <div css={cellStyle}>
                <h4>Agent Ref. No.</h4>
                <p>{document.ffREfnum}</p>
              </div>
              <div css={cellStyle}>
                <h4>Transport Document Type</h4>
                <p>{document.transportDocType}</p>
              </div>
            </div>
            {document.signature ? (
              <div css={rowStyle}>
                <div css={cellStyle}>
                  <h4>Disclaimer</h4>
                  <p>{document.disclaimer}</p>
                </div>
                <div css={cellStyle}>
                  <img css={signatureStyle} src={document?.signature} alt="Signature" />
                  <p>Name of Authorised Signatory: {document.exporter.name}</p>
                  <p>Place of Issue: {document.placeOfBlIssue}</p>
                  <p>{`Date: ${document.blDateofIssue}`}</p>
                </div>
              </div>
            ) : (
              <div css={rowStyle}>
                <div css={cellStyle}>
                  <h4>Disclaimer</h4>
                  <p>{document.disclaimer}</p>
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
          {document.historyChain && (
            <table css={tableStyle2}>
              <thead>
                <tr>
                  <th css={tableHeaderStyle}>Action/Date</th>
                  <th css={tableHeaderStyle}>Owner</th>
                  <th css={tableHeaderStyle}>Holder</th>
                </tr>
              </thead>
              <tbody>
                {document.historyChain?.map((item: any, index: number) => {
                  return (
                    <tr key={index}>
                      <td css={historyColumnStyle}>
                        <div css={actionInfoStyle}>
                          <h4>
                            {item?.action === "Document surrendered to issuer"
                              ? "Request to convert to paper"
                              : item?.action === "Surrender of document accepted"
                              ? "Converted To Paper"
                              : item?.action}
                          </h4>
                        </div>
                        <div css={timestampStyle}>{formatTimestamp(item.timestamp)}</div>
                        <div css={statusDotStyle}> </div>
                      </td>
                      <td css={historyColumnStyle}>
                        {document?.fetchNameByAddress?.[item?.beneficiary] ?? item.beneficiary}
                      </td>
                      <td css={historyColumnStyle}>{document?.fetchNameByAddress?.[item?.holder] ?? item.holder}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
        {document?.historyChain?.[document?.historyChain?.length - 1]?.action === "Surrender of document accepted" && (
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
      {document.termsAndConditions && (
        <div css={pageStyleTwo}>
          <div>
            <h5 css={titleStyle}>Terms And Conditions</h5>

            <div className="termsAndContions">
              <p>{document.termsAndConditions}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
