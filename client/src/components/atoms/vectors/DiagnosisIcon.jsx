import * as React from "react";

const DiagnosisIcon = (props) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M10.5 17.25h6v1.5h-6v-1.5Zm-3 0H9v1.5H7.5v-1.5Zm3-3.75h6V15h-6v-1.5Zm-3 0H9V15H7.5v-1.5Zm3-3.75h6v1.5h-6v-1.5Zm-3 0H9v1.5H7.5v-1.5Z"
      fill="#F2994A"
    />
    <path
      d="M18.75 3.75H16.5V3A1.5 1.5 0 0 0 15 1.5H9A1.5 1.5 0 0 0 7.5 3v.75H5.25a1.5 1.5 0 0 0-1.5 1.5V21a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V5.25a1.5 1.5 0 0 0-1.5-1.5ZM9 3h6v3H9V3Zm9.75 18H5.25V5.25H7.5V7.5h9V5.25h2.25V21Z"
      fill="#F2994A"
    />
  </svg>
);

export default DiagnosisIcon;
