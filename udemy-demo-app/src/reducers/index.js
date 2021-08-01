import { combineReducers } from "redux";
import count from "./count";

export default combineReducers({count})
// 複数の場合の方が多いのでその場合は以下
// export default combineReducers({hoge, foo, bar})