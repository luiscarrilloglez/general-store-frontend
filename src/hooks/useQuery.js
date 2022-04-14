import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { categories } from "constants.js";

export const useQuery = () => {
  const { search } = useLocation();
  const [queryParams, setQueryParams] = useState(new URLSearchParams(search));

  useEffect(() => {
    setQueryParams(new URLSearchParams(search));
  }, [search]);

  return queryParams;
};

export const useCategory = () => {
  const queryParams = useQuery();

  const categoryParam = queryParams.get("category");

  const category = categoryParam && categories[categoryParam];

  return category;
};

export const useIsAdmin = () => {
  const location = useLocation();

  return location.pathname.includes("/admin");
};
