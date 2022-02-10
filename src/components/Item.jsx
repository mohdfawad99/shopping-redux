import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
  faCircle,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";

const Item = ({ item, toggleComplete, incrementQty, decrementQty }) => {
  return (
    <div className="item-container">
      <div className="item-name" onClick={toggleComplete}>
        {/* HINT: replace false with a boolean indicating the item has been completed or not */}
        <>
          <FontAwesomeIcon icon={item.isCompleted ? faCheckCircle : faCircle} />
          <span className={item.isCompleted ? "completed" : null}>
            {item.itemName}
          </span>
        </>
      </div>
      <div className="quantity">
        <button onClick={decrementQty}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <span> {item.quantity} </span>
        <button onClick={incrementQty}>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </div>
  );
};

export default Item;
