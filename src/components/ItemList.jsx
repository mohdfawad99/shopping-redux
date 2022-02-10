import React from "react";
import { useDispatch } from "react-redux";
import { decrementQty, incrementQty, toggleComplete } from "../store/actions";
import Item from "./Item";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  return (
    <div className="item-list">
      {items.map((item, index) => (
        <Item
          key={index}
          item={item}
          toggleComplete={() => dispatch(toggleComplete(index))}
          incrementQty={() => dispatch(incrementQty(index))}
          decrementQty={() => dispatch(decrementQty(index))}
        />
      ))}
    </div>
  );
};

export default ItemList;
