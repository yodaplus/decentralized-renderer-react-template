import { v2 } from "@govtechsg/open-attestation";

interface ComodityInterface {
  hsCode: string;
  name: string;
  description: string;
  grossWeight: number;
  moistureContent: number;
  qty: number;
  unitPrice: number;
}
export interface InvoiceTemplateCertificate extends v2.OpenAttestationDocument {
  exporter: {
    name: string;
    address: string;
    phoneNumber: string;
    email: string;
  };
  exporterLEI: string;

  title: string;
  invoiceNumber: string;
  invoiceCreationDate: string;
  insurancePolicyNumber: string;

  importer: {
    name: string;
    address: string;
    phoneNumber: string;
    email: string;
  };

  blNumber: string;
  blDate: string;

  buyerContract: string;
  lcRefNumber: string;

  modeOfDispatch: string;
  vesselName: string;
  voyageNumber: string;
  portOfLoading: string;
  portOfDischarge: string;
  cityOfOrigin: string;
  cityOfDestination: string;
  countryOfOrigin: string;
  countryOfDestination: string;
  placeOfDelivery: string;
  finalDestination: string;

  paymentMethod: string;
  paymentTerms: string;

  incoterms: string;
  isElectronicInvoice: string;

  commodity: ComodityInterface[];

  additionalInformation: string;

  miscCharges: number;
  creditAmount: number;
  currency: string;
  paymentDueDate: string;

  signature: string;
  placeOfIssue: string;

  bankAccountNumber: string;
  bankName: string;
  swiftCode: string;
}

export const invoiceTemplateCertificate: InvoiceTemplateCertificate = {
  $template: {
    name: "COC",
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
    address: "Exporter Address 1",
    phoneNumber: "+1-555-555-5555",
    email: "exporter1@example.com"
  },
  exporterLEI: "Exporter12340",

  title: "Sample Invoice",
  invoiceNumber: "INV123456789",
  invoiceCreationDate: "2023-08-01",
  insurancePolicyNumber: "IPN987654321",

  importer: {
    name: "Importer 1",
    address: "Importer Address 1",
    phoneNumber: "+1-555-555-5556",
    email: "importer1@example.com"
  },

  blNumber: "BL123456789",
  blDate: "2023-08-01",
  buyerContract: "Contract 1",
  lcRefNumber: "LCREF123456",

  modeOfDispatch: "Sea",
  vesselName: "Vessel 1",
  voyageNumber: "V123456",
  portOfDischarge: "Port 1",
  portOfLoading: "Port 2",
  cityOfOrigin: "City 1",
  cityOfDestination: "City 2",
  countryOfOrigin: "Country 1",
  countryOfDestination: "Country 2",
  placeOfDelivery: "Delivery Point A",
  finalDestination: "Final Destination B",

  paymentMethod: "Online",
  paymentTerms: "30 Days",
  incoterms: "Incoterm 1",
  isElectronicInvoice: "Yes",

  commodity: [
    {
      hsCode: "HS123456",
      name: "Commodity 1",
      description: "Description for Commodity 1",
      grossWeight: 500,
      moistureContent: 10,
      qty: 100,
      unitPrice: 5
    },
    {
      hsCode: "HS123456",
      name: "Commodity 2",
      description: "Description for Commodity 2",
      grossWeight: 500,
      moistureContent: 10,
      qty: 100,
      unitPrice: 5
    },
    {
      hsCode: "HS123456",
      name: "Commodity 3",
      description: "Description for Commodity 3",
      grossWeight: 500,
      moistureContent: 10,
      qty: 100,
      unitPrice: 5
    }
  ],

  additionalInformation: "Additional Information",
  miscCharges: 100.56,
  creditAmount: 500.23,
  currency: "USD",
  paymentDueDate: "2023-08-31",
  bankAccountNumber: "1234567890",
  bankName: "Sample Bank",
  swiftCode: "SAMPLESWIFT",

  signature: "https://upload.wikimedia.org/wikipedia/commons/1/19/Victoria_Justice_Signature.png",
  placeOfIssue: "Sample Place"
};
