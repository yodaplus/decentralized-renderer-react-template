import React, { FunctionComponent } from "react";
import { TemplateProps } from "@govtechsg/decentralized-renderer-react-components";
import { css } from "@emotion/core";
import { AirwayBillTemplateCertificate } from "../samples/AirwayBillTemplateSample";
import { documentTemplates } from "@govtechsg/decentralized-renderer-react-components/build/types/utils";

const print = css`
  @page {
    size: A4; /* Set the paper size to A4 */
    margin: 0; /* Remove default margins */
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

export const AirwayBillTemplate: FunctionComponent<TemplateProps<AirwayBillTemplateCertificate> & {
  className?: string;
}> = ({ document, className = "" }) => {
  return (
    <>
      <div css={print}>
        <div css={containerStyle} className={className} id="custom-template">
          <h5 css={titleStyle}>AIRWAY BILL</h5>
          <div css={innerContainer}>
            <div css={rowStyle}>
              <div css={cellStyle}>
                <h4>Exporter</h4>
                <p>{document.exporter.name}</p>
                <p>{document.exporter.address}</p>
                <p>{document.exporter.phoneNumber}</p>
                <p>{document.exporter.email}</p>
              </div>
              <div css={singleRowStyle}>
                <div css={rowStyle}>
                  <div css={cellStyle}>
                    <h4>Exporter LEI</h4>
                    <p>{document.exporterLEI}</p>
                  </div>

                  <div css={cellStyle}>
                    <h4>Issue Date</h4>
                    <p>{document.dateOfIssue}</p>
                  </div>
                </div>
                <div css={cellStyle}>
                  <h4>Freight Forwarder</h4>
                  <p>{document.freightForwarder}</p>
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
                {/* <div css={cellStyle}>
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
                </div> */}

                <div css={cellStyle}>
                  <h4>Flight No.</h4>
                  <p>{document.flightNumber}</p>
                </div>
                <div css={cellStyle}>
                  <h4>Flight Date</h4>
                  <p>{document.flightDate}</p>
                </div>
                <div css={cellStyle}>
                  <h4>Airport Departure</h4>
                  <p>{document.airportDeparture}</p>
                </div>
                <div css={cellStyle}>
                  <h4>Airport Destination</h4>
                  <p>{document.airportDestation}</p>
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
              <div css={singleRowStyle}>
                <div css={cellStyle}>
                  <h4>Agent's IATA Code</h4>
                  <p>{document.agentIataCode}</p>
                </div>
                <div css={cellStyle}>
                  <h4>Agent's Account No.</h4>
                  <p>{document.agentAccountNumber}</p>
                </div>
              </div>
            </div>
            <div css={rowStyle}>
              <div css={singleRowStyle}>
                <div css={cellStyle}>
                  <h4>Handling Code</h4>
                  <p>{document.handlingCode}</p>
                </div>
              </div>
              <div css={cellStyle}>
                <h4>Handling Information</h4>
                {document.handlingInformation && <p>{document.handlingInformation}</p>}
              </div>
            </div>

            <div css={threeColumnsRowStyle}>
              <div css={cellStyle}>
                <h4>Country of Origin</h4>
                <p>
                  {/* {document.cityOfOrigin ? `${document.cityOfOrigin}, ` : ""} */}
                  {document.countryOfOrigin}
                </p>
              </div>
              <div css={cellStyle}>
                <h4>Country of Destination</h4>
                <p>
                  {/* {document.cityOfDestination ? `${document.cityOfDestination}, ` : ""} */}
                  {document.countryOfDestination}
                </p>
              </div>

              <div css={cellStyle}>
                <h4>Incoterms</h4>
                <p>{document.incoterms}</p>
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
                  <td css={tableHeaderCellStyle}>Commodity Number</td>
                  <td css={tableHeaderCellStyle}>Description of Goods</td>
                  <td css={tableHeaderCellStyle}>No. of Pieces</td>

                  {/* <td css={tableHeaderCellStyle} style={{ width: "60pt" }}>
                    Temperature{" "}
                  </td> */}
                  <td css={tableHeaderCellStyle} style={{ width: "60pt" }}>
                    Weight (KG)
                  </td>
                  <td css={tableHeaderCellStyle} style={{ width: "75pt" }}>
                    Rate / Charge ({document.currency})
                  </td>
                </tr>
                {document.commodity.map((singlePackage, index) => (
                  <tr key={index}>
                    <td css={tableCellStyle}>{singlePackage.hsCode}</td>
                    <td css={tableCellStyle}>{singlePackage.name}</td>
                    <td css={tableCellStyle}>{singlePackage.marksAndNo}</td>
                    <td css={tableCellStyle}>{singlePackage.description}</td>
                    <td css={tableCellStyle}>
                      {/* {singlePackage.type || singlePackage.noOfPackage
                        ? `${singlePackage.type} X ${singlePackage.noOfPackage}`
                        : ""} */}
                      {singlePackage.noOfPackage ? `${singlePackage.noOfPackage}` : ""}
                    </td>
                    {/* <td css={tableCellStyle}>
                      {singlePackage.temp} {singlePackage.tempUnit}
                    </td> */}
                    <td css={tableCellStyle}>{singlePackage.grossWeight}</td>
                    <td css={tableCellStyle}>{singlePackage.charges}</td>
                  </tr>
                ))}
              </table>
            </div>

            <div css={rowStyle}>
              <div css={singleRowStyle}>
                <div css={cellStyle}>
                  <h4>Container Number</h4>
                  <p>{document.containerNo}</p>
                </div>
              </div>
              <table css={[cellStyle, tableStyle]}>
                <tr>
                  <td css={tableHeaderCellStyle} style={{ textAlign: "right" }}>
                    Total Consignment Value
                  </td>
                  <td css={tableHeaderCellStyle} style={{ width: "60pt", fontWeight: "bold" }}>
                    {document.commodity.reduce((acc, singlePackage) => acc + (singlePackage.grossWeight ?? 0), 0)}
                  </td>
                  <td css={tableHeaderCellStyle} style={{ width: "60pt", fontWeight: "bold" }}>
                    {document.commodity.reduce((acc, singlePackage) => acc + (singlePackage.charges ?? 0), 0)}
                  </td>
                </tr>
              </table>
            </div>

            {document.carrierSignature || document.agentAccountNumber ? (
              <>
                <div css={rowStyle}>
                  <div css={[cellStyle, { display: "flex", flexDirection: "column", justifyContent: "flex-end" }]}>
                    {document.carrierSignature && (
                      <img css={signatureStyle} src={document?.carrierSignature} alt="Carrier Signature" />
                    )}
                    <p>Name of Carrier Signatory: {document.carrier.name}</p>
                    <p>{`Date: ${document.dateOfIssue}`}</p>
                  </div>
                  <div css={[cellStyle, { display: "flex", flexDirection: "column", justifyContent: "flex-end" }]}>
                    {document.agentSignature && (
                      <img css={signatureStyle} src={document?.agentSignature} alt="Agent Signature" />
                    )}
                    <div>
                      <p>Name of Agent Signatory: {document.agentName}</p>
                      <p>{`Date: ${document.dateOfIssue}`}</p>
                    </div>
                  </div>
                </div>
                <div css={cellStyle}>
                  <div css={singleRowStyle}>
                    <h4>Terms & Condition of Carriage</h4>
                    <p>{document.termsAndConditionOfCarriage}</p>
                  </div>
                </div>
              </>
            ) : (
              <div css={rowStyle}>
                <div css={cellStyle}>
                  <h4>Terms & Condition of Carriage</h4>
                  <p>{document.termsAndConditionOfCarriage}</p>
                </div>
              </div>
            )}
          </div>
        </div>
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
