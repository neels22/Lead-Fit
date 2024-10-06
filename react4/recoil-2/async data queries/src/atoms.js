

import axios from "axios";
import { atom, selector } from "recoil";

export const notifications = atom({
    key:"notifications",
    default:{
        network:4,
        jobs:6,
        messaging:5,
        notifications:6
    }
})


/// asynchronous data queries 
// atoms cant be asynchronous 
// selectors can be 

export const notiall = atom({
    key:"asyncatom",
    default:selector({
        key:"selecttorasync",
        get:async () => {
            const res = await axios.get()
            return res.data
        }
    })
})

//// the above code is how async data queries are made to backend in recoil


export const totalNoti = selector(

{
    key:"totalNoti",
    get: ({ get }) => {

        const allnoti = get(notifications)

        return allnoti.network + allnoti.jobs + allnoti.messaging + allnoti.notifications


    },
}
)