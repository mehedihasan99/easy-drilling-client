import React, { useState } from "react";
import useDrillProduct from "../../hook/useDrillProduct";
import PurchaseModal from "./PurchaseModal";
import PurchaseTool from "./PurchaseTool";

const PurchaseTools = () => {
  const [tools, setTools] = useDrillProduct();
  const [Purchase, setPurchase] = useState(null);
  return (
    <div>
      <h2 className="text-4xl font-bold text-center text-primary my-20">
        Purchase Your Product
      </h2>
      <div className="grid grid-col-1  md:grid-cols-2 lg:grid-cols-3">
        {tools.map((tool) => (
          <PurchaseTool
            key={tool._id}
            tool={tool}
            setPurchase={setPurchase}
          ></PurchaseTool>
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

export default PurchaseTools;
