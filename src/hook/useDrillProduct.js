import { useEffect, useState } from "react";

const useDrillProduct = () => {
  const [tools, setTools] = useState([]);
  useEffect(() => {
    fetch("DrillProduct.json")
      .then((res) => res.json())
      .then((data) => setTools(data));
  }, []);

  return [tools, setTools];
};
export default useDrillProduct;
