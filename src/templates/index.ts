import { TemplateRegistry } from "@govtechsg/decentralized-renderer-react-components";
import { templates } from "./coc";
import { billOfLadingTemplate } from "./billOfLading";
import { invoiceTemplate } from "./invoice";
import { certificateOfOrigintemplate } from "./certificateOfOrigin";
import { BillOfExchangeTemplates } from "./billOfExchange";
import { insuranceCertificateTemplate } from "./insuranceCertificate";

export const registry: TemplateRegistry<any> = {
  COC: templates,
  BillOfLading: billOfLadingTemplate,
  Invoice: invoiceTemplate,
  CertificateOfOrigin: certificateOfOrigintemplate,
  BillOfExchange: BillOfExchangeTemplates,
  InsuranceCertificate: insuranceCertificateTemplate
};
