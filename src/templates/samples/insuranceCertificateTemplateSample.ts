import { v2 } from "@govtechsg/open-attestation";

interface ProcessedFilesV2 {
  data: string;
  filename: string;
  type: string;
}
export interface InsuranceCetificateTemplate extends v2.OpenAttestationDocument {
  insuranceCompanyName: string;
  insuranceCompanyAddress: string;
  insuredPartyName: string;
  insuredPartyPhoneNumber: string;
  blNumber: string;
  invoiceNumber: string;
  additionalNumbers: string;
  insurancePolicyNumber: string;
  periodOfIsuranceFromDate: string;
  periodOfIsuranceToDate: string;
  issueDate: string;
  estimatedDateTimeDeparture: string;
  agentDetails: string;
  incoterms: string;
  placeOfDelivery: string;
  portOfLoading: string;
  originalLoadingLocation: string;
  paymentLocation: string;
  placeOfIssue: string;
  placeOfDepature: string; // City of Origin
  currency: string;
  currencyCode: string;
  insuranceClaimAdjuster: string;
  insuredPremiumAmt?: string;
  taxAmt?: string;
  insuredValueAmt: string;
  insuredPremiumAmtInWords?: string;
  hsCode: string;
  name: string;
  description: string;
  noOfPackages: string;
  vesselName: string;
  voyageNumber: string;
  vesselNumber: string;
  policyCover: string;
  scopeCover: string;
  remarks: string;
  excess: string;
  signature?: string;
  premiumSchedule: string;

  attachements: ProcessedFilesV2[];
}

export const insuranceCertificateTemplate: InsuranceCetificateTemplate = {
  $template: {
    name: "InsuranceCertificate",
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

  insuranceCompanyName: "SecureShip Insurance Co.",
  insuranceCompanyAddress: "128 Mariners Blvd, Safe Harbor, SH 90210",
  insuredPartyName: "Globex Importers Inc.",
  insuredPartyPhoneNumber: "+1 555-2368",

  blNumber: "BL20231128",
  invoiceNumber: "INV12345678",
  additionalNumbers: "LC987654",
  insurancePolicyNumber: "POLICY2023XYZ",

  issueDate: "2023-11-28",
  estimatedDateTimeDeparture: "2023-12-05T10:00:00Z",

  agentDetails: "XYZ Logistics",
  incoterms: "FOB",

  placeOfDelivery: "1234 Destination Port Avenue",
  portOfLoading: "5678 Origin Port Road",
  originalLoadingLocation: "Warehouse #9, Industrial Area",
  paymentLocation: "Branch #3, Finance City",
  placeOfIssue: "Insurance Office, Main Branch",
  placeOfDepature: "Capital City Port",
  currencyCode: "USD",
  currency: "US Dollar",
  insuranceClaimAdjuster: "John Doe",
  insuredPremiumAmt: "5000",
  insuredPremiumAmtInWords: "Five Thousand",
  taxAmt: "750",
  insuredValueAmt: "10000",

  hsCode: "8501.10.00",
  name: "Electric Generators",
  description: "Industrial-grade electric generators",
  noOfPackages: "40",
  vesselName: "Vessel Voyager",
  voyageNumber: "VOY1234X",
  vesselNumber: "VESSEL9988",

  policyCover:
    "All Risk Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec",
  scopeCover:
    "Door to Door Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet ",

  periodOfIsuranceFromDate: "2023-12-01",
  periodOfIsuranceToDate: "2024-12-01",
  remarks: "Handle with care - fragile items.",
  excess: "100",

  premiumSchedule:
    "Annual Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est.",

  signature: "https://upload.wikimedia.org/wikipedia/commons/1/19/Victoria_Justice_Signature.png",

  attachements: [
    {
      data: "",
      filename: "new.json",
      type: "application/json"
    }
  ]
};
