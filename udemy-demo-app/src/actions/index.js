import axios from "axios"

// 上記①は下記②に書き換えが可能
// export const INCREMENT = "INCREMENT";
// export const DECREMENT = "DECREMENT";

// export const increment = () => ({
//     type: INCREMENT
// })

// export const decrement = () => ({
//     type: DECREMENT
// })


// 上記②を下記③に書き換え
export const READ_EVENTS = "READ_EVENTS"

const ROOT_URL = "https://udemy-utils.herokuapp.com/api/v1"
const QUERYSTRING = "?token=token123"

export const readEvents = () => async dispatch => {
    const response = await axios.get(`${ROOT_URL}/events${QUERYSTRING}`)
    console.log(response)
    dispatch({type: READ_EVENTS, response})
}