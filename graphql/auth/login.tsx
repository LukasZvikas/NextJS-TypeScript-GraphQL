import { gql } from 'apollo-boost';

export const LOGIN_MUTATION = gql`
    mutation Login($email: String!, $password: String!) {
        loginUser(email: $email, password: $password) {
            userId
            email
        }
    }
`;
