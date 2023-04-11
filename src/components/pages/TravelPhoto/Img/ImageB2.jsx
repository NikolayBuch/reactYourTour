import React from "react";
import s from "./Image.module.scss";

const ImageB2 = ({ block }) => {
  return (
    <img src={`./img/png/${block.img}`} alt="Foo travel" className={s.block2} />
  );
};

export default ImageB2;
