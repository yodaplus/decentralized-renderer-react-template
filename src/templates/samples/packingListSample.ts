import { v2 } from "@govtechsg/open-attestation";

interface PackageInterface {
  hsCode: string;
  name: string;
  netWeight: sting;
  description: string;
  type: string;
  noOfPackage: number;
  grossWeight: number;
  volume: number;
  measurements: number;
}

interface Entity {
  name: string;
  address: string;
  phoneNumber: string;
  email: string;
  signature?: string|null;
}

interface ProcessedFilesV2 {
  data: string;
  filename: string;
  type: string;
}

export interface PackingListTemplateCertificate extends v2.OpenAttestationDocument {
  invoiceNumber?: string | null;
  contractRefNum?: string | null;
  issueDate: string;
  consignee: Entity;
  importer: Entity;
  carrier?: Entity | null;
  exporter: Entity;
  placeOfDelivery: string;
  standardCarrierAlphaCode?: string | null;
  volume: number;
  weight: number;
  temperature?: number | null;
  descriptionOfGoods: string;
  noOfPackages: string;
  hsCode?: string[] | null;
  packagingCode: string;
  UNDGCode?: string[] | null;
  UNDGName?: string[] | null;
  vesselName: string;
  voyageNumber: string;
  placeOfIssue:string;
  additionInfo:string;
  packages: PackageInterface[];
  attachements: ProcessedFilesV2[];

}

export const packingListTemplateCertificate: PackingListTemplateCertificate = {
  $template: {
    name: "PackingList",
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

  invoiceNumber: "REF123456",
  contractRefNum: "1122334455",
  issueDate: "2023-07-01",
  consignee: {
    name: "Consignee DEF",
    address: "789 Consignee Rd., Consigneeville, CO 11223",
    phoneNumber: "+1-555-789-0123",
    email: "consignee1@example.com"
  },
  importer: {
    name: "Importer XYZ",
    address: "456 Import Ave., Import City, IM 67890",
    phoneNumber: "+1-555-987-6543",
    email: "importerxyz@example.com"
  },
  carrier: {
    name: "Carrier GHI",
    address: "321 Carrier Ln., Carrier City, CA 44556",
    phoneNumber: "+1-555-321-0987",
    email: "carrierghi@example.com"
  },
  exporter:{
    name: "Exporter ABC",
    address: "123 Export St., Export Town, EX 12345",
    phoneNumber: "+1-555-123-4567",
    email: "exporterabc@example.com",
    signature: "https://upload.wikimedia.org/wikipedia/commons/1/19/Victoria_Justice_Signature.png",
  },
  placeOfDelivery: "nashik",
  standardCarrierAlphaCode: "fedex",
  volume: 10,
  weight: 100,
  temperature: 36,
  descriptionOfGoods: "this Goods consist of things made out of alluminium might be heavy but all are in great shape",
  noOfPackages: "3",
  hsCode: ["0", "1", "2", "3", "4"],
  packagingCode: "15048",
  UNDGCode: ["0", "1", "2", "3", "4"],
  UNDGName: ["0", "1", "2", "3", "4"],
  vesselName: "vesselless",
  placeOfIssue:"exporters address",
  additionInfo:"Additional Information on the Packing list",
  voyageNumber: "15478",
  packages: [
    {
      hsCode: "HS123456",
      name: "Commodity 1",
      netWeight: "3900",
      description: "Alluminium Table",
      type: "PALLET",
      noOfPackage: 12,
      grossWeight: 4050,
      volume: 1450,
      measurements: 18.0,
      tempUnit: "Celsius"
    },
    {
      hsCode: "HS123456",
      name: "Commodity 2",
      netWeight: "600",
      description: "Alluminium Chair ",
      type: "PALLET",
      noOfPackage: 3,
      grossWeight: 720,
      volume: 400,
      measurements: 4.9,
      tempUnit: "Celsius"
    },
    {
      hsCode: "HS123456",
      name: "Commodity 3",
      netWeight: "20",
      description: "Alluminium Desk",
      type: "PALLET",
      noOfPackage: 1,
      grossWeight: 240,
      volume: 40,
      measurements: 1.6,
      tempUnit: "Celsius"
    }
  ],
  attachements: [
    {
      data: "",
      filename: "new.json",
      type: "application/json"
    }
  ],
};
