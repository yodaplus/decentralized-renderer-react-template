import { v2 } from "@govtechsg/open-attestation";

export interface Attachment {
  data: string; // Base64-encoded data
  filename: string;
  documentName: string;
  type: string;
}

export interface InvoiceAttachmentTemplateCertificate extends v2.OpenAttestationDocument {
  exporter: {
    name: string;
    address: string;
  };
  importer: {
    name: string;
    address: string;
  };
  invoiceNumber: string;
  invoiceDate: string;
  currency: string;
  totalAmount: string;
  attachments: Attachment[];
  watermarkText: string;
  attachmentsData: any;
}

export const InvoiceAttachmentTemplateCertificatee: InvoiceAttachmentTemplateCertificate = {
  $template: {
    name: "TradeSupportingDocuments",
    type: v2.TemplateType.EmbeddedRenderer,
    url: "http://localhost:3000"
  },
  issuers: [
    {
      name: "My name",
      tokenRegistry: "0xBBb55Bd1D709955241CAaCb327A765e2b6D69c8b",
      identityProof: {
        location: "https://invoice-doc-renderer.netlify.app",
        type: v2.IdentityProofType.DNSTxt
      }
    }
  ],

  exporter: {
    name: "Exporter 1",
    address: "Exporter Address 1"
  },
  importer: {
    name: "Importer 1",
    address: "Importer Address 1"
  },
  watermarkText: "My watermark text",
  invoiceNumber: "INV123456789",
  invoiceDate: "2023-08-01",
  currency: "SGD",
  totalAmount: "1000",
  attachments: [
    {
      data: "base64data",
      filename: "attachment1.pdf",
      documentName: "Document 1",
      type: "application/pdf"
    }
  ],
  attachmentsData: {
    "Document 1": "filename",
    "Document 2": "filename"
  }
};
