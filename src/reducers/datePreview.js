export default function login(state = {}, action) {
    switch (action.type) {
        case 'UPDATE_DATE_PREVIEW':
            return { 
                id: action.payload.id,
                content: action.payload.content,
                wordcount: action.payload.wordcount,
                goal: action.payload.goal,
                created_at: action.payload.created_at
            };
        default:
            return state;
    }  
}