import React, { FunctionComponent } from "react";
import { TemplateProps } from "@govtechsg/decentralized-renderer-react-components";
import { css } from "@emotion/core";
import { CustomTemplateCertificate } from "../sample";
import { PrintWatermark } from "../../core/PrintWatermark";

const style = css`
  position: relative;
  pre {
    background-color: lightgray;
  }
`;

export const CustomTemplate: FunctionComponent<TemplateProps<CustomTemplateCertificate>> = ({ document }) => {
  return (
    <div css={style}>
      <PrintWatermark />
      <h1>{document?.foo?.title ?? "Default title"}</h1>
      <pre>{JSON.stringify(document, null, 2)}</pre>
    </div>
  );
};
