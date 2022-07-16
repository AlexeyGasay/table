import { createSlice } from '@reduxjs/toolkit';

// Типы для select

// include - содержит
// equal - равно
// bigger - больше
// less - меньше

const initialState = {
  currentPage: 0,
  limit: 10,
  filter: "name",
  type: "include",
  value: "",
  tableData: [],
  allPages: []
};

export const tableDataSlice = createSlice({
  name: 'table',
  initialState,
  reducers: {
    setTableData: (state, action) => {
      state.tableData = action.payload.data;
      console.log(state.tableData);
    },
    setAllPages: (state, action) => {
      // Получаем количество всех элементов (делением числа на лимит),
      // и делаем на основе этого числа массив для отображения страниц

      let allElements = Math.ceil(+action.payload / state.limit);

      let pages = [];

      for (let i = 0; i < allElements; i++) {
        let pageNum = i;
        pages.push(pageNum)

      }

      // Итоговый массив - [0, 1, 2, ....]
      state.allPages = pages

    },

    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setFilter: (state, action) => {
      if (action.payload != "name") {
        state.type = "equal";
        state.filter = action.payload;
        state.value = "";
      }
    },
    setSortType: (state, action) => {
      state.type = action.payload;
      state.value = "";
    },
    setValue: (state, action) => {
      state.value = action.payload;
    }

  },
});


export const { setTableData, setAllPages, setCurrentPage, setSortType, setFilter, setValue } = tableDataSlice.actions;


export default tableDataSlice.reducer;