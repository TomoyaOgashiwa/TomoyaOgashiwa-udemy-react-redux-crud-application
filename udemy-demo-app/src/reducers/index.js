import { combineReducers } from "redux";
import events from "./events";

export default combineReducers({events})
// 複数の場合の方が多いのでその場合は以下
// export default combineReducers({hoge, foo, bar})