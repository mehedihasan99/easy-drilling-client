import React from "react";
import useDrillProduct from "../../../hook/useDrillProduct";
import Tool from "../Home/Tool/Tool";

const Tools = () => {
  const [tools, setTools] = useDrillProduct();
  const myTools = tools.slice(0, 6);
  return (
    <div>
      <h2 className="text-4xl font-bold text-center text-primary my-20">
        Our Tools
      </h2>
      <div className="grid grid-cols-3">
        {myTools.map((tool) => (
          <Tool key={tool._id} tool={tool}></Tool>
        ))}
      </div>
    </div>
  );
};

export default Tools;
