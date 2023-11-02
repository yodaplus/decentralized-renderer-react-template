import { v2 } from "@govtechsg/open-attestation";

export interface BillOfExchangeTemplateCertificate extends v2.OpenAttestationDocument {
  referenceNo: string;
  currency: string;
  currencyCode: string;
  amountInFigures: string;
  amountInWords: string;
  blDate: string;
  invoiceDate: string;
  payee: string;
  tenorConditions: string;
  tenor: string;
  lcRef: string;
  lcDate: string;
  drawerName: string;
  draweeName: string;
  dateOfBoe: string;
  drawerSign: string;
  draweeSign: string;
  dueDate: string;
  placeOfIssue: string;
}

export const billOfExchangeTemplateCertificate: BillOfExchangeTemplateCertificate = {
  $template: {
    name: "BillOfExchange",
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
  blDate: "2023-08-01",
  invoiceDate: "2023-08-01",
  payee: "John Doe",
  tenorConditions: "from BL date",
  tenor: "30",
  lcRef: "LC987654",
  lcDate: "2023-07-01",
  drawerName: "Jane Smith",
  draweeName: "XYZ Corporation",
  dateOfBoe: "2023-07-15",
  drawerSign: "https://upload.wikimedia.org/wikipedia/commons/1/19/Victoria_Justice_Signature.png",
  draweeSign: "https://upload.wikimedia.org/wikipedia/commons/1/19/Victoria_Justice_Signature.png",
  dueDate: "2023-08-31",
  placeOfIssue: "New York",
  currency: "US Dollar",
  currencyCode: "USD"
};
