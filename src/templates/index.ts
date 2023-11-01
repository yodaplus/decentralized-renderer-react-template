import { TemplateRegistry } from "@govtechsg/decentralized-renderer-react-components";
import { templates } from "./coc";
import { billOfLadingTemplate } from "./billOfLading";

export const registry: TemplateRegistry<any> = {
  COC: templates,
  BillOfLading: billOfLadingTemplate
};
