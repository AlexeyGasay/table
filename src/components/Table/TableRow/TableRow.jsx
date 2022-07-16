import React from 'react';

import s from "./table-row.module.scss";

const TableRow = ({ date, name, counter, distance }) => {
  return (
    <tr className={s.tr}>
      {/* чередование цветов таблицы */}
      <td>{date}</td>
      <td>{name}</td>
      <td>{counter}</td>
      <td>{distance}</td>
    </tr>
  );
};

export default TableRow;