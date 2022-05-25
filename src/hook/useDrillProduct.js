import { useEffect, useState } from "react";

const useDrillProduct = () => {
  const [tools, setTools] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/product", {
      method: "GET",
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
