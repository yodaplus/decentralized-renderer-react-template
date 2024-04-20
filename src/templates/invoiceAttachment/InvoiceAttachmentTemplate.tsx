import React, { FunctionComponent, useState } from "react";
import { TemplateProps } from "@govtechsg/decentralized-renderer-react-components";
import { css } from "@emotion/core";
import {
  Attachment,
  TradeSupportingDocumentsTemplateCertificate
} from "../samples/tradeSupportingDocumentsTemplateSample";
import { InvoiceAttachmentTemplateCertificate } from "../samples/InvoiceAttachment";

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
const rowStyle1 = css`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

// const oneColumnRowStyle = css`
//   display: grid;
//   grid-template-columns: repeat(1, 1fr);
// `;

// const rowSignatureStyle = css`
//   display: grid;
//   grid-template-columns: repeat(1, 1fr);
// `;

const innerContainer = css`
  border: 0.5pt solid #000;
`;

const singleRowStyle = css`
  display: grid;
  grid-template-columns: 1fr;
`;

// const threeColumnsRowStyle = css`
//   display: grid;
//   grid-template-columns: repeat(3, 1fr);
// `;

// const fourColumnsRowStyle = css`
//   display: grid;
//   grid-template-columns: repeat(4, 1fr);
// `;

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

// const signatureStyle = css`
//   width: 75pt;
//   height: auto;
//   display: block;
//   margin: 2pt 0;
// `;

const buttonStyle = css`
  margin-top: 10px;
`;

export const InvoiceAttachmentTemplate: FunctionComponent<TemplateProps<InvoiceAttachmentTemplateCertificate> & {
  className?: string;
}> = ({ document, className = "" }) => {
  const [downloadedAttachments, setDownloadedAttachments] = useState<string[]>([]);

  const handleDownload = (attachment: Attachment) => {
    const byteCharacters = atob(attachment.data);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    const blob = new Blob([byteArray], { type: attachment.type });
    const url = URL.createObjectURL(blob);

    // Track downloaded attachment filenames
    setDownloadedAttachments([...downloadedAttachments, attachment.filename]);

    // Trigger file download
    // window.open(url, "_blank");
    const a = window.document.createElement("a");
    a.href = url;
    a.download = attachment.filename;
    a.click();
    // return blob;

    // const a = window.document.createElement("a");
    // a.href = url;
    // a.download = attachment.filename;

    // // Append the anchor element to the DOM and trigger the download
    // window.document.body.appendChild(a);
    // a.click();

    // // Clean up: remove the anchor element from the DOM and revoke the Blob URL
    // window.document.body.removeChild(a);
    // URL.revokeObjectURL(url);
  };

  return (
    <div css={pageStyle}>
      <div css={containerStyle} className={className} id="custom-template">
        <h5 css={titleStyle}>Invoice Attachment</h5>
        <div css={innerContainer}>
          <div css={rowStyle}>
            <div css={cellStyle}>
              <h4>Exporter</h4>
              <br />
              <p>{document?.exporter?.name}</p>
              <p>{document?.exporter?.address}</p>
            </div>
            <div css={cellStyle}>
              <h4>Importer</h4>
              <br />
              <p>{document?.importer?.name}</p>
              <p>{document?.importer?.address}</p>
            </div>
          </div>
          <div css={rowStyle1}>
            <div css={cellStyle}>
              <h4>Invoice Number</h4>
              <br />

              <p>{document?.invoiceNumber}</p>
            </div>
            <div css={cellStyle}>
              <h4>Invoice Date</h4>
              <br />
              <p>{document?.invoiceDate}</p>
            </div>
            <div css={cellStyle}>
              <h4>Invoice Value</h4>
              <br />
              <p>
                {document?.currency}
                {"  "}
                {document?.totalAmount}
              </p>
            </div>
          </div>
          <div css={singleRowStyle}>
            <table css={[cellStyle, tableStyle]}>
              <tr>
                <td css={tableHeaderCellStyle}>Document Name</td>
                <td css={tableHeaderCellStyle}>File Name</td>
                <td css={tableHeaderCellStyle}>Actions</td>
              </tr>
              {document?.attachments?.map((attachment, index) => {
                const fileName = attachment.filename.split(".pdf")[0];
                return (
                  <tr key={index}>
                    <td css={tableCellStyle}>
                      <h5>{document.attachmentsData[`${fileName}`]}</h5>
                    </td>
                    <td css={tableCellStyle}>
                      <h4>{attachment?.filename}</h4>
                    </td>
                    <td css={tableCellStyle}>
                      <button css={buttonStyle} onClick={() => handleDownload(attachment)}>
                        Download
                      </button>
                    </td>
                  </tr>
                );
              })}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
