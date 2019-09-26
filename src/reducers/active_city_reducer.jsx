// export default function(state, action) {
//     switch(action.type){
//         case 'SET_CITIES':
//             return action.payload;
//         default:
//             return state;
//     }
// }

export default function(state, action) {
    if(state === undefined){
        return null;
    }
    if (action.type === "ACTIVE_CITY"){
        return action.payload;
    } else {
        return state;
    }
}