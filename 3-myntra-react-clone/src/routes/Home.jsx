import React from "react";
import HomeItem from "../Components/HomeItem";
import { useSelector } from "react-redux";
export default function Home() {
  const items = useSelector((store) => store.items);
// console.log("Got Items",items);
  return (
    <main>
      <div className="items-container">
        {items.map((item) => (
          <HomeItem item={item} key={item.id} />
        ))}
      </div>
    </main>
  );
}
