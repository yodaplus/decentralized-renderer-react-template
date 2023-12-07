import React, { FunctionComponent } from "react";
import { RedactableValue, TemplateProps } from "@govtechsg/decentralized-renderer-react-components";
import { css } from "@emotion/core";
import { PackingListTemplateCertificate } from "../samples/packingListSample";
import { PrivacyFilter, IconRedact } from "../../core/PrivacyFilter";

const pageStyle = css`
  @page {
    size: A4;
    margin: 0;
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

const fourColumnsRowStyle = css`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;

const singleRowStyle = css`
  display: grid;
  grid-template-columns: 1fr;
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
  padding: 4pt;
  text-align: left;
`;

const cellStyleFlex = css`
  display: flex;
  justify-content: space-between;
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
const rowStyle = css`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
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

const innerContainer = css`
  border: 0.5pt solid #000;
`;

const hideOnPrint = css`
  @media print {
    display: none !important;
  }
`;

export const PackingListTemplate: FunctionComponent<TemplateProps<PackingListTemplateCertificate> & {
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
          {/* Content for Packing List */}
          <h5 css={titleStyle}>PACKING LIST</h5>
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
                    <h4>Contract Reference Number</h4>
                    <p>{document.contractRefNum}</p>
                  </div>
                  <div css={cellStyle}>
                    <h4>Invoice Number</h4>
                     <p>{document?.invoiceNumber}</p>
                  </div>
                  <div css={cellStyle}>
                    <h4>Issue Date </h4>
                    <p>{document.issueDate}</p>
                  </div>
                  <div css={cellStyle}>
                    <h4>Standard Carrier Alpha Code (SCAC)</h4>
                    <p>{document?.standardCarrierAlphaCode}</p>
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
                <h4>Importer</h4>
                <p>
                  <RedactableValue
                    editable={editable}
                    value={document.importer.name}
                    onRedactionRequested={() => handleObfuscation(`importer.name`)}
                    iconRedact={<IconRedact />}
                  />
                </p>
                <p>{document.importer.address}</p>
                <p>{document.importer.phoneNumber}</p>
                <p>{document.importer.email}</p>
              </div>
            </div>
            <div css={rowStyle}>
              <div css={rowStyle}>
                <div css={cellStyle}>
                  <h4>Packaging Code</h4>
                  <p>{document.packagingCode}</p>
                </div>
                <div css={cellStyle}>
                  <h4>Vessel Name</h4>
                  <p>{document.vesselName}</p>
                </div>
                <div css={cellStyle}>
                  <h4>Voyage Number</h4>
                  <p>{document.voyageNumber}</p>
                </div>
                <div css={cellStyle}>
                  <h4>Place of Delivery</h4>
                  <p>{document.placeOfDelivery}</p>
                </div>
                  
              </div>
              
              <div >
                <div css={cellStyle}>
                  <h4>Carrier</h4>
                  <p>{document?.carrier?.name}</p>
                  <p>{document?.carrier?.address}</p>
                  <p>{document?.carrier?.phoneNumber}</p>
                  <p>{document?.carrier?.email}</p>
                </div>
                
              </div>
            </div>

            <div css={singleRowStyle}>
              <table css={[cellStyle, tableStyle]}>
                <tr>
                  <td css={tableHeaderCellStyle} style={{ width: "45pt" }}>
                    HS Code
                  </td>
                  <td css={tableHeaderCellStyle}>Commodity name </td>
                  <td css={tableHeaderCellStyle} >
                    Description of Goods
                  </td>
                  <td css={tableHeaderCellStyle}>No of Packages</td>
                  <td css={tableHeaderCellStyle} style={{ width: "60pt" }}>
                    Gross Weight of packages(KG)
                  </td>
                  <td css={tableHeaderCellStyle} style={{ width: "60pt" }}>
                    Measurements (Volume)
                  </td>
                </tr>
                {document.packages.map((singlePackage, index) => (
                  <tr key={index}>
                    <td css={tableCellStyle}>{singlePackage.hsCode}</td>
                    <td css={tableCellStyle}>{singlePackage.name}</td>
                    <td css={tableCellStyle}>{singlePackage.description}</td>
                    <td css={tableCellStyle}>{singlePackage.noOfPackage}</td>

                    <td css={tableCellStyle}>{singlePackage.grossWeight}</td>
                    <td css={tableCellStyle}>{singlePackage.measurements}</td>
                  </tr>
                ))}
              </table>
            </div>

            <div css={rowStyle}>
              <div css={rowStyle}>
                <div css={tableHeaderCellStyle} style={{ fontSize: "8pt" }}>
                  {" "}
                  Total number of packages
                </div>
                <div css={tableHeaderCellStyle} style={{ fontSize: "8pt",fontWeight: "bold" }}>
                  {document.packages.reduce((acc, singlePackage) => acc + singlePackage.noOfPackage, 0)}
                </div>
              </div>
              <table css={[cellStyle, tableStyle]}>
                <tr>
                  <td css={tableHeaderCellStyle} style={{ textAlign: "right" }}>
                    Total Consignment Value
                  </td>
                  <td css={tableHeaderCellStyle} style={{ width: "60pt", fontWeight: "bold" }}>
                    {document.packages.reduce((acc, singlePackage) => acc + singlePackage.grossWeight, 0)}
                  </td>
                  <td css={tableHeaderCellStyle} style={{ width: "60pt", fontWeight: "bold" }}>
                    {document.packages.reduce((acc, singlePackage) => acc + singlePackage.measurements, 0)}
                  </td>
                </tr>
              </table>
            </div>
            <div css={rowStyle}>
              <div css={cellStyle}>
                <h4>Additional Information</h4>
                <p>{document.additionalInformation}</p>
              </div>
              <div css={cellStyle}>
                {document.exporter.signature && (<img css={signatureStyle} src={document.exporter.signature} alt="Signature" />)}
                <p>Name of Authorised Signatory:{document.exporter.name} </p>
                <p>Place of Issue:{document.placeOfIssue} </p>
                <p>{`Date: ${document.issueDate}`}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
