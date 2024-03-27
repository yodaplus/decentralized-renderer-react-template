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

export const registry: TemplateRegistry<any> = {
  COC: templates,
  BillOfLading: billOfLadingTemplate,
  Invoice: invoiceTemplate,
  CertificateOfOrigin: certificateOfOrigintemplate,
  BillOfExchange: BillOfExchangeTemplates,
  InsuranceCertificate: insuranceCertificateTemplate,
  PackingList: packingListTemplate,
  HouseBillOfLading: houseBillOfLadingTemplate,
  PromissoryNote: promissoryNoteTemplate,
  AirwayBill: airwayBillTemplate
};
