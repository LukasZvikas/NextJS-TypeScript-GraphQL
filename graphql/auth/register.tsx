import { gql } from "apollo-boost";

export const registerMutation = gql`
     mutation Register($email: String!, $password: String!){
        signUp(email: $email, password: $password) {
            email
            password
        }
    }
`;