export default function login(state = {
    id: "",
    }, action) {
    switch (action.type) {
        case 'LOGIN_USER':
            const {id, name, email, entries, current_goal} = action.payload
            return { 
                id: id,
                name: name,
                email: email,
                enties: entries,
                currentGoal: current_goal
            };
        case 'LOGOUT_USER':
            return {                
                id: "",
                name: "",
                email: "",
                enties: "",
                currentGoal: ""
            }
        default:
            return state;
    }
    
}