import { TemplateRegistry } from "@govtechsg/decentralized-renderer-react-components";
import { templates } from "./coc";
import { billOfLadingTemplate } from "./billOfLading";
import { invoiceTemplate } from "./invoice";
import { certificateOfOrigintemplate } from "./certificateOfOrigin";
import { BillOfExchangeTemplates } from "./billOfExchange";
import { insuranceCertificateTemplate } from "./insuranceCertificate";
import { packingListTemplate } from "./packingList";
import { houseBillOfLadingTemplate } from "./houseBillOfLading";
import { promissoryNoteTemplate } from "./promissoryNote";
import { airwayBillTemplate } from "./airwayBillTemplate";
import { tradeSupportingDocumentsTemplate } from "./tradeSupportingDocuments";
import { invoiceAttachmentTemplate } from "./invoiceAttachment";
import { proofOfPaymentTemplate } from "./proofOfPayment/";
import { bLTemplate } from "./bl";
import { pNTemplate } from "./pN";

export const registry: TemplateRegistry<any> = {
  COC: templates,
  BillOfLading: billOfLadingTemplate,
  Invoice: invoiceTemplate,
  CertificateOfOrigin: certificateOfOrigintemplate,
  BillOfExchange: BillOfExchangeTemplates,
  InsuranceCertificate: insuranceCertificateTemplate,
  InvoiceAttachment: invoiceAttachmentTemplate,
  ProofOfPayment: proofOfPaymentTemplate,
  PackingList: packingListTemplate,
  HouseBillOfLading: houseBillOfLadingTemplate,
  PromissoryNote: promissoryNoteTemplate,
  AirwayBill: airwayBillTemplate,
  TradeSupportingDocuments: tradeSupportingDocumentsTemplate,
  BL: bLTemplate,
  PN: pNTemplate
};
