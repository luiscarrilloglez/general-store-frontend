import styles from "pages/styles.module.css";

const NotFoundPage = () => {
  return (
    <div className={styles.Margins}>
      <div
        className="text-center"
        style={{ paddingTop: "100px", paddingBottom: "100px" }}
      >
        <h2>404</h2>
        <h3>Oops! That Page Can’t Be Found.</h3>
      </div>
    </div>
  );
};

export default NotFoundPage;
