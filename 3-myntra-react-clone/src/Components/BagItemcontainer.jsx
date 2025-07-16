import React from "react";
import Quantityno from "./Quantityno";
import { useState} from "react";
import { useSelector ,useDispatch} from "react-redux";
import { QuantityActions } from "../store/quantitySlice";
import { BagActions } from "../store/bagSlice";
import { RiDeleteBinFill } from "react-icons/ri";
export default function BagItemcontainer({ item }) {
  const dispatch = useDispatch();


    const quantityFromStore = useSelector((store) => store.Quantity[item.id] || 1);
      useSelector((store) => store.Bags);
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {
    setShowModal((prev) => !prev);
  };

  const closeModal = () => {
    setShowModal(false);
  
  };
  const handleQuantityChange = (qty) => {
    dispatch(QuantityActions.UpdateQunatity({ itemId: item.id, quantity: qty }));
  };
    let handleRemoveFromBag = () => {
      dispatch(BagActions.removeFromBag(item.id));
    };

  return (
    <div className="bag-item-container">
      <div className="item-left-part">
        <img className="bag-item-img" src={item.image} />
      </div>
      <div className="item-right-part">
        <div className="company">{item.company}</div>
        <div className="item-name">{item.item_name}</div>
        <div className="price-container">
          <span className="current-price">{item.current_price*quantityFromStore}</span>
          <span className="product-strike">{item.original_price*quantityFromStore}</span>
          <span className="product-discountPercentage">
            ({item.discount_percentage}% OFF)
          </span>
        </div>
        <div className="itemContainer-base-sizeAndQty">
          <div
            className="itemComponents-base-quantity"
            onClick={toggleModal}
            style={{ cursor: "pointer" }}
          >
            <span className="">Qty: {quantityFromStore}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="6"
              height="3"
              viewBox="0 0 6 3"
              className="itemComponents-base-dropDown"
            >
              <path fillRule="evenodd" d="M0 0h6L3 3z"></path>
            </svg>
          </div>
        </div>
        {showModal && (
                  <div id="" role="dialog" className="modal-base-container" >
          
            <div className="modal-base-modal dialogs-base-quantityContainer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                data-testid="modal-close"
                className="modal-base-cancelIcon dialogs-base-cancelIcon"
                  onClick={closeModal}
                style={{ cursor: "pointer" }}
              >
                <path
                  fill="#000"
                  fillRule="evenodd"
                  d="M9.031 8l6.756-6.756a.731.731 0 0 0 0-1.031.732.732 0 0 0-1.031 0L8 6.969 1.244.213a.732.732 0 0 0-1.031 0 .731.731 0 0 0 0 1.03L6.969 8 .213 14.756a.731.731 0 0 0 0 1.031.732.732 0 0 0 1.031 0L8 9.031l6.756 6.756a.732.732 0 0 0 1.031 0 .731.731 0 0 0 0-1.03L9.031 8z"
                ></path>
              </svg>
              <div className="dialogs-base-header">Select Quantity</div>
              <Quantityno
                selectedQty={quantityFromStore}
                setSelectedQty={handleQuantityChange}
              />


              <button
                width="100%"
                letterSpacing="1px"
                fontWeight="bold"
                role="button"
                className="css-cilza6"
                 onClick={closeModal}
              >
                <div className="css-xjhrni">DONE</div>
              </button>
            </div>
        
        </div>

        )}

        <div className="return-period">
          <span className="return-period-days">{item.return_period} days</span>{" "}
          return available
        </div>
        <div className="delivery-details">
          Delivery by
          <span className="delivery-details-days">{item.delivery_date}</span>
        </div>
      </div>

      <div
        className="remove-from-cart"
        onClick={handleRemoveFromBag}
      >
        <RiDeleteBinFill />
      </div>
    </div>
  );
}
