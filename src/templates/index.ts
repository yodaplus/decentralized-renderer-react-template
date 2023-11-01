import { TemplateRegistry } from "@govtechsg/decentralized-renderer-react-components";
import { templates } from "./coc";
import { invoiceTemplate } from "./invoice";

export const registry: TemplateRegistry<any> = {
  COC: templates,
  Invoice: invoiceTemplate
};
