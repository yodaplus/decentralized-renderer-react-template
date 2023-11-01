import { TemplateRegistry } from "@govtechsg/decentralized-renderer-react-components";
import { templates } from "./coc";
import { certificateOfOrigintemplate } from "./certificateOfOrigin";

export const registry: TemplateRegistry<any> = {
  COC: templates,
  CertificateOfOrigin: certificateOfOrigintemplate
};
