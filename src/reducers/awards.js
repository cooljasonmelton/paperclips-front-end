export default function awards(state = { awards: [] }, action) {
    switch (action.type) {
        case 'UPDATE_AWARDS':
            return { 
                awards: action.payload.awards,
            };
        default:
            return state;
    }  
}