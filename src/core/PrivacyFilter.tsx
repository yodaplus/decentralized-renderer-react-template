// import { Button } from "@govtechsg/tradetrust-ui-components";
import React, { FunctionComponent } from "react";
import { css } from "@emotion/core";

const customRemoveButton = css`
  transition: colors 0.2s ease-out;
  color: red;
  font-weight: 600;
  font-size: 0.75rem; /* equivalent to text-sm in Tailwind */
  display: inline-block;
  &:hover {
    color: #ffadad; /* approximate color for text-red-200 in Tailwind */
  }
  @media print {
    display: none !important;
  }
`;
interface PrivacyFilterProps {
  editable: boolean;
  onToggleEditable: () => void;
  options?: {
    className?: string;
    description?: string;
    buttonText?: string;
  };
}

export const PrivacyFilter: FunctionComponent<PrivacyFilterProps> = ({ editable, onToggleEditable, options }) => {
  const defaultOptions = {
    className: "no-print bg-cover bg-cerulean text-white rounded-lg p-4 mb-8",
    description: `Remove sensitive information on this document by clicking on the edit button. Downloaded document remains valid.`,
    buttonText: "Edit Document"
  };
  const { className, description, buttonText } = options ?? defaultOptions;

  return (
    <div className={className}>
      <div className="container">
        <div className="md:flex items-center">
          <div className="grow mb-4 md:mb-0 mr-0 md:mr-4">
            <h3 className="" style={{ fontFamily: "sans-serif" }}>
              The document allows fields to be selectively disclosed.
            </h3>
            <p style={{ fontFamily: "sans-serif" }}>{description}</p>
          </div>
          <button
            onClick={onToggleEditable}
            className="mx-2 text-cerulean hover:bg-gray-50 whitespace-nowrap"
            style={{
              fontFamily: "sans-serif",
              backgroundColor: "#007854",
              color: "white",
              padding: "7px",
              borderRadius: "8px"
            }}
          >
            {editable ? "View Doc" : buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export const IconRedact: FunctionComponent = () => {
  return <span css={customRemoveButton}>[Remove]</span>;
};
