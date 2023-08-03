import { v2 } from "@govtechsg/open-attestation";

interface PackageInterface {
  marksAndNo: string;
  description: string;
  type: string;
  noOfPackage: string;
  grossWeight: number;
  volume: number;
  temp: number;
  tempUnit: string;
}

interface Entity {
  name: string;
  address: string;
  phoneNumber: string;
  email: string;
}
export interface BLTemplateCertificate extends v2.OpenAttestationDocument {
  exporter: Entity;

  blNumber: string;
  blDateofIssue: string;
  sealNumber: string;
  productNo: string;
  buyerContract: string;
  lcRefNumber: string;

  carrierBookingRefNo: string;
  shippingRefNo: string;
  properShippingName: string;
  carrierIdentificationfNo: string;

  importer: Entity;
  consignee: Entity;
  carrier: Entity;
  notifyingParty: Entity;

  freight: string;
  shippedOnBoardDate: string;

  cargoMovTypeOriginCode: string;
  cargoMovTypeDestinationCode: string;

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
  dangerLevel: string;
  UNDGCode: string;

  packages: PackageInterface[];

  containerNo: string;
  containerType: string;
  totalNoOfConatiners: string;
  tempSettingForReferContainer: string;
  ffREfnum: string;
  transportDocType: string;

  termsAndConditionOfCarraige: string;
  disclaimer: string;
  placeOfBlIssue: string;
  signature: string;
}

export const bltemplateCertificate: BLTemplateCertificate = {
  $template: {
    name: "COC",
    type: v2.TemplateType.EmbeddedRenderer,
    url: "http://localhost:3000"
  },
  issuers: [
    {
      name: "Ocean Shipping Co.",
      tokenRegistry: "0xBBb55Bd1D709955241CAaCb327A765e2b6D69c8b",
      identityProof: {
        location: "few-green-cat.sandbox.openattestation.com",
        type: v2.IdentityProofType.DNSTxt
      }
    }
  ],

  exporter: {
    name: "Exporter ABC",
    address: "123 Export St., Export Town, EX 12345",
    phoneNumber: "+1-555-123-4567",
    email: "exporterabc@example.com"
  },

  blNumber: "BL987654321",
  blDateofIssue: "2023-08-01",
  sealNumber: "SN12345",
  productNo: "P123456789",
  buyerContract: "Contract 42",
  lcRefNumber: "LCREF654321",

  importer: {
    name: "Importer XYZ",
    address: "456 Import Ave., Import City, IM 67890",
    phoneNumber: "+1-555-987-6543",
    email: "importerxyz@example.com"
  },
  consignee: {
    name: "Consignee DEF",
    address: "789 Consignee Rd., Consigneeville, CO 11223",
    phoneNumber: "+1-555-789-0123",
    email: "consignee1@example.com"
  },
  carrier: {
    name: "Carrier GHI",
    address: "321 Carrier Ln., Carrier City, CA 44556",
    phoneNumber: "+1-555-321-0987",
    email: "carrierghi@example.com"
  },
  notifyingParty: {
    name: "Notifying Party JKL",
    address: "654 Notify St., Notify Town, NO 77889",
    phoneNumber: "+1-555-654-3210",
    email: "notifyingpartyjkl@example.com"
  },

  freight: "Prepaid",
  shippedOnBoardDate: "2023-07-15",

  cargoMovTypeOriginCode: "SEA",
  cargoMovTypeDestinationCode: "AIR",
  carrierBookingRefNo: "CBR123456",
  carrierIdentificationfNo: "CBR123456",
  shippingRefNo: "SHIPREF654321",
  properShippingName: "Electronics Equipment",

  modeOfDispatch: "Sea",
  vesselName: "Vessel Voyager",
  voyageNumber: "VS98765",
  portOfLoading: "Port of Export Town",
  portOfDischarge: "Port of Import City",
  cityOfOrigin: "Export Town",
  cityOfDestination: "Import City",
  countryOfOrigin: "Exportland",
  countryOfDestination: "Importland",
  placeOfDelivery: "Delivery Point A",
  finalDestination: "Final Destination B",

  paymentMethod: "Credit Card",
  paymentTerms: "30 Days",

  incoterms: "FOB",
  dangerLevel: "Low",
  UNDGCode: "UNDG12345",

  packages: [
    {
      marksAndNo: "Mark123",
      description: "Electronics",
      type: "Box",
      noOfPackage: "100",
      grossWeight: 2000,
      volume: 1000,
      temp: 20,
      tempUnit: "Celsius"
    }
  ],

  containerNo: "CONT1234567",
  containerType: "40ft",
  totalNoOfConatiners: "10",
  tempSettingForReferContainer: "Temperature Setting A",
  ffREfnum: "FF123456",
  transportDocType: "Sea Waybill",

  termsAndConditionOfCarraige: "Standard Terms Apply",
  disclaimer: "Standard Disclaimer",
  placeOfBlIssue: "Export Town Office",
  signature: "https://www.pngegg.com/en/png-zumpd"
};
