import { createStore } from 'redux';

const initialState = {
    articleChoice: "none"
}

const store = createStore((state = initialState, action) => { 
            console.log("Action:", action)
        if (action.type === "DISPLAY_CLYDEWW2" ) {
            return { ...state, articleChoice : action.articleChoice };
        } 
        else if (action.type === "DISPLAY_CLYDEANDEDNA") {

            console.log("in reducer manufacturer") 
            return { ...state, manufacturer : action.value };
        
        }
     else {
        return state;
    }
});

export default store;