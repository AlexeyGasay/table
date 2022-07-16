import React from 'react';
import { useSelector } from 'react-redux';
import TableRow from './TableRow/TableRow';

import s from "./table.module.scss"


const Table = () => {

  const tableData = useSelector(state => state.table.tableData)

  return (

    <table className={s.table}>
      <tbody>

        <tr className={s.table_header}>
          <th>Дата </th>
          <th>Название </th>
          <th>Количество </th>
          <th>Расстояние </th>
        </tr>

        {/* ОТРИСОВКА  */}

        {tableData.map((el, i) => <TableRow key={el.id} name={el.name} date={el.datecurrent} counter={el.counter} distance={el.distance} />)}


      </tbody>
    </table>
  );
};

export default Table;