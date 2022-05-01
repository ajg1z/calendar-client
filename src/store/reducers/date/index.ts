import { DateState } from "./types";

const initialState: DateState = {
  currentMonth: new Date().getMonth(),
  currentYear: new Date().getFullYear(),
  today: new Date().getDate(),
};

 const dateReducer = (state = initialState) => {
  return state;
};
export default dateReducer;