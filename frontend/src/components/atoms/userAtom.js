import { atom } from "recoil"
const userAtom=atom({
    key:'userAtom',
    //get default value forouruser formthelocalStorage (we saved in signupcard user-farmer)
    default:JSON.parse(localStorage.getItem('user-farmer'))
})

export default userAtom