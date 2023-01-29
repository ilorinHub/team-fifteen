import * as React from "react";

const MessageIcon = (props) => (
  <svg
    width={16}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M11.333 13.667H4.667c-2 0-3.334-1-3.334-3.334V5.667c0-2.334 1.334-3.334 3.334-3.334h6.666c2 0 3.334 1 3.334 3.334v4.666c0 2.334-1.334 3.334-3.334 3.334Z"
      stroke={props.color || "#336CFB"}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M11.333 6 9.247 7.667c-.687.546-1.814.546-2.5 0L4.667 6"
      stroke={props.color || "#336CFB"}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default MessageIcon;
