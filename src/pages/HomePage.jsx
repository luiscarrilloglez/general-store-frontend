import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useHistory } from "react-router-dom";

import { useIsAdmin } from "hooks/useQuery";
import { categories } from "constants.js";

//import styles from "pages/styles.module.css";

const HomePage = () => {
  const history = useHistory();
  const isAdmin = useIsAdmin();

  const categoryKeys = Object.keys(categories);

  const pictureCollection = (category) => {
    return (
      <div className="d-flex">
        <img
          src={category.coverImageUrl}
          className="w-100"
          alt={category.label}
          onClick={() =>
            history.push({
              pathname: `/${isAdmin ? "admin/" : ""}collections`,
              search: `?category=${category.key}`,
            })
          }
        />
      </div>
    );
  };

  return (
    <>
      <Row xs={2} md={4} className="pb-3">
        {categoryKeys.map((category) => {
          return (
            <Col className="p-0 m-0">
              {pictureCollection(categories[category])}
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default HomePage;
