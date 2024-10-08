import { v2 } from "@govtechsg/open-attestation";

export interface PNTemplateCertificate extends v2.OpenAttestationDocument {
  referenceNo: string;
  currency: string;
  currencyCode: string;
  amountInFigures: string;
  amountInWords: string;
  payee?: string;
  tenor: string;
  countryOfDrawee?: string;
  countryOfDrawer?: string;
  drawerName: string;
  draweeName: string;
  dateOfPromissoryNote: string;
  drawerSign?: string;
  draweeSign?: string;
  dueDate: string;
  placeOfIssue: string;
  watermarkText: string;
  leiOfDrawer: string;
  leiOfDrawee: string;
  signatureName: string;
  signatureTimeStamp: string;
}

export const pNTemplateCertificate: PNTemplateCertificate = {
  $template: {
    name: "PN",
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

  referenceNo: "REF123456",
  amountInFigures: "10000",
  amountInWords: "Ten Thousand Dollars",

  payee: "John Doe",

  tenor: "30",
  countryOfDrawer: "USA - United States",
  countryOfDrawee: "UK - London",

  drawerName: "Jane Smith",
  draweeName: "XYZ Corporation",
  dateOfPromissoryNote: "2023-07-15",
  drawerSign: "https://upload.wikimedia.org/wikipedia/commons/1/19/Victoria_Justice_Signature.png",
  draweeSign: "https://upload.wikimedia.org/wikipedia/commons/1/19/Victoria_Justice_Signature.png",
  dueDate: "2023-08-31",
  placeOfIssue: "New York",
  currency: "US Dollar",
  currencyCode: "USD",
  leiOfDrawer: "1A2B3C4D5E6F7G8H9I0J",
  leiOfDrawee: "1A2B3C4D5E6F7G8H9I0J",
  watermarkText: "My watermark text",
  signatureName: "Jane Smith",
  signatureTimeStamp: "03/07/2024 07:11 PM IST"
};
