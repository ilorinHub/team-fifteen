import * as React from "react";

const DoctorIcon = (props) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M21.402 22.932c-.096-.92-.12-1.845-.21-2.767-.138-1.38-.334-2.753-.742-4.085-.221-.713-.557-1.332-1.227-1.725-.64-.377-1.339-.6-2.04-.819-.245-.077-.201.096-.187.22.065.603.01 1.198-.115 1.787-.041.19.024.276.187.37.691.386 1.085.976 1.128 1.775.043.823-.125 1.632-.175 2.448-.034.555-.094 1.111-.327 1.627-.28.624-.765.871-1.428.744-.252-.048-.417-.163-.376-.441.04-.274.23-.37.482-.32.317.063.502-.086.631-.345.089-.18.137-.377.156-.576.094-.92.195-1.838.269-2.76.067-.833-.38-1.464-1.118-1.632-.764-.173-1.421.173-1.736.95-.252.622-.458 1.263-.698 1.892a6.407 6.407 0 0 0-.326 1.084c-.094.483.002.66.448.862.214.096.317.247.243.475-.075.23-.243.295-.473.252-.658-.125-1.04-.593-1.027-1.267.005-.276.045-.543.122-.806.283-.98.655-1.928 1.035-2.873.34-.85 1.02-1.318 1.944-1.383.18-.014.256-.064.29-.24a6.25 6.25 0 0 0 .077-1.756c-.024-.279-.132-.43-.423-.476a3.053 3.053 0 0 1-.69-.206c-.222-.089-.318-.063-.394.187-.272.907-.65 1.774-1.09 2.614-.211.405-.456.794-.727 1.264-.108-.595-.19-1.101-.295-1.605a.973.973 0 0 1 .055-.643c.055-.123.201-.267.055-.399-.233-.21-.487-.396-.734-.59-.008-.007-.041.01-.056.021-.24.207-.513.385-.7.63-.113.146.105.338.153.515.01.041.031.084.027.123-.101.619-.207 1.236-.32 1.913-.079-.094-.115-.13-.139-.17a15.999 15.999 0 0 1-1.54-3.236c-.08-.233-.073-.593-.272-.667-.187-.07-.468.115-.708.182-.125.036-.235.07-.283.216-.091.283-.22.552-.288.835-.442 1.844-.331 3.668.238 5.47.086.274.19.422.501.482.603.12.927.78.72 1.352-.216.602-.866.885-1.433.626-.57-.26-.816-.962-.484-1.486.12-.19.105-.336.04-.523a11.02 11.02 0 0 1-.492-5.373c.065-.423.207-.826.303-1.273-.838.245-1.642.45-2.367.872-.532.31-.945.715-1.178 1.305-.278.708-.446 1.443-.588 2.187-.326 1.728-.427 3.482-.56 5.232-.035.477.178.773.558.996H20.83c.451-.214.624-.555.571-1.066ZM7.992 8.172c.162.043.24.123.302.271.367.879.82 1.704 1.495 2.39.533.546 1.15.954 1.932 1.033.984.1 1.752-.339 2.417-1.003.676-.68 1.147-1.496 1.514-2.379.05-.12.067-.271.25-.288.655-.062 1.166-1.1 1.058-1.73-.031-.18-.098-.346-.295-.358-.245-.017-.2-.146-.163-.297a8.99 8.99 0 0 0 .21-1.572 4.445 4.445 0 0 0-.124-1.268c-.146-.58-.446-1.08-.991-1.358-.322-.166-.569-.348-.677-.706-.04-.139-.178-.23-.29-.324-.418-.345-.912-.496-1.426-.547-1.538-.151-2.974.178-4.243 1.073-.876.614-1.479 1.426-1.601 2.53a7.2 7.2 0 0 0 .096 2.164c.029.154.091.315-.18.31-.122-.002-.202.1-.242.22-.226.644.295 1.664.957 1.84Z"
      fill={props.color || "#52575C"}
      fillOpacity={props.color ? 1 : 0.7}
    />
  </svg>
);

export default DoctorIcon;
