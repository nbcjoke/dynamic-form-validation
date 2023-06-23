import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { EntityService } from "../../services/entityService";
import { Table } from "../../components/table/table";

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
        <Table entities={entities} />
      </div>
      <Link to="/createEntity">
        <button className={styles.button}>Create Entity</button>
      </Link>
    </div>
  );
};
