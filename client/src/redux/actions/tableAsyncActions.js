import { ADRESS } from "../../Config";
import { setAllPages, setTableData } from "../tableDataSlice";

export const fetchTableData = (limit, currentPage, filter, type, value) => async (dispatch) => {

  console.log(limit, currentPage, filter, type, value);

  fetch(`${ADRESS}/api/table?page=${currentPage}&limit=${limit}&filter=${filter}&type=${type}&value=${value}`)
    .then(res => res.json())
    .then(data => {
      dispatch(setTableData(data))
      dispatch(setAllPages(data.count))

    })




}