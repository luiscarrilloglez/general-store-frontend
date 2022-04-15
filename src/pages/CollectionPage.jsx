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

  const renderCover = () => {
    return (
      <div
        className={styles.Cover}
        style={{
          backgroundImage: `url(${category?.coverImageUrl})`,
          backgroundSize: "cover",
        }}
      >
        <h1>{category?.label}</h1>
      </div>
    );
  };

  return (
    <>
      {renderCover()}

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
