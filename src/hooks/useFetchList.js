import { useEffect, useState } from "react";
import ApiProducts from "services/products";

export const useFetchList = ({ product_type }) => {
  const [errorState, setErrorState] = useState({
    hasError: false,
    message: "",
  });
  const [isLoading, setLoading] = useState(false);
  const [entities, setEntities] = useState([]);

  useEffect(() => {
    setLoading(true);
    ApiProducts.getProducts_type({ product_type })
      .then((data) => {
        const apiData = data;
        setEntities(apiData);
        setLoading(false);
      })
      .catch((err) => setErrorState({ hasError: true, message: err.message }));
  }, [product_type]);

  return { entities, isLoading, errorState };
};
