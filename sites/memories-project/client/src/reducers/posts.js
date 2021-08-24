
export default (posts = [], action) => {
     switch (action.type) {
        case 'FETCH_ALL':
            console.log(action.payload);
            // return action.payload;
            return posts;
        case 'CREATE':
            return [ ...posts, action.payload ];
     
        default:
            return posts;
     }
} 