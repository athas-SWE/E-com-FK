import React from "react";

const Item = (props) => {
  return (
    <div className="item">
      <link to={"/product/${props.id}"}>
        <img onClick={window.scrollTo(0, 0)} src={props.image} alt="" />
        <img src={props.image} alt="" />
      </link>
      <p>{props.name}</p>
      <div className="item-prices">
        <div className="item-price-new">{props.new_price}</div>
        <div className="item-price-old">{props.old_price}</div>
      </div>
    </div>
  );
};

export default Item;
