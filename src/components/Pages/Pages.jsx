import React from 'react';
import { useSelector } from 'react-redux';
import Page from './Page/Page';
import s from "./pages.module.scss"

const Pages = () => {

  const allPages = useSelector(state => state.table.allPages) // массив доступных странниц


  return (
    <div className={s.pages}>
      {allPages.map(page => <Page key={page} el={page} />)}
    </div>
  );
};

export default Pages;