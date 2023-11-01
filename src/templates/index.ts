import { TemplateRegistry } from "@govtechsg/decentralized-renderer-react-components";
import { templates } from "./coc";
import { billOfLadingTemplate } from "./billOfLading";
import { invoiceTemplate } from "./invoice";

export const registry: TemplateRegistry<any> = {
  COC: templates,
  BillOfLading: billOfLadingTemplate,
  Invoice: invoiceTemplate
};
