import { atom } from "recoil";

export const userState = atom({
    key: "userState",
    default:false
});

// export const getUserSelector = selector ({
//     key: "user/get",
//     get: async({get}) => {
//         try {
//             const {data} = await service.user.get('/user');
//             return data.token;
//         } catch (err) {
//             throw err;
//         }
//     },
//     set: ({set}, newValue) => {
//         set(userState,newValue)
//     }
// });