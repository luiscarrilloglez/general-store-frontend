import CollectionComponent from "components/CollectionComponent";
import LoadingComponent from "components/LoadingComponent";
import { useCategory, useIsAdmin } from "hooks/useQuery";
import { useProducts } from "hooks/useProducts";

import styles from "pages/styles.module.css";

const CollectionPage = () => {
  const isAdmin = useIsAdmin();
  const category = useCategory();
  const { products, loadingProducts } = useProducts(category?.key);

  if (!category) return null;

  return (
    <>
      <div className={styles.HeaderSection}>
        <h1>{category?.label?.toUpperCase()}</h1>
      </div>
      {loadingProducts ? (
        <LoadingComponent />
      ) : (
        <div className={styles.Margins}>
          <CollectionComponent
            products={products}
            isAdmin={isAdmin}
            category={category}
          />
        </div>
      )}
    </>
  );
};

export default CollectionPage;
