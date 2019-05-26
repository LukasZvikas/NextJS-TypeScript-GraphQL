import { gql } from 'apollo-boost';

export const REGISTER_MUTATION = gql`
  mutation Register($email: String!, $password: String!) {
    signUp(email: $email, password: $password) {
      email
      password
    }
  }
`;
