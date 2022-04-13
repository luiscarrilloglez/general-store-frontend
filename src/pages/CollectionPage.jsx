import CollectionComponent from "components/CollectionComponent";
import LoadingComponent from "components/LoadingComponent";
import { useCategory, useIsAdmin } from "hooks/useQuery";
import { useProducts } from "hooks/useProducts";

import styles from "pages/styles.module.css";

const CollectionPage = () => {
  const isAdmin = useIsAdmin();
  const category = useCategory();
  const { products, loadingProducts } = useProducts(category.key);

  if (loadingProducts) {
    return <LoadingComponent />;
  }

  return (
    <>
      <div className={styles.HeaderSection}>
        <h1>{category?.label?.toUpperCase()}</h1>
      </div>
      <div className={styles.Collection}>
        <CollectionComponent products={products} isAdmin={isAdmin} />
      </div>
    </>
  );
};

export default CollectionPage;
