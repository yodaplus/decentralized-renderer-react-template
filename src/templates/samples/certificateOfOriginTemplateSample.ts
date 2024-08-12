import { v2 } from "@govtechsg/open-attestation";

interface ProcessedFilesV2 {
  data: string;
  filename: string;
  type: string;
}
export interface CertOfOriginTemplateCertificate extends v2.OpenAttestationDocument {
  exporter: {
    name: string;
    address: string;
  };

  importer: {
    name: string;
    address: string;
  };

  invoiceNumber: string;
  invoiceCreationDate: string;
  quantity: number;
  declarationByCouncil: string;
  declarationByExporter: string;
  exporterSignature?: string;
  councilSignature?: string;

  hsCode: string;
  packageName: string;

  additionalNumbers: string;

  cooCertificateNumber: string;
  descOfGoods: string;
  noOfPackages: number;
  identificationMarks: string;
  countryOfOrigin: string;
  countryOfDestination: string;
  totalGrossWeight: number;
  certifyingBody: string;
  particularsOfTransportDetails: string;
  date: string;
  attachements: ProcessedFilesV2[];
  watermarkText: string;
}

export const certOfOriginTemplateCertificate: CertOfOriginTemplateCertificate = {
  $template: {
    name: "CertificateOfOrigin",
    type: v2.TemplateType.EmbeddedRenderer,
    url: "http://localhost:3000"
  },
  issuers: [
    {
      name: "My name",
      documentStore: "0xBBb55Bd1D709955241CAaCb327A765e2b6D69c8b",
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

  invoiceNumber: "INV123456789",
  invoiceCreationDate: "2023-08-01",

  importer: {
    name: "Importer 1",
    address: "Importer Address 1"
  },

  countryOfOrigin: "Country 1",
  countryOfDestination: "Country 2",

  hsCode: "HS123456",
  packageName: "Package Name",
  descOfGoods: "Description of Goods",
  noOfPackages: 100,
  identificationMarks: "Identification Marks",
  cooCertificateNumber: "CO123456789",
  certifyingBody: "Certifying Body",
  particularsOfTransportDetails: "Particulars of Transport Details",

  totalGrossWeight: 500,
  quantity: 100,

  additionalNumbers: "Additional Information",

  declarationByCouncil: "Declaration by Council",
  declarationByExporter: "Declaration by Exporter",

  councilSignature: "https://upload.wikimedia.org/wikipedia/commons/1/19/Victoria_Justice_Signature.png",
  exporterSignature: "https://upload.wikimedia.org/wikipedia/commons/1/19/Victoria_Justice_Signature.png",
  date: "2023-08-01",
  attachements: [
    {
      data: "",
      filename: "new.json",
      type: "application/json"
    }
  ],
  watermarkText: "Watermark Text"
};
