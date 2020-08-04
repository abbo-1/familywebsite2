import { createStore } from 'redux';

const initialState = {
    articleChoice: "none"
}

const store = createStore((state = initialState, action) => { 
            console.log("Action:", action)
        if (action.type === "DISPLAY_CLYDEWW2" ) {
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

export default store;