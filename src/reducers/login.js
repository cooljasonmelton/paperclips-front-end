export default function login(state = {
    id: "",
    name: "",
    email: "",
    entries: [],
    currentGoal: "" 
    }, action) {
    switch (action.type) {
        case 'LOGIN_USER':
            const {id, name, email, entries, current_goal} = action.payload
            return { 
                id: id,
                name: name,
                email: email,
                entries: entries,
                currentGoal: current_goal
            };
        case 'LOGOUT_USER':
            return {                
                id: "",
                name: "",
                email: "",
                entries: [],
                currentGoal: ""
            }
        case 'UPDATE_ENTRY':
            let updatedEntries = state.entries.map(e => {
                if (e.id === action.payload.entry.id) {
                    e.goal = action.payload.entry.goal
                    e.wordcount = action.payload.entry.wordcount
                    e.content = action.payload.entry.content
                    return e
                } else {
                    return e
                }
            })
            return {
                ...state,
                entries: updatedEntries
            }
        default:
            return state;
    }
    
}