import { createStore } from 'redux';

const initialState = {
    drinkChoice: "all"
}

const store = createStore((state = initialState, action) => { 
            console.log("Action:", action)
        if (action.type === "CHANGE_INFO" ) {

            return { ...state, drinkChoice : action.drinkChoice };
        } 
        else if (action.type === "CHANGE_PHOTO") {

            console.log("in reducer manufacturer") 
            return { ...state, manufacturer : action.value };
        
        }
     else {
        return state;
    }
});
//functional component
export default store;