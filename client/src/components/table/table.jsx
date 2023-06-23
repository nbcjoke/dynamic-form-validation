import { Link } from "react-router-dom";

import styles from "./style.module.css";

export const Table = ({ entities }) => {
  const tableTitles = [
    "name of company",
    "adress",
    "phone",
    "country",
    "type of company",
    "choise",
    "products",
    "change",
  ];

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          {tableTitles.map((title, index) => {
            return (
              <th className={styles.th} key={index}>
                {title}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {entities.map((entity) => {
          return (
            <tr key={entity.id}>
              <td className={styles.td}>{entity.nameOfCompany}</td>
              <td className={styles.td}>{entity.adress}</td>
              <td className={styles.td}>{entity.phone}</td>
              <td className={styles.td}>{entity.country}</td>
              <td className={styles.td}>{entity.typeOfCompany}</td>
              <td className={styles.td}>{entity.choise}</td>
              <td className={styles.td}>
                {entity.products.map((product) => {
                  return <p key={product.id}>{product.name}</p>;
                })}
              </td>
              <td className={styles.td}>
                <Link to="/changeEntity">
                  <button>Change</button>
                </Link>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
