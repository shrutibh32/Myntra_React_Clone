const CONVNIENCE_FEE=99;
import { useSelector } from "react-redux";
import { BagActions } from "../store/bagSlice";
export default function BagSummary() {
   const quantities = useSelector((store) => store.Quantity);
  const bagItemIds = useSelector((store) => store.Bags);
    const Items = useSelector((store) => store.items);
  
    const finalItems = Items.filter((item) => {
      const itemIndex = bagItemIds.indexOf(item.id);
      return itemIndex >= 0;
    });
    let totalItem=bagItemIds.length;
    let totalMRP=0;
    let discountamount=0;
   let finalamount=0;
  
  finalItems.forEach(bagItem=>{
    const qty = quantities[bagItem.id] || 1; // default to 1
totalMRP += bagItem.original_price * qty;
    discountamount += (bagItem.original_price - bagItem.current_price) * qty;
  

});

 finalamount=(totalMRP+CONVNIENCE_FEE)-discountamount;

  return (
    <div className="bag-summary">
      <div className="bag-details-container">
            <div className="price-header">PRICE DETAILS ({totalItem} {totalItem === 1 ? "Item" : "Items"}) </div>
            <div className="price-item">
              <span className="price-item-tag">Total MRP</span>
              <span className="price-item-value">₹ {totalItem === 0 ? 0 : totalMRP}</span>
            </div>
            {totalItem>0 && (
<>
            
            <div className="price-item">
              <span className="price-item-tag">Discount on MRP</span>
              <span className="price-item-value priceDetail-base-discount">-₹ {discountamount}</span>
            </div>
            <div className="price-item">
              <span className="price-item-tag">Convenience Fee</span>
              <span className="price-item-value">₹ 99</span>
            </div>
            </>
)}
            <hr/>
            <div className="price-footer">
              <span className="price-item-tag">Total Amount</span>
              <span className="price-item-value">₹  {totalItem === 0 ? 0 : finalamount}</span>
            </div>
          </div>
          <button className="btn-place-order" disabled={totalItem === 0}>
            <div className="css-xjhrni">PLACE ORDER</div>
          </button>
          </div>
  )
}
