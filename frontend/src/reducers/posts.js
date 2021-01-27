// A  reducer is a function that is passed the state and the action
// and then performs logic.

export default ( posts = [], action ) => {
    switch (action.type) {
        case 'FETCH ALL':
            return posts;
        case 'CREATE':
            return posts;
        default:
            return posts;
    }
}