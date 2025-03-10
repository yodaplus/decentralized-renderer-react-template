import { v2 } from "@govtechsg/open-attestation";

interface ComodityInterface {
  productIdentifier: string;
  description: string;
  qty: number;
  unitPrice: number;
}

interface ProcessedFilesV2 {
  data: string;
  filename: string;
  type: string;
}

export interface PurchaseOrderCertificate extends v2.OpenAttestationDocument {
  exporter: {
    name: string;
    address: string;
    phoneNumber: string;
    email: string;
  };

  purchaseOrderNumber: string;
  deliveryDate: string;

  purchaseOrderDate: string;
  paymentMethod: string;
  paymentTerms: string;

  importer: {
    name: string;
    address: string;
    phoneNumber: string;
    email: string;
  };
  deliveryParty: {
    name: string;
    address: string;
    phoneNumber: string;
    email: string;
  };

  contractNumber: string;
  countryOfOrigin: string;
  placeOfDelivery: string;

  watermarkText: string;

  commodity: ComodityInterface[];

  miscCharges: number;
  taxAmount: number;
  currency: string;
  purchaseOrderTerms: string;

  signature?: string;
  attachements: ProcessedFilesV2[];
}

export const purchaseOrderCertificate: PurchaseOrderCertificate = {
  $template: {
    name: "Purchase Order",
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
    name: "Exporter name",
    address: "Exporter Address 1",
    phoneNumber: "+1-555-555-5555",
    email: "exporter1@example.com"
  },
  deliveryParty: {
    name: "Delivery Party",
    address: "Delivery Party Address 1",
    phoneNumber: "+1-555-555-5555",
    email: "deliveryparty@mail.com"
  },

  purchaseOrderNumber: "INV123456789",
  purchaseOrderDate: "2023-08-01",

  importer: {
    name: "Importer 1",
    address: "Importer Address 1",
    phoneNumber: "+1-555-555-5556",
    email: "importer1@example.com"
  },

  contractNumber: "BL123456789",
  deliveryDate: "2023-08-01",

  countryOfOrigin: "Country 1",
  placeOfDelivery: "Delivery Point A",
  paymentMethod: "Online",
  paymentTerms: "30 Days",

  watermarkText: "WATERMARK",

  commodity: [
    {
      productIdentifier: "Commodity 1",
      description: "Description for Commodity 1",
      qty: 100,
      unitPrice: 5
    },
    {
      productIdentifier: "Commodity 2",
      description: "Description for Commodity 2",
      qty: 100,
      unitPrice: 5
    },
    {
      productIdentifier: "Commodity 3",
      description: "Description for Commodity 3",
      qty: 100,
      unitPrice: 5
    }
  ],

  miscCharges: 100.56,
  taxAmount: 500.23,
  currency: "USD",
  purchaseOrderTerms:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae voluptas quod, officia quae doloribus molestias eum impedit sapiente facilis labore soluta nulla facere necessitatibus ut fugiat magni magnam obcaecati debitis! Consequatur quas ipsum tempore harum commodi! Recusandae eum, ab nesciunt quibusdam libero eaque, id rem in ex, tempora excepturi sunt labore! Similique quam, placeat unde voluptate labore",

  signature: "https://upload.wikimedia.org/wikipedia/commons/1/19/Victoria_Justice_Signature.png",
  attachements: [
    {
      data: "",
      filename: "new.json",
      type: "application/json"
    }
  ]
};
