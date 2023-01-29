import * as React from "react";

const BookingIcon = (props) => (
  <svg
    width={20}
    height={20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 2.667h2a2 2 0 0 1 2 2V18a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4.667a2 2 0 0 1 2-2h2V0h1.333v2.667h9.334V0H16v2.667Zm-8 8H4V9.333h4v1.334Zm8-1.334h-4v1.334h4V9.333Zm-8 5.334H4v-1.334h4v1.334Zm4 0h4v-1.334h-4v1.334Z"
        fill={props.color || "#979A9D"}
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h20v20H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default BookingIcon;
