import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { EntityService } from "../../services/entityService";

import styles from "./style.module.css";

export const Home = () => {
  const [entities, setEntities] = useState([]);

  useEffect(() => {
    getEntities();
  }, []);

  const getEntities = async () => {
    const response = await EntityService.getEntities();

    setEntities(response.data);
  };
  return (
    <div>
      <h1 className={styles.title}>List of entities</h1>
      <div>
        {entities.map((entity) => {
          <div>{entity}</div>;
        })}
      </div>
      <Link to="/createEntity">
        <button className={styles.button}>Create Entity</button>
      </Link>
    </div>
  );
};
