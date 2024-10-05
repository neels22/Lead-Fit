import { atom, selector } from "recoil";

export const countAtom =atom({
    key:"countAtom",
    default:0
})

export const evenSelector = selector({
    key:"evenSelector",

    // logic
    get :(props)=>{
        const count = props.get(countAtom); // this is same as dependency array 
        return count%2==0
    }
})