import { v2 } from "@govtechsg/open-attestation";

interface PackageInterface {
  hsCode: string;
  name: string;
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

interface ProcessedFilesV2 {
  data: string;
  filename: string;
  type: string;
}

export interface HouseBLTemplateCertificate extends v2.OpenAttestationDocument {
  exporter: Entity;

  blNumber: string;
  blDateofIssue: string;
  sealNumber: string;
  productNo: string;
  buyerContract: string;
  lcRefNumber: string;
  // exporterLEI: string;

  // carrierBookingRefNo: string;
  // shippingRefNo: string;
  // properShippingName: string;
  // carrierIdentificationfNo: string;
  standardCarrierAlphaCode: string;

  importer: Entity;
  consignee: Entity;
  // carrier: Entity;
  // notifyingParty: Entity;

  freight: string;
  freightForwarder: Entity;
  shippedOnBoardDate: string;

  // cargoMovTypeOriginCode: string;
  // cargoMovTypeDestinationCode: string;

  modeOfDispatch: string;
  vesselName: string;
  voyageNumber: string;
  portOfLoading: string;
  portOfDischarge: string;
  // cityOfOrigin?: string;
  // cityOfDestination?: string;
  // countryOfOrigin: string;
  // countryOfDestination: string;
  placeOfDelivery: string;
  finalDestination: string;

  // paymentMethod: string;
  // paymentTerms: string;

  incoterms: string;
  // dangerLevel: string;
  // UNDGCode: string;

  packages: PackageInterface;

  containerNo: string;
  containerType: string;
  totalNoOfConatiners: string;
  tempSettingForReferContainer: string;
  // ffREfnum: string;
  hblNumberFBL: string;
  // transportDocType: string;

  // termsAndConditionOfCarraige: string;
  // disclaimer: string;
  placeOfBlIssue: string;
  signature?: string;
  attachments: ProcessedFilesV2[];
}

export const bltemplateCertificate: HouseBLTemplateCertificate = {
  $template: {
    name: "HouseBillOfLading",
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
  // exporterLEI: "LEI123456",

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
  // carrier: {
  //   name: "Carrier GHI",
  //   address: "321 Carrier Ln., Carrier City, CA 44556",
  //   phoneNumber: "+1-555-321-0987",
  //   email: "carrierghi@example.com"
  // },
  // notifyingParty: {
  //   name: "Notifying Party JKL",
  //   address: "654 Notify St., Notify Town, NO 77889",
  //   phoneNumber: "+1-555-654-3210",
  //   email: "notifyingpartyjkl@example.com"
  // },

  freight: "Prepaid",
  freightForwarder: {
    name: "Freight Forwarder MNO",
    address: "987 Forwarder Ave., Forwarder City, FO 44556",
    phoneNumber: "+1-555-987-6543",
    email: "fr@gmail.com"
  },
  shippedOnBoardDate: "2023-07-15",

  // cargoMovTypeOriginCode: "SEA",
  // cargoMovTypeDestinationCode: "AIR",
  // carrierBookingRefNo: "CBR123456",
  // carrierIdentificationfNo: "CBR123456",
  // shippingRefNo: "SHIPREF654321",
  // properShippingName: "Electronics Equipment",
  standardCarrierAlphaCode: "SCAC",

  modeOfDispatch: "Sea",
  vesselName: "Vessel Voyager",
  voyageNumber: "VS98765",
  portOfLoading: "Port of Export Town",
  portOfDischarge: "Port of Import City",
  // cityOfOrigin: "Export Town",
  // cityOfDestination: "Import City",
  // countryOfOrigin: "Exportland",
  // countryOfDestination: "Importland",
  placeOfDelivery: "Delivery Point A",
  finalDestination: "Final Destination B",

  // paymentMethod: "Credit Card",
  // paymentTerms: "30 Days",

  incoterms: "FOB",
  // dangerLevel: "Low",
  // UNDGCode: "UNDG12345",

  packages: {
    hsCode: "HS123456",
    name: "Commodity 1",
    marksAndNo: "Mark123",
    description: "Electronics",
    type: "Box",
    noOfPackage: "100",
    grossWeight: 2000,
    volume: 1000,
    temp: 20,
    tempUnit: "Celsius"
  },

  containerNo: "CONT1234567",
  containerType: "40ft",
  totalNoOfConatiners: "10",
  tempSettingForReferContainer: "Temperature Setting A",
  hblNumberFBL: "HBL12345",
  // ffREfnum: "FF123456",
  // transportDocType: "Sea Waybill",
  // termsAndConditionOfCarraige: "Standard Terms Apply",
  // disclaimer: "Standard Disclaimer",
  placeOfBlIssue: "Export Town Office",
  attachments: [
    {
      data: "",
      filename: "new.json",
      type: "application/json"
    }
  ],
  signature: "https://upload.wikimedia.org/wikipedia/commons/1/19/Victoria_Justice_Signature.png"
};
