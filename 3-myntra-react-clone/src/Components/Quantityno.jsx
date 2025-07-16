import React from 'react'

export default function Quantityno({selectedQty,setSelectedQty}) {
  const quantities = Array.from({ length: 10 }, (_, i) => i + 1);

  const handleSelect = (qty) => {
    setSelectedQty(qty);
  };

  

  return (
  <div className="dialogs-base-qtyList">
      {quantities.map((qty) => (
        <div
          key={qty}
          id={qty}
          className={`dialogs-base-item ${selectedQty === qty ? 'dialogs-base-selected' : ''}`}
          onClick={() => handleSelect(qty)}
          style={{ cursor: 'pointer' }}
        >
          <div className="dialogs-base-display">{qty}</div>
        </div>
      ))}
    </div>
  )
}
