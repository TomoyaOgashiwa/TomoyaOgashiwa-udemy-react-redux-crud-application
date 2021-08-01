// const increment = () => {
//     return{
//         type: "INCREMENT"
//     }
// }

// const decrement = () => {
//     return{
//         type: "DECREMENT"
//     }
// }


// 上記は下記に書き換えが可能
export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";

export const increment = () => ({
    type: INCREMENT
})

export const decrement = () => ({
    type: DECREMENT
})
