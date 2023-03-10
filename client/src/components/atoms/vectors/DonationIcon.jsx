import * as React from "react";

const DonationIcon = (props) => (
  <svg
    width={24}
    height={25}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12 6.63c-1.04 0-2.038.4-2.774 1.112a3.732 3.732 0 0 0-1.15 2.683c0 1.006.414 1.972 1.15 2.683A3.992 3.992 0 0 0 12 14.22c1.04 0 2.038-.4 2.774-1.112a3.732 3.732 0 0 0 1.15-2.683 3.733 3.733 0 0 0-1.15-2.683A3.992 3.992 0 0 0 12 6.631Zm0 1.524c.624 0 1.223.24 1.664.665.442.426.69 1.004.69 1.606 0 .602-.248 1.18-.69 1.606a2.398 2.398 0 0 1-1.664.665c-.624 0-1.223-.24-1.664-.665a2.232 2.232 0 0 1-.69-1.606c0-.602.248-1.18.69-1.606A2.398 2.398 0 0 1 12 8.154Z"
      fill={props.color || "#52575C"}
      fillOpacity={props.color ? 1 : 0.7}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.615 18.75 0 25h24l-4.615-6.25H4.615Zm5.084 2.68H14.3a.476.476 0 0 1 .33.128.446.446 0 0 1 .138.318.434.434 0 0 1-.137.318.463.463 0 0 1-.33.129H9.698a.475.475 0 0 1-.33-.129.446.446 0 0 1-.138-.318.434.434 0 0 1 .137-.318.464.464 0 0 1 .33-.129ZM20.98 7.916a4.235 4.235 0 0 1-2.562-.497l-3.032-1.682h-3.608a.913.913 0 0 1-.932-.895v-.366c-.01-.493.395-.84.898-.885l4.143-.366-3.681-.14s-4.627 1.442-6.867 2.22a.92.92 0 0 1-1.159-.43v-.01a.871.871 0 0 1 .448-1.203L11.423.73a8.971 8.971 0 0 1 5.544-.505l6.964 1.59v5.74l-2.951.361Z"
      fill={props.color || "#52575C"}
      fillOpacity={props.color ? 1 : 0.7}
    />
  </svg>
);

export default DonationIcon;
