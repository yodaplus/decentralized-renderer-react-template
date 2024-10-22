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
  font-family: "Open Sans", sans-serif;
  transform: translate(-50%, -50%) rotate(-45deg); /* Rotate the watermark */
  opacity: 0.2; /* Adjust opacity for watermark visibility */
  font-size: 60pt; /* Adjust size for text watermark */
  color: #000; /* Adjust color for text watermark */
  z-index: 9999; /* Ensure watermark is behind content */
  white-space: nowrap; /* Prevent text from wrapping */
  @media print {
    display: block !important; /* Show watermark only when printing */
  }

  &.show-watermark {
    display: block; /* Show watermark when the class is applied */
  }
`;
