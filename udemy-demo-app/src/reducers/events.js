import { 
    READ_EVENTS,
    READ_EVENT,
    CREATE_EVENTS,
    DELETE_EVENTS,
    UPDATE_EVENTS,
} from "../actions";
import _ from "lodash";

export default(events = {}, action) => {
    switch(action.type){
        case CREATE_EVENTS:
        case READ_EVENT:
        case UPDATE_EVENTS:
            const data = action.response.data
            return { ...events, [data.id]: data }
        case READ_EVENTS:
            console.log(action.response.data)
            // [
            //  {id: 1, token: "token123", title: "Let's have an event 1!", body: "This is the body for event 1.", created_at: "2021-08-09T09:03:43.399Z", …}
            //  {id: 2, token: "token123", title: "Let's have an event 2!", body: "This is the body for event 2.", created_at: "2021-08-09T09:0 
            // ] これを下記のように変更したい
            //      ↓変更後
            // [
            //  0: {id: 1, token: "token123", title: "Let's have an event 1!", body: "This is the body for event 1.", created_at: "2021-08-09T09:03:43.399Z", …}
            //  1: {id: 2, token: "token123", title: "Let's have an event 2!", body: "This is the body for event 2.", created_at: "2021-08-09T09:0 
            // ]
            
            console.log(_.mapKeys(action.response.data, "id"));
            return _.mapKeys(action.response.data, "id")
        case DELETE_EVENTS:
            delete events[action.id]
            return {...events}
        default:
            return events
    }
}