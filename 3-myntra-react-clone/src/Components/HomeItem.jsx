import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { BagActions } from "../store/bagSlice";
import { IoBagAdd } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
export default function HomeItem({ item }) {
  const dispatch = useDispatch();
  const bagItems = useSelector((store) => store.Bags);
  const elementFound = bagItems.indexOf(item.id) >= 0;

  let handleAddToBag = () => {
    dispatch(BagActions.addToBag(item.id));
  };
  let handleRemoveFromBag = () => {
    dispatch(BagActions.removeFromBag(item.id));
  };
  return (
    <div className="item-container">
      <img src={item.image} />
      <div className="product-rating-container">
        {item.rating.stars} ⭐ | {item.rating.count}
      </div>
      <div className="product-productMetaInfo">
        <h3 className="product-brand">{item.company}</h3>
        <h4 className="product-product">{item.item_name}</h4>

        <div className="product-price">
          <span>
            <span className="product-discountedPrice">
              {item.current_price}
            </span>
            <span className="product-strike">{item.original_price}</span>
          </span>
          <span className="product-discountPercentage">
            ({item.discount_percentage}% OFF)
          </span>
        </div>
        {elementFound ? (
          <button
            type="button"
            className="add-to-bag btn btn-danger"
            onClick={handleRemoveFromBag}
          >
            <MdDelete /> Remove
          </button>
        ) : (
          <button
            className="add-to-bag btn btn-success"
            onClick={handleAddToBag}
          >
            <IoBagAdd /> Add to Bag
          </button>
        )}
      </div>
    </div>
  );
}
