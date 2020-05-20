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
            let checkExist = state.entries.filter(e=>{
                return (e.id === action.payload.entry.id)
            })
            let updatedEntries
            if (checkExist.length > 0){
                updatedEntries = state.entries.map(e => {
                    if (e.id === action.payload.entry.id) {
                        e.goal = action.payload.entry.goal
                        e.wordcount = action.payload.entry.wordcount
                        e.content = action.payload.entry.content
                        return e
                    } else {
                        return e
                    }
                })
            } else {
                updatedEntries = state.entries
                updatedEntries.push(action.payload.entry)
            }
            return {
                ...state,
                entries: updatedEntries
            }
        default:
            return state;
    }
    
}