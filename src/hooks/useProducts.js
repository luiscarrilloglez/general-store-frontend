import { useEffect, useState, useCallback } from "react";
import { getProducts } from "api/productsApi";

export const useProducts = (category) => {
  const [products, setProducts] = useState([]);
  const [loadingProducts, setLoadingProducts] = useState(false);

  const loadProducts = useCallback(async () => {
    setLoadingProducts(true);
    const data = await getProducts(category);
    setProducts(data);
    setLoadingProducts(false);
  }, [category]);

  useEffect(() => {
    loadProducts();
  }, [loadProducts]);

  return { products, loadingProducts };
};
