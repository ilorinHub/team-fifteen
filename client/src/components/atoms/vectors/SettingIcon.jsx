import * as React from "react";

const SettingIcon = (props) => (
  <svg
    width={20}
    height={22}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m7.264 21.344-.398-3.359a3.687 3.687 0 0 1-.61-.314 8.142 8.142 0 0 1-.56-.394l-2.96 1.312L0 13.604l2.562-2.046a2.643 2.643 0 0 1-.025-.355v-.708c0-.114.009-.232.025-.354L0 8.094 2.736 3.11l2.96 1.311c.183-.14.374-.27.573-.393a4.91 4.91 0 0 1 .597-.315L7.264.355h5.472l.398 3.358c.216.087.42.192.61.315.19.122.377.253.56.393l2.96-1.311L20 8.094l-2.562 2.047c.016.122.025.24.025.354v.708c0 .114-.017.232-.05.354l2.562 2.047-2.736 4.985-2.936-1.312a6.76 6.76 0 0 1-.572.394 4.923 4.923 0 0 1-.597.314l-.398 3.359H7.264Zm2.786-6.822c.962 0 1.782-.358 2.462-1.075.68-.718 1.02-1.583 1.02-2.598 0-1.014-.34-1.88-1.02-2.597-.68-.717-1.5-1.076-2.462-1.076-.979 0-1.804.359-2.476 1.076-.671.717-1.007 1.583-1.007 2.597 0 1.015.336 1.88 1.007 2.598.672.717 1.497 1.075 2.476 1.075Z"
      fill={props.color || "#979A9D"}
    />
  </svg>
);

export default SettingIcon;
