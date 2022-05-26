import { useEffect, useState } from "react";

const useDrillProduct = () => {
  const [tools, setTools] = useState([]);
  useEffect(() => {
    fetch("https://gentle-river-04841.herokuapp.com/product", {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setTools(data));
  }, []);

  return [tools, setTools];
};
export default useDrillProduct;
