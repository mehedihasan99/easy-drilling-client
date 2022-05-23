import React, { useState } from "react";
import useDrillProduct from "../../../hook/useDrillProduct";
import Tool from "../Home/Tool/Tool";
import PurchaseModal from "../PurchaseModal/PurchaseModal";

const Tools = () => {
  const [tools, setTools] = useDrillProduct();
  const [Purchase, setPurchase] = useState(null);
  const myTools = tools.slice(0, 6);
  return (
    <div>
      <h2 className="text-4xl font-bold text-center text-primary my-20">
        Our Tools
      </h2>
      <div className="grid grid-col-1  md:grid-cols-2 lg:grid-cols-3">
        {myTools.map((tool) => (
          <Tool key={tool._id} tool={tool} setPurchase={setPurchase}></Tool>
        ))}
      </div>
      {Purchase && (
        <PurchaseModal
          Purchase={Purchase}
          setPurchase={setPurchase}
        ></PurchaseModal>
      )}
    </div>
  );
};

export default Tools;
