import * as React from "react";

const DrugIcon = (props) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M20 8.04 7.878 20.164a2.857 2.857 0 0 1-4.041-4.04L15.959 4M7 13h8m0-10 6 6m-2 6 1.5 1.6a2.001 2.001 0 1 1-3 0L19 15Z"
      stroke={props.color || "#9B51E0"}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default DrugIcon;
