import {gql} from '@apollo/client'
const username = ['username', 'age'];
export const GET_ALL_USERS = gql`
    query {
        getAllUsers {
            id, ${username}
        }
    }
`

export const GET_ONE_USER = gql`
    query getUser($id: ID){
        getUser(id: $id) {
            id, username
        }
    }
`

