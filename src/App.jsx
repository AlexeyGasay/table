import React, { useEffect } from 'react';
import './App.css';
import Handlers from './components/Handlers/Handlers';
import Table from './components/Table/Table';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTableData } from './redux/actions/tableAsyncActions';
import Pages from './components/Pages/Pages';

function App() {
  const { limit, currentPage, filter, type, value } = useSelector(state => state.table)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTableData(limit, currentPage, filter, type, value))
  }, [limit, currentPage, filter, type, value])

  return (
    <div className="App">

      <header>
        <Handlers />
      </header>

      <main>
        <Table />
        <Pages />
      </main>

    </div>
  );
}

export default App;
