import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPage } from '../../../redux/tableDataSlice';
import s from "./page.module.scss"

const Page = React.memo((el) => {


  const dispatch = useDispatch()
  const { currentPage } = useSelector(state => state.table)

  console.log(currentPage, el);


  return (
    <div
      className={currentPage === el.el ? [s.page, s.page__current].join(" ") : s.page}
      onClick={() => dispatch(setCurrentPage(el.el))}
    >
      {el.el + 1}
    </div>
  );
});

export default Page;