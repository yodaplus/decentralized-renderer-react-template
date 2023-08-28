import React, { FunctionComponent } from "react";
import { TemplateProps } from "@govtechsg/decentralized-renderer-react-components";
import { css } from "@emotion/core";
import { BLTemplateCertificate } from "../samples/customTemplate";
import { documentTemplates } from "@govtechsg/decentralized-renderer-react-components/build/types/utils";

const containerStyle = css`
  padding: 10px;
  margin: auto;
  width: 70%;
  font-family: "Open Sans", sans-serif;
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
  border: 1px solid #000;
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
  border: 1px solid #000;
  padding: 8px;

  padding: 10px;
  p {
    margin: 0;
    font-weight: bold;
  }
  h4 {
    margin: 0;
    font-weight: normal;
  }
`;

const titleStyle = css`
  text-align: center;
`;

const signatureStyle = css`
  width: 100px;
  height: auto;
  display: block;
  margin: 10px 0;
`;

const tableCellStyle = css`
  border-left: 1px solid #000;
  border-right: 1px solid #000;
  padding: 8px;
  text-align: left;
`;

const tableHeaderCellStyle = css`
  border: 1px solid #000;
  padding: 8px;
  text-align: left;
  font-weight: 600;
`;

const tableStyle = css`
  width: 100%;
  border-collapse: collapse;
  & tr:first-child td {
    border-top: 1px solid #000;
  }
  & tr:last-child td {
    border-bottom: 2px solid #000;
  }
`;

export const CocTemplate: FunctionComponent<TemplateProps<BLTemplateCertificate> & { className?: string }> = ({
  document,
  className = ""
}) => {
  return (
    <div css={containerStyle} className={className} id="custom-template">
      <h1 css={titleStyle}>BILL OF LADING</h1>
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
              <h4>BL Number & Date</h4>
              <div css={cellStyleFlex}>
                <p>{document.blNumber}</p>
                <p>{document.blDateofIssue}</p>
              </div>
            </div>

            <div css={cellStyle}>
              <h4>Seal Number</h4>
              <p>{document.sealNumber}</p>
            </div>
            <div css={cellStyle}>
              <h4>Product Number</h4>
              <p>{document.productNo}</p>
            </div>

            <div css={cellStyle}>
              <h4>LC Reference No.</h4>
              <p>{document.lcRefNumber}</p>
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
              <h4 style={{ marginTop: "20px" }}>Carrier Identification No.</h4>
              <p>{document.carrierIdentificationfNo}</p>
            </div>
            <div css={cellStyle}>
              <h4>Shipping Ref. No.</h4>
              <p>{document.shippingRefNo}</p>
              <h4 style={{ marginTop: "20px" }}>Proper Shipping Name</h4>
              <p>{document.properShippingName}</p>
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
              <h4>Shipped on Board</h4>
              <p>{document.shippedOnBoardDate}</p>
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
            <h4>Payment Terms / Method of Payment / Freight</h4>
            <p>{document.paymentTerms} Days</p>
            <p>{document.paymentMethod}</p>
            <p>{document.freight}</p>
          </div>
        </div>

        <div css={fourColumnsRowStyle}>
          <div css={cellStyle}>
            <h4>City & Country of Origin</h4>
            <p>
              {document.cityOfOrigin}, {document.countryOfOrigin}
            </p>
          </div>
          <div css={cellStyle}>
            <h4>City & Country of Destination</h4>
            <p>
              {document.cityOfDestination}, {document.countryOfDestination}
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
              <td css={tableHeaderCellStyle}>Marks & Numbers</td>
              <td css={tableHeaderCellStyle}>Kind & No of Packages</td>
              <td css={tableHeaderCellStyle}>Commodity Description</td>

              <td css={tableHeaderCellStyle}>Temperature </td>
              <td css={tableHeaderCellStyle} style={{ width: "120px" }}>
                Gross weight (KG)
              </td>
              <td css={tableHeaderCellStyle} style={{ width: "120px" }}>
                Measurements (Volume)
              </td>
            </tr>
            {document.packages.map((singlePackage, index) => (
              <tr key={index}>
                <td css={tableCellStyle}>{singlePackage.marksAndNo}</td>
                <td css={tableCellStyle}>
                  {singlePackage.noOfPackage} X {singlePackage.type}
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
              <td css={tableHeaderCellStyle} style={{ width: "120px" }}>
                {document.packages.reduce((acc, singlePackage) => acc + singlePackage.grossWeight, 0)}
              </td>
              <td css={tableHeaderCellStyle} style={{ width: "120px" }}>
                {document.packages.reduce((acc, singlePackage) => acc + singlePackage.volume, 0)}
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
        <div css={rowStyle}>
          <div css={rowStyle}>
            <div css={cellStyle}>
              <h4>Terms and Condition of Carriage</h4>
              <p>{document.termsAndConditionOfCarraige}</p>
            </div>
            <div css={cellStyle}>
              <h4>Disclaimer</h4>
              <p>{document.disclaimer}</p>
            </div>
          </div>
          <div css={cellStyle}>
            <img css={signatureStyle} src={document?.signature} alt="Signature" />
            <p>Name of Authorised Signatory: {document.exporter.name}</p>
            <p>Place of Issue: {document.placeOfBlIssue}</p>
            <p>{`Date: ${document.blDateofIssue}`}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
