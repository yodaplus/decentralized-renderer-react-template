import { css } from "@emotion/core";

export const containerStyle = css`
  padding: 10pt;
  margin: auto;
  width: 90%;
  font-family: "Open Sans", sans-serif;
  position: relative;
`;

export const watermarkStyle = css`
  display: none; /* Hide watermark by default */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(-45deg); /* Rotate the watermark */
  opacity: 0.1; /* Adjust opacity for watermark visibility */
  font-size: 80pt; /* Adjust size for text watermark */
  color: #000; /* Adjust color for text watermark */
  z-index: -1; /* Ensure watermark is behind content */
  white-space: nowrap; /* Prevent text from wrapping */
  @media print {
    display: block !important; /* Show watermark only when printing */
  }
`;