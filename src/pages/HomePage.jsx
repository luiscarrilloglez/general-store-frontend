import ProductsByCategoryComponent from "components/ProductsByCategoryComponent";

const HomePage = () => {
  return (
    <>
      <h1>Rancho el 17</h1>

      <ProductsByCategoryComponent category="BEST_SELLERS" />
    </>
  );
};

export default HomePage;
