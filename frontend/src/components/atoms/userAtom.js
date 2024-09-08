import { atom } from "recoil"
const userAtom=atom({
    key:'userAtom',
    //get default value forouruser from the localStorage (we saved in signupcard user-farmer)
    default:JSON.parse(localStorage.getItem('user-farmer'))
})

export default userAtom