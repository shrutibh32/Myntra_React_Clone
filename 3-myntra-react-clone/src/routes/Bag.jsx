import React from "react";
import BagItemcontainer from "../Components/BagItemcontainer";
import BagSummary from "../Components/BagSummary";
import { useSelector } from "react-redux";
export default function Bag() {
  const bagItems = useSelector((store) => store.Bags);
  const Items = useSelector((store) => store.items);

  const finalItems = Items.filter((item) => {
    const itemIndex = bagItems.indexOf(item.id);
    return itemIndex >= 0;
  });
  return (
    <>
      <main>
        <div className="bag-page">
          <div className="bag-items-container">
            {finalItems.map((item) => (
              <BagItemcontainer item={item} key={item.id}/>
            ))}
          </div>
          <BagSummary />
        </div>
      </main>
    </>
  );
}
