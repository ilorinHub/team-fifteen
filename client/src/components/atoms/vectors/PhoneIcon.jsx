import * as React from "react";

const PhoneIcon = (props) => (
  <svg
    width={16}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M14.647 12.22c0 .24-.054.487-.167.727a2.75 2.75 0 0 1-.453.68c-.327.36-.687.62-1.094.786a3.35 3.35 0 0 1-1.3.254c-.68 0-1.406-.16-2.173-.487a11.703 11.703 0 0 1-2.293-1.32 19.173 19.173 0 0 1-2.187-1.867 18.948 18.948 0 0 1-1.86-2.18c-.547-.76-.987-1.52-1.307-2.273-.32-.76-.48-1.487-.48-2.18 0-.453.08-.887.24-1.287.16-.406.414-.78.767-1.113.427-.42.893-.627 1.387-.627.186 0 .373.04.54.12.173.08.326.2.446.374l1.547 2.18c.12.166.207.32.267.466.06.14.093.28.093.407 0 .16-.047.32-.14.473a2.268 2.268 0 0 1-.373.474l-.507.526a.357.357 0 0 0-.107.267c0 .053.007.1.02.153.02.054.04.094.054.134.12.22.326.506.62.853.3.347.62.7.966 1.053.36.354.707.68 1.06.98.347.294.634.494.86.614.034.013.074.033.12.053a.46.46 0 0 0 .167.027c.113 0 .2-.04.273-.114l.507-.5c.167-.166.327-.293.48-.373a.888.888 0 0 1 .473-.14c.127 0 .26.027.407.087.147.06.3.146.467.26l2.206 1.566c.174.12.294.26.367.427.067.167.107.333.107.52Z"
      stroke={props.color || "#336CFB"}
      strokeMiterlimit={10}
    />
  </svg>
);

export default PhoneIcon;