export default function login(state = {
    email: "",
    }, action) {
    switch (action.type) {
        case 'LOGIN_USER':
            return { 
                id: action.payload.id,
                name: action.payload.name,
                email: action.payload.email,
                enties: action.payload.entries,
                currentGoal: action.payload.current_goal
            };
        case 'LOGOUT_USER':
            return {email: ""}
        default:
            return state;
    }
    
}