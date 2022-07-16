import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPage, setFilter, setSortType, setValue } from '../../redux/tableDataSlice';
import s from './handlers.module.scss'

const Handlers = () => {

  // ДАННЫЕ СТОРА
  const { filter, type, value } = useSelector(state => state.table);


  const dispatch = useDispatch()



  return (
    <div className={s.handlers}>

      <select
        onChange={(e) => dispatch(setFilter(e.target.value))}
        value={filter}
      >
        <option value="name">Названию</option>
        <option value="counter">Количеству</option>
        <option value="distance">Расстоянию</option>
      </select>


      <select
        onChange={(e) => dispatch(setSortType(e.target.value))} value={type}
      >
        {filter === "name" ?
          <>
            <option value="1">Содержит</option>
          </> // фильтрация содержит доступна только при сортировке по имени

          :
          filter !== "name" ?
            <>
              <option value="equal">Равно</option>
              <option value="bigger">Больше</option>
              <option value="less">Меньше</option>
            </>
            :
            <></>
        }

      </select>

      {filter === "name" ?

        <input type="text"
          className={s.search_input}
          placeholder="Значение"
          value={value}
          onChange={(e) => {
            dispatch(setValue(e.target.value));
            dispatch(setCurrentPage(0))
          }
          }

        /> // При сортировке по имени будет текстовый input
        :
        <input type="number"
          className={s.search_input}
          placeholder="Значение"
          value={value}
          onChange={(e) => {
            dispatch(setValue(e.target.value));
            dispatch(setCurrentPage(0))
          }
          }

        />
      }


    </div>
  );
};

export default Handlers;