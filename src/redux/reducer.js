let lastID = 0;

// state = [] is there because if the store is not defined, state will be undefined
// state = [] gives state an array as a default value if it happens to be undefined
export default function reducer(state = {}, action) {
    //Here we're using if and elses, but this could be implemented using switches
    if (action.type === 'bugAdded') {
        return [
            ...state, 
            {
                id: ++lastID,
                description: action.payload.description,
                resolved: false
            }
        ];
    }

    else if (action.type === 'bugRemoved') {
        return state.filter(bug => bug.id !== action.payload.id);
    }

    return state;
}